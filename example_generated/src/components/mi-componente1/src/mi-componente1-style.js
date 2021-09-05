import { css } from 'lit-element';

export const miComponente1Styles = css`
  :host {
    display: block;
    --default-main-color: #ff7900;
  }
  .mi-componente1 {
    background-color: inherit;
    color: var(--main-color, var(--default-main-color));
  }
`;
