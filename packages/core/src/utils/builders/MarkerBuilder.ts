import { CSSProperties } from "react";
import { Marker } from "../../types";
import { IBuilder } from "./types";

export class MarkerBuilder implements IBuilder<Marker> {
  private name: string;
  private coords?: number[];
  private latLng?: number[];
  private style?: CSSProperties;

  constructor(value: string) {
    this.name = value;
  }

  /**
   *
   * @param value
   */
  public setName(value: string) {
    this.name = value;
    return this;
  }

  /**
   *
   * @param value
   */
  public setCoords(value: number[]) {
    this.latLng = undefined;
    this.coords = value;
    return this;
  }

  /**
   *
   * @param value
   */
  public setLatLng(value: number[]) {
    this.coords = undefined;
    this.latLng = value;
    return this;
  }

  /**
   *
   * @param value
   */
  public setStyle(value: CSSProperties) {
    this.style = value;
    return this;
  }

  /**
   *
   */
  public build() {
    const commonProps = {
      name: this.name,
      style: this.style,
    };

    if (this.coords) {
      return {
        ...commonProps,
        coords: this.coords,
      };
    } else if (this.latLng) {
      return {
        ...commonProps,
        latLng: this.latLng,
      };
    }
    return {
      ...commonProps,
      latLng: [0, 0],
    };
  }
}
