module.exports = function(grunt) {
<<<<<<< HEAD
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
=======

  // Project configuration.
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        banner: '<%= banner %>',
        stripBanners: true
      },
      dist: {
        src: ['scripts/*.js'],
        dest: 'dist/main.js'
      },
    },
    uglify: {
      options: {
        banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
      },
      build: {
        src: 'dist/main.js',//src/<%= pkg.name %>.js
        dest: 'scripts/main.min.js'//<%= pkg.name %>.min.js
>>>>>>> 01a23082344aeb1cf342181e14b0e06d55f6bb82
      }
    }
  });

<<<<<<< HEAD
  // // 加载包含 "requirejs" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-requirejs');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['requirejs']);
=======
  // 加载包含 "uglify" 任务的插件。
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-concat');

  // 默认被执行的任务列表。
  grunt.registerTask('default', ['concat','uglify']);
>>>>>>> 01a23082344aeb1cf342181e14b0e06d55f6bb82

};