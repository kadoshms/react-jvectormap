import { MapMock1 } from "./mocks/MapMock1";
import { MultiMapBuilder } from "../MultiMapBuilder";

jest.mock("../MarkerBuilder", () => ({
  MarkerBuilder: jest.fn().mockImplementation(() => ({
    build: () => ({
      name: "test",
      coords: [10, 10],
    }),
  })),
}));

describe("MultiMapBuilder", () => {
  it("should build a simple MultiMap", () => {
    const multiMap = new MultiMapBuilder(MapMock1).setMaxLevel(2);
    expect(multiMap).toEqual({
      main: {
        map: MapMock1,
      },
      maxLevel: 2,
    });
  });

  it("should build a simple MultiMap with a URL getter", () => {
    const func = (code: string) => code;
    const multiMap = new MultiMapBuilder(MapMock1, 2).setUrlByCode(func);
    expect(multiMap).toEqual({
      main: {
        map: MapMock1,
      },
      mapUrlByCode: func,
      maxLevel: 2,
    });
  });
});
