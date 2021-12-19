// TODO: Write TEst for this file

class Address {
    constructor(zip, street) {
        this.zip = zip;
        this.street = street;
    }
}


class User {
    constructor(name) {
        this.name = name;
    }



}

class UserBuilder {
    constructor(name) {
        this.user = new User(name);
    }


    setAge(age) {
        this.user.age = age;
    }
    setPhone(phone) {
        this.user.phone = phone;
    }
    setAddress(address) {
        this.user.address = address;
    }

    build() {
        return this.user;
    }




}

let user = UserBuilder("Aman");


user.setAddress(new Address(1000, "wilson road"));
user.setAge(100);
user.setPhone("w4rqwrqwerqw");
