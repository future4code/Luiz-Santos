import React from 'react';
import styled from 'styled-components';

import iconFacebook from '../../img/facebook.png';
import iconTwitter from '../../img/twitter.png';
import iconInstagram from '../../img/instagram.png';

const ModalContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  width: 300px;
  height: 245px;
  background: #fff;
  color: #333;
  z-index: 10;
  position: absolute;
  bottom: 0;
  left: 0;

  p {
    font-size: 18px;
    font-weight: 500;
  }
`;

const IconImage = styled.img`
  width: 24px;
  height: 24px;
  cursor: pointer;
`;

const ButtonCloseModal = styled.button`
  position: absolute;
  top: 5px;
  right: 5px;
  background: #fff;
  color: black;
  border: 1px solid gray;
  padding: 5px 8px;
  cursor: pointer;
`;

const Modal = (props) => {
  return (
    <ModalContainer>
      <ButtonCloseModal onClick={props.onclickCloseModal}>X</ButtonCloseModal>
      <p>Compartilhe:</p>
      <IconImage src={iconFacebook} onClick={props.onClickFacebookIcon} />
      <IconImage src={iconTwitter} onClick={props.onClickTwitterIcon} />
      <IconImage src={iconInstagram} onClick={props.onClickInstagramIcon} />
    </ModalContainer>
  );
};

export default Modal;
