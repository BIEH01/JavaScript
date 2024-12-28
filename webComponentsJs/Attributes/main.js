class myElement extends HTMLElement {
	constructor() {
		super();
		this.attachShadow({ mode: "open" });
		this.heading = this.getAttribute("h2");
		this.paragraph = this.getAttribute("p");
		this.image = this.getAttribute("img");
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
