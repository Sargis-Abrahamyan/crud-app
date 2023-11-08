import React from 'react';

import styles from './styles.module.css';
import { useGetUserQuery } from '../../Features/Api/api';
import { Link, useParams } from 'react-router-dom';
import Button from '../../Components/Button';

const View = () => {
  const { id } = useParams();
  const { data } = useGetUserQuery(id);

  return (
    <div className={styles.view_container}>
      <div className={styles.view_title_block}>
        <h3 className={styles.view_title}>User Detals</h3>
      </div>
      <div className={styles.view_info_block}>
        <div className={styles.view_info}>
          <p className={styles.info_item}>
            Id: <span>{data?.id}</span>
          </p>
          <p className={styles.info_item}>
            Username:
            <span>
              {data?.name} {data?.surname}
            </span>
          </p>
          <p className={styles.info_item}>
            Email:
            <span>{data?.email}</span>
          </p>
          <p className={styles.info_item}>
            Phone:
            <span>{data?.phone}</span>
          </p>
          <p className={styles.info_item}>
            Age:
            <span>{data?.age}</span>
          </p>
        </div>
        <Link to="/" className={styles.link}>
          <Button
            content="Go Back"
            bgColor="rgb(84, 105, 212)"
            color="#fff"
            width="90px"
          />
        </Link>
      </div>
    </div>
  );
};

export default View;

