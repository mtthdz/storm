import styled from "styled-components";

export const StyledNav = styled.nav`
  display: flex;
  justify-content: flex-end;

  .nav-list {
    display: flex;
    flex-direction: row;
    flex-wrap: nowrap;
    align-items: center;
    list-style: none;
  }
  
  .nav-link {
    text-decoration: none;

    .nav-icon {
      display: flex;
      align-items: center;
      padding: 10px;
      color: #5D5FEF;
    }
    .nav-icon:hover,
    .nav-icon:focus {
      color: lighten(#5D5FEF, 50%)
    }
  }

  .item-user {
    display: flex;
    align-items: center;
  }

  .nav-toggle {
    display: none;
    border: none;
    outline: none;
    background: none;
  }

  .nav-toggle:focus,
  .nav-toggle:hover {
    color: #DCDFE3;
  }

  @media (max-width: 925px) {
    .nav-list {
      display: none;
    }

    .nav-toggle {
      display: block;
    }
  }
`;