import { chromium, type Page, type BrowserContext } from "playwright";
import { screenshotProjects } from "../config/screenshot-projects";
import * as fs from "fs";
import * as path from "path";

interface CaptureOptions {
  project?: string;
  list?: boolean;
}

function parseArgs(): CaptureOptions {
  const args = process.argv.slice(2);
  const options: CaptureOptions = {};

  for (let i = 0; i < args.length; i++) {
    if (args[i] === "--project" && args[i + 1]) {
      options.project = args[i + 1];
      i++;
    }
    if (args[i] === "--list") {
      options.list = true;
    }
  }

  return options;
}

async function setupContext(browser: BrowserContext, options: { viewport: "desktop" | "mobile" | "tablet" }) {
  const viewports = {
    desktop: { width: 1440, height: 900 },
    mobile: { width: 375, height: 812 },
    tablet: { width: 768, height: 1024 },
  };

  const page = await browser.newPage({
    viewport: viewports[options.viewport],
    deviceScaleFactor: 2,
  });

  return page;
}

async function login(page: Page, loginFlow: any) {
  await page.goto(loginFlow.url);
  await page.waitForSelector(loginFlow.usernameSelector);

  const username = process.env[loginFlow.usernameEnv];
  const password = process.env[loginFlow.passwordEnv];

  if (!username || !password) {
    throw new Error(`Missing credentials. Set ${loginFlow.usernameEnv} and ${loginFlow.passwordEnv} env vars.`);
  }

  await page.fill(loginFlow.usernameSelector, username);
  await page.fill(loginFlow.passwordSelector, password);
  await page.click(loginFlow.submitSelector);
  await page.waitForSelector(loginFlow.successIndicator);
}

async function captureScreenshot(
  page: Page,
  url: string,
  outputPath: string,
  options: { waitFor?: string; waitStrategy?: string }
) {
  await page.goto(url, { waitUntil: (options.waitStrategy as any) || "networkidle" });

  if (options.waitFor) {
    await page.waitForSelector(options.waitFor);
  }

  // Additional wait for animations
  await page.waitForTimeout(500);

  await page.screenshot({
    path: outputPath,
    fullPage: false,
  });

  console.log(`✓ Captured: ${outputPath}`);
}

async function main() {
  const options = parseArgs();

  if (options.list) {
    console.log("Available screenshot targets:");
    screenshotProjects.forEach((p) => {
      console.log(`  ${p.slug}: ${p.baseUrl}`);
      p.pages.forEach((page) => {
        console.log(`    - ${page.viewport}: ${page.path} → ${page.filename}`);
      });
    });
    return;
  }

  const projects = options.project
    ? screenshotProjects.filter((p) => p.slug === options.project)
    : screenshotProjects;

  if (projects.length === 0) {
    console.error(`No projects found matching "${options.project}"`);
    process.exit(1);
  }

  const browser = await chromium.launch();

  for (const project of projects) {
    console.log(`\nCapturing: ${project.slug}`);

    for (const pageConfig of project.pages) {
      const context = await browser.newContext();
      const page = await setupContext(context, { viewport: pageConfig.viewport });

      try {
        const outputDir = path.join(
          process.cwd(),
          "public",
          "images",
          "projects",
          project.slug,
          "screenshots"
        );
        fs.mkdirSync(outputDir, { recursive: true });

        const outputPath = path.join(outputDir, pageConfig.filename);
        const fullUrl = new URL(pageConfig.path, project.baseUrl).toString();

        if (project.loginFlow) {
          await login(page, project.loginFlow);
        }

        await captureScreenshot(page, fullUrl, outputPath, {
          waitFor: pageConfig.waitFor,
          waitStrategy: pageConfig.waitStrategy,
        });
      } catch (error) {
        console.error(`✗ Failed to capture ${pageConfig.filename}:`, error);
      } finally {
        await page.close();
        await context.close();
      }
    }
  }

  await browser.close();
  console.log("\nDone.");
}

main().catch((error) => {
  console.error("Screenshot capture failed:", error);
  process.exit(1);
});
