var electron = require('electron')

var app = electron.app

var BrowserWindow = electron.BrowserWindow;

var mainWindow = null;

app.on('ready', () => {
  mainWindow = new BrowserWindow({
    width: 400,
    height: 200
  })

  mainWindow.loadFile('index.html')

  mainWindow.on('close', () => {
    mainWindow = null
  })
})