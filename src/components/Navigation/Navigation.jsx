import { NavItem } from './Navigation.styled';

export const Navigation = () => {
  return (
    <>
      <nav>
        <ul>
          <li>
            <NavItem to={'/'}>Home</NavItem>
          </li>
          <li>
            <NavItem to={'users'}>Users</NavItem>
          </li>
        </ul>
      </nav>
    </>
  );
};
