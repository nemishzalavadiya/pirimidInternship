//debounce: funct, wait, leading
// funct: pass function to run
// wait: pass milisecond to wait before execution
// leading: Boolean value (default: False)

function debounce(funct, wait, leading) {
    //common id between all the waiting methods
    var setTimeoutId;
  
    return function debounceExecuted() {
      // saving current scope and argument for funct function.
      var context = this;
      var args = arguments;
          
      //function to run after wait period
      var setDelayFunc = function() {
        //setting id to void before appyling function.
        setTimeoutId = null;
        //check if funct is already completed.
        if (!leading) funct.apply(context, args);
        console.log(args);
      };
      //check when to execute funct
      var immediateRun = leading && !setTimeoutId;
      
      //before running funct check if id is set,if so clear it out. 
      clearTimeout(setTimeoutId);
  
      setTimeoutId = setTimeout(setDelayFunc, wait);
      
      if (immediateRun){
        funct.apply(context, args);console.log(args);
      }
    };
  };

//Use Case

  var counter=0;
  var debounceResult = debounce(function() {
      // code to run after debounce
      console.log("Running..",counter++,arguments);
  }, 1000);


  window.addEventListener('mouseover', debounceResult(1,2));

//cases
  //1. which parameter to choose from for multiple calls
  //2. need to clear setTimeoutId
  //3. clearing id inside calling funtion of debounce
  //4. common settimeoutid using closure
  //5. need for saving current context while applying function call.