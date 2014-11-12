// comp.js
// code for webworker

(function(){
  "use strict";
  self.addEventListener('message', calculateLots, false);
    // the worker global scope is accessible through the `self` keyword.

  function calculateLots(e){
    var message = e.data; // n;
    var acc = 0;
    for (var i = 0; i <= message; i++) {
      acc += i;
    }
    self.postMessage(acc);
  }
}());

