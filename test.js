var fs = require('fs');
var im = require('./imagemagick');

var path = __dirname + '/sample-images/blue-bottle-coffee.jpg';
var imData = fs.readFileSync(path, 'binary');

im.identify({data: imData}, function (err, features) {
    if (err)
        return console.error(err.stack || err);
    console.log('identify({data:imdata}) ->', features);
});



//im.resize({
//    srcData: imData,
//    //dstPath: 'test-resized.jpg',
//    width: 100
//}, function (err, stdout, stderr) {
//    if (err)
//        return console.error(err.stack || err);
//
//    console.log('stdout', new Buffer(stdout));
//
//});


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
