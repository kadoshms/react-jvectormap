import { AttributeSeriesBuilder } from "../AttributeSeriesBuilder";

describe("AttributeSeriesBuilder", () => {
  it("should build an attribute series", () => {
    const series = new AttributeSeriesBuilder("r")
      .setValues([10, 10, 10])
      .setScale([10, 10])
      .setNormalizeFunction("polynomial")
      .build();
    expect(series).toEqual({
      attribute: "r",
      scale: [10, 10],
      values: [10, 10, 10],
      normalizeFunction: "polynomial",
    });
  });

  it("should build an attribute series and change it's values", () => {
    const series = new AttributeSeriesBuilder("r");
    series.setAttribute("x").setScale([10, 10]).setValues([0]);
    expect(series).toEqual({
      attribute: "x",
      scale: [10, 10],
      values: [0],
    });
  });
});
