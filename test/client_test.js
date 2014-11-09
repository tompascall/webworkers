
(function(){
  "use strict";

  describe("A simple test", function(){
    it("should run", function(){
      expect("foo").to.equal("foo");
    });

    it("should throw exception", function(){
      expect(webworker.setupWorker).to.throwException();
    });
  });
})();

