import {registerComponent} from "@components/components";
import {BaseButton} from "@components/design-system/buttons/base-button";

@registerComponent()
export class PrimaryButton extends BaseButton {
  background = '#BF265E';
  borderColor = '#BF265E';
  textColor = '#FFFFFF';
}
