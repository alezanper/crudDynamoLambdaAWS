class Item {
    constructor() {
    }

    getEmail () { return this.email; }
    getId () { return this.id; }

    setEmail (email) { this.email = email; }
    setId (id) { this.id = id; }

    getKey () {
      return {"id": this.id};
    }

  }


  module.exports = Item;