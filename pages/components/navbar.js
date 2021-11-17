import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

export const Navbar = () => {
  return (
    <>
      <Navbars>
        <NavContainer>
          <Logo>
            <Image src="/img/logo.png" alt="Logo Pet" width={70} height={80} />
            <h1>LovePet</h1>
          </Logo>
          <NavLink>
            <ul>
              <li>
                <Link href="/">
                  <a id="warna">Home</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>About</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Featured</a>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <a>Contact</a>
                </Link>
              </li>
            </ul>
          </NavLink>
          <NavButton>
            <ButtonRegist>Register</ButtonRegist>
            <NavLogin>Login</NavLogin>
          </NavButton>
        </NavContainer>
      </Navbars>
    </>
  );
};
const Navbars = styled.div`
  background: rgba(250, 174, 96, 0.3);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const NavContainer = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  min-width: 1200px;
  margin-top: 10px;
  align-items: center;
`;
const Logo = styled.div`
  display: flex;
  justify-content: flex-start;
  h1 {
    font-family: Rambla;
    font-style: normal;
    font-weight: bold;
    font-size: 25px;
    line-height: 31px;
    letter-spacing: 0.05em;
    color: #e4761a;
  }
`;

const NavLink = styled.div`
  ul {
    display: flex;
    flex-direction: row;
  }
  ul li {
    list-style-type: none;
    margin: 0px 10px 0px 10px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: #e66900;
    opacity: 0.7;
  }
`;
const NavButton = styled.div``;
const ButtonRegist = styled.button`
  width: 144px;
  height: 56px;
  border: 2px solid #e66900;
  border-radius: 10px;
  background: rgba(51, 170, 51, 0);
  margin-right: 24px;

  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #e66900;
  cursor: pointer;
`;
const NavLogin = styled.button`
  width: 143px;
  height: 56px;
  background: #e66900;
  border-radius: 10px;
  border-style: none;
  font-family: Poppins;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #ffffff;
  cursor: pointer;
`;
