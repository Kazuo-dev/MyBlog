import React from 'react';
import styled from 'styled-components';

export default function about() {
  return (
     <AboutWrapper>
        <h3> about </h3>
    </AboutWrapper>
  )
}

const AboutWrapper = styled.div`
  display: flex;
  padding: 5%;
  justify-content: center;
  height: 90vh;
  width: 100%;
`;