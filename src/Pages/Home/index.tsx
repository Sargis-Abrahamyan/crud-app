import React from 'react';
import { Link } from 'react-router-dom';

import Button from '../../Components/Button';
import Loading from '../../Components/Loading';
import { tableItem } from './utils';
import {
  useGetUsersQuery,
  useDeleteUserMutation,
} from '../../Features/Api/api';
import styles from './styles.module.css';

const Home: React.FC = () => {
  const { isLoading, data, isSuccess } = useGetUsersQuery();
  const [deleteUser] = useDeleteUserMutation();

  const handelDelete = (id: number): void => {
    deleteUser(id);
  };

  return (
    <>
      {isLoading && <Loading />}
      <Link to={'/add'}>
        <Button width="220px" content="Add User" bgColor="red" color="#fff" />
      </Link>

      <div className={styles.table_container}>
        <table className={styles.table}>
          <thead>
            <tr>
              {tableItem.map(({ id, title }) => {
                return (
                  <th key={id} className={styles.table_title}>
                    {title}
                  </th>
                );
              })}
            </tr>
          </thead>
          <tbody>
            {isSuccess &&
              data.map((item: any) => {
                return (
                  <tr className={styles.table_item} key={item.id}>
                    <td>{item.id}</td>
                    <td>
                      {item.name} {item.surname}
                    </td>
                    <td>{item.email}</td>
                    <td>{item.phone}</td>
                    <td>{item.age}</td>
                    <td>
                      <Link to={`/view/${item.id}`}>
                        <Button
                          width="50px"
                          content="VIEW"
                          color="#000"
                          bgColor="#e7e7e7"
                        />
                      </Link>
                      <Link to={`/update/${item.id}`}>
                        <Button
                          width="50px"
                          content="EDIT"
                          color="#fff"
                          bgColor=" #008cba"
                        />
                      </Link>
                      <Button
                        width="80px"
                        content="DELETE"
                        color="#fff"
                        bgColor="red"
                        click={() => handelDelete(item.id)}
                      />
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default Home;
