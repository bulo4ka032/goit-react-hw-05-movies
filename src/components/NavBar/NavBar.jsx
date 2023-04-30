import { NavItem, NavigBar } from './NavBar.styled';

const NavBar = () => {
  return (
    <div>
      <NavigBar>
        <li>
          <NavItem to="/">Home</NavItem>
        </li>
        <li>
          <NavItem to="/movies">Movies</NavItem>
        </li>
      </NavigBar>
    </div>
  );
};

export default NavBar;
