import {registerComponent} from "@ui/base-component";
import {BaseButton} from "@ui/design-system/buttons/base-button";

@registerComponent()
export class PrimaryButton extends BaseButton {
  background = '#BF265E';
  borderColor = '#BF265E';
  textColor = '#FFFFFF';
}
