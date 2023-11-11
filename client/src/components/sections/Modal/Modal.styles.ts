import styled from "styled-components";

export const ModalStyles = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.5);

  .modal-popup {
    background-color: #ffffff;
    padding: 40px;
    width: 80%;
    max-width: 1000px;
    border-radius: 5px;

    .modal-header {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .button-empty {
        display: flex;
        align-items: center;
        border: none;
        outline: none;
        background: none;
      }
    }
  }

  .modal-container {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 20px;

    .modal-image {
      width: 50%;
      max-width: 50%;
      height: auto;
      object-fit: contain;
    }

    .modal-content {
      width: 50%;
      display: flex;
      flex-direction: column;
      justify-content: flex-start;
      line-height: 25px;

      ul {
        margin: 20px 0;
        list-style-position: inside;
      }
    }
  }

  .modal-footer {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .button-block {
      gap: 4px;
      padding: 12px 24px;
      border: 1px solid #F9F9FB;
      border-radius: 4px;
      background: #F9F9FB;
    }
  }

  /**
   * responsive breakpoints:
   * 900px - global; resizes modal
   * 700px - global; resizes modal, adjusts font-size
   * 550px - removes overlay, makes modal full size
   */
  @media (max-width: 900px) {
    .modal-popup {
      width: 90%;
    }
  }

  @media (max-width: 700px) {
    .modal-popup {
      width: 100%;
    }

    .modal-container {
      .modal-content {
        font-size: 1.2rem;
      }
    }
  }

  @media (max-width: 550px) {
    position: fixed;
    top: 15%;
    max-height: 80vh;
    background: none;

    .modal-container {
      flex-direction: column;
      align-items: center;
      width: 100%;

      .modal-content {
        width: 100%;
      }
    }

    .modal-footer {
      .button-block {
        width: 100%;
      }
    }
  }
`;