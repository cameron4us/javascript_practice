// Test given from interview


// Create a function that alternates between a list of alternating numbers

// Example:
// [4, 6, -2, 19, 2, 7]
 
// Output:
// 19, -2, 7, 2, 6, 4


function zigzag(arr) {
  arr.sort(function(a,b){
    return a-b;
  });
  var want = [];
  for (var i = 1; i < arr.length; i++){
    if (want.length < arr.length) {
      want.push(arr[arr.length - i])
    };
    if (want.length < arr.length) {
      want.push(arr[i-1]);
    };
  };
  console.log(want);
};
