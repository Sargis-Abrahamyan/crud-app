import { useState, ChangeEvent, FormEvent, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import {
  useAddUserMutation,
  useUpdateUserMutation,
} from '../../Features/Api/api';

const initialState = {
  id: Math.random() * 1000,
  name: '',
  surname: '',
  email: '',
  phone: '',
  age: '',
};
export const useAddEditUser = () => {
  const { id } = useParams();
  const [user, setUser] = useState<any>(initialState);

  const [editMode, setEditMode] = useState<boolean>(false);
  const [AddUser] = useAddUserMutation();
  const [updateUser] = useUpdateUserMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (id) {
      setEditMode(true);
    } else {
      setEditMode(false);
      setUser({ ...initialState });
    }
  }, [id]);

  const handelChange = (event: ChangeEvent<HTMLInputElement>) => {
    setUser({ ...user, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
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
      AddUser(user);
      navigate('/');
    } else {
      updateUser({ id, user });
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
