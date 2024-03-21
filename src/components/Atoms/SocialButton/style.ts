import { StyleSheet } from "react-native";
import { COLORS, hp, wp } from "../../../constants";

export const styles = StyleSheet.create({
  container: {
    borderRadius: wp(2),
    borderWidth: wp(.4),
    borderColor: COLORS.lightGray,
    minWidth: '20%',
    marginVertical: hp(3),
    padding: wp(3),
    marginHorizontal: wp(2.5)
  },
  img: {
    width: wp(10),
    height: wp(10)
  }
})