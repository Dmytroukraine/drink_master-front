import React, { useState } from 'react';
import UserLogoPopup from './UserLogoPopup';
import ModalWrap from '../Shared/ModalWrap';
import UserInfoModal from './UserInfoModal';
import user from '../../images/user.png';
import css from './UserLogo.module.css';

const UserLogo = props => {
  const { userName, avatarLink } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [isShowModal, setIsShowModal] = useState(false);

  const link = avatarLink ? avatarLink : user;

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleModal = () => {
    setIsShowModal(!isShowModal);
  };

  return (
    <div onClick={toggleMenu} className={css.userlogo}>
      <img className={css.avatar} src={link} alt="user" />
      <p className={css.username}>{userName}</p>

      {isOpen ? <UserLogoPopup isOpen={isOpen} onClick={toggleModal} /> : null}
      <ModalWrap toggle={toggleModal} isOpen={isShowModal}>
        <UserInfoModal />
      </ModalWrap>
    </div>
  );
};

export default UserLogo;
