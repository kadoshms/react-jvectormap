import { SeriesBuilder } from "../SeriesBuilder";
import { AttributeSeriesBuilder } from "../AttributeSeriesBuilder";

jest.mock("../MarkerBuilder", () => ({
  AttributeSeriesBuilder: jest.fn().mockImplementation(() => ({
    build: () => ({
      scale: [10, 20],
      values: [1, 2, 3],
      attribute: "r",
    }),
  })),
}));
describe("AttributeSeriesBuilder", () => {
  it("should add two marker series", () => {
    const ms1 = new AttributeSeriesBuilder("r", [10, 20], [1, 2, 3]).build();
    const ms2 = new AttributeSeriesBuilder("r", [10, 20], [1, 2, 3]).build();
    const series = new SeriesBuilder().addMarkersSeries(ms1, ms2).build();
    expect(series).toEqual({
      markers: [
        { attribute: "r", scale: [10, 20], values: [1, 2, 3] },
        { attribute: "r", scale: [10, 20], values: [1, 2, 3] },
      ],
    });
  });

  it("should add two region series", () => {
    const rs1 = new AttributeSeriesBuilder("r", [10, 20], [1, 2, 3]).build();
    const rs2 = new AttributeSeriesBuilder("r", [10, 20], [1, 2, 3]).build();
    const series = new SeriesBuilder().addRegionsSeries(rs1, rs2).build();
    expect(series).toEqual({
      regions: [
        { attribute: "r", scale: [10, 20], values: [1, 2, 3] },
        { attribute: "r", scale: [10, 20], values: [1, 2, 3] },
      ],
    });
  });
});
