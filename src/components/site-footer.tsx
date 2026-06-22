import { siteContacts } from "@/data/content";

export function SiteFooter() {
  return (
    <footer className="mt-24 border-t border-[var(--line)]">
      <div className="container py-8">
        <p className="text-small">
          Artem Sidnev · Software Engineer
        </p>
        <div className="mt-2 flex flex-wrap gap-4 text-small">
          <a href={`mailto:${siteContacts.email}`} className="link-muted">{siteContacts.email}</a>
          <a href={siteContacts.telegram} target="_blank" rel="noreferrer" className="link-muted">Telegram</a>
          <a href={siteContacts.github} target="_blank" rel="noreferrer" className="link-muted">GitHub</a>
          <a href={siteContacts.linkedin} target="_blank" rel="noreferrer" className="link-muted">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
