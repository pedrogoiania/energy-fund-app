import React from 'react';
import { View } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import Icons from '../../assets/icons';
import BaseView from '../../components/BaseView';
import IconButton from '../../components/IconButton';
import Text from '../../components/Text';

import { green } from '../../components/Colors';
import Ribbon from '../../components/Ribbon';
import ChartCard from '../../components/ChartCard';

const LeftButton = () => <IconButton iconComponent={<Icons.ProfileIcon />} />;

const RightButton = () => <IconButton iconComponent={<Icons.AlertIcon />} />;

const CenterComponent = () => (
  <View>
    <Text.Bold>Account: $1,457.23</Text.Bold>
  </View>
);

const HeaderFooterComponent = () => (
  <View>
    <View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'flex-end',
          justifyContent: 'space-between',
        }}
      >
        <View>
          <Text style={{ fontSize: 12 }}>Portifolio</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'flex-end',
              justifyContent: 'space-between',
            }}
          >
            <Text.Bold style={{ fontSize: 24 }}>$ 1,245.23</Text.Bold>
            <View
              style={{
                marginBottom: 5,
                marginLeft: 5,
                flexDirection: 'row',
              }}
            >
              <View
                style={{
                  transform: [{ rotate: '135deg' }],
                  marginRight: 4,
                  marginBottom: 3,
                }}
              >
                <Icons.ArrowLeftIcon width={10} height={10} fill={green} />
              </View>
              <Text style={{ fontSize: 14, color: green }}>31.28%</Text>
            </View>
          </View>
        </View>

        <Ribbon />
      </View>
    </View>
  </View>
);

const Home = () => (
  <BaseView
    leftButtonComponent={<LeftButton />}
    rightButtonComponent={<RightButton />}
    centerComponent={<CenterComponent />}
    footerComponent={<HeaderFooterComponent />}
    style={{ flex: 1 }}
  >
    <View style={{ marginBottom: 20 }}>
      <Text.Title>Funds</Text.Title>
    </View>

    <FlatList
      data={[1, 2, 3]}
      showsHorizontalScrollIndicator={false}
      ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
      horizontal
      renderItem={() => <ChartCard />}
      keyExtractor={(item) => String(item)}
    />
  </BaseView>
);

export default Home;
