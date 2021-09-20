import jQuery from "@types/jquery";

declare global {
  interface Window {
    jQuery: typeof jQuery;
    $: typeof jQuery;
  }
  interface JQuery {
    vectorMap(...args: unknown[]): JQuery;
  }
}
