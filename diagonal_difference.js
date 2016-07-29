// This was a problem from HackerRank called "Diagonal-Difference".


// Given a square matrix of size N x N, calculate the absolute difference 
// between the sums of its diagonals.

// Input Format

// The first line contains a single integer, N. The next N lines denote the matrix's
// rows, with each line containing N space-separated integers describing the columns.


// Output Format

// Print the absolute difference between the two sums of the matrix's diagonals 
// as a single integer.


// Sample Input

// 3
// 11 2 4
// 4 5 6
// 10, 8, -12


// Sample Output
// 15

// Sum across the diagonal: 11 + 5 -12 =4
// The secondary diagonal: 4 + 5 + 10 = 19
// Difference: 4 - 19 = 15

function main() {
    var n = parseInt(readLine());
    var a = [];
    var pdiag = [];
    var sdiag = [];
    
    for(a_i = 0; a_i < n; a_i++){
       a[a_i] = readLine().split(' ');
       a[a_i] = a[a_i].map(Number);
    pdiag.push(a[a_i][a_i]);
    sdiag.push(a[a_i][((n-1) - a_i)]);
    }
    
    var totalPdiag = pdiag.reduce(function(a,b) {
        return a+b;
    },0);
    
    var totalSdiag = sdiag.reduce(function(a,b) {
        return a+b;
    },0);
    
    console.log(Math.abs(totalPdiag - totalSdiag)); 
}
