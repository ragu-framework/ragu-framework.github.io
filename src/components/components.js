const classToNameComponentRegistry = {
};

export const elementNameOfComponent = (componentClass) => {
  if (!classToNameComponentRegistry[componentClass]) {
    classToNameComponentRegistry[componentClass] = `ragu-${componentClass.name.toLowerCase()}-${Math.ceil(Math.random() * 10000000)}`;
  }

  return classToNameComponentRegistry[componentClass];

}
export const render = (componentClass, content = '', attributes = {}) => {
  const elementName = elementNameOfComponent(componentClass);
  let attributesString = "";

  for (const attributeKey of Object.keys(attributes)) {
    attributesString += ` ${attributeKey}="${attributes[attributeKey]}"`;
  }

  return `<${elementName}${attributesString}>${content}</${elementName}>`;

}

export class BaseComponent extends HTMLElement {
  connectedCallback() {
    this.attachShadow({mode: "open"});
    this.shadowRoot.innerHTML = `${this.render()}`
  }

  render() {
    return `<slot></slot>`
  }

  static render(...args) {
    return render(this, ...args);
  }

  static elementName() {
    return elementNameOfComponent(this);
  }
}


export const registerComponent = () => (componentClass) => {
  customElements.define(elementNameOfComponent(componentClass), componentClass);
}
