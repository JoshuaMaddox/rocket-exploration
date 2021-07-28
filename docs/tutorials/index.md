# Tutorials

## The new tutorials page

Code Tabs Example

Get our IOS, Kotlin, Java, React ect... tab goodness on.

<code-tabs default-tab="kin-thing.swift">

```swift tab kin-thing.swift
onBalanceChanged: { [weak self] balance in
    print("Balance was updated to: \(balance)")
}

onPaymentHappened: { [weak self] paymenta in
   print("Payments: \(payment)")
}
```

```json tab custom-elements.json
{
  "schemaVersion": "1.0.0",
  "readme": "",
  "modules": [
    {
      "kind": "javascript-module",
      "path": "my-element.js",
      "declarations": [
        {
          "kind": "class",
          "description": "",
          "name": "MyElement",
          "tagName": "my-element",
          "members": [
            {
              "kind": "field",
              "name": "is",
              "default": "'my-element'",
              "static": true
            }
          ],
          "superclass": {
            "name": "HTMLElement"
          }
        }
      ]
    }
  ]
}
```

</code-tabs>

## Adding Web Components

```js wcd ZCUsvyx06Au5j0yZzgG7 src/index.js
const template = document.createElement("template");
template.innerHTML = `...`;
class MyKeysGetter extends HTMLElement {
  constructor() {
    super();
    this.count = 0;
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.shadowRoot.appendChild(template.content.cloneNode(true));
    this.shadowRoot.getElementById("any").onclick = () => this.inc();
    this.shadowRoot.getElementById("dec").onclick = () => this.dec();
    this.update(this.count);
  }

  any() {
    this.update(++this.count);
  }

  dec() {
    this.update(--this.count);
  }

  update(count) {
    this.shadowRoot.getElementById("count").innerHTML = count;
  }
}

customElements.define("my-counter", MyKeysGetter);
```

# JavaScript in Markdown

```js script
// execute me
```

<!-- ```js script
import "magic-reveal/magic-reveal.js";
```

<magic-reveal>

This text will get magically revealed.

I can **still** use Markdown as long as there is an empty line
between the opening/closing tags and my text.

</magic-reveal> -->
