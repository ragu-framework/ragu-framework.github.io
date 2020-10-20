import {registerComponent} from "@ui/base-component";
import {MainContent} from "@ui/navigation/main-content";
import {Header} from "@ui/navigation/header";
import {StyleSlot} from "@ui/design-system/style-slot";
import {Text} from "@ui/design-system/typography/text";


@registerComponent()
export class Page extends StyleSlot {
  styleTemplate = `<style>
    .infoSection {
      margin: 60px 0;
    }
    .ragu-compatibility a {
      color: inherit;
    }

    .footer {
      margin-top: 20px;
    }

    .footer a {
      color: #BF265E;
    }

    .footer footer {
      padding: 20px 0 0;
      text-align: center;
      border-top: 1px solid rgba(43, 51, 50, 0.13);
      margin-top: 20px;
    }
  </style>
`;

  setContent(component) {
    this.childNodes.forEach((el) => {
      if (el.slot !== 'gh-button') {
        el.remove();
      }
    });

    this.appendChild(component);
  }

  get template() {
    return `
    ${(Header.render(`<div slot="right-nav"><slot name="gh-button"></slot></div>`))}
        
    <slot></slot>

    ${MainContent.render(`
      ${Text.render(`
        <footer>
          ❤️ with love by <a href="https://github.com/carlosmaniero" target="_blank">Maniero</a>
        </footer>
      `)}
    `, {
      class: 'footer'
    })}
    `
  }
}
