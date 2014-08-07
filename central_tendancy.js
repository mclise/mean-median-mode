
var centralTendency = function(){
  var mean, median, mode, mid;
  var arguments = process.argv;
  var total = 0;
  var count = 1;
  var tempCount = 1;

  // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
  var compare = function(a, b){
    return (a - b)
  }

  // Remove the first two items in the arguments array ('node' and the file path)
  arguments.shift();
  arguments.shift();
  arguments = arguments.map(function(num){
    return parseInt(num)
  });
  arguments.sort(compare);

  // Find the mean
  for (i = 0; i < arguments.length; i++){
    total = total + arguments[i];
  }
  mean = total / arguments.length;

  // Find the median
  mid = arguments.length / 2;
  if (mid % 1 !== 0){
    median = arguments[Math.floor(mid)]
  } else {
    median = (arguments[Math.floor(mid)] + arguments[Math.ceil(mid)]) / 2
  }

  // Find the mode (can only return one mode right now)
  for (i = 0; i < arguments.length - 1; i++){
    
    if (arguments[i] === arguments[i + 1]){
      tempCount++;
      if (tempCount > count){
        mode = arguments[i];
        count = tempCount;
      }
    } else {
      tempCount = 1;
    }
  }


  
  console.log("Mean: " + mean);
  console.log("Median: " + median);
  if (!mode){
    console.log("There is no mode");
  } else {
    console.log("Mode: " + mode);
  }
};


centralTendency();