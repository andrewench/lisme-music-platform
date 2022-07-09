import React from 'react'

const ElectronMenu = () => {
  return (
    <ul className="AppElectron-Menu">
      <li className="ElectronMenu-Item">
        <button className="ElectronMenu-Btn ElectronMenu-EnableAlwaysOnTop UI-Btn">
          <ion-icon name="pin-outline"></ion-icon>
          <span>Always On Top</span>
        </button>
      </li>
      <li className="ElectronMenu-Item">
        <button className="ElectronMenu-Btn ElectronMenu-ToogleThemeMode UI-Btn">
          <ion-icon name="moon-outline"></ion-icon>
          <span>Theme Mode</span>
        </button>
      </li>
      <li className="ElectronMenu-Item">
        <button className="ElectronMenu-Btn ElectronMenu-SwitchLang UI-Btn">
          <ion-icon name="language-outline"></ion-icon>
          <span>Language</span>
        </button>
      </li>
      <li className="ElectronMenu-Item">
        <button className="ElectronMenu-Btn ElectronMenu-Support UI-Btn">
          <ion-icon name="help-outline"></ion-icon>
          <span>Support</span>
        </button>
      </li>
      <li className="ElectronMenu-Item">
        <button className="ElectronMenu-Btn ElectronMenu-ChangeColorPalette UI-Btn">
          <ion-icon name="color-palette-outline"></ion-icon>
          <span>Color sheme</span>
        </button>
      </li>
    </ul>
  )
}

export default ElectronMenu