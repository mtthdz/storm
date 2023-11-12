import { Dispatch, SetStateAction } from "react";
import { ProductType } from "./ProductType";

/**
 * Normally I would have two separate types of state objects:
 * app state, and feature state. Due to there being only one
 * feature, I'm using one context provider to act as both states.
 *
 * User (app) should be a full user object, including uuid's and
 * session refresh tokens.
 * SelectedItem (feature) would handle the current item being viewed
 * to allow us to fetch correct modal content from feedData.
 */
export type FeedContextProps = {
  user: null | string;
  modalVisible: null | boolean;
  feedData: null | ProductType[];
  selectedItem: null | ProductType;
  setUser: Dispatch<SetStateAction<string>>;
  setModalVisible: Dispatch<SetStateAction<boolean>>;
  setFeedData: Dispatch<SetStateAction<ProductType[]>>;
  setSelectedItem: Dispatch<SetStateAction<ProductType | null>>;
};