/**
 * //TODO: vscode plugin for highlighting TODOs and FIXMEs within your code
 * // Write Test
 * 
 */
/**
 * FIXME: vscode plugin for highlighting TODOs and FIXMEs within your code
 * // Write Test
 * 
 */

class User {
// TODO Write test for this function
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }

    hasAccess() {
        return this.name === "Aman";
    }

}


class NullUser {

    constructor() {
        this.id = -1;
        this.name = "Guest";
    }

    hasAccess() {
        return false;
    }



}



const users = [
    new User(1, "Aman"),
    new User(2, "Ullah"),
];

function getUser(id) {
    let user = users.find((usr) => usr.id === id)
    if (user == null) {
        return new NullUser();
    } else {
        return user;
    }
}


function printUser(id) {

    let user = getUser(id);

    if (user.hasAccess()) {
        console.log("you have access")
    } else {
        console.log("you don't have access")

    }

}


