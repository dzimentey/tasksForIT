window.x = 1;

const context = {x: 2};

function testThis(y) {
    console.log(`x=${this.x}, y=${y} `);  // an arrow function transformed to function declaration
}

testThis(100); // result x = 1, y = 100

const boundedFunction = testThis.bind(context); // function bounded to the context

console.log(boundedFunction(100)); // result x=2, y=100