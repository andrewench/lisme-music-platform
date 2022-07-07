import React from 'react'

const ElectronTitleBar = () => {
  return (
    <div className="AppElectron-TitleBar fl">
      <div className="TitleBar-DragArea"></div>
      <div className="TitlBar-ActionsBar fl">
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
      </div>
    </div>
  )
}

export default ElectronTitleBar