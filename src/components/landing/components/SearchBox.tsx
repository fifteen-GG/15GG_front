import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SearchBoxContainer,
  SearchField,
  SearchButton,
} from '../styles/searchbox.s';

export const SearchBox = () => {
  //router
  const navigate = useNavigate();
  const routeUserInfo = () => {
    navigate(`/user?ID=${searchValue}`);
  };
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchValue(e.target.value);
  };
  return (
    <SearchBoxContainer>
      <SearchField
        placeholder="소환사명 검색하기..."
        onChange={handleSearchValue}
        onKeyDown={e => {
          if (e.key === 'Enter') routeUserInfo();
        }}
      ></SearchField>
      <SearchButton onClick={routeUserInfo} />
    </SearchBoxContainer>
  );
};
