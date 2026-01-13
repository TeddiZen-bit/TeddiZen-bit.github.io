const fs = require('fs');

fs.writeFile('/text.txt', 'hello,node.js', (err) => {
    if (err) console.log(err);
    else console.log('输入成功');
});

fs.readFile('/text.txt', (err, data) => {
    if (err) console.log(err);
    else console.log(data.toString());
});
