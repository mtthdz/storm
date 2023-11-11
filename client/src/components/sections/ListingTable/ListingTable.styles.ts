import styled from "styled-components";

export const TableStyles = styled.section`
  border: 1px solid var(--Border, #E4E4EF);
  border-radius: 8px;

  .table-header,
  .table-row {
    display: grid;
    grid-template-columns: minmax(80px, 0.5fr) minmax(100px, 1fr) minmax(100px, 1fr) minmax(300px, 4fr) minmax(100px, 1.5fr);
    border-bottom: 1px solid #E4E4EF;
    gap: 5px;

    .table-column {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 18px 16px;
      text-align: center;
    }

    /* individual column styling */
    .column-id {
      justify-content: flex-start;
    }
    .status-flag {
      border-radius: 12px;
      padding: 8px 24px;
      background-color: var(--status-bg-green, #EBF6EB);
      color: #31AA27;
    }
    .column-name {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: flex-start;
      border: none;
      outline: none;
      background: none;
    }
    .column-name:hover,
    .column-name:focus {
      cursor: pointer;
    }
    .column-price {
      border-left: 2px solid #E4E4EF;
    }
    .cell-content-metadata {
      font-size: 12px;
      line-height: 20px;
      color: var(--text-secondary, #808080);
    }
    .cell-content-metadata .metadata-mobile {
      display: none;
    }
  }
  .table-header > .table-column {
    font-weight: bold;
  }
  .table-row:last-child {
    border: none;
  }

  /**
   * responsive breakpoints:
   * 900px - global; hides quantity column
   * 700px - global; hides status column
   * 561px - standalone; hides price column
   * 428px - standalone; hides id column
   */
  @media (max-width: 900px) {
    .table-header,
    .table-row {
      grid-template-columns: minmax(80px, 0.5fr) minmax(100px, 1fr) minmax(300px, 4fr) minmax(100px, 1.5fr);

      .table-column.column-quantity {
        display: none;
      }
      .cell-content-metadata .metadata-mobile {
        display: inline;
      }
    }
  }

  @media (max-width: 700px) {
    .table-header,
    .table-row {
      grid-template-columns: minmax(80px, 0.5fr) minmax(300px, 4fr) minmax(100px, 1.5fr);

      .table-column.column-status {
        display: none;
      }
      .cell-content-metadata .metadata-mobile {
        display: inline;
      }
    }
  }

  @media (max-width: 561px) {
    .table-header,
    .table-row {
      grid-template-columns: minmax(80px, 0.5fr) minmax(300px, 4fr);

      .table-column.column-price {
        display: none;
      }      
      .cell-content-metadata .metadata-mobile {
        display: inline;
      }
    }
  }

  @media (max-width: 428px) {
    .table-header,
    .table-row {
      display: block;

      .table-column.column-id {
        display: none;
      }   
      .cell-content-metadata .metadata-mobile {
        display: inline;
      }
    }
  }
`;