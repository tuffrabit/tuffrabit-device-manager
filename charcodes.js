function byteToChar(byteValue) {
	let charValue = '';
	
	switch (parseInt(byteValue)) {
		case 32:
			charValue = 'Space';
			break;
		case 44:
			charValue = ',';
			break;
		case 45:
			charValue = '-';
			break;
		case 46:
			charValue = '.';
			break;
		case 47:
			charValue = '/';
			break;
		case 48:
			charValue = '0';
			break;
		case 49:
			charValue = '1';
			break;
		case 50:
			charValue = '2';
			break;
		case 51:
			charValue = '3';
			break;
		case 52:
			charValue = '4';
			break;
		case 53:
			charValue = '5';
			break;
		case 54:
			charValue = '6';
			break;
		case 55:
			charValue = '7';
			break;
		case 56:
			charValue = '8';
			break;
		case 57:
			charValue = '9';
			break;
		case 59:
			charValue = ';';
			break;
		case 61:
			charValue = '=';
			break;
		case 91:
			charValue = '[';
			break;
		case 92:
			charValue = '\\';
			break;
		case 93:
			charValue = ']';
			break;
		case 96:
			charValue = '`';
			break;
		case 97:
			charValue = 'a';
			break;
		case 98:
			charValue = 'b';
			break;
		case 99:
			charValue = 'c';
			break;
		case 100:
			charValue = 'd';
			break;
		case 101:
			charValue = 'e';
			break;
		case 102:
			charValue = 'f';
			break;
		case 103:
			charValue = 'g';
			break;
		case 104:
			charValue = 'h';
			break;
		case 105:
			charValue = 'i';
			break;
		case 106:
			charValue = 'j';
			break;
		case 107:
			charValue = 'k';
			break;
		case 108:
			charValue = 'l';
			break;
		case 109:
			charValue = 'm';
			break;
		case 110:
			charValue = 'n';
			break;
		case 111:
			charValue = 'o';
			break;
		case 112:
			charValue = 'p';
			break;
		case 113:
			charValue = 'q';
			break;
		case 114:
			charValue = 'r';
			break;
		case 115:
			charValue = 's';
			break;
		case 116:
			charValue = 't';
			break;
		case 117:
			charValue = 'u';
			break;
		case 118:
			charValue = 'v';
			break;
		case 119:
			charValue = 'w';
			break;
		case 120:
			charValue = 'x';
			break;
		case 121:
			charValue = 'y';
			break;
		case 122:
			charValue = 'z';
			break;
		case 128:
			charValue = 'L Ctrl';
			break;
		case 129:
			charValue = 'L Shift';
			break;
		case 130:
			charValue = 'L Alt';
			break;
		case 132:
			charValue = 'R Ctrl';
			break;
		case 133:
			charValue = 'R Shift';
			break;
		case 134:
			charValue = 'R Alt';
			break;
		case 140:
			charValue = 'Go To Profile 1';
			break;
		case 141:
			charValue = 'Go To Profile 2';
			break;
		case 142:
			charValue = 'Go To Profile 3';
			break;
		case 143:
			charValue = 'Go To Next Profile';
			break;
		case 144:
			charValue = 'Go To Previous Profile';
			break;
		case 145:
			charValue = 'Hold For Profile 1';
			break;
		case 146:
			charValue = 'Hold For Profile 2';
			break;
		case 147:
			charValue = 'Hold For Profile 3';
			break;
		case 176:
			charValue = 'Return';
			break;
		case 177:
			charValue = 'Esc';
			break;
		case 178:
			charValue = 'Backspace';
			break;
		case 179:
			charValue = 'Tab';
			break;
		case 193:
			charValue = 'Caps Lock';
			break;
		case 194:
			charValue = 'F1';
			break;
		case 195:
			charValue = 'F2';
			break;
		case 196:
			charValue = 'F3';
			break;
		case 197:
			charValue = 'F4';
			break;
		case 198:
			charValue = 'F5';
			break;
		case 199:
			charValue = 'F6';
			break;
		case 200:
			charValue = 'F7';
			break;
		case 201:
			charValue = 'F8';
			break;
		case 202:
			charValue = 'F9';
			break;
		case 203:
			charValue = 'F10';
			break;
		case 204:
			charValue = 'F11';
			break;
		case 205:
			charValue = 'F12';
			break;
		case 209:
			charValue = 'Insert';
			break;
		case 210:
			charValue = 'Home';
			break;
		case 211:
			charValue = 'PageUp';
			break;
		case 212:
			charValue = 'Delete';
			break;
		case 213:
			charValue = 'End';
			break;
		case 214:
			charValue = 'PageDown';
			break;
		case 215:
			charValue = 'Right';
			break;
		case 216:
			charValue = 'Left';
			break;
		case 217:
			charValue = 'Down';
			break;
		case 218:
			charValue = 'Up';
			break;
	}
	
	return charValue;
}

var codeBindings = [
	{code: 32, value: 'Space'},
	{code: 44, value: ','},
	{code: 45, value: '-'},
	{code: 46, value: '.'},
	{code: 47, value: '/'},
	{code: 48, value: '0'},
	{code: 49, value: '1'},
	{code: 50, value: '2'},
	{code: 51, value: '3'},
	{code: 52, value: '4'},
	{code: 53, value: '5'},
	{code: 54, value: '6'},
	{code: 55, value: '7'},
	{code: 56, value: '8'},
	{code: 57, value: '9'},
	{code: 59, value: ';'},
	{code: 61, value: '='},
	{code: 91, value: '['},
	{code: 92, value: '\\'},
	{code: 93, value: ']'},
	{code: 96, value: '`'},
	{code: 97, value: 'a'},
	{code: 98, value: 'b'},
	{code: 99, value: 'c'},
	{code: 100, value: 'd'},
	{code: 101, value: 'e'},
	{code: 102, value: 'f'},
	{code: 103, value: 'g'},
	{code: 104, value: 'h'},
	{code: 105, value: 'i'},
	{code: 106, value: 'j'},
	{code: 107, value: 'k'},
	{code: 108, value: 'l'},
	{code: 109, value: 'm'},
	{code: 110, value: 'n'},
	{code: 111, value: 'o'},
	{code: 112, value: 'p'},
	{code: 113, value: 'q'},
	{code: 114, value: 'r'},
	{code: 115, value: 's'},
	{code: 116, value: 't'},
	{code: 117, value: 'u'},
	{code: 118, value: 'v'},
	{code: 119, value: 'w'},
	{code: 120, value: 'x'},
	{code: 121, value: 'y'},
	{code: 122, value: 'z'},
	{code: 123, value: 'KeyboardModeActive'},
	{code: 128, value: 'L Ctrl'},
	{code: 129, value: 'L Shift'},
	{code: 130, value: 'L Alt'},
	{code: 132, value: 'R Ctrl'},
	{code: 133, value: 'R Shift'},
	{code: 134, value: 'R Alt'},
	{code: 140, value: 'Go To Profile 1'},
	{code: 141, value: 'Go To Profile 2'},
	{code: 142, value: 'Go To Profile 3'},
	{code: 143, value: 'Go To Next Profile'},
	{code: 144, value: 'Go To Previous Profile'},
	{code: 145, value: 'Hold For Profile 1'},
	{code: 146, value: 'Hold For Profile 2'},
	{code: 147, value: 'Hold For Profile 3'},
	{code: 176, value: 'Return'},
	{code: 177, value: 'Esc'},
	{code: 178, value: 'Backspace'},
	{code: 179, value: 'Tab'},
	{code: 193, value: 'Caps Lock'},
	{code: 194, value: 'F1'},
	{code: 195, value: 'F2'},
	{code: 196, value: 'F3'},
	{code: 197, value: 'F4'},
	{code: 198, value: 'F5'},
	{code: 199, value: 'F6'},
	{code: 200, value: 'F7'},
	{code: 201, value: 'F8'},
	{code: 202, value: 'F9'},
	{code: 203, value: 'F10'},
	{code: 204, value: 'F11'},
	{code: 205, value: 'F12'},
	{code: 209, value: 'Insert'},
	{code: 210, value: 'Home'},
	{code: 211, value: 'PageUp'},
	{code: 212, value: 'Delete'},
	{code: 213, value: 'End'},
	{code: 214, value: 'PageDown'},
	{code: 215, value: 'Right'},
	{code: 216, value: 'Left'},
	{code: 217, value: 'Down'},
	{code: 218, value: 'Up'}
];

function getBindingFromCode(code) {
	let binding = null;
	let i;
	
	code = parseInt(code);
	
	for (i = 0; i < codeBindings.length; i++) {
		if (codeBindings[i].code === code) {
			binding = codeBindings[i];
			break;
		}
	}
	
	return binding;
}

function getBindingFromValue(value) {
	let binding = null;
	let i;
	
	for (i = 0; i < codeBindings.length; i++) {
		if (codeBindings[i].value === value) {
			binding = codeBindings[i];
			break;
		}
	}
	
	return binding;
}

function charToByte(charValue) {
	let byteValue = null;
	
	switch (charValue) {
		case 'a':
			byteValue = 97;
			break;
		case 'b':
			byteValue = 98;
			break;
		case 'c':
			byteValue = 99;
			break;
		case 'd':
			byteValue = 100;
			break;
		case 'e':
			byteValue = 101;
			break;
		case 'f':
			byteValue = 102;
			break;
		case 'g':
			byteValue = 103;
			break;
		case 'h':
			byteValue = 104;
			break;
		case 'i':
			byteValue = 105;
			break;
		case 'j':
			byteValue = 106;
			break;
		case 'k':
			byteValue = 107;
			break;
		case 'l':
			byteValue = 108;
			break;
		case 'm':
			byteValue = 109;
			break;
		case 'n':
			byteValue = 110;
			break;
		case 'o':
			byteValue = 111;
			break;
		case 'p':
			byteValue = 112;
			break;
		case 'q':
			byteValue = 113;
			break;
		case 'r':
			byteValue = 114;
			break;
		case 's':
			byteValue = 115;
			break;
		case 't':
			byteValue = 116;
			break;
		case 'u':
		case 'StickButton':
			byteValue = 117;
			break;
		case 'v':
		case 'ThumbButton':
			byteValue = 118;
			break;
		case 'w':
		case 'KeyboardModeUp':
			byteValue = 119;
			break;
		case 'x':
		case 'KeyboardModeDown':
			byteValue = 120;
			break;
		case 'y':
		case 'KeyboardModeLeft':
			byteValue = 121;
			break;
		case 'z':
		case 'KeyboardModeRight':
			byteValue = 122;
			break;
		case '1':
		case 'Red':
			byteValue = 49;
			break;
		case '2':
		case 'Green':
			byteValue = 50;
			break;
		case '3':
		case 'Blue':
			byteValue = 51;
			break;
		case '4':
		case 'DpadUp':
			byteValue = 52;
			break;
		case '5':
		case 'DpadDown':
			byteValue = 53;
			break;
		case '6':
		case 'DpadLeft':
			byteValue = 54;
			break;
		case '7':
		case 'DpadRight':
			byteValue = 55;
			break;
	}
	
	return byteValue;
}