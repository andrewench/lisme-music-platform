import React from 'react';

const SideBarItem = ({type, title, isShowCounter}) => {
  let _type = type;

  const renderIconByType = type => {
    // eslint-disable-next-line
    switch (type) {
      case 'user':
        _type = 'person-outline';
      break;

      case 'chat':
        _type = 'chatbubbles-outline';
      break;

      case 'friends':
        _type = 'people-outline';
      break;

      case 'favourites':
        _type = 'heart-outline';
      break;

      case 'search':
        _type = 'search-outline';
      break;

      case 'settings':
        _type = 'settings-outline';
      break;
    }
  }

  renderIconByType(type);

  return (
    <li className="SideBar-Item">
      <button className="SideBar-Btn fl App-UI_rounded">
        <div className="SideBar-LabelBox fl">
          <ion-icon name={_type}></ion-icon>
          <div className="SideBar-Label">{title}</div>
        </div>
        {isShowCounter &&
          <div  className="SideBar-Counter">+1</div>
        }
      </button>
    </li>
)
}

export default SideBarItem