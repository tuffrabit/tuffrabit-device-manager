const SerialPort = require('serialport');
const ReadLine = require('@serialport/parser-readline');

const serialconnect = new Event('serialconnect');
const serialdisconnect = new Event('serialdisconnect');
const serialtuffpadverify = new Event('serialtuffpadverify');

var vendorId = "16C0";
var oldProductId = "0487";
var productId = "0486";
var serialDevice = null;
var parser = null;

async function getSerialPorts() {
	let serialPorts = [];
	
	await SerialPort.list().then((ports, err) => {
		if (err) {
		  //document.getElementById('message').textContent = err.message
		  //return
		} else {
		  //document.getElementById('message').textContent = ''
		}
		
		console.log('ports', ports);

		if (ports.length === 0) {
		  //document.getElementById('message').textContent = 'No ports discovered'
		}

		//document.getElementById('seriallist').innerHTML = JSON.stringify(ports);
		serialPorts = ports;
	  })
  
  return serialPorts;
}

function onSerialPortOpen() {
	window.dispatchEvent(serialconnect);
}

function onSerialPortClose() {
	window.dispatchEvent(serialdisconnect);
}

function onParserDataReceive(data) {
	console.log('Serial receive: ' + data);
	
	if (data && data.length > 1) {
		switch (data[0]) {
			case 'N':
				handleSerialNotification(data);
				break;
			case 'S':
				handleSerialSet(data);
				break;
		}
	}
}

function connectSerial(port) {
	if (serialDevice === null) {
		serialDevice = new SerialPort(port, { baudRate: 9600 });
		parser = serialDevice.pipe(new ReadLine({ delimiter: '\n' }));
		
		serialDevice.on("open", onSerialPortOpen);
		serialDevice.on("close", onSerialPortClose);
		parser.on('data', onParserDataReceive);
		console.log('Serial connected.');
	}
}

function disconnectSerial() {
	if (serialDevice !== null) {
		serialDevice.close();
		serialDevice = null;
	}
}

function sendSerialMessage(bytes) {
	if (serialDevice) {
		bytes.push(10);
		serialDevice.write(bytes, (err) => {
			console.log('Serial send: ' + bytes);
			
			if (err) {
				console.log('Error on serial send: ' + err.message);
			}
		});
	}
}

function handleSerialNotification(data) {
	switch (data[1]) {
		case '0':
			window.dispatchEvent(serialtuffpadverify);
			break;
	}
}

function handleSerialSet(data) {
	switch (data[1]) {
		case 'P': // set profile key
			let serialsetprofilekeyvalue = new CustomEvent('serialsetprofilekeyvalue', { detail: data });
			window.dispatchEvent(serialsetprofilekeyvalue);
			break;
		case 'A': // set active profile
			let serialsetactiveprofile = new CustomEvent('serialsetactiveprofile', { detail: data });
			window.dispatchEvent(serialsetactiveprofile);
			break;
		case 'B': // set stick axis bounds
			let serialsetstickaxisboundary = new CustomEvent('serialsetstickaxisboundary', { detail: data });
			window.dispatchEvent(serialsetstickaxisboundary);
			break;
		case 'C': // set keyboard mode offsets
			let serialsetkeyboardmodeoffset = new CustomEvent('serialsetkeyboardmodeoffset', { detail: data });
			window.dispatchEvent(serialsetkeyboardmodeoffset);
			break;
	}
}