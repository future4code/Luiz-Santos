import React, { useEffect, useState } from 'react';
import api from '../../services/api';
import ButtonsControl from '../ButtonsControl';
import CardImage from '../CardImage';
import Loading from '../Loading';

import * as S from './styles';

const ProfileToChoose = () => {
  const [profile, setProfile] = useState({});
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    getProfile();
  }, []);

  async function getProfile() {
    setLoading(true);
    try {
      const response = await api.get('/luiz-santos/person');

      setProfile({ ...response.data.profile });
      setLoading(false);
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

  if (loading) return <Loading />;

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
