import Link from 'next/link';
import styled from 'styled-components';

const NavWrapper = styled.nav`
  width: 100%;
  display: flex;
  justify-content: space-around;
  background-color: #333;
  padding: 1em;
`;

const NavLink = styled.a`
  color: white;
  text-decoration: none;
  &:hover {
    text-decoration: underline;
  }
`;

export default function Nav() {
  return (
    <NavWrapper>
      <Link href="/" passHref><NavLink>Home</NavLink></Link>
      <Link href="/about" passHref><NavLink>About</NavLink></Link>
      <Link href="/contact" passHref><NavLink>Contact</NavLink></Link>
    </NavWrapper>
  );
}