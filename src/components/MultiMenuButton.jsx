import React from 'react';

const MultiMenuButton = ({type, title}) => {
  let _type = type;

  const renderMultiMenuButtonByType = type => {
    switch (type) {
      case 'lang':
        _type = 'language-outline';
      break;

      case 'theme--dark':
        _type = 'moon-outline';
      break;

      case 'theme--light':
        _type = 'sunny-outline';
      break;

      case 'support':
        _type = 'help-outline';
      break;
    }
  }

  renderMultiMenuButtonByType(type);

  return (
    <button className="Header-MultiMenuButton App-Btn">
      <ion-icon name={_type}></ion-icon>
    </button>
  )
}

export default MultiMenuButton