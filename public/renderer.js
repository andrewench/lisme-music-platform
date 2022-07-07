const { ipcRenderer } = require('electron');

const [$D, $B] = [document, document.body];

window.onload = () => {
  const DOM = {
    bar: $D.querySelector('.AppElectron-TitleBar'),
    actions: {
      fscrn: $D.querySelector('.ActionsBar-FullScreen'),
      min: $D.querySelector('.ActionsBar-Minimize'),
      max: $D.querySelector('.ActionsBar-Maximize'),
      close: $D.querySelector('.ActionsBar-Close')
    }
  };

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

  ipcRenderer.on('fscrn-event', (e, data) => {
    if (data.fscrn) {
      $B.setAttribute('data-fscrn', 'true');
      DOM.bar.classList.add('hidden');
    } else {
      $B.setAttribute('data-fscrn', 'false');
      DOM.bar.classList.remove('hidden');
    }
  });

  $D.addEventListener('keydown', e => {
    if (e.keyCode === 27) {
      ipcRenderer.send('leave-fscrn');
    }
  });
}
