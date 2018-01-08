module.exports = function(grunt) {
    require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    responsive_images: {
      dev: {
        options: {
          engine: 'im',
          sizes: [{
            width: 800,
            suffix: '_large_1x',
            quality: 50
          }]
        },
        files: [{
          expand: true,
          src: ['*.{gif,jpg,png}'],
          cwd: '/Users/Blake/Documents/myprofile/images',
          dest: 'images/'
        }]
      }
    },
    imagemin: {
    dynamic: {
        files: [{
            expand: true,
            cwd: '/Users/Blake/Documents/myprofile/images',
            src: ['**/*.{png,jpg,gif}'],
            dest: 'images/build/'
        }]
    }
}
  });

  grunt.registerTask('default', [
      'responsive_images',
      'imagemin'
      ])
}