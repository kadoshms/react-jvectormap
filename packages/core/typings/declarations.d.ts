import jQuery from "@types/jquery";
import { IRegion, Marker } from "../src/types";

type DataSeries = {
  clearAndSet: (values: { [key: string]: number } | number[]) => void;
};

declare global {
  interface Window {
    jQuery: typeof jQuery;
    $: typeof jQuery;
  }
  interface JQuery {
    vectorMap(...args: unknown[]): JQuery;
    multiMap(...args: unknown[]): JQuery;
    series?: {
      regions?: DataSeries[];
      markers?: DataSeries[];
    };
  }
}

declare module "jvectormap-next";

declare module "*.scss" {
  const styles: { [className: string]: string };
  export default styles;
}
