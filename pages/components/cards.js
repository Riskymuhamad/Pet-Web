import styled from "styled-components";
import Image from "next/image";

const Cards = () => {
  return (
    <>
      <Container>
        <MainContainer>
          <Judul>
            <h1>Anything featured in here</h1>
            <Text>
              <p>
                We are a community of animal lovers, especially cats and dogs,
                we have the initiative <br />
                to maintain environmental health by helping abandoned animals.In
                addition we also <br /> open charities{" "}
              </p>
              <Start>
                <h3>See All Pet</h3>
                <Arrow>
                  <Image
                    src="/arrow3.svg"
                    alt="Logo Pet"
                    width={24}
                    height={24}
                  />
                </Arrow>
              </Start>
            </Text>
          </Judul>

          <Cardz>
            <Card
              img="/img/1.png"
              judul="Healthy"
              desc="We always routinely clean the food, toilet, and bed every day, so that health is guaranteed"
              arr="/a1.svg"
            />

            <Cardss
              img="/img/2.png"
              judul="Fragrant"
              desc="Cleanliness is part of faith, because cleanliness of animals is always healthy"
              arr="/a2.png"
            />

            <Card
              img="/img/3.png"
              judul="Happy"
              desc="We give toys and we invite them to play so the animals don't get stressed"
              arr="/a1.svg"
            />
          </Cardz>
        </MainContainer>
      </Container>
    </>
  );
};

const Container = styled.div`
  height: 110vh;
  display: flex;
  justify-content: center;
`;
const MainContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  min-width: 1200px;
`;
const Judul = styled.div`
  h1 {
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 48px;
    line-height: 72px;
    letter-spacing: 0.05em;
    color: #e66900;
  }
`;
const Text = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  p {
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    letter-spacing: 0.05em;
  }
`;

const Start = styled.button`
  display: flex;
  align-content: center;
  justify-content: center;

  width: 181px;
  height: 58px;
  border-radius: 10px;
  border-style: none;
  background: rgba(51, 170, 51, 0);

  border: 3px solid #e66900;
  box-sizing: border-box;
  border-radius: 10px;

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
    color: #e66900;
  }
`;
const Arrow = styled.section`
  margin-top: 15px;
  margin-left: 12px;
`;
const Cardz = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 25px;
`;

export const Card = (props) => {
  const { img, judul, desc, arr } = props;
  return (
    <>
      <MainCard>
        <ContCard>
          <Gambar>
            <Image src={img} alt="Logo Pet" width={300} height={300} />
          </Gambar>
          <h1>{judul}</h1>
          <p>{desc}</p>
          <Gambar2>
            <Image src={arr} alt="Logo Pet" width={64} height={64} />
          </Gambar2>
        </ContCard>
      </MainCard>
    </>
  );
};

export const Cardss = (props) => {
  const { img, judul, desc, arr } = props;
  return (
    <>
      <MainCard>
        <ContCards>
          <Gambar>
            <Image src={img} alt="Logo Pet" width={300} height={300} />
          </Gambar>
          <h1>{judul}</h1>
          <p>{desc}</p>
          <Gambar2>
            <Image src={arr} alt="Logo Pet" width={64} height={64} />
          </Gambar2>
        </ContCards>
      </MainCard>
    </>
  );
};

const MainCard = styled.div``;

const ContCard = styled.div`
  margin-top: 80px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fee7cf;
  width: 390px;
  height: 453px;
  border-radius: 10px;

  h1 {
    margin-top: 280px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 37px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #805603;
  }

  p {
    margin-left: 35px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.05em;

    color: #805603;
    width: 315px;
    height: 72px;
    margin-bottom: 31px;
  }
`;

const ContCards = styled.div`
  margin-top: 60px;
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #fed583;
  width: 390px;
  height: 453px;
  border-radius: 10px;

  h1 {
    margin-top: 280px;
    font-family: Poppins;
    font-style: normal;
    font-weight: 600;
    font-size: 25px;
    line-height: 37px;
    text-align: center;
    letter-spacing: 0.05em;
    color: #272623;
  }

  p {
    margin-left: 35px;
    font-family: Poppins;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-align: center;
    letter-spacing: 0.05em;

    color: #272623;
    width: 315px;
    height: 72px;
    margin-bottom: 31px;
  }
`;
const Gambar = styled.div`
  position: absolute;
  top: -70px;
  padding: 0px 25px 25px 45px;
`;

const Gambar2 = styled.div`
  display: flex;
  justify-content: center;
`;

export default Cards;
