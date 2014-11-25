module.exports = function(grunt) {

  grunt.initConfig({

    jade: {
      compile: {
        files: {
          'index.html': 'src/index.jade'
        }
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
        files: 'src/*.jade',
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
