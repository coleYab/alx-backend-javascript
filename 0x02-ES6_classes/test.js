class test {
	constructor(name, age) {
		this.name = name;
		this.age = age;
	}

	cloneIt() {
		return structuredClone(this);
	}
}

const obj1 = new test("Yeabsira Moges", 20);
console.log(obj1);
const obj2 = obj1.cloneIt();
console.log(obj2);

console.log(`Shallow equal == ${obj1 == obj2}`)
console.log(`Type checking ${typeof obj1 == typeof obj2}`)
console.log(`Stricter equal === ${obj1 === obj2}`)
