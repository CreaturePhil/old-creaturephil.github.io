var fs = require('fs');

module.exports = function(grunt) {

  grunt.initConfig({

    jade: {
      compile: {
        files: (function() {
          var files = {
            'index.html': 'jade/index.jade',
            'blog.html': 'jade/blog.jade'
          };

          var dir = fs.readdirSync('jade/posts');

          dir.forEach(function(file) {
            files['posts/' + file.slice(0, -5) + '.html'] = 'jade/posts/' + file;
          });

          return files;
        })()
      }
    },

    stylus: {
      compile: {
        files: {
          'css/main.css': 'stylus/main.styl'
        }
      }
    },

    watch: {
      jade: {
        files: 'jade/**/*.jade',
        tasks: ['jade']
      },
      stylus: {
        files: 'stylus/*.styl',
        tasks: ['stylus']
      }
    }

  });

  grunt.loadNpmTasks('grunt-contrib-jade');
  grunt.loadNpmTasks('grunt-contrib-stylus');
  grunt.loadNpmTasks('grunt-contrib-watch');

  grunt.registerTask('html', ['jade']);
  grunt.registerTask('css', ['stylus']);

  grunt.registerTask('default', ['jade', 'stylus', 'watch']);

};
