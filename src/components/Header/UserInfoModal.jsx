import React, { useState, useRef } from 'react';
import css from './UserInfoModal.module.css';
import edit from '../../images/edit_icon.svg';
import user from '../../images/user.png';
import add_photo from '../../images/add_photo.svg';

const UserInfoModal = () => {
  const refInput = useRef(null);
  const [value, setValue] = useState('');
  const [isReadOnly, setIsReadOnly] = useState(true);

  const avatarLink = '';
  const link = avatarLink ? avatarLink : user;

  const handleChange = value => {
    setValue(value);
  };

  const handleSubmit = () => {
    console.log('Save changes', value);
  };

  const handleEdit = () => {
    setIsReadOnly(!isReadOnly);
    if (isReadOnly) refInput.current.focus();
  };

  const handleAdd = () => {
    console.log('Add photo');
  };

  return (
    <div className={css.userInfoModal}>
      <div className={css.user}>
        <img className={css.avatar} src={link} alt="user" />
        <button onClick={handleAdd} className={css.btnAdd}>
          <img src={add_photo} alt="Add Button" />
        </button>
      </div>
      <div className={css.group}>
        <label className={css.label}>
          <Input
            refInput={refInput}
            isReadOnly={isReadOnly}
            onChange={handleChange}
            value={value}
          />
          <button onClick={handleEdit}>
            <img src={edit} alt="Edit Icon" />
          </button>
        </label>

        <Button onClick={handleSubmit} name="Save changes" />
      </div>
    </div>
  );
};

export default UserInfoModal;

const Input = ({ onChange, value, isReadOnly = false, refInput }) => {
  const handleChange = e => {
    const value = e.target.value;
    onChange(value);
  };

  return (
    <input
      ref={refInput}
      readOnly={isReadOnly}
      value={value}
      onChange={handleChange}
      className={css.input}
    />
  );
};

const Button = ({ onClick, isDisabled = false, name }) => {
  return (
    <button disabled={isDisabled} onClick={onClick} className={css.button}>
      {name}
    </button>
  );
};
