import styled from "styled-components";
import Image from "next/image";

export const Desc = () => {
  return (
    <>
      <Container>
        <Main>
          <Gambar>
            <Image
              src="/img/utama2.png"
              alt="Logo Pet"
              width={480}
              height={400}
            />
          </Gambar>
          <Text>
            <Judul>
              <h1>Who We Are</h1>{" "}
              <Image
                src="/img/lampus.png"
                alt="Logo Pet"
                width={100}
                height={5}
              />
            </Judul>
            <p>
              We are a community of animal lovers, especially cats and dogs, we
              have the initiative to maintain environmental health by helping
              abandoned animals <br />
              <br />
              In addition we also open charities and adoptions for other animal
              lovers, we are also always willing to accept pets or abandoned
              animals to be cared for here. <br />
              <br />
              Our goal is to make animals feel comfortable and healthy so they
              won&#x91;t go extinct
            </p>
            <Tombol>
              <Image src="/arrow2.svg" alt="Logo Pet" width={80} height={45} />

              <h2>1 / 3</h2>
            </Tombol>
          </Text>
        </Main>
      </Container>
    </>
  );
};

const Container = styled.div`
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
    text-align: center;
  }

  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.05em;
    color: #423e3e;
    width: 576px;
  }
`;

const Judul = styled.div`
  display: flex;
  flex-direction: row;
`;
const Tombol = styled.div`
  margin-top: 40px;
  display: flex;

  h2 {
    margin-left: 32px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 15px;
    line-height: 22px;
    color: #423e3e;
  }
`;

const Gambar = styled.div``;
