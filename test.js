var fs = require('fs');
var im = require('./imagemagick');

var path = __dirname + '/sample-images/trans.png';
var path2 = __dirname + '/sample-images/out.png';
var imData = fs.readFileSync(path, 'binary');

// im.identify({data: imData}, function (err, features) {
//     if (err)
//         return console.error(err.stack || err);
//     console.log('identify({data:imdata}) ->', features);
// });


im.removePngTransparent({
    srcPath: path,
    //srcData: imData,
    //dstPath: path2
}, function (err, stdout) {
    if (err)
        return console.error(err);

    console.log('stdout', stdout.length);

    fs.writeFileSync('/home/spirit/workspace/playground/node-imagemagick/rrr.png', stdout);

});


//timeStarted = new Date;
//im.resize({
//    srcData: imdata,
//    width: 256
//}, function (err, stdout, stderr) {
//    if (err) return console.error(err.stack || err);
//    console.log('real time taken for convert (with buffers): ' +
//        ((new Date) - timeStarted) + ' ms');
//    fs.writeFileSync('test-resized-io.jpg', stdout, 'binary');
//    console.log('resize(...) wrote "test-resized.jpg" (' + stdout.length + ' Bytes)');
//});
