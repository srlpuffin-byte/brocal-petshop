const fs = require('fs');
const html = fs.readFileSync('tikvib.html', 'utf8');
const regex = /https?:\/\/[^\s"']+/gi;
const matches = html.match(regex) || [];
console.log([...new Set(matches)].slice(0, 30));
