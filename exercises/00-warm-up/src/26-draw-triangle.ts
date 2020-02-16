export { };


// function draw(a) {
//     var output = '';
//     for (var i = 1; i <= a; i++) {
//         for (var j = 1; j <= i; j++) {
//             output += "*" + '  ';
//         }
//         console.log(output);
//         output = '';
//     }
// }

// draw(3);

// draw(5);

function draw(a: number) {
    var txt = "";
    for (var count = 0; count < a; count++) {
        console.log(txt += "*");
    }
}

draw(3);


draw(5);