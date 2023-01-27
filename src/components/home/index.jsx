import Title from "../title";
import image1 from "../../images/1.png"
import image2 from "../../images/2.png"
import image3 from "../../images/3.png"
import image4 from "../../images/4.png"
import image5 from "../../images/5.png"
import styled from "styled-components";

const Home = () => {
  
  return (
    <><Title title="🏠 ❤️ Home ❤️ 🏠" />
      <Main>
        <Img src={image1} alt="img1" />
        <Img src={image2} alt="img2" />
        <Img src={image3} alt="img3" />
        <Img src={image4} alt="img4" />
        <Img src={image5} alt="img5" />
      </Main>
    </>
  );
};

const Main = styled.div`
display: flex;
flex-direction: column;
align-items: center;
gap: 20px;

@media (min-width: 768px) {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    
}
`;

const Img = styled.img `
  width: 300px;
  height: 220px;
 `;


export default Home;