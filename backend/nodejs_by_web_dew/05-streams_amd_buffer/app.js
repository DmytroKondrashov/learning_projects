const fs = require('fs');
const zlib = require('zlib');

const readStream = fs.createReadStream('./docs/text.txt', 'utf-8');
const writeStream = fs.createWriteStream('./docs/text2.txt');

const handleError = () => {
  console.log('Error');
  readStream.destroy();
  writeStream.end('Finished with error!');
}

//  ============================================ READ + WRITE STREAM ============================================

// readStream.on('data', (chunk) => {
//   console.log('============');
//   console.log(chunk);
//   writeStream.write(chunk);
// })

// does the same as the above code
// readStream.on('error', handleError).pipe(writeStream).on('error', handleError);

//  ============================================ COMPRESS STREAM ============================================

const compressStream = zlib.createGzip();

readStream.pipe(compressStream).pipe(writeStream);

//  ============================================ DECOMPRESS STREAM ============================================

const decompressStream = zlib.createGunzip();

readStream.pipe(decompressStream).pipe(writeStream);
