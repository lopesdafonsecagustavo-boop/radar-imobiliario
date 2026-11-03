import worker from './worker.mjs';
export default async function handler(request) {
  const url = new URL(request.url);
  url.pathname = '/api/research';
  const incoming = new Request(url, request);
  return worker.fetch(incoming, { BRAVE_API_KEY: process.env.BRAVE_API_KEY });
}
