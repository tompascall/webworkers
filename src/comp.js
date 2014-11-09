// comp.js
// code for webworker

  self.addEventListener('message', calculateLots, false);

  function calculateLots(e){
    var message = e.data; // n;
    var acc = 0;
    for (var i = 0; i <= message; i++) {
      acc += i;
    }
    self.postMessage(acc);
  }
