import React from 'react';
import ElectronMenu from './ElectronMenu';

const ElectronTitleBar = () => {
  return (
    <div className="AppElectron-TitleBar fl">
      <div className="TitleBar-DragArea">
        <div className="App-Title">LISME Music Platform (v.0.1.0)</div>
      </div>
      <div className="TitleBar-ActionsBar fl">
        <button className="ActionsBar-ConfigWin ActionsBar-ActBtn">
          <ion-icon name="menu-outline"></ion-icon>
        </button>
        <button className="ActionsBar-FullScreen ActionsBar-ActBtn">
          <ion-icon name="expand-outline"></ion-icon>
        </button>
        <button className="ActionsBar-Minimize ActionsBar-ActBtn">
          <ion-icon name="chevron-down-outline"></ion-icon>
        </button>
        <button className="ActionsBar-Maximize ActionsBar-ActBtn">
          <ion-icon name="chevron-up-outline"></ion-icon>
        </button>
        <button className="ActionsBar-Close ActionsBar-ActBtn">
          <ion-icon name="close-outline"></ion-icon>
        </button>
        <ElectronMenu />
      </div>
    </div>
  )
}

export default ElectronTitleBar