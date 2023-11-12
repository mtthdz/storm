import { createContext } from "react";
import { FeedContextProps } from "@/types/FeedContext";

export const FeedContext = createContext<FeedContextProps>({
  user: 'Adriana Arias',
  modalVisible: false,
  feedData: [],
  selectedItem: null,
  setUser: () => {},
  setModalVisible: () => {},
  setFeedData: () => {},
  setSelectedItem: () => {},
});