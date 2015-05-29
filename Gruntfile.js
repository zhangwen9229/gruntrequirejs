module.exports = function(grunt) {

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    requirejs: {
      compile: {
        options: {
          baseUrl: "./node_modules",
          mainConfigFile: "./scripts/main.js",
          name: "../scripts/main", // assumes a production build using almond
          out: "./build/main.min.js"
        }
      }
    }
  });

  // // 加载包含 "requirejs" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['requirejs']);

};