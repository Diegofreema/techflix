import { ScrollView } from 'react-native';
import React from 'react';

import Container from '../constants/Container';
import categories from '../assets/data/categories';
import HomeCategory from '../components/HomeCategory';

const firstCategory = categories.items[0];
const secondCategory = categories.items[1];
const thirdCategory = categories.items[2];
const fourthCategory = categories.items[3];
const Home = () => {
  return (
    <Container>
      <ScrollView
        showVerticalScrollIndicator={false}
        style={{ flex: 1, paddingLeft: 20 }}
      >
        <HomeCategory category={firstCategory} title="HTML" />
        <HomeCategory category={secondCategory} title="HTML" />
        <HomeCategory category={thirdCategory} title="HTML" />
        <HomeCategory category={fourthCategory} title="HTML" />
      </ScrollView>
    </Container>
  );
};

export default Home;
