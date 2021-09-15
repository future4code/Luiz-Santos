import React from 'react';
import styled from 'styled-components';

const IconContainer = styled.div`
  display: flex;
`;
const IconImage = styled.img`
  margin-right: 5px;
  cursor: pointer;
`;

export function IconeSalvar(props) {
  return (
    <IconContainer>
      <IconImage
        alt={'Icone'}
        src={props.icone}
        onClick={props.onClickSalvar}
      />
    </IconContainer>
  );
}
