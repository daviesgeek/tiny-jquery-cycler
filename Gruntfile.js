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
    bump: {
      options: {
        files: ['package.json', 'bower.json'],
        commit: true,
        commitMessage: 'Release v%VERSION%',
        commitFiles: ['package.json', 'bower.json', 'dist/*.js', 'src/*.js'],
        createTag: true,
        tagName: 'v%VERSION%',
        tagMessage: 'Version %VERSION%',
        push: false
      }
    },
    shell: {
      bowerPublish: {
        command: 'bower publish <%= pkg.name =%> <%= pkg.repository.url =%>'
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-shell');
  grunt.loadNpmTasks('grunt-bump');

  grunt.registerTask('build', ['uglify', 'concat']);
  grunt.registerTask('publish', ['build', 'bump']);
}