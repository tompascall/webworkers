// spawner.js


var webworker = {};
var notworker = {};

(function(){
  "use strict";
  if (supports_web_workers()) {
    var n = 3333333333;
    showApp();
    setupResponsiveTest();
    initializeWorker();
    initializeNotWorker();
  }

  function supports_web_workers() {
    return !!window.Worker;
  }

  function showApp() {
    document.getElementById("sorry").style.display = "none";
    document.getElementById("app").style.display = "block";
  }

  function setupResponsiveTest(){
    var testBox = document.getElementById("test");
    testBox.addEventListener('click',
    changeColor, false);

    function changeColor(){
      var red = setRandomColor(200);
      var green = setRandomColor(200);
      var blue = setRandomColor(200);
      testBox.style.background = "rgb(" + red + "," + green + "," + blue + ")";

      function setRandomColor(range){
        return Math.floor(Math.random() * range + 1).toString();
      }
    }
  }

  function initializeWorker() {
    webworker.init = function(){
      webworker.timerPar = document.getElementById("worker_timer");
      webworker.timerParOriginValue = webworker.timerPar.innerHTML;
      webworker.calculaton = false;
        // this flag is true if a worker actually works.
        // If this is the case more worker setup is not allowed.
    };

    webworker.setupWorker = function(){
      webworker.worker = new Worker('comp.js');
      webworker.worker.addEventListener('message', webworker.messageProcessor, false);
      webworker.timerPar.innerHTML = webworker.timerParOriginValue;
    };

    webworker.removeWorker = function(){
      webworker.worker.terminate();
      webworker.worker.removeEventListener('message', webworker.messageProcessor, false);
      webworker.calculaton = false;
    };

    webworker.sendMessageToWorker = function(){
      if (!webworker.calculaton) {
        webworker.calculaton = true;
        webworker.setupWorker();
        webworker.worker.postMessage(n);
        webworker.timer = new Date().getTime();
      }
    };

    webworker.messageProcessor = function(e){
      // e is an event object
      var message = e.data;
      console.log("the sum calculated by worker: " + message);
      webworker.timer = new Date().getTime() - webworker.timer;
      console.log("The calculation took " + webworker.timer + " milliseconds with worker");
      webworker.timerPar.innerHTML += webworker.timer + " milliseconds";
      webworker.removeWorker();
    };

    webworker.init();
  }

  function initializeNotWorker() {
    notworker.init = function(){
      notworker.timerPar = document.getElementById("notworker_timer");
      notworker.timerParOriginValue = notworker.timerPar.innerHTML;
    };

    notworker.calc = function(){
      notworker.timerPar.innerHTML = notworker.timerParOriginValue;
      var acc = 0;
      var timer = new Date().getTime();
      for (var i = 0; i <= n; i++) {
        acc += i;
      }
      timer = new Date().getTime() - timer;
      console.log("sum calculated without worker: " + acc);
      console.log("The calculation took " + timer + " milliseconds without worker");
      notworker.timerPar.innerHTML += timer + " milliseconds";
    };

    notworker.init();
  }
}());

