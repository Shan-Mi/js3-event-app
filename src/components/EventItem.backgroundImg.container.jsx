import styled from "styled-components";

export const BackgroundImgContainer = styled.div`
  /* background-image: url(http://yoshi.willandskill.eu:8999/media/background_image_fynApIg.jpg); */
  background-image: url(${(props) => props.img});
`;
