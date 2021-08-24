import { useField, ErrorMessage } from 'formik';

import './styles.scss';

function Input({ name, label, required, validate, type = 'text', disabled = false }) {
  const validateWithRequired = value => {
    if (required) {
    }

    if (typeof validate === 'function') {
    }
  };

  const [field] = useField({ name, validate: validateWithRequired });

  return (
    <div className="Input">
      <label>
        <div>{label}</div>
        <input type={type} disabled={disabled} {...field} />
      </label>

      <ErrorMessage name={name} className="error" component="div" />
    </div>
  );
}

export default Input;
