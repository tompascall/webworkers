####Web workers and responsiveness

This tiny application tests HTML5 web worker as a tool for keeping the user interface responsive while doing a lot of background computations.

As [Wikipedia](http://en.wikipedia.org/wiki/Web_worker) says

>A web worker [...] is a JavaScript script executed from an HTML page that runs in the background, independently of other user-interface scripts that may also have been executed from the same HTML page.

Web workers run in the background, they are not interrupted by user-interface scripts - and vice versa, these scripts don't hold up user interface scripts. They allows long tasks to be executed while keeping the UI responsive.

The app computes the sum of the natural numbers from 1 to 3333333333. Without a worker it can freeze the user interface for about 5-70 seconds depending on the browser you use. If we spawn a worker and make it do the computation, the UI keeps its responsiveness during the computing.

I wrote a blogpost about this topic, you can read it [here](http://js-workout.tompascall.com/web-workers-and-responsiveness/).

Web workers (more precisely: dedicated web workers) API is supported by Internet Explorer 10+, Firefox 3.5+, Opera 10.60+, Chrome 3+, Safari 4+.

You can try the app [here](http://webworkers.tompascall.com/).
