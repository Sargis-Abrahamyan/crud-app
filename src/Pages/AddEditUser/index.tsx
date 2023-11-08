import React from 'react';

import Button from '../../Components/Button';
import { useAddEditUser } from './useAddEditUser';
import styles from './styles.module.css';

const AddEditUser: React.FC = (data: any) => {
  const { handleSubmit, handelChange, user, editMode } = useAddEditUser();
  const { name, surname, email, phone, age } = user;

  return (
    <div className={styles.addEditUser_container}>
      <h3 className={styles.addEditUser_title}>
        {editMode ? 'Update User' : 'create users'}
      </h3>
      <form onSubmit={handleSubmit}>
        <div className={styles.form_group}>
          <label>
            Name<span>*</span>
          </label>
          <input
            type="text"
            name="name"
            value={name || ''}
            onChange={handelChange}
          />
        </div>
        <div className={styles.form_group}>
          <label>
            Surname<span>*</span>
          </label>
          <input
            type="text"
            name="surname"
            value={surname || ''}
            onChange={handelChange}
          />
        </div>
        <div className={styles.form_group}>
          <label>
            Email<span>*</span>
          </label>
          <input
            type="email"
            name="email"
            value={email || ''}
            onChange={handelChange}
          />
        </div>
        <div className={styles.form_group}>
          <label>
            Phone<span>*</span>
          </label>
          <input
            type="text"
            name="phone"
            value={phone || ''}
            onChange={handelChange}
          />
        </div>
        <div className={styles.form_group}>
          <label>
            Age<span>*</span>
          </label>
          <input
            type="text"
            name="age"
            value={age || ''}
            onChange={handelChange}
          />
        </div>

        <Button
          width="50%"
          bgColor="rgb(84, 105, 212)"
          color="#fff"
          content={editMode ? 'Update User' : 'Create User'}
        />
      </form>
    </div>
  );
};

export default AddEditUser;
