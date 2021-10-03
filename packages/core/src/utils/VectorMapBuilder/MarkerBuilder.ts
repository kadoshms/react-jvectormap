import { CSSProperties } from "react";
import { Marker } from "../../types";

export class MarkerBuilder {
  private name: string;
  private coords?: [number, number];
  private latLng?: [number, number];
  private style?: CSSProperties;

  constructor(name: string) {
    this.name = name;
  }

  /**
   *
   * @param name
   */
  public setName(name: string) {
    this.name = name;
    return this;
  }

  /**
   *
   * @param coords
   */
  public setCoords(coords: [number, number]) {
    this.latLng = undefined;
    this.coords = coords;
    return this;
  }

  /**
   *
   * @param latLng
   */
  public setLatLng(latLng: [number, number]) {
    this.coords = undefined;
    this.latLng = latLng;
    return this;
  }

  /**
   *
   * @param style
   */
  public setStyle(style: CSSProperties) {
    this.style = style;
    return this;
  }

  /**
   *
   */
  public build(): Marker {
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
