/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { GProps } from 'react-native-svg';
import IconZhanghu from './IconZhanghu';
import IconFaxian from './IconFaxian';
import IconFaxian1 from './IconFaxian1';
import IconStarO from './IconStarO';
import IconXingzhuang60Kaobei2Copy from './IconXingzhuang60Kaobei2Copy';
import IconShouye from './IconShouye';
import IconIconHome from './IconIconHome';
import IconXinaixin from './IconXinaixin';
import IconCeshi from './IconCeshi';

export type IconNames = 'icon-zhanghu' | 'icon-faxian' | 'icon-faxian1' | 'icon--star-o' | 'icon-xingzhuang60kaobei2-copy' | 'icon-shouye' | 'icon-icon_home' | 'icon-xinaixin' | 'icon-ceshi';

interface Props extends GProps, ViewProps {
  name: IconNames;
  size?: number;
  color?: string | string[];
}

let IconFont: FunctionComponent<Props> = ({ name, ...rest }) => {
  switch (name) {
    case 'icon-zhanghu':
      return <IconZhanghu key="1" {...rest} />;
    case 'icon-faxian':
      return <IconFaxian key="2" {...rest} />;
    case 'icon-faxian1':
      return <IconFaxian1 key="3" {...rest} />;
    case 'icon--star-o':
      return <IconStarO key="4" {...rest} />;
    case 'icon-xingzhuang60kaobei2-copy':
      return <IconXingzhuang60Kaobei2Copy key="5" {...rest} />;
    case 'icon-shouye':
      return <IconShouye key="6" {...rest} />;
    case 'icon-icon_home':
      return <IconIconHome key="7" {...rest} />;
    case 'icon-xinaixin':
      return <IconXinaixin key="8" {...rest} />;
    case 'icon-ceshi':
      return <IconCeshi key="9" {...rest} />;
  }

  return null;
};

IconFont = React.memo ? React.memo(IconFont) : IconFont;

export default IconFont;
