import {registerComponent} from "@ui/base-component";
import {MainContent} from "@ui/navigation/main-content";
import {Header} from "@ui/navigation/header";
import {CodeBlock} from "@ui/design-system/code/code-block";
import {VerticalSlide} from "@ui/design-system/vertical-slide";
import {ButtonSet} from "@ui/design-system/buttons/button-set";
import {StyleSlot} from "@ui/design-system/style-slot";
import {Logo} from "@ui/design-system/logo/logo";
import {MobileStack} from "@ui/design-system/mobile-stack";
import {PrimaryButton} from "@ui/design-system/buttons/primary-button";
import {SecondaryButton} from "@ui/design-system/buttons/secondary-button";
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
    ${(MainContent.render(`

      ${MobileStack.render(`
        ${Logo.render(`<h1 slot="title">Ragu</h1><h2 slot="sub-title">Slice your front-end</h2>`)}

        <div>
          ${ButtonSet.render(`
            ${PrimaryButton.render(`<a href="https://github.com/ragu-framework/ragu#installation" target="_blank">Get started</a>`)}
            ${SecondaryButton.render(`<a href="https://github.com/ragu-framework/ragu">Github</a>`)}
          `, {'max-width': '420px'})}
        </div>
      `)}

      <section class="infoSection">
        ${Title1.render(`Using a micro-frontend`)}

        ${Text.render(`
          <p>
          To use a micro-frontend exposed by Ragu Server is easy as it. All you need to do is do give a
          micro-frontend URL to ragu-component and it will handle everything.</p>`)}

        ${CodeBlock.render("&lt;ragu-component src=&quot;http://ragu-server.domain.com/components/my-component/&quot;&gt;&lt;/ragu-component&gt;")}
      </section>

      <section class="infoSection">
        ${Title1.render(`Why to use?`)}

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

      <section class="infoSection ragu-compatibility">
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
    `))}

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
