import { VectorMapBuilder } from "../VectorMapBuilder";
import { MarkerBuilder } from "../MarkerBuilder";
import { MapMock1 } from "./mocks/MapMock1";

jest.mock("../MarkerBuilder", () => ({
  MarkerBuilder: jest.fn().mockImplementation(() => ({
    build: () => ({
      name: "test",
      coords: [10, 10],
    }),
  })),
}));

describe("VectorMapBuilder", () => {
  it("should build a simple VectorMap with markers", () => {
    const marker1 = new MarkerBuilder("test1").build();
    const marker2 = new MarkerBuilder("test2").build();
    const marker3 = new MarkerBuilder("test3").build();
    const vectorMap = new VectorMapBuilder(MapMock1)
      .addMarker(marker1)
      .addMarker(marker2)
      .addMarker(marker3)
      .build();
    expect(vectorMap).toEqual({
      map: MapMock1,
      series: {
        markers: [marker1, marker2, marker3],
      },
    });
  });
});
