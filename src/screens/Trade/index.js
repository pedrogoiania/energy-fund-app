import React, { useContext, useEffect, useState } from 'react';
import { View } from 'react-native';
import Icons from '../../assets/icons';
import BaseView from '../../components/BaseView';
import ChartFull from '../../components/ChartFull';
import { gray, green } from '../../components/Colors';
import IconButton from '../../components/IconButton';
import Text from '../../components/Text';
import Ribbon from '../../components/Ribbon';
import TradeContext from '../../contexts/TradeContext';

const BackButton = ({ onPress }) => (
  <IconButton onPress={onPress} iconComponent={<Icons.ArrowLeftIcon />} />
);

const CenterComponent = ({ title, code }) => (
  <View style={{ justifyContent: 'center', alignItems: 'center' }}>
    <Text.Bold style={{ fontSize: 17 }}>{title}</Text.Bold>
    <Text style={{ color: gray, fontSize: 14 }}>{code}</Text>
  </View>
);

const filtersData = ['1h', '1d', '1w', '1m', '1y', 'All'];

const Trade = ({ route, navigation }) => {
  const [filterSelected, setFilterSelected] = useState('1h');

  const useTradeContext = useContext(TradeContext);
  const { selectedTrade, setSelectedTrade } = useTradeContext;

  const goBack = () => {
    navigation.goBack();
  };

  const selectFilter = (item) => {
    setFilterSelected(item);
  };

  useEffect(() => {
    if (route?.params?.trade) {
      setSelectedTrade(route.params.trade);
    }
  }, [route?.params?.trade]);
  return (
    <BaseView
      scrollable={!!selectedTrade}
      leftButtonComponent={<BackButton onPress={goBack} />}
      centerComponent={
        selectedTrade && (
          <CenterComponent
            title={selectedTrade.title}
            code={selectedTrade.code}
          />
        )
      }
      // style={{ flex: 1 }}
    >
      {!selectedTrade && (
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text.Bold style={{ fontSize: 24 }}>
            Select a trade to view detail
          </Text.Bold>
        </View>
      )}
      {selectedTrade && (
        <View>
          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            <View
              style={{
                alignItems: 'flex-start',
                justifyContent: 'space-between',
              }}
            >
              <Text.Bold style={{ fontSize: 24 }}>$ 1,245.23</Text.Bold>
              <View
                style={{
                  marginBottom: 5,
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

            <Text.Bold style={{ fontSize: 24 }}>2022</Text.Bold>
          </View>
          <ChartFull />

          <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
            {filtersData.map((item) => (
              <Ribbon
                onPress={selectFilter}
                selected={filterSelected === item}
                key={item}
                showIcon={false}
                title={item}
              />
            ))}
          </View>
        </View>
      )}
    </BaseView>
  );
};

export default Trade;
