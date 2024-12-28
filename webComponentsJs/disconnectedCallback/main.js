class myElement extends HTMLElement {
	constructor() {
		super();
		console.log("hi from constructor! - memory");
	}
	connectedCallback() {
		console.log("hi from DOM!");
	}
	disconnectedCallback() {
		console.log("bye from DOM!");
	}
}
customElements.define("my-element", myElement);

document.querySelector("my-element").remove();
