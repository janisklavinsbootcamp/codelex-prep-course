
export { };


const removeFromArray = (arr, a: number, b?: number) => {
    var newArray = []
    for (var i = 0; i < arr.length; i++) {
        if (arr[i] !== a && arr[i] !== b) {
            newArray.push(arr[i]);
        }

    }
    return console.log(newArray)
}

removeFromArray([1, 2, 3, 4], 3); // Expected output: [1, 2, 4]
removeFromArray([1, 2, 3, 4], 7); // Expected output: [1, 2, 3, 4]
removeFromArray([1, 2, 3, 4], 7, 2); // Expected output: [1, 3, 4]



