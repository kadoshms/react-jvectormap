import { Ref, CSSProperties } from "react";

export interface IVectorMapProps {
  /**
   * Name to be used as the map identifier
   */
  name: string;
  /**
   * Map content definition
   */
  content: IMapContent;
  /**
   * Optional ref for accessing map methods
   */
  mapRef: Ref<JQuery | null>;
  /**
   * Container class Name
   */
  className?: string;
  /**
   * Container inline CSS-in-JS style
   */
  style?: CSSProperties;
  /**
   * Background color of the map in CSS format.
   */
  backgroundColor?: string;
  /**
   * Indicates the minimum zoom ratio which could be reached zooming the map. Default value is 1.
   */
  zoomMin?: number;
  /**
   * Indicates the maximum zoom ratio which could be reached zooming the map. Default value is 8.
   */
  zoomMax?: number;
  /**
   * This parameter sets the initial position and scale of the map viewport.
   */
  focusOn: IFocus;
}

interface IBBox {
  x: number;
  y: number;
}

interface IInset {
  width: number;
  height: number;
  top: number;
  left: number;
  bbox: IBBox[];
}

interface IProjection {
  type: string;
  centralMeridian: number;
}

interface IMapContent {
  insets: IInset[];
  paths: PathsDefinition;
  height: number;
  width: number;
  projection: IProjection;
}

interface IFocus {
  scale: number;
  x: number;
  y: number;
  region?: string;
  lat?: number;
  lng?: number;
  animate?: boolean;
}

type PathsDefinition = { [key: string]: { path: string; name: string } };
