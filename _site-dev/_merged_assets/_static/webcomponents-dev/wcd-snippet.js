// node_modules/rocket-preset-webcomponents-dev/components/wcd-snippet/wcd-snippet.ts
var template = document.createElement("template");
template.innerHTML = `<style>
  :host {
    display: block;
    box-sizing: border-box;
    position: relative;
    width: 100%;
    height: auto;

    --code-button-focus-background: hsla(0 100% 0% / 0.75);
  }

  iframe {
    display: none;
    border: 0;
    overflow: hidden;
  }

  #snippet,
  iframe {
    width: 100%;
    height: 100%;
    border-radius: var(--wcd-snippet-border-radius, 6px);
  }

  #snippet {
    display: block;
  }

  #snippet,
  button {
    border: 1px solid var(--wcd-snippet-border-color, transparent);
    transition: border-color 0.2s ease-in-out;
    will-change: border-color;
  }

  :host([live]) iframe {
    display: block;
    width: var(--iframe-width, 100%);
    height: var(--iframe-height, 600px);
  }

  button {
    background: var(--wcd-snippet-button-background);
    border-end-end-radius: 6px;
    border-start-start-radius: 6px;
    color: inherit;
    cursor: pointer;
    display: block;
    font-size: 16px;
    outline: none;
    padding: 9px 16px;
    position: absolute;
    bottom: 0;
    right: -2px;
    transition:
      border-color 0.2s ease-in-out,
      background 0.1s ease,
      color 0.1s ease;
  }

  button:focus,
  button:hover {
    color: var(--wcd-snippet-button-focus-color, var(--code-button-focus-color));
    background: var(--wcd-snippet-button-focus-background, var(--code-button-focus-background));
    border-bottom-color: var(--wcd-snippet-button-focus-background, var(--code-button-focus-background)) !important;
    border-right-color: var(--wcd-snippet-button-focus-background, var(--code-button-focus-background)) !important;
  }

  :host([live]) #snippet,
  :host([live]) button {
    display: none;
  }

  :host(:not([live]):focus-within) #snippet,
  :host(:not([live]):hover) #snippet {
    border-color: var(--wcd-snippet-focus-border-color, black);
  }

  :host(:not([live]):focus-within) button,
  :host(:not([live]):hover) button {
    border-top-color: var(--wcd-snippet-focus-border-color, black);
    border-left-color: var(--wcd-snippet-focus-border-color, black);
    border-bottom-color: var(--wcd-snippet-outer-background-color, var(--page-background));
    border-right-color: var(--wcd-snippet-outer-background-color, var(--page-background));
  }

  #snippet ::slotted(pre) {
    margin-bottom: 0 !important;
  }
</style>

<div id="snippet"><slot></slot></div>

<iframe part="iframe" sandbox="allow-scripts allow-same-origin allow-forms"></iframe>

<button part="button">\u25B6\uFE0F Live Demo</button>
`;
var WcdSnippet = class extends HTMLElement {
  static get observedAttributes() {
    return ["live", "data-id", "file"];
  }
  constructor() {
    super();
    this.show = this.show.bind(this);
    this.attachShadow({ mode: "open" }).append(template.content.cloneNode(true));
    this.iframe = this.shadowRoot.querySelector("iframe");
    this.button = this.shadowRoot.querySelector("button");
    this.button.addEventListener("click", this.show);
  }
  get url() {
    const { id } = this.dataset;
    const file = this.getAttribute("file");
    const url = new URL(`https://webcomponents.dev/edit/${id}`);
    url.searchParams.set("embed", "1");
    url.searchParams.set("sv", "1");
    url.searchParams.set("pm", "1");
    if (file)
      url.searchParams.set("file", file);
    return url;
  }
  attributeChangedCallback() {
    if (this.hasAttribute("live"))
      return this.load();
  }
  show() {
    this.setAttribute("live", "");
  }
  load() {
    const { title = "Snippet" } = this.dataset;
    this.iframe.title = title;
    this.iframe.src = this.url.toString();
  }
};
customElements.define("wcd-snippet", WcdSnippet);
export {
  WcdSnippet
};
//# sourceMappingURL=wcd-snippet.js.map
