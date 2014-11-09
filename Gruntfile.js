'use strict';

module.exports = function(grunt) {
  grunt.initConfig(
  {
    pkg: grunt.file.readJSON('package.json'),
    meta: {
      banner: [
        '/**',
        ' * <%= pkg.description %>',
        ' * @version v<%= pkg.version %> - <%= grunt.template.today("yyyy-mm-dd") %>',
        ' * @link <%= pkg.homepage %>',
        ' * @author <%= pkg.author %>',
        ' * @license MIT License, http://www.opensource.org/licenses/MIT',
        ' */\n'
      ].join('\n')
    },
    dirs: {
      dest: 'dist'
    },

    // Build
    concat: {
     options: {
       banner: '<%= meta.banner %>'
     },
     dist: {
       src: ['src/*.js'],
       dest: '<%= dirs.dest %>/<%= pkg.name %>.js'
     }
   },
    uglify: {
      options: {
        banner: '<%= meta.banner %>'
      },
      dist: {
        src: 'src/*.js',
        dest: '<%= dirs.dest %>/<%= pkg.name %>.min.js'
      }
    },

    // Publish
    shell: {
      bowerPublish: {
        command: 'bower register <%= pkg.name %> <%= pkg.repository.url %>'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('build', ['uglify', 'concat']);
  grunt.registerTask('publish', ['build', 'shell:bowerPublish']);
}