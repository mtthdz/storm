'use client';

import { useEffect, useState } from "react";
import SiteHeader from "@/components/sections/SiteHeader";
import ListingTable from "@/components/sections/ListingTable";
import Modal from "@/components/sections/Modal";
import { FeedContext } from "@/context/FeedContext";
import { getProducts } from "@/api/getProducts";

export default function Feed() {
  const [modalVisible, setModalVisible] = useState(false);

  useEffect(() => {
    getProducts();
  }, [])

  return (
    <FeedContext.Provider
      value={{
        modalVisible,
        setModalVisible,
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