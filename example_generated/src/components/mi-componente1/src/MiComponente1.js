import { LitElement, html } from "lit-element";
import { miComponente1Styles } from "./mi-componente1-style";

/**
 * `mi-componente1`
 * MiComponente1
 *
 * @customElement mi-componente1
 * @litElement
 * @demo demo/index.html
 */

export class MiComponente1 extends LitElement {
  static get is() {
    return "mi-componente1";
  }

  static get properties() {
    return {
      /**
       * Example of property
       * @property
       * @type { String }
       */
      property1: { type: String },
      /**
       * Example of property
       * @property
       * @type { Number }
       */
      property2: { type: Number }
    };
  }

  static get styles() {
    return [miComponente1Styles];
  }

  constructor() {
    super();
    this.property1 = "Year";
    this.property2 = new Date().getFullYear();
  }  

  render() {
    return html`
      <div class="mi-componente1">
        <h2>${this.property1}</h2>
        <h3>${this.property2}</h3>
      </div>
    `;
  }
}