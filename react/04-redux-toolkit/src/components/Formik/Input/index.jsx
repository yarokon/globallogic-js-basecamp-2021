import { useField, ErrorMessage } from 'formik';

import './styles.scss';

function Input({ name, label, validate, type = 'text', disabled = false, loading }) {
  const [field] = useField({ name, validate });

  return (
    <div className="Input">
      <label>
        <div>{label}</div>
        <input
          type={type}
          disabled={loading ? true : disabled}
          placeholder={loading ? 'loading...' : ''}
          {...field}
        />
      </label>

      <ErrorMessage name={name} className="error" component="div" />
    </div>
  );
}

export default Input;
