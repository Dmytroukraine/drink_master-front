import React, { useState } from 'react';
import UserLogoPopup from './UserLogoPopup';
import ModalWrap from '../Shared/ModalWrap';
import UserInfoModal from './UserInfoModal';
import user from '../../images/user.png';
import css from './UserLogo.module.css';

const UserLogo = props => {
  const { userName, avatarURL } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);

  const url = avatarURL ? avatarURL : user;

  const handleToggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const handleCloseMenu = () => {
    setIsOpen(false);
  };

  const handleToggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  const handleCloseModal = () => {
    setIsShowModal(false);
  };

  return (
    <div onClick={handleToggleMenu} className={css.userlogo}>
      <img className={css.avatar} src={url} alt="user" />
      <p className={css.username}>{userName}</p>

      {isOpen ? (
        <UserLogoPopup
          isOpen={isOpen}
          onClick={handleToggleModal}
          closeMenu={handleCloseMenu}
        />
      ) : null}
      <ModalWrap onToggle={handleToggleModal} isOpen={isShowModal}>
        <UserInfoModal
          userName={userName}
          avatarURL={avatarURL}
          onClose={handleCloseModal}
        />
      </ModalWrap>
    </div>
  );
};

export default UserLogo;
