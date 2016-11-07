/* @flow */


import React from 'react';
import { TouchableOpacity, Platform } from 'react-native';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import Icon from 'react-native-vector-icons/Ionicons';

export default class Radio extends NativeBaseComponent {

  getInitialStyle() {
    return {
      radio: {},
    };
  }

  render() {
    return (
      <TouchableOpacity ref={c => this._root = c} {...this.props} >
        {(this.getPlatform() === 'ios') ?
          <Icon name={this.props.selected ? 'ios-radio-button-on' : 'ios-radio-button-off-outline'} style={{ color: this.props.selected ? this.getTheme().radioSelectedColor : this.getTheme().radioColor, lineHeight: this.getTheme().radioBtnSize + 4, fontSize: this.getTheme().radioBtnSize }} />
                :
                <Icon name={this.props.selected ? 'md-radio-button-on' : 'md-radio-button-off'} style={{ color: this.props.selected ? this.getTheme().radioSelectedColor : this.getTheme().radioColor, lineHeight: this.getTheme().radioBtnSize + 1, fontSize: this.getTheme().radioBtnSize }} />
                }
      </TouchableOpacity>
    );
  }
}
