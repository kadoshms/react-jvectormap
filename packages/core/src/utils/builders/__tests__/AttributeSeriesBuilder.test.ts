import { AttributeSeriesBuilder } from "../AttributeSeriesBuilder";

describe("AttributeSeriesBuilder", () => {
  it("should build an attribute series", () => {
    const series = new AttributeSeriesBuilder(
      "r",
      [10, 10],
      [10, 10, 10],
    ).build();
    expect(series).toEqual({
      attribute: "r",
      scale: [10, 10],
      values: [10, 10, 10],
    });
  });

  it("should build an attribute series and change it's values", () => {
    const series = new AttributeSeriesBuilder("r", [10, 10], [10, 10, 10]);
    series.setAttribute("x").setValues([0]);
    expect(series).toEqual({
      attribute: "x",
      scale: [10, 10],
      values: [0],
    });
  });
});
