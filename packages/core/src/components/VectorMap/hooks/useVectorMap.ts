import * as $ from "jquery";
import { useEffect } from "react";

export const useVectorMap = ({ name, content }: any) => {
  useEffect(() => {
    // @ts-ignore
    $.fn.vectorMap("addMap", name, content);
  }, []);
};
