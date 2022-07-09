const { ipcRenderer } = require('electron');

const [$D, $B] = [document, document.body];

window.onload = () => {
  const DOM = {
    preloader: $D.querySelector('.App-Preloader'),
    bar: $D.querySelector('.AppElectron-TitleBar'),
    actions: {
      conf: $D.querySelector('.ActionsBar-ConfigWin'),
      fscrn: $D.querySelector('.ActionsBar-FullScreen'),
      min: $D.querySelector('.ActionsBar-Minimize'),
      max: $D.querySelector('.ActionsBar-Maximize'),
      close: $D.querySelector('.ActionsBar-Close')
    },
    sideBar: {
      bar: $D.querySelector('.Profile-SideBarBox'),
      toogle: $D.querySelector('.SideBar-ToogleSideBar')
    },
    electronMenu: {
      enableAlwaysOnTop: $D.querySelector('.ElectronMenu-EnableAlwaysOnTop'),
      toogleThemeMode: $D.querySelector('.ElectronMenu-ToogleThemeMode'),
      switchLang: $D.querySelector('.ElectronMenu-SwitchLang'),
      support: $D.querySelector('.ElectronMenu-Support'),
      changeColorPalette: $D.querySelector('.ElectronMenu-ChangeColorPalette')
    }
  };

  DOM.preloader.style.animation = 'hide 1s';
  DOM.preloader.addEventListener('animationend', () => {
    DOM.preloader.remove();
  });

  DOM.electronMenu.enableAlwaysOnTop.addEventListener('click', () => {
    ipcRenderer.send('win-always-on-top');
  });

  DOM.actions.conf.addEventListener('click', e => {
    let _parent = e.target.parentElement;

    _parent.classList.contains('show')
      ? _parent.classList.remove('show')
      : _parent.classList.add('show');
  });

  DOM.actions.fscrn.addEventListener('click', () => {
    ipcRenderer.send('win-fscrn')
  });
  
  DOM.actions.min.addEventListener('click', () => {
    ipcRenderer.send('win-min')
  });
  
  DOM.actions.max.addEventListener('click', () => {
    ipcRenderer.send('win-max')
  });
  
  DOM.actions.close.addEventListener('click', () => {
    ipcRenderer.send('win-close')
  });

  DOM.sideBar.toogle.addEventListener('click', () => {
    let _sideBar = DOM.sideBar.bar;

    if (_sideBar.classList.contains('SideBar_size_mini')) {
      _sideBar.classList.remove('SideBar_size_mini');
      $B.setAttribute('data-side-mini', 'false');
    } else {
      _sideBar.classList.add('SideBar_size_mini');
      $B.setAttribute('data-side-mini', 'true');
    }
  });

  ipcRenderer.on('fscrn-event', (e, data) => {
    if (data.fscrn) {
      $B.setAttribute('data-fscrn', 'true');
      DOM.bar.classList.add('hidden');
    } else {
      $B.setAttribute('data-fscrn', 'false');
      DOM.bar.classList.remove('hidden');
    }
  });

  ipcRenderer.on('always-on-top-event', (e, data) => {
    if (data.isAlwaysOnTop) {
      $B.setAttribute('data-always', 'true');
      DOM.electronMenu.enableAlwaysOnTop.classList.add('EnableAlwaysOnTop_enabled')
    } else {
      $B.setAttribute('data-always', 'false');
      DOM.electronMenu.enableAlwaysOnTop.classList.remove('EnableAlwaysOnTop_enabled');
    }
  });

  $D.addEventListener('keydown', e => {
    if (e.keyCode === 27) {
      ipcRenderer.send('leave-fscrn');
    }
  });
}
