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
