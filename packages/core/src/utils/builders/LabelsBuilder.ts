import { ILabels, ILabelsProps } from "../../types";
import { stripUndefinedValues } from "./utils";
import { IBuilder } from "./types";

export class LabelsBuilder implements IBuilder<ILabels> {
  private markers?: ILabelsProps[];
  private regions?: ILabelsProps[];

  /**
   *
   * @param values
   */
  public addMarkersLabelProps(...values: ILabelsProps[]) {
    if (!this.markers) {
      this.markers = [];
    }
    this.markers.push(...values);
    return this;
  }

  /**
   *
   * @param values
   */
  public addRegionsLabelProps(...values: ILabelsProps[]) {
    if (!this.regions) {
      this.regions = [];
    }
    this.regions.push(...values);
    return this;
  }

  public build() {
    return stripUndefinedValues({
      markers: this.markers,
      regions: this.regions,
    });
  }
}
