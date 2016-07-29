// Given an array of integers, calculate which fraction of its elements are positive, which fraction of its elements are negative, and which fraction of its elements are zeroes, respectively. Print the decimal value of each fraction on a new line.

// Note: This challenge introduces precision problems. The test cases are scaled to six decimal places, though answers with absolute error of up to  are acceptable.

// Input Format

// The first line contains an integer, , denoting the size of the array. 
// The second line contains  space-separated integers describing an array of numbers .

// Output Format

// You must print the following  lines:

// A decimal representing of the fraction of positive numbers in the array.
// A decimal representing of the fraction of negative numbers in the array.
// A decimal representing of the fraction of zeroes in the array.
// Sample Input

// 6
// -4 3 -9 0 4 1         
// Sample Output

// 0.500000
// 0.333333
// 0.166667
// Explanation

// There are  positive numbers,  negative numbers, and  zero in the array. 
// The respective fractions of positive numbers, negative numbers and zeroes are ,  and , respectively.

process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();    
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function main() {
    var n = parseInt(readLine());
    arr = readLine().split(' ');
    arr = arr.map(Number);
    var positive = [],
        negative = [],
        zeroes = [];
    for(var i = 0; i < arr.length; i++) {
        if (arr[i] > 0) {
            positive.push(arr[i]);
        } else if (arr[i] < 0) {
            negative.push(arr[i]);
        } else {
            zeroes.push(arr[i]);
        }
    }
    console.log(positive.length/arr.length);
    console.log(negative.length/arr.length);
    console.log(zeroes.length/arr.length);
}