import { IAttributeSeries, NormalizeFunctionType } from "../../types";

export class AttributeSeriesBuilder {
  private attribute: string;
  private scale: number[];
  private values: number[];
  private normalizeFunction?: NormalizeFunctionType;

  constructor(
    attribute: string,
    scale: number[],
    values: number[],
    normalizeFunction?: NormalizeFunctionType,
  ) {
    this.attribute = attribute;
    this.scale = scale;
    this.values = values;
    this.normalizeFunction = normalizeFunction;
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

  public build(): IAttributeSeries {
    return {
      scale: this.scale,
      values: this.values,
      attribute: this.attribute,
      normalizeFunction: this.normalizeFunction,
    };
  }
}
