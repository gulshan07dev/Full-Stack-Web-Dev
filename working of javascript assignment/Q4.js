{
    console.log(x); // Output: undefined
    console.log(y); // Output: ReferenceError: y is not defined
    console.log(z); // Output: ReferenceError: z is not defined

    var x = 1;
    let y = 2;
    const z = 3;

    console.log(x); // Output: 1
    console.log(y); // Output: 2
    console.log(z); // Output: 3
}
