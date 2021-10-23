import { GetOffsets, ILabelsProps, RenderLabel } from "../../types";
import { IBuilder } from "./types";

export class LabelsPropsBuilder implements IBuilder<ILabelsProps> {
  private render: RenderLabel;
  private offsets: GetOffsets;

  public constructor(render: RenderLabel, offsets: GetOffsets) {
    this.render = render;
    this.offsets = offsets;
  }

  /**
   *
   * @param render
   */
  public setRender(render: RenderLabel) {
    this.render = render;
    return this;
  }

  /**
   *
   * @param offsets
   */
  public setOffsets(offsets: GetOffsets) {
    this.offsets = offsets;
    return this;
  }

  /**
   *
   */
  public build() {
    return {
      render: this.render,
      offsets: this.offsets,
    };
  }
}
