'use client';

import { useContext } from 'react';
import Image from 'next/image';
import { FeedContext } from '@/context/FeedContext';
import closeIcon from '../../assets/close.svg';
import itemImage from '../../assets/item-image.png';
import { ModalStyles } from './Modal.styles';

/**
 * Modal component
 * 
 * TODO: make content variable via context
 * TODO: refactor classNames
 * 
 * @returns JSX
 */
export default function Modal () {
  const { modalVisible, setModalVisible } = useContext(FeedContext);

  if (!modalVisible) return null;

  return (
    <ModalStyles>
      <section className="modal-popup">
        <div className="modal-header">
          <h4>Macbook Pro 16 inch (2020 )</h4>
          <button onClick={() => setModalVisible(false)} className="button-empty">
            <Image src={closeIcon} width={24} height={24} alt="close button"/>
          </button>
        </div>

        <div className="modal-container">
          <Image src={itemImage} className="modal-image" alt="item image"></Image>
         
          <div className="modal-content">
            <h4>Key Features</h4>
            <ul>
              <li>2.6 GHz Intel Core i7 6-Core (9th Gen)</li>
              <li>16GB of 2666 MHz DDR4 RAM | 8TB SSD</li>
              <li>16" 3072 x 1920 Retina Display</li>
              <li>AMD Radeon Pro 5600M GPU (8GB HBM2)</li>
            </ul>
            <p>The Apple 16" MacBook Pro features a 16" Retina Display, a Magic Keyboard with a redesigned scissor mechanism, a six-speaker high-fidelity sound system, and an advanced thermal design. This MacBook Pro also features an AMD Radeon Pro 5600M graphics card, a 7nm mobile discrete GPU designed for pro users. With 8GB of HBM2</p>
          </div>
        </div>

        <div className="modal-footer">
          <button onClick={() => setModalVisible(false)} className="button-block">Close</button>
        </div>
      </section>
    </ModalStyles>
  )
}