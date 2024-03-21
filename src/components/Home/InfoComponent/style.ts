import { StyleSheet } from "react-native";
import { COLORS, FONTS, hp, wp } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    marginVertical: hp(1.5)
  },
  text: {
    fontSize: FONTS.SIZES.info,
    marginHorizontal: wp(1),
    color: COLORS.grey
  }
})
