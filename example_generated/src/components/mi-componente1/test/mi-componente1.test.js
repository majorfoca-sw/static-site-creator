/* eslint-disable no-unused-expressions */
/* eslint-disable import/no-extraneous-dependencies */
import { html, fixture, expect } from "@open-wc/testing";
import "../mi-componente1";

describe("MiComponente1", () => {
  it("should have the basic template", async () => {
    const el = await fixture(
      html`
        <mi-componente1></mi-componente1>
      `
    );
    const base = el.shadowRoot.querySelector(".mi-componente1");

    expect(base).not.to.be.null;
    expect(el).dom.to.equalSnapshot();
  });
});
