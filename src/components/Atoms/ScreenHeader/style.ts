import { StyleSheet } from "react-native"
import { COLORS, FONTS, hp, wp } from "../../../constants"

export const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'flex-start',
  },
  imageContainer: {
    paddingStart: wp(10),
    width: wp(94),
    height: hp(28),
    borderTopLeftRadius: wp(8),
    borderBottomLeftRadius: wp(6),
    borderTopRightRadius: wp(8),
  },
  imageChildren: {
    position: 'absolute',
    zIndex: 10,
    left: wp(7),
    top: hp(3)
  },
  text: {
    fontSize: FONTS.SIZES.FONT_HEADER,
    maxWidth: wp(60),
    fontFamily: FONTS.FAMILY.bold,
    marginTop: hp(2),
    color: COLORS.white
  }
})