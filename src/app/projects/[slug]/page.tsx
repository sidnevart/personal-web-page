import { Metadata } from "next";
import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import { ProjectDetailPage } from "@/components/project-detail-page";

interface Props {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    return { title: "Project Not Found" };
  }

  return {
    title: `${project.title} — Case Study`,
    description: project.subtitle,
    openGraph: {
      title: `${project.title} | Artem Sidnev`,
      description: project.subtitle,
    },
  };
}

export default async function ProjectPage({ params }: Props) {
  const { slug } = await params;
  const project = projects.find((p) => p.slug === slug);

  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}
