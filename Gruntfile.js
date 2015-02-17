module.exports = function(grunt) {

  grunt.initConfig({

    jade: {
      compile: {
        files: {
          'index.html': 'jade/index.jade',
          'blog.html': 'jade/blog.jade',
          'posts/people-you-should-follow.html': 'jade/posts/people-you-should-follow.jade',
          'posts/express-4-blog-tutorial.html': 'jade/posts/express-4-blog-tutorial.jade',
          'posts/im-back.html': 'jade/posts/im-back.jade'
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
