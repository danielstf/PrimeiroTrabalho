import { Link } from "react-router-dom";

const About = () => {
  return (
    <div>
      <h1>About</h1>

      <p>
        <Link to="/about/1">Forma de contato</Link>
        <Link to="/about/2">Forma de contato</Link>
        <Link to="/about/3">Forma de contato</Link>
      </p>
    </div>
  );
};

export default About;
