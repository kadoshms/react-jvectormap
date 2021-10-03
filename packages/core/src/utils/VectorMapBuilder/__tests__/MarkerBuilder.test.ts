import { MarkerBuilder } from "../MarkerBuilder";

describe("MarkerBuilder", () => {
  it("should build a simple MarkerBuilder with latLng", () => {
    const marker = new MarkerBuilder("test-marker").setLatLng([10, 10]).build();
    expect(marker).toEqual({
      name: "test-marker",
      latLng: [10, 10],
    });
  });

  it("should build a simple MarkerBuilder with coords", () => {
    const marker = new MarkerBuilder("test-marker").setCoords([10, 10]).build();
    expect(marker).toEqual({
      name: "test-marker",
      coords: [10, 10],
    });
  });

  it("should build a simple MarkerBuilder with both props defined", () => {
    const marker = new MarkerBuilder("test-marker")
      .setLatLng([10, 10])
      .setCoords([11, 11])
      .build();
    expect(marker).toEqual({
      name: "test-marker",
      coords: [11, 11],
    });
  });

  it("should build a simple MarkerBuilder with both props defined, oposite case", () => {
    const marker = new MarkerBuilder("test-marker")
      .setCoords([10, 10])
      .setLatLng([11, 11])
      .build();
    expect(marker).toEqual({
      name: "test-marker",
      latLng: [11, 11],
    });
  });
});
