import {registerComponent} from "@components/components";
import {BaseButton} from "@components/design-system/buttons/base-button";

@registerComponent()
export class SecondaryButton extends BaseButton {
  background = '#FFFFFF';
  borderColor = '#BF265E';
  textColor = 'var(--dark-color)';
}
