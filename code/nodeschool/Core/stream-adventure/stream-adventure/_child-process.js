var spawn = require('child_process').spawn,
    ls    = spawn('ls', ['-lh', '/usr']);

ls.stdout.on('data', function (data) {
  console.log('stdout: ' + data);
  console.log(ls.connected)
  console.log(__dirname)
});

ls.stderr.on('data', function (data) {
  console.log('stderr: ' + data);
});

ls.on('close', function (code) {
	console.log(ls.pid)
	console.log(ls.connected)
  console.log('child process exited with code ' + code);
});

console.log("HUH?")