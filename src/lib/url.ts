const base = import.meta.env.BASE_URL; // "/hijabstore-frontend/" in prod, "/" in dev

export function url(path: string = '/'): string {
  if (path === '/') return base;
  const clean = path.startsWith('/') ? path.slice(1) : path;
  return `${base}${clean}`;
}
