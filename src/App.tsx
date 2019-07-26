import React from 'react';
import { Provider } from 'mobx-react';
import './App.css';
import RootStore from './models/RootStore';
import BucketProvider from './components/BucketProvider';

const rootStore = new RootStore()

const App: React.FC = () => {
  return (
    <div className="App">
      <Provider {...rootStore.getStores()}>
        <BucketProvider />
      </Provider>
    </div>
  );
}

export default App;
