import {registerComponent} from "@ui/base-component";
import {BaseButton} from "@ui/design-system/buttons/base-button";

@registerComponent()
export class SecondaryButton extends BaseButton {
  background = '#FFFFFF';
  borderColor = '#BF265E';
  textColor = 'var(--dark-color)';
}
