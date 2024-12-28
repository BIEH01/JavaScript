// Logic
let doublyLinkedList = {
	head: {
		value: 1,
		prev: null,
		next: {
			value: 2,
			prev: 1,
			next: {
				value: 3,
				prev: 2,
				next: {
					value: 4,
					prev: 3,
					next: null,
				},
			},
		},
	},
};

class Node {
	constructor(value) {
		this.value = value;
		this.next = null;
		this.prev = null;
	}
}

class MyDoublyLinkedList {
	constructor(value) {
		this.head = {
			value: value,
			next: null,
			prev: null,
		};
		this.tail = this.head;
		this.length = 1;
	}
	append(value) {
		const newNode = new Node(value);
		newNode.prev = this.tail;
		this.tail.next = newNode;
		this.tail = newNode;
		this.length++;
		return this;
	}
	prepend(value) {
		const newNode = new Node(value);
		this.head.prev = newNode;
		newNode.next = this.head;
		this.head = newNode;
		this.length++;
	}
	insert(index, value) {
		if (index >= this.length) {
			return this.append(value);
		}
		const newNode = new Node(value);
		const firstPointer = this.getIndex(index - 1);
		const holdingPointer = firstPointer.next;
		holdingPointer.prev = newNode;
		newNode.prev = firstPointer;
		firstPointer.next = newNode;
		newNode.next = holdingPointer;
		this.length++;
		return this;
	}
	getIndex(index) {
		let counter = 0;
		let currentNode = this.head;

		while (counter !== index) {
			currentNode.prev = currentNode;
			currentNode = currentNode.next;
			counter++;
		}
		return currentNode;
	}
}

let myLinkedList = new MyDoublyLinkedList(1);
