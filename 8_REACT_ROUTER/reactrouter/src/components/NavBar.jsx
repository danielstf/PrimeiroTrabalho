import "./NavBar.css";

import { Button } from "flowbite-react";
import { Navbar } from "flowbite-react";
import { AiOutlineLoading } from "react-icons/ai";

import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <>
      <Navbar fluid rounded>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Navbar.Link href="/" active>
            Home
          </Navbar.Link>
          <Navbar.Link as={Link} href="#">
            About
          </Navbar.Link>
          <Navbar.Link>Services</Navbar.Link>
          <Navbar.Link href="/about">Pricing</Navbar.Link>
          <Navbar.Link href="#">Contact</Navbar.Link>
        </Navbar.Collapse>
      </Navbar>
      <Button>Default</Button>
      <Button color="blue">Blue</Button>
      <Button color="gray">Gray</Button>
      <Button color="dark">Dark</Button>
      <Button color="light">Light</Button>
      <Button color="success">Success</Button>
      <Button color="failure">Failure</Button>
      <Button color="warning">Warning</Button>
      <Button color="purple">Purple</Button>

      <Button gradientDuoTone="redToYellow">Red to Yellow</Button>

      <Button
        size="md"
        isProcessing
        processingSpinner={
          <AiOutlineLoading className="h-6 w-6 animate-spin" />
        }
      >
        Click me!
      </Button>
    </>
  );
};
/* <nav>
      <Link to="/"> Home</Link>
      <Link to="/about"> Sobre</Link>

      <NavLink to="/">Home</NavLink>
      <NavLink to="/about"> Sobre</NavLink>
    </nav> */

export default NavBar;
