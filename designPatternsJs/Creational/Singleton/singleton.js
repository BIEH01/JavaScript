/**
 * How to implement Singleton?
 *
 * 1. Make the constructor private
 * 2. Create a static method who calls the private
 *  constructor and save the instance in a static variable
 */
class Singleton {
	static instance = undefined;
	constructor(version) {
		this.version = version;
	}
	static getInstance() {
		if (!Singleton.instance) {
			Singleton.instance = new Singleton();
		}

		return Singleton.instance;
	}
}

function appSingleton() {
	const Singleton1 = Singleton.getInstance("version-1");
	const Singleton2 = Singleton.getInstance("version-2");
	const Singleton3 = Singleton.getInstance("version-3");
	console.log(Singleton1 === Singleton2);
	console.log(Singleton1 === Singleton3);
}

appSingleton();
