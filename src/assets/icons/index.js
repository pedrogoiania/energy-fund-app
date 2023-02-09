import React from 'react';
import { SvgXml } from 'react-native-svg';

import eyeSvg from './eye.svg';
import emptyCheckboxSvg from './empty-checkbox.svg';
import arrowSvg from './arrow.svg';

const EyeIcon = () => <SvgXml width="24" height="24" xml={eyeSvg} />;
const EmptyCheckboxIcon = () => <SvgXml width="24" height="24" xml={emptyCheckboxSvg} />;
const ArrowLeftIcon = () => <SvgXml width="24" height="24" xml={arrowSvg} />;

export default {
  EyeIcon,
  EmptyCheckboxIcon,
  ArrowLeftIcon,
};
