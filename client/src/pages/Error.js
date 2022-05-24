import Wrapper from '../assets/wrappers/ErrorPage';
import errorImage from '../assets/images/not-found.svg';
import { Link } from 'react-router-dom';

const Error = () => {
  return (
    <Wrapper className="full-page">
      <div>
        <img src={errorImage} alt="not found" />
        <h3>Oops! page not found</h3>
        <p>We can't seem to find the page you are looking for.</p>
        <Link to="/">back home</Link>
      </div>
    </Wrapper>
  );
};
export default Error;
