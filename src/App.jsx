
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Layout from './components/shared/Layout.jsx';
import { Dashboard } from './components/Dashboard.jsx';
import { Products } from './components/Products.jsx';

function App() {
  return (
      <Routes>

        {/* in every page layout will be same because of outlet */}
      <Route path='/' element={<Layout />}> 
        <Route index element={<Dashboard />}/>
        <Route path='/products' element={<Products />} />
      </Route>
      {/* routes of pages without layout like sidebar and navbar */}

     <Route path='login' element={<div>This is log in page</div>} />


    </Routes>
  );
}

export default App;
