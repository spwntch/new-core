import {
  PatternOne,
  PatternTwo,
} from '../../components/brochureware/background-patterns';
import { SimpleHero } from '../../components/brochureware/heroes';
import { Header } from '../../components/shell';

const SimpleWebsiteShell = () => {
  return (
    <div className="bg-white">
      <Header />
      <div className="relative isolate px-6 pt-14 lg:px-8">
        <PatternOne />
        <SimpleHero />
        <PatternTwo />
      </div>
    </div>
  );
};

export default SimpleWebsiteShell;
