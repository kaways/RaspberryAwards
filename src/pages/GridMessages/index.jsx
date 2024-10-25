import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { Container } from "react-bootstrap";

import * as S from './styles';

export const Welcome = () => {
  const dispatch = useDispatch();
  useEffect(() => {
  }, [dispatch]);
  return (
    <>
      <S.Contain>
        <Container>
          teste
        </Container>
      </S.Contain>
    </>
  );
};

export default Welcome;
