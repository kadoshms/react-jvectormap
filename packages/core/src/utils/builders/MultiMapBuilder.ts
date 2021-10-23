import { IMainMap, IMultiMapProps, IVectorMap } from "../../types";
import { IBuilder } from "./types";
import { stripUndefinedValues } from "./utils";

export class MultiMapBuilder implements IBuilder<IMultiMapProps> {
  private readonly main: IMainMap;
  private maxLevel?: number;
  private mapNameByCode?: (code: string) => string;
  private mapUrlByCode?: (code: string) => string;
  private getDrillDownMap?: (code: string) => Promise<IVectorMap> | IVectorMap;

  public constructor(mainMap: IVectorMap, maxLevel = 1) {
    this.main = { map: mainMap };
    this.maxLevel = maxLevel;
  }

  /**
   *
   * @param value
   */
  public setMainMap(value: IVectorMap) {
    this.main.map = value;
    return this;
  }

  /**
   *
   * @param value
   */
  public setMaxLevel(value: number) {
    this.maxLevel = value;
    return this;
  }

  /**
   *
   * @param value
   */
  public setMapNameByCode(value: (code: string) => string) {
    this.mapNameByCode = value;
    return this;
  }

  /**
   *
   * @param value
   */
  public setUrlByCode(value: (code: string) => string) {
    this.mapUrlByCode = value;
    return this;
  }

  /**
   *
   * @param value
   */
  public setGetDrillDownMap(
    value: (code: string) => Promise<IVectorMap> | IVectorMap,
  ) {
    this.getDrillDownMap = value;
    return this;
  }

  build() {
    const baseProps = {
      main: this.main,
      maxLevel: this.maxLevel,
    };
    return {
      ...baseProps,
      ...stripUndefinedValues({
        mapNameByCode: this.mapNameByCode,
        mapUrlByCode: this.mapUrlByCode,
        getDrillDownMap: this.getDrillDownMap,
      }),
    };
  }
}
