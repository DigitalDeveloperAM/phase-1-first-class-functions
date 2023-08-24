
function hello() {
    console.log("Hello!");
}

function receivesAFunction(hello) {
    hello();
}

function returnsANamedFunction() {
    return function name() {
        console.log("Hello!");
    };
}

function returnsAnAnonymousFunction() {
    return function () {
        console.log("World!");
    }
}