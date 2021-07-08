let fs = require('fs')
let profileFilename = 'profiles.json';

class ProfileStorage
{
	constructor()
	{}
	
	getProfiles()
	{
		let profiles = this.getProfileFileJson();
		
		return profiles;
	}
	
	saveProfile(name, data)
	{
		let profiles = this.getProfileFileJson();
		
		if (profiles === null) {
			profiles = {};
		}
		
		profiles[name] = data;
		
		let content = JSON.stringify(profiles);
		
		fs.writeFileSync(profileFilename, content);
	}
	
	getProfileFileJson()
	{
		let content = null;
		
		if (fs.existsSync(profileFilename)) {
			let rawFileData = fs.readFileSync(profileFilename, 'utf-8');
			
			if (rawFileData) {
				try {
					content = JSON.parse(rawFileData);
				} catch (e) {}
			}
		}
		
		return content;
	}
	
	convertInputNamesToFriendly(data)
	{
		let friendlyData = {};
		
		for (const key in data) {
			friendlyData[this.convertInputNameToFriendly(key)] = data[key];
		}
		
		return friendlyData;
	}
	
	convertInputNameToFriendly(name)
	{
		switch (name) {
			case 'a':
				name = 'Key1';
				break;
			case 'b':
				name = 'Key2';
				break;
			case 'c':
				name = 'Key3';
				break;
			case 'd':
				name = 'Key4';
				break;
			case 'e':
				name = 'Key5';
				break;
			case 'f':
				name = 'Key6';
				break;
			case 'g':
				name = 'Key7';
				break;
			case 'h':
				name = 'Key8';
				break;
			case 'i':
				name = 'Key9';
				break;
			case 'j':
				name = 'Key10';
				break;
			case 'k':
				name = 'Key11';
				break;
			case 'l':
				name = 'Key12';
				break;
			case 'm':
				name = 'Key13';
				break;
			case 'n':
				name = 'Key14';
				break;
			case 'o':
				name = 'Key15';
				break;
			case 'p':
				name = 'Key16';
				break;
			case 'q':
				name = 'Key17';
				break;
			case 'r':
				name = 'Key18';
				break;
			case 's':
				name = 'Key19';
				break;
			case 't':
				name = 'Key20';
				break;
		}
		
		return name;
	}
	
	convertFriendlyNameToInput(name)
	{
		switch (name) {
			case 'Key1':
				name = 'a';
				break;
			case 'Key2':
				name = 'b';
				break;
			case 'Key3':
				name = 'c';
				break;
			case 'Key4':
				name = 'd';
				break;
			case 'Key5':
				name = 'e';
				break;
			case 'Key6':
				name = 'f';
				break;
			case 'Key7':
				name = 'g';
				break;
			case 'Key8':
				name = 'h';
				break;
			case 'Key9':
				name = 'i';
				break;
			case 'Key10':
				name = 'j';
				break;
			case 'Key11':
				name = 'k';
				break;
			case 'Key12':
				name = 'l';
				break;
			case 'Key13':
				name = 'm';
				break;
			case 'Key14':
				name = 'n';
				break;
			case 'Key15':
				name = 'o';
				break;
			case 'Key16':
				name = 'p';
				break;
			case 'Key17':
				name = 'q';
				break;
			case 'Key18':
				name = 'r';
				break;
			case 'Key19':
				name = 's';
				break;
			case 'Key20':
				name = 't';
				break;
		}
		
		return name;
	}
}