import {
  ILabels,
  ISeries,
  ISVGElementStyleAttributes,
  IVectorMap,
  IVectorMapProps,
  Marker,
  OnRegionTipShow,
  SelectedEntities,
} from "../../types";
import { IBuilder } from "./types";

export class VectorMapBuilder implements IBuilder<IVectorMapProps> {
  private map: IVectorMap;
  private backgroundColor?: string;
  private zoomMin?: number;
  private zoomMax?: number;
  private markers?: Marker[];
  private markerStyle?: ISVGElementStyleAttributes;
  private regionStyle?:
    | ISVGElementStyleAttributes
    | ((code: string) => ISVGElementStyleAttributes);
  private regionsSelectable?: boolean;
  private markersSelectable?: boolean;
  private onRegionTipShow?: OnRegionTipShow;
  private series?: ISeries;
  private labels?: ILabels;
  private selectedRegions?: SelectedEntities = [];

  public constructor(map: IVectorMap) {
    this.map = map;
  }

  /**
   *
   * @param value
   */
  public setMap(value: IVectorMap) {
    this.map = value;
    return this;
  }

  /**
   *
   * @param value
   */
  public setBackgroundColor(value: string) {
    this.backgroundColor = value;
    return this;
  }

  /**
   *
   * @param value
   */
  public setZoomMin(value: number) {
    this.zoomMin = value;
    return this;
  }

  /**
   *
   * @param value
   */
  public setZoomMax(value: number) {
    this.zoomMax = value;
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

  /**
   *
   * @param value
   */
  public setMarkerStyle(value: ISVGElementStyleAttributes) {
    this.markerStyle = value;
    return this;
  }

  /**
   *
   * @param value
   */
  public setRegionStyle(
    value:
      | ISVGElementStyleAttributes
      | ((code: string) => ISVGElementStyleAttributes),
  ) {
    this.regionStyle = value;
    return this;
  }

  /**
   *
   * @param value
   * @private
   */
  public setMarkersSelectable(value: boolean) {
    this.markersSelectable = value;
    return this;
  }

  /**
   *
   * @param value
   */
  public setMarkers(value: Marker[]) {
    this.markers = value;
    return this;
  }

  /**
   *
   * @private
   * @param value
   */
  public setRegionsSelectable(value: boolean) {
    this.regionsSelectable = value;
    return this;
  }

  /**
   *
   * @private
   * @param value
   */
  public setOnRegionTipShow(value: OnRegionTipShow) {
    this.onRegionTipShow = value;
    return this;
  }

  /**
   *
   * @param value
   */
  public setSeries(value: ISeries) {
    this.series = value;
    return this;
  }

  /**
   *
   * @param values
   */
  public setLabels(values: ILabels) {
    this.labels = values;
    return this;
  }

  /**
   *
   * @param value
   */
  public setSelectedRegions(value: SelectedEntities) {
    this.selectedRegions = value;
    return this;
  }

  /**
   *
   */
  public build() {
    return {
      map: this.map,
      series: this.series,
      backgroundColor: this.backgroundColor,
      zoomMax: this.zoomMax,
      zoomMin: this.zoomMin,
      markerStyle: this.markerStyle,
      regionStyle: this.regionStyle,
      markersSelectable: this.markersSelectable,
      regionsSelectable: this.regionsSelectable,
      markers: this.markers,
      labels: this.labels,
      selectedRegions: this.selectedRegions,
    };
  }
}
