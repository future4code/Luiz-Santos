import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import ButtonsControl from '../ButtonsControl';
import CardImage from '../CardImage';

import * as S from './styles';

const ProfileToChoose = () => {
  const [profile, setProfile] = useState({});

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    try {
      const response = await api.get('/luiz-santos/person');

      setProfile({ ...response.data.profile });
    } catch (err) {
      alert('Ops! Ocorreu um erro :( \n' + err);
    }
  }

  async function handleMatchProfile() {
    const body = {
      id: profile.id,
      choice: true,
    };

    try {
      const response = await api.post('/luiz-santos/choose-person', body);
      if (response.data.isMatch) {
        alert('Vocês deram match!!! ');
      }
      await getProfile();
    } catch (err) {
      alert('Ops! Ocorreu um erro :( \n' + err);
    }
  }

  async function handleDiscardProfile() {
    await getProfile();
  }

  return (
    <S.ProfileContainer>
      <CardImage profile={profile} />
      <ButtonsControl
        handleMatchProfile={handleMatchProfile}
        handleDiscardProfile={handleDiscardProfile}
      />
    </S.ProfileContainer>
  );
};

export default ProfileToChoose;
