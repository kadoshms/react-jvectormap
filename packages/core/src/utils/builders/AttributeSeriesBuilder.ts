import { IAttributeSeries } from "../../types";

export class AttributeSeriesBuilder {
  private attribute: string;
  private scale: number[];
  private values: number[];

  constructor(attribute: string, scale: number[], values: number[]) {
    this.attribute = attribute;
    this.scale = scale;
    this.values = values;
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

  public build(): IAttributeSeries {
    return {
      scale: this.scale,
      values: this.values,
      attribute: this.attribute,
    };
  }
}
