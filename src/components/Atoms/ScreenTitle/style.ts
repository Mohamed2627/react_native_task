import { StyleSheet } from "react-native";
import { COLORS, FONTS, SPACINGS, hp, wp } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    width: wp(100) - SPACINGS.SMALL_SPACE * 2,
    backgroundColor: COLORS.titleBg,
    height: hp(14),
    alignItems: 'center',
    justifyContent: 'center',
    borderTopRightRadius: wp(5),
    borderTopLeftRadius: wp(5),
    borderBottomRightRadius: wp(3),
    borderBottomLeftRadius: wp(3)
  },
  textTitle: {
    position: 'absolute',
    top: hp(3),
    color: COLORS.white,
    fontSize: FONTS.SIZES.title,
    fontFamily: FONTS.FAMILY.medium
  }
}) 