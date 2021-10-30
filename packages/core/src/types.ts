import { CSSProperties, MutableRefObject, Ref } from "react";

export type Nullable<T> = null | T;

interface ISetFocusParams {
  regions?: string[];
  region?: string;
  scale?: number;
  lat?: number;
  lng?: number;
  x?: number;
  y?: number;
  animate?: boolean;
}

export interface IMapObject {
  /**
   * Add one marker to the map.
   * @param key
   * @param marker
   * @param seriesData
   */
  addMarker: (
    key: string,
    marker: Marker,
    seriesData: IAttributeSeries[],
  ) => void;
  /**
   * Add set of marker to the map.
   * @param key
   */
  addMarkers: (markers: Marker[], seriesData: IAttributeSeries[]) => void;
  /**
   * Remove the selected state from all the currently selected markers.
   */
  clearSelectedMarkers: () => void;
  /**
   * Remove the selected state from all the currently selected regions.
   */
  clearSelectedRegions: () => void;
  /**
   * Get the name of a region
   */
  getRegionName: (code: string) => void;
  /**
   * Return the codes of currently selected markers.
   */
  getSelectedMarkers: () => Marker[];
  /**
   * Return the codes of currently selected regions.
   */
  getSelectedRegions: () => IRegion[];
  /**
   * Converts coordinates expressed as latitude and longitude to the coordinates in pixels on the map.
   */
  latLngToPoint: (lat: number, lng: number) => number[];
  /**
   * Converts cartesian coordinates into coordinates expressed as latitude and longitude.
   */
  pointToLatLng: (x: number, y: number) => number[];
  /**
   * Gracefully remove the map and and all its accessories, unbind event handlers.
   */
  remove: () => void;
  /**
   * Remove all markers from the map.
   */
  removeAllMarkers: () => void;
  /**
   * Remove some markers from the map.
   */
  removeMarkers: () => void;
  /**
   * Reset all the series and show the map with the initial zoom.
   */
  reset: () => void;
  /**
   * Set background color of the map.
   */
  setBackgroundColor: (backgroundColor: string) => void;
  /**
   * Set the map's viewport to the specific point and set zoom of the map to the specific level. Point and zoom level could be defined in two ways: using the code of some region to focus on or a central point and zoom level as numbers.
   */
  setFocus: (params: ISetFocusParams) => void;
  /**
   * Set or remove selected state for the markers.
   * @param keys
   */
  setSelectedMarkers: (
    keys: string | string[] | { [key: string]: boolean },
  ) => void;
  /**
   * Set or remove selected state for the regions.
   * @param keys
   */
  setSelectedRegions: (
    keys: string | string[] | { [key: string]: boolean },
  ) => void;
  /**
   * Synchronize the size of the map with the size of the container. Suitable in situations where the size of the container is changed programmatically or container is shown after it became visible.
   */
  updateSize: () => void;
}

export type MapObject = IMapObject;

interface IMapComponent {
  /**
   * Optional ref for accessing map methods
   */
  mapRef?: MutableRefObject<MapObject | null>;
  /**
   * Container class Name
   */
  className?: string;
  /**
   * Container inline CSS-in-JS style
   */
  style?: CSSProperties;
}

export interface IVectorMapProps extends IMapComponent {
  /**
   * Map content definition
   */
  map: IVectorMap;
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
   * Set of markers to add to the map during initialization. In case of array is provided, codes of markers will be set as string representations of array indexes. Each marker is represented by latLng (array of two numeric values), name (string which will be show on marker's tip) and any marker styles.
   */
  markers?: Marker[];
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
  regionStyle?:
    | ISVGElementStyleAttributes
    | ((code: string) => ISVGElementStyleAttributes);
  /**
   * Set the styles for the regions' labels. Each region or marker has four states: initial (default state), hover (when the mouse cursor is over the region or marker), selected (when region or marker is selected), selectedHover (when the mouse cursor is over the region or marker and it's selected simultaneously). Styles could be set for each of this states.
   */
  regionLabelStyle?: ISVGElementStyleAttributes;
  /**
   * Set initially selected markers.
   */
  selectedMarkers?: string[] | { [region: string]: boolean } | string;
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
   * Will be called right before the region tip is going to be shown.
   */
  onRegionTipShow?: OnRegionTipShow;
  /**
   * Will be called on region mouse over event.
   */
  onRegionOver?: (event: JQuery.Event, code: string) => void;
  /**
   * Will be called on region mouse out event.
   */
  onRegionOut?: (event: JQuery.Event, code: string) => void;
  /**
   * Will be called right before the marker tip is going to be shown.
   */
  onMarkerTipShow?: (event: JQuery.Event, el: Element, code: string) => void;
  /**
   * Will be called on marker mouse over event.
   */
  onMarkerOver?: (event: JQuery.Event, code: string) => void;
  /**
   * Will be called on marker mouse out event.
   */
  onMarkerOut?: (event: JQuery.Event, code: string) => void;
  /**
   * Will be called on marker click event.
   */
  onMarkerClick?: (event: JQuery.Event, code: string) => void;
  /**
   * Will be called when marker is (de)selected. isSelected parameter of the callback indicates whether marker is selected or not. selectedMarkers contains codes of all currently selected markers.
   */
  onMarkerSelected?: (
    event: JQuery.Event,
    code: string,
    isSelected: boolean,
    selectedMarkers: string[],
  ) => void;
  /**
   * Triggered when the map's viewport is changed (map was panned or zoomed).
   */
  onViewportChange?: (event: JQuery.Event, scale: number) => void;
  /**
   * Set initially selected regions.
   * examples: ["US-CA"] | { "US-CA": true } | "US-CA"
   */
  selectedRegions?: SelectedEntities;
  /**
   * Object with two keys: markers and regions. Each of which is an array of series configs to be applied to the respective map elements.
   */
  series?: ISeries;
  /**
   * Object with two keys: markers and regions. Each of which is an array of labels configs to be applied to the respective map elements.
   */
  labels?: ILabels;
}

export interface IMainMap {
  map: IVectorMap;
}

export interface IMultiMapProps extends IMapComponent {
  /**
   * Maximum number of levels user can go through
   */
  maxLevel?: number;
  /**
   * Config of the main map.
   */
  main: IMainMap;
  /**
   * Function to generate map name by region code. Default value is:
   */
  mapNameByCode?: (code: string) => string;
  /**
   * Function to generate map url by region code. Default value is:
   */
  mapUrlByCode?: (code: string) => string;
  /**
   * Function to manually retrieve map data
   * @param code
   */
  getDrillDownMap?: (code: string) => Promise<IVectorMap> | IVectorMap;
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

export interface IVectorMap {
  name: string;
  content: {
    insets: IInset[];
    paths: PathsDefinition;
    height: number;
    width: number;
    projection: IProjection;
  };
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

export interface ISVGElementStyleAttributes {
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

export interface ISeries {
  regions?: IAttributeSeries[];
  markers?: IAttributeSeries[];
}

type Scale = { [key: string]: string } | number[];

type Values = { [key: string]: string | number };

export type NormalizeFunctionType = "linear" | "polynomial";

export interface IAttributeSeries {
  attribute: string;
  values?: number[];
  scale?: Scale;
  normalizeFunction?: NormalizeFunctionType | ((value?: number) => string);
}

export interface IRegion {
  scale: Scale;
  values: Values;
  attribute: string;
  normalizeFunction?: NormalizeFunctionType | ((value?: number) => string);
}

interface IMarkerBase {
  name: string;
  style?: CSSProperties;
}

interface IMarkerWithCoords extends IMarkerBase {
  coords: number[];
}

interface IMarkerWithLatLng extends IMarkerBase {
  latLng: number[];
}

export type RenderLabel = (code: string) => void | string;

export type GetOffsets = (code: string) => { [key: string | number]: number[] };

export interface ILabelsProps {
  render: RenderLabel;
  offsets: GetOffsets;
}

export interface ILabels {
  regions?: ILabelsProps;
  markers?: ILabelsProps;
}

export type Marker = IMarkerWithCoords | IMarkerWithLatLng;

export type OnRegionTipShow = (
  event: JQuery.Event,
  el: Element,
  code: string,
) => void;

export type SelectedEntities =
  | string[]
  | { [region: string]: boolean }
  | string;
