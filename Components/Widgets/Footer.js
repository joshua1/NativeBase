/* @flow */


import React from 'react';
import { Platform } from 'react-native';
import View from './View';
import NativeBaseComponent from '../Base/NativeBaseComponent';
import computeProps from '../../Utils/computeProps';

export default class Footer extends NativeBaseComponent {

  propTypes: {
        style : React.PropTypes.object
    }

  getInitialStyle() {
    return {
      navbar: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: (!Array.isArray(this.props.children)) ? 'center' : 'space-between',
        height: this.getTheme().footerHeight,
        backgroundColor: this.getTheme().footerDefaultBg,
        borderTopWidth: (this.getPlatform() == 'ios') ? 1 : undefined,
        borderColor: (this.getPlatform() == 'ios') ? '#cbcbcb' : undefined,
      },
    };
  }

  prepareRootProps() {
    const defaultProps = {
      style: this.getInitialStyle().navbar,
    };

    return computeProps(this.props, defaultProps);
  }

  render() {
    return (
      <View ref={c => this._root = c} {...this.prepareRootProps()}>
        { !Array.isArray(this.props.children) &&
        <View style={{ flex: 1, alignItems: 'center' }} >
          {this.props.children}
        </View>}

        { Array.isArray(this.props.children) &&
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-start', flexDirection: 'row' }}>
          {this.props.children[0]}
        </View>}

        { Array.isArray(this.props.children) &&
        <View style={{ flex: 3, alignSelf: 'center' }}>
          {this.props.children[1]}
        </View>}

        { Array.isArray(this.props.children) &&
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'flex-end', flexDirection: 'row' }}>
          {this.props.children[2]}
        </View>}
      </View>
    );
  }
}
