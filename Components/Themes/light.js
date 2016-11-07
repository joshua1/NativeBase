import Color from 'color';

import { Platform } from 'react-native';

export default {
  platform: null,
    // Badge
  badgeBg: '#ED1727',
  badgeColor: '#fff',
  get getPlatform() {
    return this.platform ? this.platform : Platform.OS;
  },

    // Button
  btnFontFamily: (this.getPlatform() === 'ios') ? 'HelveticaNeue' : 'Roboto_medium',
  btnDisabledBg: '#b5b5b5',
  btnDisabledClr: '#f1f1f1',

  get btnPrimaryBg() {
    return this.brandPrimary;
  },
  get btnPrimaryColor() {
    return this.inverseTextColor;
  },
  get btnInfoBg() {
    return this.brandInfo;
  },
  get btnInfoColor() {
    return this.inverseTextColor;
  },
  get btnSuccessBg() {
    return this.brandSuccess;
  },
  get btnSuccessColor() {
    return this.inverseTextColor;
  },
  get btnDangerBg() {
    return this.brandDanger;
  },
  get btnDangerColor() {
    return this.inverseTextColor;
  },
  get btnWarningBg() {
    return this.brandWarning;
  },
  get btnWarningColor() {
    return this.inverseTextColor;
  },
  get btnTextSize() {
    return (this.getPlatform() === 'ios') ? this.fontSizeBase * 1.1 :
        this.fontSizeBase - 1;
  },
  get btnTextSizeLarge() {
    return this.fontSizeBase * 1.5;
  },
  get btnTextSizeSmall() {
    return this.fontSizeBase * 0.8;
  },
  get borderRadiusLarge() {
    return this.fontSizeBase * 3.8;
  },

  buttonPadding: 6,

  get iconSizeLarge() {
    return this.iconFontSize * 1.5;
  },
  get iconSizeSmall() {
    return this.iconFontSize * 0.6;
  },


    // Card
  cardDefaultBg: '#fff',


    // Check Box
  checkboxBgColor: '#039BE5',
  checkboxSize: 23,
  checkboxTickColor: '#fff',


    // Color
  brandPrimary: '#5067FF',
  brandInfo: '#5bc0de',
  brandSuccess: '#5cb85c',
  brandDanger: '#d9534f',
  brandWarning: '#f0ad4e',
  brandSidebar: '#252932',


    // Font
  fontFamily: (this.getPlatform() === 'ios') ? 'HelveticaNeue' : 'Roboto',
  fontSizeBase: 15,

  get fontSizeH1() {
    return this.fontSizeBase * 1.8;
  },
  get fontSizeH2() {
    return this.fontSizeBase * 1.6;
  },
  get fontSizeH3() {
    return this.fontSizeBase * 1.4;
  },


    // Footer
  footerHeight: 55,
  footerDefaultBg: (this.getPlatform() === 'ios') ? '#F8F8F8' : '#4179F7',


    // FooterTab
  tabBarTextColor: (this.getPlatform() === 'ios') ? '#6b6b6b' : '#b3c7f9',
  tabBarActiveTextColor: (this.getPlatform() === 'ios') ? '#007aff' : '#fff',
  tabActiveBgColor: (this.getPlatform() == 'ios') ? '#cde1f9' : undefined,

    // Tab
  tabDefaultBg: (this.getPlatform() === 'ios') ? '#F8F8F8' : '#4179F7',
  topTabBarTextColor: (this.getPlatform() === 'ios') ? '#6b6b6b' : '#b3c7f9',
  topTabBarActiveTextColor: (this.getPlatform() === 'ios') ? '#007aff' : '#fff',
  topTabActiveBgColor: (Platform.OS == 'ios') ? '#cde1f9' : undefined,
  topTabBarBorderColor: (this.getPlatform() === 'ios') ? '#007aff' : '#fff',


    // Header
  iosToolbarBtnColor: '#007aff',
  toolbarDefaultBg: (this.getPlatform() === 'ios') ? '#F8F8F8' : '#4179F7',
  toolbarHeight: (this.getPlatform() === 'ios') ? 64 : 56,
  toolbarIconSize: (this.getPlatform() === 'ios') ? 20 : 22,
  toolbarInputColor: '#CECDD2',
  toolbarInverseBg: '#222',
  toolbarTextColor: (this.getPlatform() === 'ios') ? '#000' : '#fff',
  get statusBarColor() {
    return Color(this.toolbarDefaultBg).darken(0.2).hexString();
  },


    // Icon
  iconFamily: 'Ionicons',
  iconFontSize: (this.getPlatform() === 'ios') ? 30 : 28,
  iconMargin: 7,


    // InputGroup
  inputFontSize: 15,
  inputBorderColor: '#D9D5DC',
  inputSuccessBorderColor: '#2b8339',
  inputErrorBorderColor: '#ed2f2f',

  get inputColor() {
    return this.textColor;
  },
  get inputColorPlaceholder() {
    return '#575757';
  },

  inputGroupMarginBottom: 10,
  inputHeightBase: 40,
  inputPaddingLeft: 5,

  get inputPaddingLeftIcon() {
    return this.inputPaddingLeft * 8;
  },


    // Line Height
  btnLineHeight: 19,
  lineHeightH1: 32,
  lineHeightH2: 27,
  lineHeightH3: 22,
  iconLineHeight: (this.getPlatform() === 'ios') ? 37 : 30,
  lineHeight: (this.getPlatform() === 'ios') ? 20 : 24,


    // List
  listBorderColor: '#ddd',
  listDividerBg: '#ddd',
  listItemHeight: 45,
  listItemPadding: (this.getPlatform() === 'ios') ? 12 : 16,
  listNoteColor: '#808080',
  listNoteSize: 13,


    // Progress Bar
  defaultProgressColor: '#E4202D',
  inverseProgressColor: '#1A191B',


    // Radio Button
  radioBtnSize: (this.getPlatform() === 'ios') ? 25 : 23,
  radioColor: '#7e7e7e',

  get radioSelectedColor() {
    return Color(this.radioColor).darken(0.2).hexString();
  },


    // Spinner
  defaultSpinnerColor: '#45D56E',
  inverseSpinnerColor: '#1A191B',


    // Tabs
  tabBgColor: '#F8F8F8',
  tabFontSize: 15,
  tabTextColor: '#222222',


    // Text
  textColor: '#000',
  inverseTextColor: '#fff',


    // Title
  titleFontSize: (this.getPlatform() === 'ios') ? 17 : 19,
  subTitleFontSize: (this.getPlatform() === 'ios') ? 12 : 14,
  subtitleColor: '#8e8e93',


    // Other
  borderRadiusBase: (this.getPlatform() === 'ios') ? 5 : 2,
  borderWidth: 1,
  contentPadding: 10,

  get darkenHeader() {
    return Color(this.tabBgColor).darken(0.03).hexString();
  },

  dropdownBg: '#000',
  dropdownLinkColor: '#414142',
  inputLineHeight: 24,
  jumbotronBg: '#C9C9CE',
  jumbotronPadding: 30,
};
