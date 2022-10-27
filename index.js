const eventEmiter = require("events");

class Test extends eventEmiter {
  constructor() {
    super();
    setTimeout(() => {
      this.emit("welcome", 55);
    }, 1500);
  }
}

let test = new Test();

test.on("welcome", (nr) => {
  console.log(nr);
});
