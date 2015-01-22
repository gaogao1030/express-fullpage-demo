module.exports = function(grunt){
  grunt.initConfig({
    concat: {
      options:{separator:";"},
      demo_js: {
        src: [
          './components/jquery/dist/jquery.js',
          './components/fullpage.js/jquery.fullPage.js'
        ],
        dest: './public/javascripts/demo.js',
      },
      demo_css: {
        src:[
          './components/fullpage.js/jquery.fullPage.css'
        ],
        dest: './public/stylesheets/demo.css'
      }
    },
    uglify: {
      options:{mangle:false},
      demo_js:{
        files: {
          './public/javascripts/demo.js': './public/javascripts/demo.js',
        }
      }
    },
    nodemon: {
      dev: {
        script: 'main.coffee',
        options: {
          args: ['dev'],
          nodeArgs: ['--nodejs','--debug'],
          callback: function (nodemon) {
            //nodemon.on('restart',function(){
            //  grunt.task.run('concat');
            //});
            nodemon.on('log', function (event) {
              console.log(event.colour);
            });
          },
          env: {
            PORT: '5001'
          },
          cwd: __dirname,
          ignore: ['node_modules/**'],
          ext: 'js,coffee',
          watch: ['app.coffee','routes'],
          delay: 1000,
          legacyWatch: true
        }
      },
      exec: {
        options: {
          exec: 'less'
        }
      }
    }
  });

    grunt.loadNpmTasks('grunt-contrib-uglify');
//    grunt.loadNpmTasks('grunt-contrib-jshint');
//    grunt.loadNpmTasks('grunt-contrib-qunit');
    //grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-contrib-concat');
    grunt.loadNpmTasks('grunt-nodemon');

 //   grunt.registerTask('test', ['jshint', 'qunit']);
    grunt.registerTask('default', ['concat','uglify','nodemon']);
    grunt.registerTask('start', ['concat','nodemon']);
//    grunt.registerTask('default', ['jshint', 'qunit', 'concat', 'uglify']);
};
