import { useState, useEffect } from 'react';
import { Alert, FormRow, Logo } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: true,
  showAlert: false,
};

const Register = () => {
  const [values, setValues] = useState(initialState);

  // global state and useNavigate hook

  const handleChange = e => {
    console.log(e.target);
  };

  const handleSubmit = e => {
    e.preventDefault();
    console.log('submit');
  };

  // Destructure values
  const { name, email, password, isMember, showAlert } = values;

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert type="success" message="Alert message" />}
        {!isMember && (
          <FormRow
            name={name}
            type="text"
            value={name}
            handleChange={handleChange}
            labelText="Name"
          />
        )}
        <FormRow
          name={email}
          type="email"
          value={email}
          handleChange={handleChange}
          labelText="Email"
        />
        <FormRow
          name={password}
          type="password"
          value={password}
          handleChange={handleChange}
          labelText="Password"
        />
        <button type="submit" className="btn btn-block">
          Submit
        </button>
      </form>
    </Wrapper>
  );
};
export default Register;
