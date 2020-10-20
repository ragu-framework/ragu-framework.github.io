import {registerComponent} from "@ui/base-component";
import {MainContent} from "@ui/navigation/main-content";
import {StyleSlot} from "@ui/design-system/style-slot";
import {MfLoader} from "@ui/components/mf-loader";


@registerComponent()
export class RaguReactServerAdapter extends StyleSlot {
  shadowDOM = false;

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

  get template() {
    return `
    ${MainContent.render(`
      ${MfLoader.render('', {src: 'https://ragu-react-server-adapter.herokuapp.com/components/installation'})}
    `)}
    `
  }
}