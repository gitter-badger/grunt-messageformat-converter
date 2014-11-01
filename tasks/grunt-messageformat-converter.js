'use strict';

var mconv = require('messageformat-converter');

module.exports = function(grunt) {

    grunt.registerMultiTask('messageformatConverter', 'change translation formats', function(){

        grunt.verbose.writeln('converting ' + grunt.log.wordlist(this.files.map(function(file){
            return file.src;
        })));

        grunt.verbose.or.writeln('whatevering ' + this.files.length + ' file(s)');

        this.files.forEach(function(file){
            var contents = grunt.file.read(file.src);
            var output = mconv.convertFile(contents).from(this.options('from')).to(this.options('to'));
            grunt.file.write(file.dest, output);
        });

    });
}
