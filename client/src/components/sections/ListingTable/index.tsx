'use client';

import Image from 'next/image';
import downChevron from '../../assets/down.svg';
import { useContext, useEffect } from 'react';
import { FeedContext } from '@/context/FeedContext';
import { StyledTableHeader, TableStyles } from './ListingTable.styles';

/**
 * Listing Table component
 * 
 * TODO: split up into individual components
 * TODO: make dynamic status flag (add to api data)
 * TODO: set selected item for modal via context api
 * 
 * @returns JSX
 */
export default function ListingTable () {
  const { feedData, setModalVisible, setSelectedItem } = useContext(FeedContext);
  const dataCount = feedData?.length;

  return (
    <>
      <StyledTableHeader>
        <h4>Products</h4>
        <p>{dataCount} of 64 results</p>
      </StyledTableHeader>

      <TableStyles className="table">
        <div className="table-header">
          <div className="table-column column-id">ID</div>
          <div className="table-column column-status">Status</div>
          <div className="table-column column-quantity">Quantity</div>
          <div className="table-column">Product Name</div>
          <div className="table-column column-price">
            <p className="cell-content-text">Prices</p>
            <Image src={downChevron} alt='down' />
          </div>
        </div>

        {feedData?.map((item, index) => {
          return (
            <div className="table-row" key={index}>
              <div className="table-column column-id">{item.id}</div>
              <div className="table-column column-status">
                <span className="status-flag">Status</span>
              </div>
              <div className="table-column column-quantity">{item.quantity}</div>
              <button className="table-column column-name" onClick={() => setModalVisible(true)}>
                <p className="cell-content-text">{item.product}</p>
                <p className="cell-content-metadata">
                  <span className="metadata">{item.serial}</span>
                  <span className="metadata-mobile"> - Qty: {item.quantity}</span>
                </p>
              </button>
              <div className="table-column column-price">${item.total}</div>
            </div>
          )
        })}
      </TableStyles>
    </>
  )
}