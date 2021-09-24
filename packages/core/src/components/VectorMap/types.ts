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
   * Indicates the multiplier used to zoom map with +/- buttons. Default value is 1.6.
   */
  zoomStep?: number;
  /**
   * When set to true map could be zoomed using mouse scroll. Default value is true.
   */
  zoomOnScroll?: boolean;
  /**
   * Indicates whether or not to animate changing of map zoom with zoom buttons.
   */
  zoomAnimate?: boolean;
  /**
   * This parameter sets the initial position and scale of the map viewport.
   */
  focusOn?: IFocus;
  /**
   * When set to true, the map pans when being dragged. Default value is true.
   */
  panOnDrag?: boolean;
  /**
   * When set to true regions of the map could be selected. Default value is false.
   */
  regionsSelectable?: boolean;
  /**
   * Allow only one region to be selected at the moment. Default value is false.
   */
  regionsSelectableOne?: boolean;
  /**
   * When set to true markers on the map could be selected. Default value is false.
   */
  markersSelectable?: boolean;
  /**
   * Allow only one marker to be selected at the moment. Default value is false.
   */
  markersSelectableOne?: boolean;
  /**
   * Set the styles for the map's regions. Each region or marker has four states: initial (default state), hover (when the mouse cursor is over the region or marker), selected (when region or marker is selected), selectedHover (when the mouse cursor is over the region or marker and it's selected simultaneously). Styles could be set for each of this states.
   */
  regionStyle?: ISVGElementStyleAttributes;
  /**
   * Set the styles for the regions' labels. Each region or marker has four states: initial (default state), hover (when the mouse cursor is over the region or marker), selected (when region or marker is selected), selectedHover (when the mouse cursor is over the region or marker and it's selected simultaneously). Styles could be set for each of this states.
   */
  regionLabelStyle?: ISVGElementStyleAttributes;
  /**
   * Set the styles for the map's markers. Any parameter suitable for regionStyle could be used as well as numeric parameter r to set the marker's radius.
   */
  markerStyle?: ISVGElementStyleAttributes | IImageElementStyleAttributes;
  /**
   * Will be called on region click event.
   */
  onRegionClick?: (event: JQuery.Event, code: string) => void;
  /**
   * Will be called when region is (de)selected. isSelected parameter of the callback indicates whether region is selected or not. selectedRegions contains codes of all currently selected regions.
   */
  onRegionSelected?: (
    event: JQuery.Event,
    code: string,
    isSelected: boolean,
    selectedRegions: string[],
  ) => void;
  /**
   * Set initially selected regions.
   * examples: ["US-CA"] | { "US-CA": true } | "US-CA"
   */
  selectedRegions?: string[] | { [region: string]: boolean } | string;
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

interface ISVGElementStyleAttributes {
  initial?: CSSProperties;
  hover?: CSSProperties;
  selected?: CSSProperties;
  selectedHover?: CSSProperties;
}

interface IImageElementStyleAttributes {
  url: string;
  offset?: number[];
}

type PathsDefinition = { [key: string]: { path: string; name: string } };
