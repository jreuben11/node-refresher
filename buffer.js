var buf1 = new Buffer(10);
var buf2 = new Buffer([10, 20, 30, 40, 50]);
var buf3 = new Buffer("Simply Easy Learning", "utf-8");

buf4 = new Buffer(256);
len = buf4.write("Simply Easy Learning");
console.log("Octets written : "+  len);

buf5 = new Buffer(26);
for (var i = 0 ; i < 26 ; i++) {
  buf5[i] = i + 97;   //ascii code for a is 97
}
console.log( buf5.toString('ascii'));       // outputs: abcdefghijklmnopqrstuvwxyz
console.log( buf5.toString('ascii',0,5));   // outputs: abcde
console.log( buf5.toString('utf8',0,5));    // outputs: abcde
console.log( buf5.toString(undefined,0,5)); // encoding defaults to 'utf8', outputs abcde

var buf6 = new Buffer('Simply Easy Learning');
var json = buf6.toJSON(buf6);

console.log(json);
