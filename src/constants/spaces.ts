import { Dimensions } from 'react-native';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const DIMENSIONS = Dimensions.get('window');

// ================================================

const SPACINGS = {
  SMALL_SPACE: wp(3),
  GENERAL_SPACE: wp(10),
};

// ================================================

export { DIMENSIONS, SPACINGS, wp, hp };