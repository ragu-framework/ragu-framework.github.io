import {createStyledComponent} from "@ui/components";

const styled = createStyledComponent(
  `<slot name="image"></slot><slot name="description"></slot>`
);

export const ImageDescription = styled`
  :host {
    display: flex;
    align-items: center;
  }

  ::slotted([slot=image]) {
    margin-right: 20px;
  }
  
  ::slotted([slot=description]) {
    flex: 1;
  }
`
