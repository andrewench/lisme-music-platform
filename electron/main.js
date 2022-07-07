const { app, BrowserWindow, ipcMain, Tray, Menu } = require('electron');

let mainWin;

const createWindow = () => {
  mainWin = new BrowserWindow({
    width: 1280,
    height: 720,
    frame: false,
    webPreferences: {
      nodeIntegration: true,
      contextIsolation: false
    }
  });

  mainWin.openDevTools();
  mainWin.loadURL('http://localhost:3000');
  mainWin.removeMenu();

  mainWin.on('closed', () => {
    mainWin = null;
    app.quit();
  });

  const templateMenu = [
    {
      label: 'Maximize window',
      click: () => mainWin.show()
    },
    {
      label: 'Close window',
      click: () => app.exit(0)
    }
  ];

  const tray = new Tray();

  tray.setContextMenu(Menu.buildFromTemplate(templateMenu));
  tray.on('double-click', () => mainWin.show());

}

app.whenReady().then(() => {
  createWindow();

  app.on('activate', () => {
    if (!BrowserWindow.getAllWindows().length) {
      createWindow();
    }
  });
});

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

ipcMain.on('win-fscrn', () => {
  if (mainWin.isFullScreen()) {
    mainWin.setFullScreen(false);
    mainWin.webContents.send('fscrn-event', {
      fscrn: false
    });
  } else {
    mainWin.setFullScreen(true);
    mainWin.webContents.send('fscrn-event', {
      fscrn: true
    });
  }
});

ipcMain.on('leave-fscrn', () => {
  if (mainWin.isFullScreen()) {
    mainWin.setFullScreen(false);
    mainWin.webContents.send('fscrn-event', {
      fscrn: false
    });
  }
});

ipcMain.on('win-min', () => {
  mainWin.minimize();
});

ipcMain.on('win-max', () => {
  mainWin.isMaximized()
    ? mainWin.unmaximize()
    : mainWin.maximize();
});

ipcMain.on('win-close', () => {
  if (mainWin) mainWin.close();
});