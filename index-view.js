const ko = require('knockout');

var currentProfileInputId;
var profileStorage = new ProfileStorage();

var profileBindingNames = [
	'a',
	'b',
	'c',
	'd',
	'e',
	'f',
	'g',
	'h',
	'i',
	'j',
	'k',
	'l',
	'm',
	'n',
	'o',
	'p',
	'q',
	'r',
	's',
	't',
	'StickButton',
	'ThumbButton',
	'KeyboardModeUp',
	'KeyboardModeDown',
	'KeyboardModeLeft',
	'KeyboardModeRight',
	'DpadUp',
	'DpadDown',
	'DpadLeft',
	'DpadRight',
	'Red',
	'Green',
	'Blue'
];

var indexViewModel = {
	serialPorts: ko.observableArray(),
	contentVisible: ko.observable(false),
	selectedDevice: ko.observable(),
	serialPortsEnabled: ko.observable(true),
	refreshSerialText: ko.observable('Refresh List'),
	refreshSerialButtonEnabled: ko.observable(true),
	connectText: ko.observable('Connect'),
	disconnectText: ko.observable('Disconnect'),
	saveText: ko.observable('Persist On Device'),
	saveButtonEnabled: ko.observable(false),
	initText: ko.observable('Init Device'),
	initButtonEnabled: ko.observable(false),
	isProdUnit: ko.observable(false),
	showHiddenItems: ko.observable(false),
	profiles: ko.observableArray([{code: 1, name: 'Profile 1'}, {code: 2, name: 'Profile 2'}, {code: 3, name: 'Profile 3'}]),
	activeProfile: ko.observable(1),
	selectedProfileTab: ko.observable(),
	copyFromProfiles: ko.observableArray([]),
	selectedCopyFromProfile: ko.observable(),
	keyboardModeActive: ko.observable(false),
	lowerXBoundary: ko.observable(),
	upperXBoundary: ko.observable(),
	lowerYBoundary: ko.observable(),
	upperYBoundary: ko.observable(),
	keyboardModeXOffset: ko.observable(),
	keyboardModeYOffset: ko.observable(),
	profile1a: ko.observable(),
	profile1b: ko.observable(),
	profile1c: ko.observable(),
	profile1d: ko.observable(),
	profile1e: ko.observable(),
	profile1f: ko.observable(),
	profile1g: ko.observable(),
	profile1h: ko.observable(),
	profile1i: ko.observable(),
	profile1j: ko.observable(),
	profile1k: ko.observable(),
	profile1l: ko.observable(),
	profile1m: ko.observable(),
	profile1n: ko.observable(),
	profile1o: ko.observable(),
	profile1p: ko.observable(),
	profile1q: ko.observable(),
	profile1r: ko.observable(),
	profile1s: ko.observable(),
	profile1t: ko.observable(),
	profile1StickButton: ko.observable(),
	profile1ThumbButton: ko.observable(),
	profile1KeyboardModeUp: ko.observable(),
	profile1KeyboardModeDown: ko.observable(),
	profile1KeyboardModeLeft: ko.observable(),
	profile1KeyboardModeRight: ko.observable(),
	profile1DpadUp: ko.observable(),
	profile1DpadDown: ko.observable(),
	profile1DpadLeft: ko.observable(),
	profile1DpadRight: ko.observable(),
	profile1Red: ko.observable(),
	profile1Green: ko.observable(),
	profile1Blue: ko.observable(),
	profile2a: ko.observable(),
	profile2b: ko.observable(),
	profile2c: ko.observable(),
	profile2d: ko.observable(),
	profile2e: ko.observable(),
	profile2f: ko.observable(),
	profile2g: ko.observable(),
	profile2h: ko.observable(),
	profile2i: ko.observable(),
	profile2j: ko.observable(),
	profile2k: ko.observable(),
	profile2l: ko.observable(),
	profile2m: ko.observable(),
	profile2n: ko.observable(),
	profile2o: ko.observable(),
	profile2p: ko.observable(),
	profile2q: ko.observable(),
	profile2r: ko.observable(),
	profile2s: ko.observable(),
	profile2t: ko.observable(),
	profile2StickButton: ko.observable(),
	profile2ThumbButton: ko.observable(),
	profile2KeyboardModeUp: ko.observable(),
	profile2KeyboardModeDown: ko.observable(),
	profile2KeyboardModeLeft: ko.observable(),
	profile2KeyboardModeRight: ko.observable(),
	profile2DpadUp: ko.observable(),
	profile2DpadDown: ko.observable(),
	profile2DpadLeft: ko.observable(),
	profile2DpadRight: ko.observable(),
	profile2Red: ko.observable(),
	profile2Green: ko.observable(),
	profile2Blue: ko.observable(),
	profile3a: ko.observable(),
	profile3b: ko.observable(),
	profile3c: ko.observable(),
	profile3d: ko.observable(),
	profile3e: ko.observable(),
	profile3f: ko.observable(),
	profile3g: ko.observable(),
	profile3h: ko.observable(),
	profile3i: ko.observable(),
	profile3j: ko.observable(),
	profile3k: ko.observable(),
	profile3l: ko.observable(),
	profile3m: ko.observable(),
	profile3n: ko.observable(),
	profile3o: ko.observable(),
	profile3p: ko.observable(),
	profile3q: ko.observable(),
	profile3r: ko.observable(),
	profile3s: ko.observable(),
	profile3t: ko.observable(),
	profile3StickButton: ko.observable(),
	profile3ThumbButton: ko.observable(),
	profile3KeyboardModeUp: ko.observable(),
	profile3KeyboardModeDown: ko.observable(),
	profile3KeyboardModeLeft: ko.observable(),
	profile3KeyboardModeRight: ko.observable(),
	profile3DpadUp: ko.observable(),
	profile3DpadDown: ko.observable(),
	profile3DpadLeft: ko.observable(),
	profile3DpadRight: ko.observable(),
	profile3Red: ko.observable(),
	profile3Green: ko.observable(),
	profile3Blue: ko.observable(),
	init: function() {
		let self = this;
		window.addEventListener('serialconnect', function (e) { self.serialConnected(); }, false);
		window.addEventListener('serialdisconnect', function (e) { self.serialDisconnected(); }, false);
		window.addEventListener('serialtuffpadverify', function (e) { self.serialTuffpadVerified(); }, false);
		window.addEventListener('serialsetprofilekeyvalue', function (e) { self.serialSetProfileKeyValue(e); }, false);
		window.addEventListener('serialsetactiveprofile', function (e) { self.serialSetActiveProfile(e); }, false);
		window.addEventListener('serialsetstickaxisboundary', function (e) { self.serialSetStickAxisBoundary(e); }, false);
		window.addEventListener('serialsetkeyboardmodeoffset', function (e) { self.serialSetKeyboardModeOffset(e); }, false);
		window.addEventListener('serialsetiskeyboardmodeactive', function (e) { self.serialSetIsKeyboardModeActive(e); }, false);
	},
	loadSerialPorts: function() {
		let self = this;
		
		getSerialPorts().then(
			(data) => {
				self.serialPorts([]);
				
				if (Array.isArray(data)) {
					data.forEach(function(device) {
						if (device.vendorId == vendorId &&
							(device.productId == oldProductId || device.productId == productId) &&
							device.serialNumber.startsWith('tp_')
						) {
							if (device.serialNumber.includes('tp_prod')) {
								self.isProdUnit(true);
							}
							
							device.name = 'TuFFpad ' + device.path;
							self.serialPorts.push(device);
						}
					});
				}
			}
		);
	},
	serialConnected: function() {
		sendSerialMessage([78, 0]);
	},
	serialTuffpadVerified: function() {
		this.refreshSerialButtonEnabled(false);
		this.serialPortsEnabled(false);
		this.contentVisible(true);
		this.disconnectButtonEnabled(true);
		this.saveButtonEnabled(true);
		this.initButtonEnabled(true);
		sendSerialMessage([71, 65]); // Get current active profile
		sendSerialMessage([71, 66]); // Get current stick bounds
		sendSerialMessage([71, 67]); // Get current keyboard mode offsets
		sendSerialMessage([71, 68]); // Get is keyboard mode active
		sendSerialMessage([71, 80, 1]); // Get profile 1 values
		sendSerialMessage([71, 80, 2]); // Get profile 2 values
		sendSerialMessage([71, 80, 3]); // Get profile 3 values
	},
	serialDisconnected: function() {
		this.serialPortsEnabled(true);
		this.refreshSerialButtonEnabled(true);
		this.contentVisible(false);
		this.disconnectButtonEnabled(false);
		this.saveButtonEnabled(false);
		this.initButtonEnabled(false);
	},
	connect: function() {
		if (this.selectedDevice()) {
			connectSerial(this.selectedDevice());
		}
	},
	connectButtonEnabled: ko.pureComputed(function() {
        let deviceSelected = false;
		
		if (indexViewModel.selectedDevice() && !indexViewModel.disconnectButtonEnabled()) {
			deviceSelected = true;
		}
		
		return deviceSelected;
    }, this),
	disconnect: function() {
		disconnectSerial();
	},
	disconnectButtonEnabled: ko.observable(false),
	saveData: function() {
		sendSerialMessage([83, 68]);
	},
	initDevice: function() {
		sendSerialMessage([83, 69]);
	},
	serialSetProfileKeyValue: function(e) {
		let profileNumber = e.detail[2];
		let key = e.detail[3];
		let value = e.detail.substring(4);
		let transformValue = true;
		
		if (profileNumber && key && value) {
			switch (key) {
				case 'u':
					key = 'StickButton';
					break;
				case 'v':
					key = 'ThumbButton';
					break;
				case 'w':
					key = 'KeyboardModeUp';
					break;
				case 'x':
					key = 'KeyboardModeDown';
					break;
				case 'y':
					key = 'KeyboardModeLeft';
					break;
				case 'z':
					key = 'KeyboardModeRight';
					break;
				case '1':
					key = 'Red';
					transformValue = false;
					break;
				case '2':
					key = 'Green';
					transformValue = false;
					break;
				case '3':
					key = 'Blue';
					transformValue = false;
					break;
				case '4':
					key = 'DpadUp';
					break;
				case '5':
					key = 'DpadDown';
					break;
				case '6':
					key = 'DpadLeft';
					break;
				case '7':
					key = 'DpadRight';
					break;
			}
			
			let vmTargetName = 'profile' + profileNumber + key;
			
			if (typeof indexViewModel[vmTargetName] !== 'undefined') {
				document.getElementById(vmTargetName).setAttribute('data-bytevalue', value);
				
				if (transformValue) {
					value = byteToChar(value);
				} else {
					value = parseInt(value);
				}
				
				indexViewModel[vmTargetName](value);
			}
		}
	},
	serialSetActiveProfile: function(e) {
		let profileNumber = e.detail[2];
		
		indexViewModel.activeProfile(profileNumber);
	},
	serialSetStickAxisBoundary: function(e) {
		let axis = e.detail[2];
		let direction = e.detail[3];
		let value = e.detail.substring(4);
		
		if (axis && direction && value) {
			let vmTargetName = '';
			
			if (direction == 'L') {
				vmTargetName = vmTargetName + 'lower';
			} else if (direction == 'U') {
				vmTargetName = vmTargetName + 'upper';
			}
			
			vmTargetName = vmTargetName + axis + 'Boundary';
			
			if (typeof indexViewModel[vmTargetName] !== 'undefined') {
				indexViewModel[vmTargetName](parseInt(value));
			}
		}
	},
	serialSetKeyboardModeOffset: function(e) {
		let axis = e.detail[2];
		let value = e.detail.substring(3);
		
		if (axis && value) {
			let vmTargetName = 'keyboardMode' + axis + 'Offset';
			
			if (typeof indexViewModel[vmTargetName] !== 'undefined') {
				indexViewModel[vmTargetName](parseInt(value));
			}
		}
	},
	serialSetIsKeyboardModeActive: function(e) {
		let isActive = e.detail[2];
		
		if (isActive === "1") {
			isActive = true;
		} else {
			isActive = false;
		}
		
		indexViewModel.keyboardModeActive(isActive);
	},
	enableShowHidden: function() {
		this.showHiddenItems(true);
	},
	keyboardModeActiveChanged: function(data, e) {
		if (indexViewModel.keyboardModeActive()) {
			sendSerialMessage([83, 70, true]); // Set keyboard mode active to false
		} else {
			sendSerialMessage([83, 70, false]); // Set keyboard mode active to true
		}
	},
	copyFromProfileClick: function() {
		let currentProfile = indexViewModel.selectedProfileTab();
		let copyFromProfile = indexViewModel.selectedCopyFromProfile();
		let savedProfileBindings = null;
		
		if (copyFromProfile != 1 && copyFromProfile != 2 && copyFromProfile != 3) {
			let savedProfiles = profileStorage.getProfiles();
			
			if (savedProfiles !== null && typeof savedProfiles[copyFromProfile] !== 'undefined') {
				savedProfileBindings = savedProfiles[copyFromProfile];
			}
		}
		
		profileBindingNames.forEach(function(profileValue) {
			let copyToName = 'profile' + currentProfile + profileValue;
			let copyFromValue = null;
			
			if (savedProfileBindings === null) {
				let copyFromName = 'profile' + copyFromProfile + profileValue;
				
				copyFromValue = indexViewModel[copyFromName]();
			} else {
				copyFromValue = savedProfileBindings[profileStorage.convertInputNameToFriendly(profileValue)];
			}
			
			let binding = getBindingFromValue(copyFromValue);
			
			if (binding) {
				indexViewModel[copyToName](copyFromValue);
				
				let key = charToByte(profileValue);
				
				if (key) {
					sendSerialMessage([83, 80, currentProfile, key, binding.code]);
				}
			}
		});
	},
	saveToProfileClick: function() {
		let txtSaveToProfile = document.getElementById('txtSaveToProfile');
		
		if (txtSaveToProfile && txtSaveToProfile.value) {
			if (txtSaveToProfile.value.toLowerCase() !== 'profile 1' &&
				txtSaveToProfile.value.toLowerCase() !== 'profile 2' &&
				txtSaveToProfile.value.toLowerCase() !== 'profile 3'
			) {
				let currentProfile = indexViewModel.selectedProfileTab();
				let profile = {};
				
				profileBindingNames.forEach(function(profileValue) {
					let saveFromName = 'profile' + currentProfile + profileValue;
					let saveFromValue = indexViewModel[saveFromName]();
					
					if (saveFromValue === undefined) {
						saveFromValue = null;
					}
					
					profile[profileValue] = saveFromValue;
				});
				
				profileStorage.saveProfile(txtSaveToProfile.value, profileStorage.convertInputNamesToFriendly(profile));
				alert("Profile " + name + " saved.");
				indexViewModel.populateCopyFromProfiles();
			} else {
				alert(txtSaveToProfile.value + ' is a reserved profile name.');
			}
		} else {
			alert('You must provide a valid profile name to save.');
		}
	},
	populateCopyFromProfiles: function() {
		let currentProfileTabNumber = indexViewModel.selectedProfileTab();
		let savedProfiles = profileStorage.getProfiles();
		
		if (currentProfileTabNumber) {
			let profiles = [];
			
			switch (currentProfileTabNumber) {
				case 1:
					profiles.push({code: 2, name: 'Profile 2'});
					profiles.push({code: 3, name: 'Profile 3'});
					break;
				case 2:
					profiles.push({code: 1, name: 'Profile 1'});
					profiles.push({code: 3, name: 'Profile 3'});
					break;
				case 3:
					profiles.push({code: 1, name: 'Profile 1'});
					profiles.push({code: 2, name: 'Profile 2'});
					break;
			}
			
			if (savedProfiles !== null) {
				for (const key in savedProfiles) {
					profiles.push({code: key, name: key});
				}
			}
			
			indexViewModel.copyFromProfiles(profiles);
		}
	}
};

function openTab(evt, tabName) {
	let i;
	let x = document.getElementsByClassName("profiletab");
	let tablinks;
	
	for (i = 0; i < x.length; i++) {
		x[i].style.display = "none";
	}
	
	tablinks = document.getElementsByClassName("tablink");
	for (i = 0; i < x.length; i++) {
		tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
	}
	
	document.getElementById(tabName).style.display = "block";
	evt.currentTarget.className += " w3-red";
	
	document.getElementById('profileActionsContainer').style.display = 'block';
	
	switch (tabName) {
		case 'profile1tab':
			indexViewModel.selectedProfileTab(1);
			break;
		case 'profile2tab':
			indexViewModel.selectedProfileTab(2);
			break;
		case 'profile3tab':
			indexViewModel.selectedProfileTab(3);
			break;
		default:
			document.getElementById('profileActionsContainer').style.display = 'none';
	}
	
	indexViewModel.populateCopyFromProfiles();
}

function bindInputsSelect() {
	let inputlist = document.getElementById('inputlist');
	let chooseOption = document.createElement('option');
	
	chooseOption.innerText = 'Choose an input...';
	inputlist.appendChild(chooseOption);
	
	codeBindings.forEach(function(binding) {
		let inputOption = document.createElement('option');
		
		inputOption.value = binding.code;
		inputOption.innerText = binding.value;
		inputlist.appendChild(inputOption);
	});
}

function profileValueInputDblClick() {
	currentProfileInputId = this.id;
	document.getElementById('profileValueModal').style.display='block';
}

function profileValueInputChange(id, value) {
	if (id && value) {
		let profileNumber = id[7];
		let key = id.substring(8);
		
		if (profileNumber && key) {
			value = parseInt(value);
			profileNumber = parseInt(profileNumber);
			
			if (!isNaN(value) && !isNaN(profileNumber)) {
				key = charToByte(key);
				
				if (key) {
					sendSerialMessage([83, 80, profileNumber, key, value]);
				}
			}
		}
	}
}

function setProfileInput() {
	if (currentProfileInputId) {
		let selectedValue = document.getElementById('inputlist').value;
		
		if (selectedValue && typeof indexViewModel[currentProfileInputId] !== 'undefined') {
			let binding = getBindingFromCode(selectedValue);
			
			if (binding) {
				document.getElementById(currentProfileInputId).setAttribute('data-bytevalue', selectedValue);
				indexViewModel[currentProfileInputId](binding.value);
				profileValueInputChange(currentProfileInputId, selectedValue);
			}
		}
	}
	
	document.getElementById('profileValueModal').style.display = 'none';
}

function bindProfileValueInputs() {
	let i;
	let inputs = document.getElementsByClassName("profilevalue");
	
	for (i = 0; i < inputs.length; i++) {
		inputs[i].addEventListener('dblclick', profileValueInputDblClick);
		inputs[i].onkeypress = function() {return false;};
	}
}

function bindProfileValueRGBInputs() {
	let i;
	let inputs = document.getElementsByClassName("profilergbvalue");
	
	for (i = 0; i < inputs.length; i++) {
		inputs[i].oninput = function() {profileValueInputChange(this.id, this.value);};
	}
}

function boundaryValueChange(evt, direction, axis) {
	let directionCode;
	let axisCode;
	let value;
	let highByteValue;
	let lowByteValue;
	
	if (direction == 0) {
		directionCode = 108;
	} else {
		directionCode = 117;
	}
	
	if (axis == 'x') {
		axisCode = 120;
	} else {
		axisCode = 121;
	}
	
	value = parseInt(evt.target.value);
	highByteValue = (value >> 8) & 0xFF;
	lowByteValue = evt.target.value & 0xFF;
	
	sendSerialMessage([83, 66, axisCode, directionCode, highByteValue, lowByteValue]);
}

function keyboardModeOffsetValueChange(evt, axis) {
	let axisCode;
	let value;
	
	if (axis == 'x') {
		axisCode = 120;
	} else {
		axisCode = 121;
	}
	
	value = parseInt(evt.target.value);
	
	sendSerialMessage([83, 67, axisCode, value]);
}

function activeProfileChange(evt) {
	let value = parseInt(evt.target.value);
	
	sendSerialMessage([83, 65, value]);
}

document.addEventListener("DOMContentLoaded", function(event) { 
  ko.applyBindings(indexViewModel);
  document.getElementsByClassName("tablink")[0].click();
  bindInputsSelect();
  bindProfileValueInputs();
  bindProfileValueRGBInputs();
  indexViewModel.init();
  indexViewModel.loadSerialPorts();
});
