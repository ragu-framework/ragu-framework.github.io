import {registerComponent} from "@ui/base-component";
import {MainContent} from "@ui/navigation/main-content";
import {VerticalSlide} from "@ui/design-system/vertical-slide";
import {StyleSlot} from "@ui/design-system/style-slot";
import {Text} from "@ui/design-system/typography/text";
import {Title1} from "@ui/design-system/typography/title-1";
import {InfoSection} from "@ui/design-system/sections/info-section";
import {FrameworkSupport} from "@ui/design-system/framework-support";
import reactLogo from '../languages-and-frameworks/react.png';
import vueLogo from '../languages-and-frameworks/vue.png';
import angularLogo from '../languages-and-frameworks/angular.png';
import {BooleanIndicator} from "@ui/design-system/boolean-indicator";
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

    .video-wrapper {
      background: linear-gradient(86.92deg, #bf265e 5.1%, rgba(255, 255, 255, 0) 97.29%), #f1ab42;
      margin-top: -40px;
      min-height: 800px;
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

    @media screen and (max-width: 920px){
      .video-wrapper {
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
    }
  </style>
`;

  get template() {
    return `
    <div class="video-wrapper">
      ${MainContent.render(`
          <div class="logo-wrapper">
            <h1>Ragu</h1>
            <h2>It was never so simple to deliver a frontend!</h2>
          </div>
      `)}
    
      <ragu-component src="https://ragu-framework.github.io/ragu-cli/index.json"></ragu-component>
    </div>

    ${MainContent.render(`
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

      <section id="how-to" class="infoSection ragu-compatibility">
        ${Title1.render(`You don’t need to rewrite your entire front-end. Ragu is compatible with:`)}
        ${Text.render(`<p>
          Ragu helps you to give more autonomy to your teams and also it is helpful to legacy replacement as it
          requires only few configuration to expose you front-end as micro-frontends.
        </p>`)}

        ${VerticalSlide.render(`
          ${FrameworkSupport.render(`
            ${BooleanIndicator.render(`<a href="https://github.com/ragu-framework/ragu/issues/2" target="_blank">Ragu Client</a>`, {checked: true})}
            ${BooleanIndicator.render(`<a href="#!/ragu-react-server-adapter">Ragu Server Adapter</a>`, {checked: true})}
          `, {
            'framework-name': 'React',
            'framework-logo': reactLogo,
          })}
          ${FrameworkSupport.render(`
            ${BooleanIndicator.render(`<a href="https://github.com/ragu-framework/ragu/issues/3" target="_blank">Ragu Client</a>`, {checked: true})}</a>

              ${BooleanIndicator.render(`
                <a href="#!/ragu-vue-server-adapter">
                  Ragu Server Adapter
                </a>
              `, {checked: true})}
          `, {
            'framework-name': 'Vue',
            'framework-logo': vueLogo,
          })}
          ${FrameworkSupport.render(`
              ${BooleanIndicator.render(`<a href="https://github.com/ragu-framework/ragu/issues/4" target="_blank">Ragu Client</a>`, {checked: true})}
              ${BooleanIndicator.render(`<a href="https://github.com/ragu-framework/ragu/issues/5" target="_blank">Ragu Server Adapter</a>`, {checked: false})}
          `, {
            'framework-name': 'Angular 2+',
            'framework-logo': angularLogo,
          })}
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
