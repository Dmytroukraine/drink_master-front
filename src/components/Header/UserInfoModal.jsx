import React, { useState, useRef, useEffect } from 'react';
import { useUpdateUserMutation } from 'redux/authSlice/authSlice';
import { notification } from 'components/Shared/notification';
import css from './UserInfoModal.module.css';
import edit from '../../images/edit_icon.svg';
import user from '../../images/user.png';
import add_photo from '../../images/add_photo.svg';

const UserInfoModal = ({ userName, avatarURL }) => {
  const refInput = useRef(null);
  const refInputUpload = useRef(null);

  const [value, setValue] = useState('');
  const [isReadOnly, setIsReadOnly] = useState(true);
  const [file, setFile] = useState(null);
  const [avatar, setAvatar] = useState(null);

  useEffect(() => {
    setAvatar(avatarURL);
  }, [avatarURL]);

  useEffect(() => {
    setValue(userName);
  }, [userName]);

  const [dispatch] = useUpdateUserMutation();

  const handleChange = value => {
    setValue(value);
  };

  const handleSubmit = () => {
    const formData = new FormData();
    formData.append('avatar', file);
    formData.append('name', value);

    dispatch(formData)
      .unwrap()
      .then(() => notification('Success', 'success'))
      .catch(e => notification(e.data.message, 'error'));
  };

  const handleEdit = () => {
    setIsReadOnly(!isReadOnly);
    if (isReadOnly) refInput.current.focus();
  };

  const handleChangeAvatar = file => {
    const url = URL.createObjectURL(file);
    setAvatar(url);
    setFile(file);
  };

  const handleAdd = () => {
    refInputUpload.current.click();
  };

  return (
    <div className={css.userInfoModal}>
      <div className={css.user}>
        <img className={css.avatar} src={avatar ? avatar : user} alt="user" />
        <button onClick={handleAdd} className={css.btnAdd}>
          <img src={add_photo} alt="Add Button" />
        </button>
        <UploadInput
          refInput={refInputUpload}
          onChange={handleChangeAvatar}
          accept="image/*, .png, .jpg, .gif"
        />
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

const UploadInput = ({ onChange, refInput, accept }) => {
  const handleChange = e => {
    const file = e.target.files[0];
    onChange(file);
  };

  return (
    <input
      ref={refInput}
      onChange={handleChange}
      className={css.hidden}
      accept={accept}
      type="file"
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