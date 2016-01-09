var spawn = require('child_process').spawn;
var duplex = require('duplexer')

module.exports = function (cmd, args) {
	var command = spawn(cmd, args);
	return duplex(command.stdin, command.stdout)
}