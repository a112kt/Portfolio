export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(" ");
}

export const linkFromMailto = (subject: string, body: string) =>
  `mailto:${encodeURIComponent("ashrakatraafat85@gmail.com")}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;