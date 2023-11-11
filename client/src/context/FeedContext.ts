import { Dispatch, SetStateAction, createContext } from "react";

type FeedContextProps = {
  modalVisible: null | boolean;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
};

export const FeedContext = createContext<FeedContextProps>({
  modalVisible: false,
  setModalVisible: () => {},
});