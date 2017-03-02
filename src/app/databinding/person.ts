export class Person {
    user;
    items;
    constructor(user, items) {
        this.user = user;
        this.items = items;
        // this.items = [new TodoItem("Buy Flowers", false),
        // new TodoItem("Get Shoes", false),
        // new TodoItem("Collect Tickets", false),
        // new TodoItem("Call Joe", false)]
    }


    setUser(user) {
        this.user = user;
    }
    getUser() {
        return this.user;
    }

    setItens(todoItem) {
        this.items.push(todoItem);
    }
    getItems() {
        return this.items;
    }

}
export class TodoItem {
    action;
    done;

    constructor(action, done) {

        this.action = action;
        this.done = done;
    }
}