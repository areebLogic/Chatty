import React from "react";
import styled from "styled-components";
function footer() {
  return (
    <>
      <FooterContainer>
        <p>All Rights Reserved. By Areeb Ali @ 2023</p>;
      </FooterContainer>
      ;
    </>
  );
}

export default footer;

const FooterContainer = styled.div`
  p {
    margin-top: -183px;
    color: white;
    margin-left: 915px;
    font-family: "Josefin Sans", sans-serif;
    text-transform: capitalize;
  }
`;
