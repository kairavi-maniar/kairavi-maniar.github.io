import { projects } from '../data/projects';
import { researchThemes } from '../data/research';
import { writing } from '../data/writing';
import { exhibitions } from '../data/exhibitions';

export const getProject = (slug: string) => projects.find((p) => p.slug === slug);
export const getTheme = (slug: string) => researchThemes.find((t) => t.slug === slug);
export const getWriting = (id: string) => writing.find((w) => w.id === id);
export const getExhibition = (id: string) => exhibitions.find((e) => e.id === id);

/** Resolve a list of ids, silently skipping any that do not exist. */
export function resolve<T>(ids: string[] | undefined, fn: (id: string) => T | undefined): T[] {
  return (ids ?? []).map(fn).filter((x): x is T => Boolean(x));
}

/** Projects that mention a writing item (in either direction). */
export function projectsForWriting(id: string) {
  const w = getWriting(id);
  return projects.filter((p) => p.relatedWriting.includes(id) || w?.projects?.includes(p.slug));
}
