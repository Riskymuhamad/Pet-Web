import styled from "styled-components";
import Image from "next/image";

const Footer = () => {
  return (
    <>
      <Container>
        <Main>
          <BagianSatu>
            <Logo>
              <Image
                src="/img/logo.png"
                alt="Logo Pet"
                width={70}
                height={15}
              />
              <h1>LovePet</h1>
            </Logo>

            <p>
              We are a community of animal lovers
              <br /> whose goal is to care for and love <br />
              them
            </p>
            <Social>
              <Image src="/123.svg" alt="Logo Pet" width={200} height={100} />
            </Social>
          </BagianSatu>
          <BagianDua>
            <Descr>
              <ul>
                <li>
                  <h1>About me</h1>
                </li>
                <li>
                  <h3>Who are we</h3>
                </li>
                <li>
                  <h3>Featured</h3>
                </li>
              </ul>
              <ul>
                <li>
                  <h1>Company</h1>
                </li>
                <li>
                  <h3>Our Team</h3>
                </li>
                <li>
                  <h3>Our partners</h3>
                </li>
              </ul>
              <ul>
                <li>
                  <h1>Endorsement</h1>
                </li>
                <li>
                  <h3>Support Center</h3>
                </li>
                <li>
                  <h3>Contact Us</h3>
                </li>
              </ul>
            </Descr>
            <Copyright>
              <p>Slicing by Risky Muhamad</p>
            </Copyright>
          </BagianDua>
        </Main>
      </Container>
    </>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  background-color: #fee7cf;
`;

const Main = styled.div`
  margin-top: 110px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1200px;
  min-width: 1200px;
`;

const BagianSatu = styled.div`
  display: flex;
  flex-direction: column;
  p {
    margin-top: 60px;
    margin-bottom: 100px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.05em;

    color: #805603;
  }
`;

const Social = styled.div``;
const Copyright = styled.div`
  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 33px;
    letter-spacing: 0.005em;
    text-align: end;
    margin-top: 180px;

    color: #805603;
  }
`;
const Descr = styled.div`
  display: flex;
  justify-content: space-between;
  ul li {
    list-style-type: none;
    margin-left: 15px;
  }
  ul li h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: bold;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.005em;
    color: #805603;
  }
  ul li h3 {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 30px;
    letter-spacing: 0.005em;
    color: #805603;
  }
`;
const BagianDua = styled.div``;

const Logo = styled.div`
  height: 100px;
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

export default Footer;
