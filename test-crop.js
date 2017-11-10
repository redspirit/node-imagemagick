var fs = require('fs'),
    im = require('./imagemagick');

var path = __dirname + '/sample-images/blue-bottle-coffee.jpg';

//(function () {
//    var opt, timeStarted = new Date;
//    im.crop(opt = {
//        srcPath: path,
//        dstPath: 'cropped.jpg',
//        width: 200,
//        height: 90,
//        quality: 1
//    }, function (err, stdout, stderr) {
//        if (err) return console.error(err.stack || err);
//        console.log('crop(', opt, ') ->', stdout);
//        console.log('Real time spent: ' + (new Date() - timeStarted) + ' ms');
//    });
//})();

(function () {
    var opt, timeStarted = new Date;
    im.crop(opt = {
        srcPath: path,
        //dstPath: 'cropped2.jpg',
        width: 200,
        height: 200,
        size: 100,
        offset: [150,20],
        quality: 0.8,
        format: 'jpg'
    }, function (err, stdout) {
        if (err)
            return console.error(err);

        console.log("stdout", stdout.length);

        // fs.writeFileSync('/home/spirit/workspace/playground/node-imagemagick/1.jpg', stdout);
    });
})();
