import './App.css';
import bootstrap from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { Navigation, Introduction, CodeExamples, Footer, OtherLinks } from './components';

function App() {

  return (
    <body className='siteBody'>
      <div className="container-fullwidth">
        <Navigation />
      </div>
      <div className="gradient__text">
        <Introduction />
        <CodeExamples />
        <OtherLinks />
        <Footer />
      </div>
    </body>
  );
}

export default App;
