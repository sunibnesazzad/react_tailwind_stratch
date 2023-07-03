
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/shared/Layout.jsx';
import { Dashboard } from './components/Dashboard.jsx';
import { Products } from './components/Products.jsx';
import  Customers  from './components/Customers.jsx';
import Messages from './components/Messages';
import  Transactions  from './components/Transactions.jsx';
import Orders from './components/Orders';

function App() {
  return (
      <Routes>

        {/* in every page layout will be same because of outlet */}
        <Route path='/' element={<Layout />}> 
        
        <Route index element={<Dashboard />}/>

        <Route path='/products' element={<Products />} />
        <Route path='/orders' element={<Orders />} />
        <Route path='/customers' element={<Customers />} />
        <Route path='/messages' element={<Messages />} />
        <Route path='/transactions' element={<Transactions />} />

      </Route>
      {/* routes of pages without layout like sidebar and navbar */}

     <Route path='login' element={<div>This is log in page</div>} />


    </Routes>
  );
}

export default App;
