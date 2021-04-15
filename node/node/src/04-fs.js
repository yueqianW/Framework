const fs = require('fs');

/*
fs.stat('../src', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(`文件：${data.isFile()}`);
  console.log(`目录：${data.isDirectory()}`);
});
*/

/*
  fs.mkdir('./css', (err) => {
  if (err) {
    console.log(err);
    return;
  }
});
*/

/*
fs.writeFile(
  './index.html',
  `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta http-equiv="X-UA-Compatible" content="IE=edge"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Document</title>
</head>
<body>
  <div>1111</div>
</body>
</html>`,
  (err) => {
    if (err) {
      console.log(err);
      return;
    }
  }
);
 */

fs.readFile('./index.html', (err, data) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(data.toString());
});
