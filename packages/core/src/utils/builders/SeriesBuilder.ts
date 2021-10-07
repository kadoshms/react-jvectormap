import { IAttributeSeries, ISeries } from "../../types";
import { stripUndefinedValues } from "./utils";

export class SeriesBuilder {
  private markers?: IAttributeSeries[];
  private regions?: IAttributeSeries[];

  /**
   *
   * @param values
   */
  public addMarkersSeries(...values: IAttributeSeries[]) {
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
  public addRegionsSeries(...values: IAttributeSeries[]) {
    if (!this.regions) {
      this.regions = [];
    }
    this.regions.push(...values);
    return this;
  }

  public build(): ISeries {
    return stripUndefinedValues({
      markers: this.markers,
      regions: this.regions,
    });
  }
}
