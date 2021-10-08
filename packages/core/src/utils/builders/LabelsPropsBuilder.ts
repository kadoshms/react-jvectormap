import { GetOffsets, ILabelsProps, RenderLabel } from "../../types";

export class LabelsPropsBuilder {
  private render: RenderLabel;
  private offsets: GetOffsets;

  public constructor(render: RenderLabel, offsets: GetOffsets) {
    this.render = render;
    this.offsets = offsets;
  }

  public setRender(render: RenderLabel) {
    this.render = render;
    return this;
  }

  public setOffsets(offsets: GetOffsets) {
    this.offsets = offsets;
    return this;
  }

  public build(): ILabelsProps {
    return {
      render: this.render,
      offsets: this.offsets,
    };
  }
}
