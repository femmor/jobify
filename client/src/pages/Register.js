import { useState, useEffect } from 'react';
import { useAppContext } from '../context/appContext';
import { Alert, FormRow, Logo } from '../components';
import Wrapper from '../assets/wrappers/RegisterPage';

const initialState = {
  name: '',
  email: '',
  password: '',
  isMember: false,
};

const Register = () => {
  const { isLoading, showAlert, displayAlert, registerUser } = useAppContext();
  const [values, setValues] = useState(initialState);

  // global state and useNavigate hook

  const handleChange = e => {
    setValues({ ...values, [e.target.name]: e.target.value });
  };

  const handleSubmit = e => {
    e.preventDefault();
    // Check for input values
    if (!email || !password || (!isMember && !name)) {
      displayAlert();
      return;
    }
    // Set up current user
    const currentUser = { name, email, password };
    // Check if user is a member
    if (isMember) {
      console.log('Already a member');
    } else {
      registerUser(currentUser);
    }

    clearForm();
  };

  const toggleMember = () => {
    setValues({ ...values, isMember: !values.isMember });
  };

  const clearForm = () => {
    setValues(initialState);
  };

  // Destructure values
  const { name, email, password, isMember } = values;

  return (
    <Wrapper className="full-page">
      <form className="form" onSubmit={handleSubmit}>
        <Logo />
        <h3>{isMember ? 'Login' : 'Register'}</h3>
        {showAlert && <Alert alertType="success" alertText="Alert message" />}
        {!isMember && (
          <FormRow
            name="name"
            type="text"
            value={name}
            handleChange={handleChange}
            labelText="Name"
          />
        )}
        <FormRow
          name="email"
          type="email"
          value={email}
          handleChange={handleChange}
          labelText="Email"
        />
        <FormRow
          name="password"
          type="password"
          value={password}
          handleChange={handleChange}
          labelText="Password"
        />
        <button type="submit" className="btn btn-block" disabled={isLoading}>
          {isMember ? 'Login' : 'Register'}
        </button>

        <p>
          {isMember ? 'Not a member yet?' : 'Already a member?'}
          <button type="button" onClick={toggleMember} className="member-btn">
            {isMember ? 'Register' : 'Login'}
          </button>
        </p>
      </form>
    </Wrapper>
  );
};
export default Register;
