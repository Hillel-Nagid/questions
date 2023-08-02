class Dog {
	static latestDog: Dog;
	constructor(name: string, breed: string) {
		this.name = name;
		this.breed = breed;
		Dog.latestDog = this;
	}

	name: string;
	breed: string;
	static getDog() {
		return this.latestDog.name;
	}
}
let goldenRetriever = new Dog('Mike', 'Golden Retriever');

console.log(Dog.getDog());

// Easy level
