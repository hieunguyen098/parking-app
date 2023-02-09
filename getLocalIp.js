var os = require('os');
const fs = require('fs');
var interfaces = os.networkInterfaces();
var addresses = [];
for (var k in interfaces) {
    for (var k2 in interfaces[k]) {
        var address = interfaces[k][k2];
        if (address.family === 'IPv4' && !address.internal) {
            addresses.push(address.address);
        }
    }
}
console.log('Your local ipv4 address:', addresses);
fs.readFile('.env', 'utf8', function (err, data) {
    if (err) throw err;
    const modifiedData = data.replace(/BACKEND_URL=http:\/\/(.*):5000/g, `BACKEND_URL=http://${addresses[0]}:5000`);

    fs.writeFile('.env', modifiedData, 'utf8', function (err) {
        if (err) throw err;
        console.log('.env successfully updated!');
    });
});
