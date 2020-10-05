import {registerComponent} from "@ui/components";
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
  styleTemplate = `<style>
    .infoSection {
      margin: 60px 0;
    }
    .ragu-compatibility a {
      color: inherit;
      text-decoration: inherit;
    }
  </style>
`;

  get template() {
    return `${(Header.render())}${(MainContent.render(`
      ${MobileStack.render(`
        ${Logo.render(`<h1 slot="title">Ragu</h1><h2 slot="sub-title">Slice your front-end</h2>`)}
  
        <div>
          ${ButtonSet.render(
      `
              ${PrimaryButton.render(`<a href="">Get started</a>`)}
              ${SecondaryButton.render(`<a href="https://github.com/ragu-framework/ragu">Github</a>`)}
            `,
      {'max-width': '420px'}
    )}
        </div>
      `)}
  
      <section class="infoSection">
        ${Title1.render(`Using a micro-frontend`)}
  
        ${Text.render(`<p>To use a micro-frontend exposed by Ragu Server is easy as it. Ragu handles all dependency fetching.</p>`)}
  
        ${CodeBlock.render("&lt;ragu-component src=&quot;http://ragu-server.domain.com/components/my-component/&quot;&gt;&lt;/ragu-component&gt;")}
      </section>
  
      <section class="infoSection">
        ${Title1.render(`Why to use?`)}
  
        ${VerticalSlide.render(`
          ${InfoSection.render(`
            <h2 slot="title">🚀 Server Side Rendering</h2>
            <p slot="content">Ragu micro-frontends can be exported rendered at the server side improving the user experience and the load time.</p>
          `)}
          
          ${InfoSection.render(`
            <h2 slot="title">📦 Build System</h3></h2>
            <p slot="content">Ragu Server comes with a build system on top of webpack which you can extend though the ragu server configuration.</p>
          `)}
          
          ${InfoSection.render(`
            <h2 slot="title">🤝 Coupleless Integration</h3></h2>
            <p slot="content">Share code using private npm package requires project build to apply changes. Ragu enable independent deployment.</p>
          `)} 
        `)}        
      </section>
      
      <section class="infoSection ragu-compatibility">
        ${Title1.render(`You don’t need to rewrite your entire front-end. Ragu is compatible with:`)}
        ${Text.render(`<p>As you can just plug ragu to your current codebase it is useful to manage legacy strangulation.</p>`)}
  
        ${VerticalSlide.render(`
          ${FrameworkSupport.render(`
            <a href="https://github.com/ragu-framework/ragu/issues/2" target="_blank">${BooleanIndicator.render(`Ragu Client`, {checked: true})}</a>
            <a href="https://github.com/ragu-framework/ragu/issues/1" target="_blank">${BooleanIndicator.render(`Ragu Server Adapter`, {checked: true})}</a>
          `, {
            'framework-name': 'React',
            'framework-logo': reactLogo,
          })}
          ${FrameworkSupport.render(`
            <a href="https://github.com/ragu-framework/ragu/issues/3" target="_blank">${BooleanIndicator.render(`Ragu Client`, {checked: true})}</a>

            <a href="https://medium.com/@carlosmaniero/transforming-your-vue-js-project-into-micro-frontends-with-server-side-rendering-9cdaab16f5e9"  target="_blank">
              ${BooleanIndicator.render(`Ragu Server Adapter`, {checked: true})}
            </a>
          `, {
            'framework-name': 'Vue',
            'framework-logo': vueLogo,
          })}
          ${FrameworkSupport.render(`
            ${BooleanIndicator.render(`Ragu Client`, {checked: true})}
            ${BooleanIndicator.render(`Ragu Server Adapter`, {checked: false})}
          `, {
            'framework-name': 'Angular 2+',
            'framework-logo': angularLogo,
          })}
        `)}
      </section>
      
      ${TestRaguDom.render()}
    `))}`
  }
}