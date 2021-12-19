
// TODO: Write TEst for this file

class Address {
    constructor(zip, street) {
        this.zip = zip;
        this.street = street;
    }
}


class User {
    constructor(name, { age = 100, phone = 123324243, address }) {
        this.name = name;
        this.age = age;
        this.phone = phone;
        this.address = address;
    }



}

let user = new User("aman", {
    age: 200,
    phone: 121341243312,
    address: new Address(100, "wilson road")

})

console.log(user);