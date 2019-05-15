import { LitElement, html, css } from 'lit-element';

export default class AppTodos extends LitElement {
    constructor() {
        super();
        this.content = "";
      }

      static get properties() {
        return {
          content: { type: String },
        };
      }

      initTodos(content) {
        this.content = content;
      }

      render() {
        return html`
        <li>${this.content}</li>
        `;
      }
}

customElements.define('app-todos', AppTodos);

