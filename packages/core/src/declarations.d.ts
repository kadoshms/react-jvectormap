import jQuery from "jquery";

declare global {
  interface Window {
    jQuery: typeof jQuery;
    $: typeof jQuery;
  }
  interface JQuery {
    vectorMap(...args: unknown[]): JQuery;
  }
}

declare module "*.scss" {
  const content: { [className: string]: string };
  export = content;
}
