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
import Banner from '../../components/Banner';

const LeftButton = () => <IconButton iconComponent={<Icons.ProfileIcon />} />;

const RightButton = () => <IconButton iconComponent={<Icons.AlertIcon />} />;

const CenterComponent = () => (
  <View>
    <Text.Bold>Account: $ 1,457.23</Text.Bold>
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

const trades = [
  {
    id: 1,
    title: 'Wind Fund',
    code: 'WFND',
  },
  {
    id: 2,
    title: 'Solar Fund',
    code: 'SFND',
  },
  {
    id: 3,
    title: 'Nature Fund',
    code: 'NFND',
  },
];

const Home = ({ navigation }) => {
  const navigateToFoundDetail = (item) => {
    navigation.navigate('Trade', { trade: item });
  };

  return (
    <BaseView
      leftButtonComponent={<LeftButton />}
      rightButtonComponent={<RightButton />}
      centerComponent={<CenterComponent />}
      footerComponent={<HeaderFooterComponent />}
      style={{ flex: 1 }}
      scrollable
    >
      <View style={{ marginBottom: 20 }}>
        <Text.Title>Funds</Text.Title>
      </View>

      <FlatList
        style={{ flex: 1, maxHeight: 180 }}
        data={trades}
        showsHorizontalScrollIndicator={false}
        ItemSeparatorComponent={() => <View style={{ width: 15 }} />}
        horizontal
        renderItem={({ item }) => (
          <ChartCard
            item={item}
            title={item.title}
            onPress={navigateToFoundDetail}
          />
        )}
        keyExtractor={(item) => String(item.id)}
      />

      <View style={{ paddingVertical: 20 }}>
        <Banner
          title="Learn more about carbon credits"
          subtitle="Check out our top tips!"
          image={<Icons.StatisticsIcon />}
        />
      </View>
    </BaseView>
  );
};

export default Home;
