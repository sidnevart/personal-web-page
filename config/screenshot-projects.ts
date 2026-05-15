export interface ScreenshotProject {
  slug: string;
  baseUrl: string;
  pages: {
    path: string;
    filename: string;
    viewport: "desktop" | "mobile" | "tablet";
    waitFor?: string;
    waitStrategy?: "networkidle" | "load" | "domcontentloaded";
  }[];
  credentials?: {
    usernameEnv: string;
    passwordEnv: string;
  };
  loginFlow?: {
    url: string;
    usernameSelector: string;
    passwordSelector: string;
    submitSelector: string;
    successIndicator: string;
  };
}

export const screenshotProjects: ScreenshotProject[] = [
  {
    slug: "cashback-targeting",
    baseUrl: "http://localhost:3000",
    pages: [
      {
        path: "/projects/cashback-targeting",
        filename: "cashback-targeting-desktop.png",
        viewport: "desktop",
        waitFor: "[data-testid='project-hero']",
        waitStrategy: "networkidle",
      },
    ],
  },
  {
    slug: "double-kiss",
    baseUrl: "https://urvi.app",
    pages: [
      {
        path: "/",
        filename: "double-kiss-mobile.png",
        viewport: "mobile",
        waitStrategy: "networkidle",
      },
    ],
  },
  {
    slug: "svobodno",
    baseUrl: "https://urvi.app",
    pages: [
      {
        path: "/",
        filename: "svobodno-mobile.png",
        viewport: "mobile",
        waitStrategy: "networkidle",
      },
    ],
  },
];
