'use client';

import { useState } from "react";
import SiteHeader from "@/components/sections/SiteHeader";
import ListingTable from "@/components/sections/ListingTable";
import Modal from "@/components/sections/Modal";
import { FeedContext } from "@/context/FeedContext";

export default function Feed() {
  const [modalVisible, setModalVisible] = useState(false);

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