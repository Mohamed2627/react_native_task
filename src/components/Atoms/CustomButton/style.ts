import { StyleSheet } from "react-native";
import { COLORS, FONTS, hp, wp } from "../../../constants";


export const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primaryColor,
    paddingVertical: hp(2.5),
    borderRadius: wp(3),
    marginVertical: hp(2)
  },
  text: {
    color: COLORS.white,
    fontFamily: FONTS.FAMILY.bold,
    fontSize: FONTS.SIZES.button
  }
})