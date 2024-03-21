import { StyleSheet } from "react-native";
import { COLORS, FONTS, hp, wp } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingTop: hp(2.5),
    marginTop: hp(1)
  },
  text: {
    position: 'absolute',
    backgroundColor: '#FFF',
    zIndex: 10,
    left: wp(8),
    top: hp(1),
    color: COLORS.black,
    fontSize: FONTS.SIZES.label,
    fontFamily: FONTS.FAMILY.regular,
    paddingHorizontal: wp(2)
  },
  input: {
    borderWidth: wp(.4),
    borderColor: COLORS.lightGray,
    borderRadius: wp(2.5),
    paddingStart: wp(10),
    color: COLORS.black,
    fontSize: FONTS.SIZES.input,
    width: '100%',
  },
  iconWrapper: {
    position: 'absolute',
    left: wp(2),
    top: hp(4.6)
  },
  showPasswordWrapper: {
    position: 'absolute',
    right: wp(0),
    top: hp(3.6),
    paddingHorizontal: wp(6),
    paddingVertical: hp(1)
  }
})