import {PrimaryFont} from "ui/design-system/typography/primary-font";

const styled = PrimaryFont.createStyledElement('<h1><slot></slot></h1>');

export const Title1 = styled`
  h1 {
    font-family: Lato, sans-serif;
    font-weight: 300;
    font-size: 1.5rem;
    margin: 0;
  }
`
