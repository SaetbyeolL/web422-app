import { Container, Navbar, Nav } from "react-bootstrap";
import Link from 'next/link';
import { useRouter } from "next/router";
import { readToken, removeToken } from "../lib/authenticate";

import { useAtom } from 'jotai';//
import { cartListAtom } from '@/store'; //



export default function Navigation(props) {

  const router = useRouter();
  let token = readToken();

  const [cartList, setCartList] = useAtom(cartListAtom); //

  function logout() {
    removeToken();
    router.push("/");
  }

  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Link href="/" passHref legacyBehavior><Navbar.Brand >StellaStyle {token && <>- Hi! {token.userName}</>}</Navbar.Brand></Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">

          <Nav className="me-auto">
            <Link href="/" passHref legacyBehavior ><Nav.Link>Home</Nav.Link></Link>
            <Link href="/about" passHref legacyBehavior ><Nav.Link>About</Nav.Link></Link>
            <Link href="/dashboard" passHref legacyBehavior ><Nav.Link>Dashboard</Nav.Link></Link>
            <Link href="/dashboard/preferences" passHref legacyBehavior ><Nav.Link>Dashboard Preferences</Nav.Link></Link>
            <Link href="/products" passHref legacyBehavior ><Nav.Link>Products</Nav.Link></Link>
            <Link href="/cart" passHref legacyBehavior ><Nav.Link>shopping Cart <span>({cartList.length})</span></Nav.Link></Link>

          </Nav>





          <Nav className="ml-auto">
            {!token && <Link href="/login" passHref legacyBehavior><Nav.Link>Login</Nav.Link></Link>}
            {token && <Nav.Link onClick={logout}>Logout</Nav.Link>}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}