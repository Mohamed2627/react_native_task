import { StyleSheet } from "react-native";
import { COLORS, FONTS, SPACINGS, hp, wp } from "../constants";

export const GLOBAL_STYLES = StyleSheet.create({
  smallMargin: {
    marginHorizontal: SPACINGS.SMALL_SPACE
  },
  generalMargin: {
    marginHorizontal: SPACINGS.GENERAL_SPACE
  },
  center: {
    alignItems: 'center',
    justifyContent: 'center'
  },
  focusedInput: {
    borderColor: COLORS.primaryColor
  },
  centerRow: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  textError: {
    color: COLORS.error,
    textAlign: 'center',
    fontSize: FONTS.SIZES.error,
    paddingTop: hp(.6),
    fontFamily: FONTS.FAMILY.italic
  },
  contentScroll: {
    flex: 1,
    width: wp(100) - SPACINGS.GENERAL_SPACE * 2,
    paddingTop: hp(1),
  },
  textPolicy: {
    color: COLORS.black,
    fontSize: FONTS.SIZES.policy,
    alignContent: 'center',
    lineHeight: hp(2.8),
    paddingTop: hp(.4),
    width: wp(60)
  }
}) 