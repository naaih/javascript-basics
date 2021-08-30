/*
    Scope is the set of variables, objects, and functions you have access to.

    JavaScript has two scopes: global and local. A variable that is declared
    outside a function definition is a global variable, and its value is
    accessible and modifiable throughout your program. A variable that is
    declared inside a function definition is local. It is created and
    destroyed every time the function is executed, and it cannot be accessed
    by any code outside the function.

    Functions defined inside other functions, known as nested functions, have
    access to their parent function's scope.    
*/

const a = 1; const b = 2; const c = 3;

(function firstFunction() {
    const b = 5; const c = 6;

    (function secondFunction() {
        const b = 8;

        console.log('a: ' + a + ', b: ' + b + ', c: ' + c);

        (function thirdFunction() {
            const a = 7; const c = 9;

            (function fourthFunction() {
                const a = 1; const c = 8;
            })()
        })()
    })()
})()


// console.log(`a: ${a}, b: ${b}, c: ${c}`)

