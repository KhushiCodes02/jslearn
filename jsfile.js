var url = require('url');
var adr = 'http://127.0.0.1:5500/form2?year=2004&month=dec';
var q = url.parse(adr , true);
console.log(q.host);
console.log(q.pathname);
console.log(q.search);

var qdata = q.query;

console.log(qdata.month);