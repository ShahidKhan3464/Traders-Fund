import React from 'react';
import { useState } from 'react';
import styled from 'styled-components';
const TabButton = styled.button`
  padding: 8px 12px;
  cursor: pointer;
  opacity: 0.6;
  border-radius: 8px;
  border: 0;
  outline: 0;
  color: white;
  transition: ease border-bottom 250ms;
  ${({ active }) =>
    active &&
    ` 
    background: #3B3C3D;
    opacity: 1;
  `}
`;

const Tab = ({ active, key, type, types, setActive }) => {
  return (
    <>
      {' '}
      {types.map(type => (
        <TabButton key={type} active={active === type} onClick={() => setActive(type)}>
          {type}
        </TabButton>
      ))}
    </>
  );
};

export default Tab;
