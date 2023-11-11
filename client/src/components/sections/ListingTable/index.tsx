'use client';

import Image from 'next/image';
import downChevron from '../../assets/down.svg';
import { useContext } from 'react';
import { FeedContext } from '@/context/FeedContext';
import { TableStyles } from './ListingTable.styles';

/**
 * Listing Table component
 * 
 * TODO: make dynamic
 * TODO: split up into individual components
 * 
 * @returns JSX
 */
export default function ListingTable () {
  const { setModalVisible } = useContext(FeedContext);

  return (
    <>
      <div className="table-metadata">
        <h4>Products</h4>
        <p>10 of 64 results</p>
      </div>

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

        <div className="table-row">
          <div className="table-column column-id">1374</div>
          <div className="table-column column-status">
            <span className="status-flag">Status</span>
          </div>
          <div className="table-column column-quantity">112</div>
          <button className="table-column column-name" onClick={() => setModalVisible(true)}>
            <p className="cell-content-text">Macbook Pro 16 inch (2020 ) For Sale</p>
            <p className="cell-content-metadata">
              <span className="metadata">BA9212320</span>
              <span className="metadata-mobile"> - Qty: 245</span>
            </p>
          </button>
          <div className="table-column column-price">$854.08</div>
        </div>
      </TableStyles>
    </>
  )
}