import { Formik, Form } from 'formik';

import Input from '../../../../components/Formik/Input';
import { MODE } from '../../../../constants';
import { ROLE, USERNAME } from '../../constants';
import Buttons from './Buttons';

function FormContainer({ initialValues, onSubmit, mode, roles }) {
  return (
    <Formik initialValues={initialValues} onSubmit={onSubmit}>
      <Form>
        <Input name={USERNAME} label="Username" disabled={mode === MODE.VIEW} />

        <Input
          name={ROLE}
          label="Role"
          disabled={mode === MODE.VIEW}
          loading={roles.status === 'loading'}
          validate={value => {
            if (!roles.list.includes(value)) {
              return `Allowed roles: ${roles.list.join(', ')}`;
            }
          }}
        />

        <br />

        <Buttons mode={mode} />
      </Form>
    </Formik>
  );
}

export default FormContainer;
