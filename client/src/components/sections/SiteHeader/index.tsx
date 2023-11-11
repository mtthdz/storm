'use client';

import styled from 'styled-components';
import Logo from '@/components/elements/Logo';
import SearchForm from '../SearchForm';

export default function SiteHeader() {
  return (
    <StyledHeader>
      <h1><Logo /></h1>
      <SearchForm />
    </StyledHeader>
  )
}

const StyledHeader = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: nowrap;
  margin: 60px auto 120px;
`;