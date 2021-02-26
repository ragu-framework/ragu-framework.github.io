import {registerComponent} from "@ui/base-component";
import {MainContent} from "@ui/navigation/main-content";
import {VerticalSlide} from "@ui/design-system/vertical-slide";
import {StyleSlot} from "@ui/design-system/style-slot";
import {Text} from "@ui/design-system/typography/text";
import {Title1} from "@ui/design-system/typography/title-1";
import {InfoSection} from "@ui/design-system/sections/info-section";
import reactLogo from '../languages-and-frameworks/react.png';
import vueLogo from '../languages-and-frameworks/vue.png';
import customElementsLogo from '../languages-and-frameworks/custom-elements.png';
import angularLogo from '../languages-and-frameworks/angular.png';
import {TestRaguDom} from "@ui/components/test-ragu-dom";


@registerComponent()
export class Home extends StyleSlot {
  shadowDOM = false;

  styleTemplate = `<style>
    .infoSection {
      margin: 60px 0;
    }
    .ragu-compatibility a {
      color: inherit;
    }

    .embed-container {
      position: relative;
      padding-bottom: 56.25%;
      height: 0;
      overflow: hidden;
      max-width: 100%;
    }
    .embed-container iframe, .embed-container object, .embed-container embed {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
    }

    .background-wrapper {
      background: linear-gradient(86.92deg, #bf265e 5.1%, rgba(255, 255, 255, 0) 97.29%), #f1ab42;
      margin-top: -40px;
      min-height: 800px;
      box-shadow: 0 0 75px rgba(0, 0, 0, 0.15);
    }

    .logo-wrapper {
      display: grid;
      grid-template-columns: 1fr 1fr;
      padding: 180px 0 90px;
      align-items: center;
      margin: 0 auto;
    }

    .logo-wrapper h1 {
      font-family: Poppins, sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 96px;
      color: white;
      margin: 0;
      padding-right: 80px;
      border-right: 1px solid rgba(255, 255, 255, 0.4);
      text-align: right;
    }

    .logo-wrapper h2 {
      font-family: Lato, sans-serif;
      font-style: normal;
      font-weight: 300;
      font-size: 24px;
      line-height: 30px;
      margin: 0;
      padding-left: 80px;
      color: #FFFFFF;
    }

    .ragu-compatibility {
      font-family: Poppins, sans-serif;
      padding: 80px 0;
      font-weight: 300;
      font-size: 14px;
    }

    .ragu-compatibility .language {
      margin-top: 60px;
      display: grid;
      text-align: center;
      justify-content: space-between;
      text-decoration: none;
    }

    .ragu-compatibility .language:not(a) {
      filter: grayscale(1);
    }

    .ragu-compatibility h1, .ragu-compatibility h2 {
      text-align: center;
      margin: 0;
    }

    .ragu-compatibility h1 {
      font-family: Lato, sans-serif;
      font-weight: 300;
      font-size: 96px;
      color: #2C3332;
    }

    .ragu-compatibility h2 {
      font-family: Poppins, sans-serif;
      font-style: normal;
      font-weight: bold;
      font-size: 48px;
    }

    @media screen and (max-width: 920px){
      .background-wrapper {
        padding-top: 100px;
      }

      .logo-wrapper {
        grid-template-columns: 1fr;
        padding: 0;
        max-width: 80%;
        margin-bottom: 20px;
      }

      .logo-wrapper h1, .logo-wrapper h2 {
        padding: 0 0 20px;
        text-align: center;
      }

      .logo-wrapper h1 {
        border-right: 0;
      }

      .ragu-compatibility h1 {
        font-size: 48px;
      }

      .ragu-compatibility h2 {
        font-size: 24px;
      }
    }
  </style>
`;

  get template() {
    return `
    <div class="background-wrapper">
      ${MainContent.render(`
          <div class="logo-wrapper">
            <h1>Ragu</h1>
            <h2>It was never so simple to deliver a frontend!</h2>
          </div>
      `)}

      <ragu-component src="https://ragu-framework.github.io/ragu-cli/index.json"></ragu-component>
    </div>

    ${MainContent.render(`
      <section id="how-to" class="infoSection ragu-compatibility">
        <h1>Ready to Start?</h1>
        <h2>Pick Your Framework!</h2>

        ${VerticalSlide.render(`
          <a href="#!/ragu-react-server-adapter" class="language">
            <img src="${reactLogo}" alt="react" />
            <span>React</span>
          </a>
          <a href="#!/ragu-vue-server-adapter" class="language">
            <img src="${vueLogo}" />
            <span>Vue</span>
          </a>
          <div class="language">
            <img src="${angularLogo}" />
            <span>Angular</span>
            <small>(not supported yet)</small>
          </div>
          <div class="language">
            <img src="${customElementsLogo}" />
            <span>Custom Elements</span>
            <small>(not supported yet)</small>
          </div>
        `, {small: true})}
      </section>

      <section class="infoSection">
        ${Title1.render(`More reasons to use?`)}

        ${VerticalSlide.render(`
          ${InfoSection.render(`
            <h2 slot="title">🚀 Server Side Rendering</h2>
            <div slot="content">
              <p>Ragu micro-frontends can be rendered at the server side improving the user experience and the load time.</p>
              <p>Every micro-frontend has its own endpoint witch can be used to pre-fetch micro-frontends. Check it out the playground section.</p>
            </div>
          `)}

          ${InfoSection.render(`
            <h2 slot="title">📦 Build System</h3></h2>
            <div slot="content">
              <p>Ragu Server comes with a build system on top of webpack which you can extend though the ragu server configuration.</p>
              <p>There are adapters listed bellow witch makes the integration with your favorite framework more straightforward.</p>
            </div>
          `)}

          ${InfoSection.render(`
            <h2 slot="title">🤝 Coupleless Integration</h3></h2>
            <div slot="content">
              <p>
                To share code across projects using a npm package is hard to manage and requires a full project build to apply changes.
              </p>
              <p>
                Ragu enables independent deployment extending the concept of micro-services to the front-end.
              </p>
            </div>
          `)}
        `)}
      </section>
    `)}

    ${TestRaguDom.render()}

    ${MainContent.render(`
      ${Title1.render(`Articles`)}

      ${Text.render(`
        <ul>
          <li>
            <a href="https://medium.com/@carlosmaniero/micro-frontends-with-react-vue-and-ragu-c5a2e3ecc2ab" target="_blank">
              Micro-frontends with React, Vue and Ragu
            </a>
          </li>
          <li>
            <a href="https://medium.com/@carlosmaniero/transforming-your-vue-js-project-into-micro-frontends-with-server-side-rendering-9cdaab16f5e9" target="_blank">
              Transforming your Vue.js project into Micro-frontends with Server Side Rendering
            </a>
          </li>
        </ul>
      `)}
    `, {
      class: 'footer'
    })}
    `
  }
}
