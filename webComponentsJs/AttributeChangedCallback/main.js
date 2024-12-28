class myElement extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	static get observedAttributes() {
		return ["h2", "p", "img"];
	}
	attributeChangedCallback(attr, oldVal, newVal) {
		if (attr === "h2") {
			this.heading = newVal;
		}
		if (attr === "p") {
			this.paragraph = newVal;
		}
		if (attr === "img") {
			this.image = newVal;
		}
	}
	getTemplate() {
		const template = document.createElement("template");
		template.innerHTML = `
            <section>
                <h2>${this.heading}</h2>
                <div>
                    <p>${this.paragraph}</p>
                    <img src="${this.image}" />
                </div>
            </section>
			${this.getStyles()}
        `;
		return template;
	}
	getStyles() {
		return `
			<style>
				h2 {
					color: red;
				}
			</style>
		`;
	}
	render() {
		this.shadowRoot.appendChild(this.getTemplate().content.cloneNode(true));
	}
	connectedCallback() {
		this.render();
	}
}
customElements.define("my-element", myElement);
