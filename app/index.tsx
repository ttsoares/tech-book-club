import { ScrollView } from 'react-native';

import Footer from '../components/Footer';
import SectionFour from '../components/SectionFour';
import SectionOne from '../components/SectionOne';
import SectionThree from '../components/SectionThree';
import SectionTwo from '../components/SectionTwo';

const index = () => {
  return (
    <ScrollView>
      <SectionOne />
      <SectionTwo />
      <SectionThree />
      <SectionFour />
      <Footer />
    </ScrollView>
  );
};

export default index;
