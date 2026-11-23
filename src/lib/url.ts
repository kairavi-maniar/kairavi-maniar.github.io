/** Prefix internal paths with the configured base path (see astro.config.mjs). */
export function url(path: string): string {
  if (/^(https?:|mailto:|tel:|#)/.test(path)) return path;
  const base = import.meta.env.BASE_URL.endsWith('/') ? import.meta.env.BASE_URL : import.meta.env.BASE_URL + '/';
  return base + path.replace(/^\//, '');
}

/** True when `current` is `href` or a sub-page of it. */
export function isActive(current: string, href: string): boolean {
  const norm = (p: string) => (p.endsWith('/') ? p : p + '/');
  const c = norm(current);
  const h = norm(url(href));
  if (h === norm(url('/'))) return c === h;
  return c.startsWith(h);
}
