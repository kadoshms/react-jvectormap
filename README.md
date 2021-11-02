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

`import { esMill } from '@react-jvectormap/spain`;

Or, for bundling optimizations purposes (Recommended!):

`import esMill from "@react-jvectormap/spain/dist/esMill.json";`

```
    <VectorMap map={esMill} ... />
```

### Available Prebuilt Maps

| Continent/Country/City | Miller             | Mercator           | Lambert | Albers | Misc       | Package Name                             |
| ---------------------- | ------------------ | ------------------ | ------- | ------ | ---------- | ---------------------------------------- |
| Africa                 | africaMill         | africaMerc         | -       | -      | -          | @react-jvectormap/africa                 |
| Algeria                | dzMill             | -                  | -       | -      | -          | @react-jvectormap/algeria                |
| Argentina              | arMill             | arMerc             | -       | -      | -          | @react-jvectormap/argentina              |
| Asia                   | asiaMill           | asiaMerc           | -       | -      | -          | @react-jvectormap/asia                   |
| Australia              | auMill             | auMerc             | -       | -      | -          | @react-jvectormap/australia              |
| Austria                | atMill             | atMerc             | -       | -      | -          | @react-jvectormap/austria                |
| Belgium                | beMill             | beMerc             | -       | -      | -          | @react-jvectormap/belgium                |
| Brazil                 | brMill             | -                  | -       | -      | -          | @react-jvectormap/brazil                 |
| Canada                 | caMill             | caMerc             | caLcc   | -      | -          | @react-jvectormap/canada                 |
| Chicago                | usIlChicagoMill    | usIlChicagoMerc    | -       | -      | -          | @react-jvectormap/chicago                |
| China                  | cnMill             | cnMerc             | -       | -      | -          | @react-jvectormap/china                  |
| Colombia               | coMill             | coMerc             | -       | -      | -          | @react-jvectormap/colombia               |
| Continents             | continentsMill     | continentsMerc     | -       | -      | -          | @react-jvectormap/continents             |
| Denmark                | dkMill             | dkMerc             | -       | -      | -          | @react-jvectormap/denmark                |
| Europe                 | europeMill         | europeMerc         | -       | -      | -          | @react-jvectormap/europe                 |
| France                 | frMill             | frMerc             | -       | -      | -          | @react-jvectormap/france                 |
| FranceRegions          | frRegionsMill      | frRegionsMerc      | -       | -      | -          | @react-jvectormap/franceregions          |
| FranceRegions2016      | frRegions_2016Mill | frRegions_2016Merc | -       | -      | -          | @react-jvectormap/franceregions2016      |
| Germany                | deMill             | deMerc             | -       | -      | -          | @react-jvectormap/germany                |
| India                  | inMill             | inMerc             | -       | -      | -          | @react-jvectormap/india                  |
| Iran                   | iranMill           | -                  | -       | -      | -          | @react-jvectormap/iran                   |
| Italy                  | itMill             | itMerc             | -       | -      | -          | @react-jvectormap/italy                  |
| ItalyRegions           | itRegionsMill      | itRegionsMerc      | -       | -      | -          | @react-jvectormap/italyregions           |
| Netherlands            | nlMill             | nlMerc             | -       | -      | -          | @react-jvectormap/netherlands            |
| NewYork                | usNyNewYorkMill    | usNyNewYorkMerc    | -       | -      | -          | @react-jvectormap/newyork                |
| NewZiland              | nzMill             | nzMerc             | -       | -      | -          | @react-jvectormap/newziland              |
| NorthAmerica           | northAmericaMill   | northAmericaMerc   | -       | -      | -          | @react-jvectormap/northamerica           |
| Norway                 | noMill             | noMerc             | -       | -      | -          | @react-jvectormap/norway                 |
| Oceania                | oceaniaMill        | oceaniaMerc        | -       | -      | -          | @react-jvectormap/oceania                |
| Poland                 | plMill             | plMerc             | -       | -      | -          | @react-jvectormap/poland                 |
| Portugal               | ptMill             | ptMerc             | -       | -      | -          | @react-jvectormap/portugal               |
| PuertoRico             | -                  | -                  | -       | -      | puertoRico | @react-jvectormap/puertorico             |
| Russia                 | ruMill             | ruMerc             | -       | -      | -          | @react-jvectormap/russia                 |
| RussiaFederalDistricts | ruFdMill           | ruFdMerc           | -       | -      | -          | @react-jvectormap/russiafederaldistricts |
| SouthAfrica            | zaMill             | zaMerc             | -       | -      | -          | @react-jvectormap/southafrica            |
| SouthAmerica           | southAmericaMill   | southAmericaMerc   | -       | -      | -          | @react-jvectormap/southamerica           |
| SouthKorea             | krMill             | krMerc             | -       | -      | -          | @react-jvectormap/southkorea             |
| Spain                  | esMill             | esMerc             | -       | -      | -          | @react-jvectormap/spain                  |
| Sweden                 | seMill             | seMerc             | -       | -      | -          | @react-jvectormap/sweden                 |
| Switzerland            | chMill             | chMerc             | -       | -      | -          | @react-jvectormap/switzerland            |
| Thailand               | thMill             | thMerc             | -       | -      | -          | @react-jvectormap/thailand               |
| UkRegions              | ukRegionsMill      | ukRegionsMerc      | -       | -      | -          | @react-jvectormap/ukregions              |
| UnitedKingdomCountries | ukCountriesMill    | ukCountriesMerc    | -       | -      | -          | @react-jvectormap/unitedkingdomcountries |
| UnitedStates           | usAea              | usMill             | useMerc | usLcc  | -          | @react-jvectormap/unitedstates           |
| Venezuela              | veMill             | veMerc             | -       | -      | -          | @react-jvectormap/venezuela              |
| World                  | worldMill          | worldMerc          | -       | -      | -          | @react-jvectormap/world                  |

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
