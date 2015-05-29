module.exports = function(grunt) {
  pkg: grunt.file.readJSON('package.json'),
  // Project configuration.
  grunt.initConfig({
    requirejs: {
      compile: {
        options: {
          baseUrl: "./node_modules",
          mainConfigFile: "./scripts/main.js",
          name: "../scripts/main", // assumes a production build using almond
          out: "./scripts/main.min.js"
        }
      }
    }
  });

  // // 加载包含 "requirejs" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['requirejs']);

};