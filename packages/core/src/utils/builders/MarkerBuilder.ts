import { CSSProperties } from "react";
import { Marker } from "../../types";

export class MarkerBuilder {
  private name: string;
  private coords?: [number, number];
  private latLng?: [number, number];
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
  public setCoords(value: [number, number]) {
    this.latLng = undefined;
    this.coords = value;
    return this;
  }

  /**
   *
   * @param value
   */
  public setLatLng(value: [number, number]) {
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
