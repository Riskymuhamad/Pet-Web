import styled from "styled-components";
import Image from "next/image";

export const Contact = () => {
  return (
    <>
      <Container>
        <Main>
          <MainCard>
            <Gambar>
              <Image
                src="/img/terbang.png"
                alt="Logo Pet"
                width={210}
                height={150}
              />
            </Gambar>
            <Text>
              <GambarDua>
                <Image
                  src="/img/laptop.png"
                  alt="Logo Pet"
                  width={400}
                  height={300}
                />
              </GambarDua>
              <Inti>
                <h1>Want To Join Us ?</h1>

                <p>
                  Want to join us to help and help animals that do not <br />
                  have employers so that they can live properly
                </p>
                <Email>
                  <Input placeholder="Enter your email here ....." />
                  <Tombol>Subsribe</Tombol>
                </Email>
              </Inti>
            </Text>
          </MainCard>
        </Main>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 90vh;
  display: flex;
  justify-content: center;
  background-color: white;
`;
const Main = styled.div`
  margin-top: 110px;
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  min-width: 1200px;
`;
const Text = styled.div`
  background: #fee7cf;
  border-radius: 10px;
  display: flex;
  justify-content: start;

  h1 {
    margin-top: 77px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 40px;
    line-height: 60px;
    letter-spacing: 0.05em;

    color: #805603;
  }

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 27px;
    letter-spacing: 0.05em;

    color: #805603;
  }
`;

const Gambar = styled.div`
  position: absolute;
  top: -80px;
  right: 70px;
`;

const GambarDua = styled.div`
  margin-top: 120px;
  margin-left: 50px;
`;
const Inti = styled.div`
  margin-left: 20px;
  display: flex;
  flex-direction: column;
`;
const MainCard = styled.div`
  width: 1200px;
  height: 384px;
  position: relative;
  background: #fee7cf;
  border-radius: 10px;
`;

const Input = styled.input`
  width: 436px;
  height: 53px;
  padding: 0.5em;
  margin-right: 0px;
  color: black;
  border: none;
  padding: 20px 20px 20px 20px;
  border-radius: 10px 0px 0px 10px;

  :focus {
    outline: none;
  }
`;

const Email = styled.div`
  display: flex;
  align-items: center;
  margin-top: 30px;
`;
const Tombol = styled.button`
  margin-left: 0px;
  background: #e66900;
  border-radius: 0px 10px 10px 0px;
  border: none;
  width: 128px;
  height: 53px;
  font-family: Poppins;
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 24px;
  text-align: center;
  letter-spacing: 0.02em;
  color: #ffffff;
`;
