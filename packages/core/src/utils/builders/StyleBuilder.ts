import { CSSProperties } from "react";
import { ISVGElementStyleAttributes } from "../../types";
import { stripUndefinedValues } from "./utils";
import { IBuilder } from "./types";

export class StyleBuilder implements IBuilder<ISVGElementStyleAttributes> {
  private initial?: CSSProperties;
  private selected?: CSSProperties;
  private hover?: CSSProperties;
  private selectedHover?: CSSProperties;

  /**
   *
   * @param value
   */
  public setInitial(value: CSSProperties) {
    this.initial = value;
    return this;
  }

  /**
   *
   * @param value
   */
  public setSelected(value: CSSProperties) {
    this.selected = value;
    return this;
  }

  /**
   *
   * @param value
   */
  public setHover(value: CSSProperties) {
    this.hover = value;
    return this;
  }

  /**
   *
   * @param value
   */
  public setSelectedHover(value: CSSProperties) {
    this.selectedHover = value;
    return this;
  }

  public build() {
    return stripUndefinedValues({
      selected: this.selected,
      selectedHover: this.selectedHover,
      hover: this.hover,
      initial: this.initial,
    });
  }
}
