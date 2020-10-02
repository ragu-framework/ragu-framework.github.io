const classToNameComponentRegistry = {
};

export const elementNameOfComponent = (componentClass) => {
  if (!classToNameComponentRegistry[componentClass]) {
    classToNameComponentRegistry[componentClass] = `ragu-${componentClass.name.toLowerCase()}-${Date.now()}`;
  }

  return classToNameComponentRegistry[componentClass];

}
export const render = (componentClass, content = '') => {
  const elementName = elementNameOfComponent(componentClass);
  return `<${elementName}>${content}</${elementName}>`;

}

export class BaseComponent extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: "open"});
    this.shadowRoot.innerHTML = `<style>${this.style.toString()}</style>${this.render()}`
  }

  render() {
    return `<slot></slot>`
  }
}

export const registerComponent = () => (componentClass) => {
  customElements.define(elementNameOfComponent(componentClass), componentClass);
}
