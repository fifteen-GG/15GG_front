import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  SearchBoxWrapper,
  SearchField,
  SearchButton,
} from '../styles/searchbox.s';

export const SearchBox = () => {
  //router
  const navigate = useNavigate();
  const routeUserInfo = () => {
    navigate(`/user?${searchValue}`, { state: searchValue });
  };
  const [searchValue, setSearchValue] = useState('');

  const handleSearchValue = (e: any) => {
    setSearchValue(e.target.value);
  };
  return (
    <SearchBoxWrapper>
      <SearchField
        placeholder="소환사명 검색하기..."
        onChange={handleSearchValue}
        onKeyDown={e => {
          if (e.key === 'Enter') routeUserInfo();
        }}
      ></SearchField>
      <SearchButton onClick={routeUserInfo} />
    </SearchBoxWrapper>
  );
};
