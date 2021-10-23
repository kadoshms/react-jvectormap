import { StyleBuilder } from "../StyleBuilder";

describe("StyleBuilder", () => {
  it("should build a simple style builder", () => {
    const style = new StyleBuilder()
      .setHover({ fill: "red" })
      .setInitial({ fill: "blue" })
      .setSelectedHover({ stroke: "black" })
      .build();

    expect(style).toEqual({
      initial: {
        fill: "blue",
      },
      hover: {
        fill: "red",
      },
      selectedHover: {
        stroke: "black",
      },
    });
  });
});
