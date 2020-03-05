import React from 'react';
import { Provider } from 'react-redux';
import { Layout } from 'antd';
import './App.css';
import store from './store';
import Listing from './components/Listing';
import Filters from './components/Filters';
const { Content } = Layout;

function App() {
  return (
     <Provider store={store}>
       <Layout>
          <Content className='main-container'>
            <Filters/>
            <Listing/>
          </Content>
       </Layout>
     </Provider>
  );
}

export default App;
