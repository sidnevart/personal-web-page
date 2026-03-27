import type { AppLocale } from "@/i18n/routing";
import { text, type PersonProfile } from "@/data/content";

export function ProfileCard({
  profile,
  locale
}: {
  profile: PersonProfile;
  locale: AppLocale;
}) {
  return (
    <article className="rounded-[28px] border border-[var(--line)] bg-[var(--surface)] p-6">
      <p className="text-sm uppercase tracking-[0.16em] text-[var(--fg-soft)]">
        {locale === "ru" ? "Профиль" : locale === "en" ? "Profile" : "Perfil"}
      </p>
      <h3 className="mt-4 font-[var(--font-heading)] text-3xl font-semibold tracking-[-0.05em]">
        {profile.name}
      </h3>
      <p className="mt-3 text-sm leading-6 text-[var(--fg-soft)]">
        {text(profile.role, locale)}
      </p>
      <p className="mt-5 text-base leading-7 text-[var(--fg-muted)]">
        {text(profile.summary, locale)}
      </p>
      {profile.note ? (
        <p className="mt-5 border-t border-[var(--line)] pt-4 text-sm leading-6 text-[var(--fg-soft)]">
          {text(profile.note, locale)}
        </p>
      ) : null}
      {profile.contacts ? (
        <div className="mt-5 flex flex-wrap gap-3 text-sm text-[var(--fg-soft)]">
          {profile.contacts.email ? (
            <a href={`mailto:${profile.contacts.email}`} className="transition hover:text-[var(--fg)]">
              {profile.contacts.email}
            </a>
          ) : null}
          {profile.contacts.telegram ? (
            <a
              href={profile.contacts.telegram}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[var(--fg)]"
            >
              Telegram
            </a>
          ) : null}
          {profile.contacts.github ? (
            <a
              href={profile.contacts.github}
              target="_blank"
              rel="noreferrer"
              className="transition hover:text-[var(--fg)]"
            >
              GitHub
            </a>
          ) : null}
        </div>
      ) : null}
    </article>
  );
}
