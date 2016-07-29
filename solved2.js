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
