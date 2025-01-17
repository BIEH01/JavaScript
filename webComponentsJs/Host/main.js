class myElement extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
	}
	getTemplate() {
		const template = document.createElement("template");
		template.innerHTML = `
            <section>
                <h2>
                    <slot name="heading"></slot>
                </h2>
                <div>
                    <p>
                        <slot name="paragraph"></slot>
                    </p>
                </div>
            </section>
			${this.getStyles()}
        `;
		return template;
	}
	getStyles() {
		return `
            <style>
                :host {
                    display: inline-block;
                    width: 100%;
                    min-width: 300px;
                    max-width: 450px;
                    font-size: 20px;
                    background: gray;
                }
                :host(.blue) {
                    background: blue;
                }
                :host([yellow]) {
                    background: yellow;
                }
                :host([yellow]) h2, :host([yellow]) p {
                    color: gray;
                }
                :host-context(article.card) {
                    display: block;
                    max-width: 100%;
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
