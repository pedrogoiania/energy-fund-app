import React from 'react';
import { SvgXml } from 'react-native-svg';

import eyeSvg from './eye.svg';
import emptyCheckboxSvg from './empty-checkbox.svg';
import arrowSvg from './arrow.svg';

import circleSvg from './circle.svg';
import homeSvg from './home.svg';
import arrowsSvg from './arrows.svg';

import circleSelectedSvg from './circle-selected.svg';
import homeSelectedSvg from './home-selected.svg';
import arrowsSelectedSvg from './arrows-selected.svg';

const EyeIcon = () => <SvgXml width="24" height="24" xml={eyeSvg} />;

const EmptyCheckboxIcon = () => (
  <SvgXml width="24" height="24" xml={emptyCheckboxSvg} />
);

const ArrowLeftIcon = () => <SvgXml width="24" height="24" xml={arrowSvg} />;

const CircleIcon = () => <SvgXml width="24" height="24" xml={circleSvg} />;
const HomeIcon = () => <SvgXml width="24" height="24" xml={homeSvg} />;
const ArrowIcon = () => <SvgXml width="24" height="24" xml={arrowsSvg} />;

const CircleSelectedIcon = () => (
  <SvgXml width="24" height="24" xml={circleSelectedSvg} />
);
const HomeSelectedIcon = () => (
  <SvgXml width="24" height="24" xml={homeSelectedSvg} />
);
const ArrowSelectedIcon = () => (
  <SvgXml width="24" height="24" xml={arrowsSelectedSvg} />
);

export default {
  EyeIcon,
  EmptyCheckboxIcon,
  ArrowLeftIcon,
  CircleIcon,
  HomeIcon,
  ArrowIcon,
  CircleSelectedIcon,
  HomeSelectedIcon,
  ArrowSelectedIcon,
};
