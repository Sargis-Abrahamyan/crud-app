import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

import {
  useAddUserMutation,
  useUpdateUserMutation,
  useGetUserQuery,
} from '../../Features/Api/api';

const initialState: Users = {
  id: Math.random() * 1000,
  name: '',
  surname: '',
  email: '',
  phone: '',
  age: '',
};
export const useAddEditUser = () => {
  const [user, setUser] = useState(initialState);
  const [editMode, setEditMode] = useState<boolean>(false);
  const { id } = useParams();
  const navigate = useNavigate();
  const [AddUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const { data } = useGetUserQuery(id || '');

  useEffect(() => {
    if (id && data) {
      setEditMode(true);
      setUser({ ...data });
    } else {
      setEditMode(false);
      setUser({ ...initialState });
    }
  }, [id, data]);

  const handelChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: any) => {
    event.preventDefault();

    let emptyvalues = {
      id: '',
      name: '',
      surname: '',
      email: '',
      phone: '',
      age: '',
    };

    if (!editMode) {
      await AddUser(user);
      navigate('/');
    } else {
      await updateUser({ user });
      setUser(emptyvalues);
      navigate('/');
      setEditMode(false);
    }
  };

  return {
    handleSubmit,
    handelChange,
    user,
    editMode,
  };
};
