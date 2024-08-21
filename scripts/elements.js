// @ts-check

import { html } from "./utils.js";

class CustomElement extends HTMLElement {
  constructor() {
    super();
  }

  attr(name = "", settings = { remove: true, defaultValue: "" }) {
    const attr = this.getAttribute(name) ?? settings.defaultValue;

    if (settings.remove) {
      this.removeAttribute(name);
    }

    return attr;
  }
}

class ContactLink extends CustomElement {
  constructor() {
    super();
  }
}

/**
 * @attr title
 * @attr link
 * @attr href
 */
class ContactLinkItem extends CustomElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const content = html`
      <p>
        <strong>${this.attr("title")}:</strong>
        <a href="${this.attr("href")}">${this.attr("link")}</a>
      </p>
    `;

    this.innerHTML = content;
  }
}

class WorkHistory extends CustomElement {
  constructor() {
    super();
  }
}

/**
 * @attr post
 * @attr company
 * @attr title
 * @attr period
 * @attr desc
 * @attr skills
 */
class WorkHistoryItem extends CustomElement {
  constructor() {
    super();
  }

  connectedCallback() {
    const content = html`
      <p>
        <strong>${this.attr("post")}</strong>, ${this.attr("company")}, Remoto.

        <br />
        <strong>${this.attr("title")}</strong> - ${this.attr("period")}.
        <br />
        ${this.attr("desc")}.
        <b>Tecnologias:</b> ${this.attr("skills")}.
      </p>
    `;

    this.innerHTML = content;
  }
}

export default () => {
  customElements.define("contact-link", ContactLink);
  customElements.define("contact-link-item", ContactLinkItem);

  customElements.define("work-history", WorkHistory);
  customElements.define("work-history-item", WorkHistoryItem);
};
