module.exports = function(grunt) {

 // Project configuration.
  grunt.initConfig({
    jshint: {
        src: ['gruntfile.js', 'src/**/*.js', 'test/**/*_test.js']
      }
  });

  // Load the plugin that provides the "jshint task.
  grunt.loadNpmTasks('grunt-contrib-jshint');

grunt.registerTask('karmaRun', 'Running tests on karma server', function(){
      // prerequisities: running Karma server, connected browsers

      var done = this.async();
      var childProcess = require("child_process");
      var isWin = /^win/.test(process.platform);
        // http://stackoverflow.com/questions/8683895/variable-to-detect-operating-system-in-node-scripts
      var processName = isWin ? "karma" : "./karma";
      var execKarmaRun = childProcess.exec(processName + " run", function(error, stdout, stderr) {
        console.log(stdout, stderr);
        if (error === null) done();  // on success, error equals null
        else done(false); // passing false to the done() tells Grunt that the task has failed.
      });
    });

  // Default task(s).  
  grunt.registerTask('default', ['jshint','karmaRun']);
};
