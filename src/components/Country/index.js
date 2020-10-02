import React from 'react';
import Numeral from 'numeral';
import Icon from 'react-native-vector-icons/Ionicons';
import IconAwesome from 'react-native-vector-icons/FontAwesome5';
import IconMaterial from 'react-native-vector-icons/MaterialIcons';

import {
  Container,
  Name,
  Description,
  Stats,
  Stat,
  StatCount,
  Refresh,
  RefreshText,
} from './styles';

const Country = ({data, onRefresh}) => {
  const casesPerDay =
    data.todayCases === 0 ? '' : data.todayCases + ' casos por dia e ';

  return (
    <Container>
      <Name>{data.id}</Name>
      <Description>
        O {data.id} tem {casesPerDay}
        {Numeral(data.casesPerMillion).format('0,0')} casos a cada 1 milhão de
        pessoas
      </Description>
      <Stats>
        <Stat>
          <IconAwesome name="virus" size={16} color="#4d4d4d" />
          <StatCount>{Numeral(data.cases).format('0,0')}</StatCount>
        </Stat>
        <Stat>
          <Icon name="heart-circle" size={16} color="#4d4d4d" />
          <StatCount>{Numeral(data.recovered).format('0,0')}</StatCount>
        </Stat>
        <Stat>
          <Icon name="md-skull" size={16} color="#4d4d4d" />
          <StatCount>{Numeral(data.deaths).format('0,0')}</StatCount>
        </Stat>
      </Stats>

      <Refresh onPress={onRefresh}>
        <IconMaterial name="update" color="#6bd4c1" size={16} />
        <RefreshText>Atualizar</RefreshText>
      </Refresh>
    </Container>
  );
};

export default Country;
