import React from "react";
import styled from "styled-components";
import { AiOutlineArrowLeft } from "react-icons/ai";
const Blog = () => {
  return (
    <Container>
      <Wrapper>
        <Box>
          <Top>
            <Icon />
            <Text>Precautions</Text>
            <ProfileImg src="/image/7.jpg" alt="" />
          </Top>
          <ImgHolder>
            <Img src="/image/7.jpg" alt="" />
          </ImgHolder>
          <TexHoder>
            <Date>October 4 2022 .5min Read</Date>
            <Contet>
              Random Text Generator is a web application which Provides true
              which
            </Contet>
            <SmallText>
              Random Text Generator is a web application which Provides true
            </SmallText>
            <SmallText>
              Random Text Generator is a web application which Provides true
            </SmallText>
          </TexHoder>
        </Box>
      </Wrapper>
    </Container>
  );
};

export default Blog;
// const ProfileImg = styled.div``
// const ProfileImg = styled.div``
// const ProfileImg = styled.div``
// const ProfileImg = styled.div``
const TexHoder = styled.div`
  height: 300px;
  width: 90%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;
  padding: 10px;
`;
const SmallText = styled.div`
  color: gray;
`;

const Contet = styled.div`
  font-weight: bold;
`;
const Date = styled.div`
  margin-right: 90px;
`;
const ProfileImg = styled.img`
  height: 35px;
  width: 35px;
  border-radius: 50%;
`;

const Text = styled.div``;
const Icon = styled(AiOutlineArrowLeft)`
  font-size: 20px;
`;
const Top = styled.div`
  display: flex;
  width: 90%;
  height: 50px;
  align-items: center;
  padding: 8px;
  justify-content: space-between;
`;
const Img = styled.img`
  height: 100%;
  width: 100%;
  object-fit: cover;
  border-radius: 5px;
`;
const ImgHolder = styled.div`
  height: 170px;
  width: 280px;
  margin: 20px 0px 0px 20px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Box = styled.div`
  height: 470px;
  width: 320px;
  display: flex;
  /* justify-content: center; */
  /* border: 1px solid ; */
  flex-direction: column;
`;
const Wrapper = styled.div`
  width: 85%;
  height: 80%;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
const Container = styled.div`
  width: 100%;
  height: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;
