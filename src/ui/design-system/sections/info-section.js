import {createStyledComponent} from "@ui/base-component";
import {PrimaryFont} from "@ui/design-system/typography/primary-font";
import {Text} from "@ui/design-system/typography/text";

const styled = createStyledComponent(`
  ${PrimaryFont.render(`<slot name="title"></slot>`)}
  ${Text.render(`<slot name="content"></slot>`)}
`)

export const InfoSection = styled`
  ::slotted([slot=title]) {
    font-weight: 500;
    font-size: 1.125rem;
    line-height: 1.625rem;
  }
`
