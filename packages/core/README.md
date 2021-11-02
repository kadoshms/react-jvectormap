# @react-jvectormap

![Logo](logo.png)

[![npm version](https://badge.fury.io/js/@react-jvectormap%2Fcore.svg)](https://badge.fury.io/js/@react-jvectormap%2Fcore)

## About

A simple wrapper for [jvectormap](http://jvectormap.com/)

## Quick Start

`npm install --save @react-jvectormap/core jquery`

or

`yarn add @react-jvectormap/core jquery`

To see examples, and play with the library, visit the project Storybook:

https://61685594b935d4003a3a6f2c-fcgvwodumn.chromatic.com/

# Basic Usage

## VectorMap

`VectorMap` is a basic map component. Available props:

```
export interface IVectorMapProps extends IMapComponent {
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
```

## MultiMap

A `MultiMap` is a map with a drill-down option. For instance, a map of the United States, by which clicking on a state opens it's map.

Available props:

```
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
```

# Loading Maps

In order to use a pre-built map, run:

`npm install --save @react-jvectormap/maps`

or

`yarn add @react-jvectormap/maps`

### Usage

`import { usMill } from '@react-jvectormap/maps`;

Or, for bundling optimizations purposes (Recommended!):

`import usMill from "@react-jvectormap/maps/dist/UnitedStates/usMill.json";`

```
    <VectorMap map={usMill} ... />
```

### Available Prebuilt Maps

| Continent/Country/City | Miller             | Mercator           | Lambert | Albers     | Misc |
| ---------------------- | ------------------ | ------------------ | ------- | ---------- | ---- |
| Africa                 | africaMill         | africaMerc         | -       | -          |
| Algeria                | dzMill             | -                  | -       | -          |
| Argentina              | arMill             | arMerc             | -       | -          |
| Asia                   | asiaMill           | asiaMerc           | -       | -          |
| Australia              | auMill             | auMerc             | -       | -          |
| Austria                | atMill             | atMerc             | -       | -          |
| Belgium                | beMill             | beMerc             | -       | -          |
| Brazil                 | brMill             | -                  | -       | -          |
| Canada                 | caMill             | caMerc             | caLcc   | -          |
| Chicago                | usIlChicagoMill    | usIlChicagoMerc    | -       | -          |
| China                  | cnMill             | cnMerc             | -       | -          |
| Colombia               | coMill             | coMerc             | -       | -          |
| Continents             | continentsMill     | continentsMerc     | -       | -          |
| Denmark                | dkMill             | dkMerc             | -       | -          |
| Europe                 | europeMill         | europeMerc         | -       | -          |
| France                 | frMill             | frMerc             | -       | -          |
| FranceRegions          | frRegionsMill      | frRegionsMerc      | -       | -          |
| FranceRegions2016      | frRegions_2016Mill | frRegions_2016Merc | -       | -          |
| Germany                | deMill             | deMerc             | -       | -          |
| India                  | inMill             | inMerc             | -       | -          |
| Iran                   | iranMill           | -                  | -       | -          |
| Italy                  | itMill             | itMerc             | -       | -          |
| ItalyRegions           | itRegionsMill      | itRegionsMerc      | -       | -          |
| Netherlands            | nlMill             | nlMerc             | -       | -          |
| NewYork                | usNyNewYorkMill    | usNyNewYorkMerc    | -       | -          |
| NewZiland              | nzMill             | nzMerc             | -       | -          |
| NorthAmerica           | northAmericaMill   | northAmericaMerc   | -       | -          |
| Norway                 | noMill             | noMerc             | -       | -          |
| Oceania                | oceaniaMill        | oceaniaMerc        | -       | -          |
| Poland                 | plMill             | plMerc             | -       | -          |
| Portugal               | ptMill             | ptMerc             | -       | -          |
| PuertoRico             | -                  | -                  | -       | puertoRico |
| Russia                 | ruMill             | ruMerc             | -       | -          |
| RussiaFederalDistricts | ruFdMill           | ruFdMerc           | -       | -          |
| SouthAfrica            | zaMill             | zaMerc             | -       | -          |
| SouthAmerica           | southAmericaMill   | southAmericaMerc   | -       | -          |
| SouthKorea             | krMill             | krMerc             | -       | -          |
| Spain                  | esMill             | esMerc             | -       | -          |
| Sweden                 | seMill             | seMerc             | -       | -          |
| Switzerland            | chMill             | chMerc             | -       | -          |
| Thailand               | thMill             | thMerc             | -       | -          |
| UkRegions              | ukRegionsMill      | ukRegionsMerc      | -       | -          |
| UnitedKingdomCountries | ukCountriesMill    | ukCountriesMerc    | -       | -          |
| UnitedStates           | useMerc            | usMill             | usLcc   | usAea      |
| Venezuela              | veMill             | veMerc             | -       | -          |
| World                  | worldMill          | worldMerc          | -       | -          |

## Custom Maps

A `@react-jvectormap` map is represented by the following JSON schema:

```
{
    "name": string,
    "content": {
        "paths": {
            [REGION_CODE]: {
                path: string (SVG Path)
                "name": string;
            }
        }
    },
    "projection(optional)": { "type": string, "centralMeridian": number },
    "height": number,
    "width": number
}
```

# Prop Builders

TBD
