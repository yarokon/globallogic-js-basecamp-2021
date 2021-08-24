import { useParams, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import useDidMount from '../../../hooks/useDidMount';
import { getUser, createUser, editUser, selector as usersSelector } from '../../../features/users';
import { getRoles, selector as rolesSelector } from '../../../features/roles';
import { MODE } from '../../../constants';
import { ID } from '../constants';
import FormContainer from './FormContainer';
import { getInitialValues, getRequestPayload } from './converter';

function UserForm() {
  const { mode, id } = useParams();
  const history = useHistory();

  const dispatch = useDispatch();
  const users = useSelector(usersSelector);
  const roles = useSelector(rolesSelector);

  const user = users.list.find(user => user.id === Number(id));

  useDidMount(() => {
    if (mode === MODE.VIEW || mode === MODE.EDIT) {
      if (!user) {
        dispatch(getUser(Number(id)));
      }
    }

    if (roles.status === 'idle') {
      dispatch(getRoles());
    }
  });

  const handleSubmit = async values => {
    try {
      const payload = getRequestPayload(values);

      switch (mode) {
        case MODE.CREATE:
          await dispatch(createUser(payload));
          break;
        case MODE.EDIT:
          await dispatch(editUser(payload));
          break;
        default:
          console.error(`Failed to execute this request for ${mode} mode`);
      }
    } catch (err) {
      window.alert(err.message);
    }

    history.push('/users');
  };

  const initialValues = getInitialValues(user);

  return (
    <FormContainer
      key={`${mode}:${initialValues[ID]}`}
      initialValues={initialValues}
      onSubmit={handleSubmit}
      mode={mode}
      roles={roles}
    />
  );
}

export default UserForm;
