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

declare module "jvectormap-next";

declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}
