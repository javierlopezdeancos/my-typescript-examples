// The expected output is:
// Current value: 0
// Incremented value: 1

// 1. Why is not working? What's the issue?
// 2. How can we solve it?

const counter = {
  value: 0,
  increment: function () {
    console.log('Current value:', this.value);

    setTimeout(function () {
      this.value++;
      console.log('Incremented value:', this.value);
    }, 1000); // This will not work as expected because 'this' refers to the global object, not the counter object.

    /*
    * The issue here is that the `this` keyword inside the `setTimeout` function does not refer to the `counter` object
    * as expected. Instead, it refers to the global object (or `undefined` in strict mode), which is why `this.value`
    * is not incrementing the `value` property of the `counter` object.

      setTimeout(() => {
        this.value++;
        console.log('Incremented value:', this.value);
      }, 1000);
    *
    */
  },
};

counter.increment();
