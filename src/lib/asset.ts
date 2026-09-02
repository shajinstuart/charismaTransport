export function asset(path: string): string {
  const base = import.meta.env.BASE_URL;
  const clean = path.replace(/^\//, "");
  return `${base}${clean}`;
}

export const routerBasename = import.meta.env.BASE_URL.replace(/\/$/, "") || undefined;
