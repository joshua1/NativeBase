/* @flow */


import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import Icon from 'react-native-vector-icons/Ionicons';

export default class CheckBox extends NativeBaseComponent {

  getInitialStyle() {
    return {
      checkbox: {
        borderRadius: (this.getPlatform() === 'ios') ? 13 : 2,
        overflow: 'hidden',
        width: this.getTheme().checkboxSize,
        height: this.getTheme().checkboxSize,
        borderWidth: (this.getPlatform() === 'ios') ? 1 : 2,
        paddingLeft: (this.getPlatform() === 'ios') ? 5 : 2,
        paddingBottom: (this.getPlatform() === 'ios') ? 0 : 5,
        borderColor: this.getTheme().checkboxBgColor,
        backgroundColor: this.props.checked ? this.getTheme().checkboxBgColor : 'transparent',
      },
    };
  }

  render() {
    return (
      <TouchableOpacity ref={c => this._root = c} style={this.getInitialStyle().checkbox} {...this.props}>
        <Icon name={(this.getPlatform() === 'ios') ? 'ios-checkmark-outline' : 'md-checkmark'} style={{ color: this.props.checked ? this.getTheme().checkboxTickColor : 'transparent', lineHeight: (this.getPlatform() === 'ios') ? this.getTheme().checkboxSize / 0.93 : this.getTheme().checkboxSize - 5, marginTop: (this.getPlatform() === 'ios') ? undefined : 1, fontSize: (this.getPlatform() === 'ios') ? this.getTheme().checkboxSize / 0.8 : this.getTheme().checkboxSize / 1.2 }} />
      </TouchableOpacity>
    );
  }
}
