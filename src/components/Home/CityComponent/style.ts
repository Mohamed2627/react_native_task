import { StyleSheet } from "react-native";
import { COLORS, hp, wp } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: hp(34),
    marginTop: hp(4)
  },
  coverImage: {
    width: '100%',
    height: '80%',
    borderTopLeftRadius: wp(5),
    borderTopRightRadius: wp(5)
  },
  childrenWrapper: {
    position: 'absolute',
    zIndex: 20,
    top: -hp(3),
    start: wp(4)
  },
  childImage: {
    width: wp(13),
    height: hp(15)
  },
  degree: {
    marginStart: wp(2),
    color: COLORS.orange
  },
  infoWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between'
  }
})