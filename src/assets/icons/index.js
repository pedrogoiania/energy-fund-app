import React from 'react';
import { SvgXml } from 'react-native-svg';

import eyeSvg from './eye.svg';
import emptyCheckboxSvg from './empty-checkbox.svg';

import circleSvg from './circle.svg';
import homeSvg from './home.svg';
import arrowsSvg from './arrows.svg';

import arrow from './arrow';

import circleSelectedSvg from './circle-selected.svg';
import homeSelectedSvg from './home-selected.svg';
import arrowsSelectedSvg from './arrows-selected.svg';

import profileSvg from './profile.svg';
import alertSvg from './alert.svg';

import coinSvg from './coin.svg';
import windSvg from './wind.svg';

const EyeIcon = () => <SvgXml width="24" height="24" xml={eyeSvg} />;

const EmptyCheckboxIcon = () => (
  <SvgXml width="24" height="24" xml={emptyCheckboxSvg} />
);

const ArrowLeftIcon = ({ fill, width, height }) => (
  <SvgXml width={width || '24'} height={height || '24'} xml={arrow(fill)} />
);

const CircleIcon = () => <SvgXml width="24" height="24" xml={circleSvg} />;
const HomeIcon = () => <SvgXml width="24" height="24" xml={homeSvg} />;
const ArrowsIcon = () => <SvgXml width="24" height="24" xml={arrowsSvg} />;

const CircleSelectedIcon = () => (
  <SvgXml width="24" height="24" xml={circleSelectedSvg} />
);

const HomeSelectedIcon = () => (
  <SvgXml width="24" height="24" xml={homeSelectedSvg} />
);

const ArrowSelectedIcon = () => (
  <SvgXml width="24" height="24" xml={arrowsSelectedSvg} />
);

const ProfileIcon = () => <SvgXml width="24" height="24" xml={profileSvg} />;

const AlertIcon = () => <SvgXml width="20" height="20" xml={alertSvg} />;

const CoinIcon = () => <SvgXml width="20" height="20" xml={coinSvg} />;

const WindIcon = () => <SvgXml width="12" height="12" xml={windSvg} />;

export default {
  EyeIcon,
  EmptyCheckboxIcon,
  ArrowLeftIcon,
  CircleIcon,
  HomeIcon,
  ArrowsIcon,
  CircleSelectedIcon,
  HomeSelectedIcon,
  ArrowSelectedIcon,
  ProfileIcon,
  AlertIcon,
  CoinIcon,
  WindIcon,
};
