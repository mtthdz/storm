import styled from "styled-components";

export const FormStyles = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;
  gap: 16px;

  label {
    display: none;
  }

  .input-container {
    position: relative;

    .icon-container {
      position: absolute;
      left: 16px;
      top: 8px;

      .icon {
        width: 24px;
        height: 24px;
        flex-shrink: 0;
      }
    }

    .input-textbox {
      display: flex;
      align-items: center;
      /* height: 22px; */
      width: 150px;
      padding: 12px 24px 12px 44px;
      border: 1px solid var(--gray-400, #DCDFE3);
      border-radius: 0px 4px 4px 0px;
      background: var(--gray-100, #FFF);
    }

    .input-textbox::placeholder {
      color: rgba(0, 0, 0, 0.30);
      font-size: 14px;
      line-height: 20px;
    }

    .input-textbox:focus,
    .input-textbox:active {
      outline: 1px solid #605DEC;
    }
  }

  .button {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 4px;
    padding: 12px 24px;
    border: none;
    border-radius: 4px;
    background-color: #605DEC;
    color: #FFF;
  }
  .button:focus,
  .button:active {
    background-color: #4a48b8;
    outline: none;
  }
`;