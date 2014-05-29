module.exports = function(grunt) {
grunt.initConfig({
  compass: {                  // Task
    dist: {                   // Target
      options: {              // Target options
        sassDir: 'sass',
        cssDir: 'css',
        environment: 'production',
        raw: 'preferred_syntax = :sass\n'
      }
    },
    dev: {                    // Another target
      options: {
        sassDir: 'sass',
        cssDir: 'public/stylesheets'
      }
    }
  },
watch: {
  sass: {
    files: ['sass/*.scss'],
    tasks: ['compass:dist']
  },
  css: {
    files: ['public/stylesheets/*.css']
  },
  livereload: {
    files: ['public/stylesheets/*.css'],
    options: { livereload: true }
  }
}


});

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-compass');
  grunt.registerTask('default', ['compass']);
};
