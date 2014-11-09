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

    // Publishing stuff
    bumpup: {
      files: ['package.json', 'bower.json'],
    },
    shell: {

      // To tag a new release
      tag: {
        command: [
          'git commit -am "Release v<%= pkg.version %>"',
          'git tag -a v<%= pkg.version %> -m "Release v<%= pkg.version %>"',
          'echo "Make sure you push the release with git push origin master --tags"'
          ].join('&&')
      },

      // Just in case. Doesn't delete anything
      undoTag: {
        command: [
          'git reset --soft HEAD~1',
          'git tag -d v<%= pkg.version %>'
        ].join('&&')
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-bumpup');
  grunt.loadNpmTasks('grunt-shell');

  grunt.registerTask('build', ['uglify', 'concat']);
  grunt.registerTask('tag', ['shell:tag'])
  grunt.registerTask('undoTag', ['shell:undoTag'])
}