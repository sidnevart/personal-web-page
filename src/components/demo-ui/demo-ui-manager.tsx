import { Project } from "@/lib/data";
import { AiCodeReviewDemo } from "./ai-code-review-demo";
import { AiCiRefactorDemo } from "./ai-ci-refactor-demo";
import { RagOnboardingDemo } from "./rag-onboarding-demo";
import { N8nAutomationDemo } from "./n8n-automation-demo";
import { CianMoleDemo } from "./cian-mole-demo";
import { CumockDemo } from "./cumock-demo";
import { ProofForgeDemo } from "./proof-forge-demo";
import { SvobodnoDemo } from "./svobodno-demo";
import { AiOfficeDemo } from "./ai-office-demo";
interface DemoUIManagerProps {
  project: Project;
}

export function DemoUIManager({ project }: DemoUIManagerProps) {
  switch (project.slug) {
    case "ai-code-review":
      return <AiCodeReviewDemo />;
    case "ai-ci-refactor":
      return <AiCiRefactorDemo />;
    case "rag-onboarding":
      return <RagOnboardingDemo />;
    case "n8n-automation":
      return <N8nAutomationDemo />;
    case "cian-mole":
      return <CianMoleDemo />;
    case "cumock":
      return <CumockDemo />;
    case "proof-forge":
      return <ProofForgeDemo />;
    case "svobodno":
      return <SvobodnoDemo />;
    case "ai-office":
      return <AiOfficeDemo />;
    default:
      return null;
  }
}
