import {StyleSheet, Platform} from 'react-native';
import * as defaultStyle from '../../../style';

const STYLESHEET_ID = 'stylesheet.day.basic';

export default function styleConstructor(theme={}) {
  const appStyle = {...defaultStyle, ...theme};
  return StyleSheet.create({
    base: {
      width: 32,
      height: 32,
      justifyContent: 'center',
      alignItems: 'center'
    },
    text: {
      marginTop: 4,
      fontSize: appStyle.textDayFontSize,
      fontFamily: appStyle.textDayFontFamily,
      fontWeight: appStyle.textDayFontWeight,
      color: appStyle.dayTextColor,
      backgroundColor: 'rgba(255, 255, 255, 0)'
    },
    alignedText: {
      marginTop: Platform.OS === 'android' ? 4 : 6
    },
    selected: {
      backgroundColor: appStyle.selectedDayBackgroundColor,
      borderRadius: 16
    },
    todayText: {
      color: appStyle.todayTextColor,
      fontWeight: appStyle.todayFontWeight
    },
    selectedText: {
      color: appStyle.selectedDayTextColor
    },
    disabledText: {
      color: appStyle.textDisabledColor
    },
    dotBorder: {
      top: -2,
      width: 6,
      height: 6,
      borderRadius: 3,
      backgroundColor: 'transparent'
    },
    dot: {
      top: 1,
      left: 1,
      width: 4,
      height: 4,
      borderRadius: 2,
      opacity: 0
    },
    visibleDot: {
      opacity: 1,
      backgroundColor: 'transparent'
    },
    selectedDot: {
      backgroundColor: appStyle.selectedDotColor
    },
    ...(theme[STYLESHEET_ID] || {})
  });
}
