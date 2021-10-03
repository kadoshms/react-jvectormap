import { ISeries, IVectorMap, Marker } from "../../types";

export class VectorMapBuilder {
  private map: IVectorMap;
  private backgroundColor?: string;
  private zoomMin?: number;
  private zoomMax?: number;
  private markers?: Marker[];

  public constructor(map: IVectorMap) {
    this.map = map;
  }

  /**
   *
   * @param map
   */
  public setMap(map: IVectorMap) {
    this.map = map;
    return this;
  }

  /**
   *
   * @param backgroundColor
   */
  public setBackgroundColor(backgroundColor: string) {
    this.backgroundColor = backgroundColor;
    return this;
  }

  /**
   *
   * @param zoomMin
   */
  public setZoomMin(zoomMin: number) {
    this.zoomMin = zoomMin;
    return this;
  }

  /**
   *
   * @param zoomMax
   */
  public setZoomMax(zoomMax: number) {
    this.zoomMax = zoomMax;
    return this;
  }

  /**
   *
   * @param marker
   */
  public addMarker(marker: Marker) {
    if (!this.markers) {
      this.markers = [];
    }
    this.markers.push(marker);
    return this;
  }

  public build() {
    return {
      map: this.map,
      series: this.buildSeries(),
    };
  }

  private buildSeries() {
    const series: ISeries = { markers: undefined, regions: undefined };
    if (this.markers?.length) {
      series.markers = this.buildMarkers();
    }
    if (series.markers || series.regions) {
      return series;
    }
    return {};
  }

  private buildMarkers() {
    return this.markers;
  }
}
