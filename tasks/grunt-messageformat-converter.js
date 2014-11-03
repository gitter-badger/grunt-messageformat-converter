'use strict';

var mconv = require('messageformat-converter');

module.exports = function(grunt) {

    grunt.registerMultiTask('messageformat-converter', 'change translation formats', function(){

        var self = this;

        grunt.verbose.writeln('converting ' + grunt.log.wordlist(this.files.map(function(file){
            return file.src;
        })));

        grunt.verbose.or.writeln('converting ' + this.files.length + ' file(s)');

        this.files.forEach(function(file){
            try {
                var contents = grunt.file.read(file.src);
                var output = mconv.convertFile(contents).from(self.options().from).to(self.options().to);
                grunt.file.write(file.dest, output);
            }
            catch (e) {
                console.error(e.stack);
                throw e;
            }
        });

    });
}
