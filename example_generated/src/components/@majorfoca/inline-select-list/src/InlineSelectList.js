import { html, LitElement } from 'lit-element';
import { componentStyles } from './inline-select-list-style';

/**
 * `inline-select-list`
 * InlineSelectList
 *
 * @customElement inline-select-list
 * @litElement
 * @demo demo/index.html
 */

export class InlineSelectList extends LitElement {
  static get is() {
    return 'inline-select-list';
  }

  static get styles() {
    return [ componentStyles ];
  }

  static get properties() {
    return {
      listArray: { type: Array },
      elementsList: { type: String, attribute: 'elements-list' },
      listElementSelected: { type: String, attribute: 'element-selected' },
    };
  }

  constructor() {
    super();
    this.listArray = [];
    this.listElementSelected = '';
    this.elementsList = '';
  }

  connectedCallback() {
    super.connectedCallback();

    this._getInlineList();
  }

  _getInlineList() {
    this.listArray = this.elementsList.split(',').map(el => el.toUpperCase());
  }

  getLinkElement(element) {
    if (this.listArray.includes(element.toUpperCase())) {
      const pathParts = location.pathname.split('/');
      const pagename = pathParts.pop();
      const linkElement = `/${element.toLowerCase()}/${pagename}${location.search}`;
      return [linkElement];
    } else {
      return [];
    }
  }

  render() {
    if (this.listArray) {
      return html`
        <div class="link-element_box">
          ${this.listArray.map((element) => {
            if (element.toUpperCase() !== this.listElementSelected.toUpperCase()) {
              return html`
                <a class="link-element" 
                  href="${this.getLinkElement(element).map(link => link)}"
                  tabindex="0"
                  data-element="${element}"
                >
                  ${element}
                </a>
              `;
            } else {
              return html`<span class="link-element--click">${element}</span>`; 
            }
          })}
        </div>
      `;
    }
    return html``;
  }
}

