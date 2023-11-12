import { ProductType } from "@/types/ProductType";
import { Dispatch, SetStateAction, createContext } from "react";

type FeedContextProps = {
  user: null | string;
  modalVisible: null | boolean;
  feedData: null | ProductType[];
  selectedItem: null | ProductType;
  setUser: Dispatch<SetStateAction<string>>;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  setFeedData: Dispatch<SetStateAction<ProductType[]>>;
  setSelectedItem: Dispatch<SetStateAction<ProductType>>;
};

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