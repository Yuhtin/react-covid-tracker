import React, {useState, useEffect} from 'react';
import {Container, Title, Form, Input, Submit, List} from './styles';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Country from '~/components/Country';
import getRealm from '~/services/realm';
import {Keyboard} from 'react-native';
import api from '~/services/api';

const Main = () => {
  const [input, setInput] = useState('');
  const [error, setError] = useState(false);
  const [countries, setCountries] = useState([]);
  useEffect(() => {
    async function loadCountries() {
      const realm = await getRealm();
      const data = realm.objects('Country').sorted('cases', true);

      setCountries(data);
    }

    loadCountries();
  }, []);

  async function saveCountry(country) {
    const data = {
      id: country.country,
      todayCases: country.todayCases,
      deaths: country.deaths,
      recovered: country.recovered,
      casesPerMillion: country.casesPerOneMillion,
      cases: country.cases,
    };

    const realm = await getRealm();

    realm.write(() => {
      realm.delete;
      realm.create('Country', data, 'modified');
    });

    setCountries();
    return data;
  }

  async function handleAddCountry() {
    try {
      const response = await api.get(`/countries/${input}`);
      await saveCountry(response.data);

      setInput('');
      setError(false);
      Keyboard.dismiss();

      const realm = await getRealm();
      const data = realm.objects('Country').sorted('cases', true);

      setCountries(data);
    } catch (err) {
      setError(true);
    }
  }

  async function handleRefreshCountry(country) {
    const response = await api.get(`/countries/${country.id}`);
    const data = await saveCountry(response.data);

    setCountries(
      countries.map((count) => (count.id === data.id ? data : count)),
    );
  }

  return (
    <Container>
      <Title>Casos de COVID-19</Title>

      <Form>
        <Input
          value={input}
          onChangeText={setInput}
          autoCapitalize="none"
          autoCorrect={false}
          error={error}
          placeholder="Adicione um país para acompanhar..."
        />

        <Submit onPress={handleAddCountry}>
          <Icon name="add" size={22} color="#FFF" />
        </Submit>
      </Form>

      <List
        keyboarShouldPersistTaps="handled"
        data={countries}
        keyExtractor={(item) => item.id}
        renderItem={({item}) => (
          <Country data={item} onRefresh={() => handleRefreshCountry(item)} />
        )}
      />
    </Container>
  );
};

export default Main;
