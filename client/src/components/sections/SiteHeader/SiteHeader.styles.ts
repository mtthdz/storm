import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  margin: 80px auto 120px;

  .flex-child {
    flex: 1;
  }

  .flex-title {
    order: 1;
  }

  .flex-search {
    order: 2;
  }

  .flex-nav {
    order: 3;
  }

  @media (max-width: 700px) {
    margin-top: 40px;

    .flex-nav {
      order: 2;
    }
    .flex-search {
      order: 3;
      flex-basis: 100%;
      margin-top: 20px;
    }
  }
`;