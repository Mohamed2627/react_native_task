import { StyleSheet } from 'react-native'
import { COLORS, FONTS, SPACINGS, hp, wp } from '../../constants'

export const styles = StyleSheet.create({
  borderContainer: {
    backgroundColor: COLORS.lightGray,
    width: '100%',
    height: hp(.3),
    marginVertical: hp(1),

  },
  borderText: {
    color: COLORS.black,
    position: 'absolute',
    zIndex: 20,
    top: hp(4),
    fontFamily: FONTS.FAMILY.bold,
    fontSize: FONTS.SIZES.button,
    paddingHorizontal: wp(4),
    backgroundColor: COLORS.backGround
  }
})