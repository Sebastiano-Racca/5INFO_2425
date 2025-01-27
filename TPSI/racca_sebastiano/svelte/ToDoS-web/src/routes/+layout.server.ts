import { dev } from "$app/environment";

export const prerender = true;
export const ssr = dev; // in dev per avere il reload automatico, altrimenti è una webapp, non è necessario
export const csr = true;
