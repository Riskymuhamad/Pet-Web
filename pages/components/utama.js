import styled from "styled-components";
import Image from "next/image";

const Utama = () => {
  return (
    <>
      <Container>
        <Main>
          <Text>
            <h1>
              Find Your New Pet <br />
              and Adopt it
            </h1>
            <p>
              Connecting great people with happy, <br />
              healthy cat and dogs from book animal shelter
            </p>
            <Tombol>
              <Start>
                <h3>Get Started</h3>
                <Arrow>
                  <Image
                    src="/arrow.svg"
                    alt="Logo Pet"
                    width={24}
                    height={24}
                  />
                </Arrow>
              </Start>
              <Watch>
                <Image src="/watch.svg" alt="Logo Pet" width={45} height={45} />
                <h3>Watch Videos</h3>
              </Watch>
            </Tombol>
          </Text>
          <Gambar>
            <Image
              src="/img/utama.png"
              alt="Logo Pet"
              width={480}
              height={400}
            />
          </Gambar>
        </Main>
      </Container>
    </>
  );
};

const Container = styled.div`
  background: rgba(250, 174, 96, 0.3);
  height: 89vh;
  display: flex;
  justify-content: center;
`;
const Main = styled.div`
  margin-top: 110px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  max-width: 1200px;
  min-width: 1200px;
`;
const Text = styled.div`
  h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 50px;
    line-height: 75px;
    color: #e66900;
  }

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: #423e3e;
  }
`;
const Tombol = styled.div`
  margin-top: 40px;
  display: flex;
`;
const Start = styled.button`
  display: flex;
  align-content: center;
  justify-content: center;

  width: 181px;
  height: 58px;
  background: #e66900;
  border-radius: 10px;
  border-style: none;

  cursor: pointer;
  margin-right: 40px;

  h3 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.02em;
    color: #ffffff;
  }
`;

const Arrow = styled.section`
  margin-top: 15px;
  margin-left: 12px;
`;
const Watch = styled.div`
  display: flex;

  h3 {
    margin-left: 16px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 500;
    font-size: 16px;
    line-height: 24px;
    color: #e66900;
  }
`;
const Gambar = styled.div``;

export default Utama;
