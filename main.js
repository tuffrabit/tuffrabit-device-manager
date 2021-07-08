const { app, BrowserWindow } = require('electron')
var showDevTools = false;
var showMenuBar = false;

function createWindow() {
  const win = new BrowserWindow({
	resizable: false,
    width: 760,
    height: 460,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('index.html');
  win.setMenuBarVisibility(showMenuBar);
  
  if (showDevTools) {
	  win.webContents.openDevTools();
  }
  //win.setMenuBarVisibility(true);
  //win.webContents.openDevTools();
}

if (app.commandLine.hasSwitch('show-dev-tools') &&
	app.commandLine.getSwitchValue('show-dev-tools') == 1
) {
	showDevTools = true;
}

if (app.commandLine.hasSwitch('show-menu-bar') &&
	app.commandLine.getSwitchValue('show-menu-bar') == 1
) {
	showMenuBar = true;
}

app.allowRendererProcessReuse = false;
app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow()
  }
})
