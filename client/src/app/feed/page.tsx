'use client';

import { useEffect, useState } from "react";
import SiteHeader from "@/components/sections/SiteHeader";
import ListingTable from "@/components/sections/ListingTable";
import Modal from "@/components/sections/Modal";
import { FeedContext } from "@/context/FeedContext";
import { getProducts } from "@/api/getProducts";
import { ProductType } from "@/types/ProductType";

/**
 * Feed page
 * 
 * Feed page displays all products.
 * Because this code structure is feature-driven, this component
 * acts as the parent-most component for all state, via context
 * 
 * Interviewer Notes
 * I typically store global data (such as user) into a redux store,
 * but have set a fixed instance of the user object here due to
 * time constraints.
 * 
 * 
 * @returns JSX
 */
export default function Feed() {
  const [user, setUser] = useState('Adriana Arias')
  const [modalVisible, setModalVisible] = useState(false);
  const [feedData, setFeedData] = useState<ProductType[]>([]);
  const [selectedItem, setSelectedItem] = useState<ProductType>(null);

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <FeedContext.Provider
      value={{
        user,
        modalVisible,
        feedData,
        selectedItem,
        setUser,
        setModalVisible,
        setFeedData,
        setSelectedItem,
      }}
    >
      <>
        <SiteHeader />
        <ListingTable />
        <Modal />
      </>
    </FeedContext.Provider>
  )
}