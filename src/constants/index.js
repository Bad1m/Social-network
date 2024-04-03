import { Dimensions } from "react-native";

const { width } = Dimensions.get("window");

export const MAX_WIDTH = 500;
export const WIDTH = width > MAX_WIDTH ? MAX_WIDTH : width;
export const FORM_PADDING_HORIZONTAL = 40;

export const COLORS = {
  RED: "#8e0e18",
  GREEN: "#61984b",
};
