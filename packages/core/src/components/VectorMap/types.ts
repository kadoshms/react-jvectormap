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

type PathsDefinition = { [key: string]: { path: string; name: string } };

interface IMapContent {
  insets: IInset[];
  paths: PathsDefinition;
  height: number;
  width: number;
  projection: IProjection;
}
