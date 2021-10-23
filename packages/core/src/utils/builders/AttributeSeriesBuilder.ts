import { IAttributeSeries, NormalizeFunctionType } from "../../types";
import { IBuilder } from "./types";

export class AttributeSeriesBuilder implements IBuilder<IAttributeSeries> {
  private attribute: string;
  private scale?: number[];
  private values?: number[];
  private normalizeFunction?: NormalizeFunctionType;

  constructor(attribute: string) {
    this.attribute = attribute;
  }

  /**
   *
   * @param value
   */
  public setAttribute(value: string) {
    this.attribute = value;
    return this;
  }

  /**
   *
   * @param value
   */
  public setScale(value: number[]) {
    this.scale = value;
    return this;
  }

  /**
   *
   * @param value
   */
  public setValues(value: number[]) {
    this.values = value;
    return this;
  }

  /**
   *
   * @param value
   */
  public setNormalizeFunction(value: NormalizeFunctionType) {
    this.normalizeFunction = value;
    return this;
  }

  public build() {
    return {
      scale: this.scale,
      values: this.values,
      attribute: this.attribute,
      normalizeFunction: this.normalizeFunction,
    };
  }
}
