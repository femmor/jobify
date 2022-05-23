import main from '../assets/images/main-alternative.svg';
import Wrapper from '../assets/wrappers/LandingPage.js';
import { Logo } from '../components';

const LandingPage = () => {
  return (
    <Wrapper>
      <nav>
        <Logo />
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            job <span>tracking</span> app
          </h1>
          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Alias
            fugit ex reprehenderit doloribus error magni recusandae soluta, quae
            similique eveniet aut minima animi. Alias nulla assumenda
            perspiciatis illo nesciunt totam.
          </p>
          <button className="btn btn-hero">Login/Register</button>
        </div>
        <img src={main} alt="job hunt" className="img main-img" />
      </div>
    </Wrapper>
  );
};

export default LandingPage;
