import { html, LitElement, property } from "lit-element";

class MainApp extends LitElement {
  @property({ type: String }) myProp = "stuff";
  render() {
    return html`
      <p>Hello World</p>
      ${this.myProp}
    `;
  }
}

customElements.define("main-app", MainApp);
