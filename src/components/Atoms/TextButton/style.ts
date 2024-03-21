import { StyleSheet } from "react-native";
import { COLORS, FONTS, hp } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    alignSelf: 'flex-end'
  },
  text: {
    fontSize: FONTS.SIZES.textButton,
    fontFamily: FONTS.FAMILY.medium,
    color: COLORS.black,
    marginVertical: hp(1),
  }
})