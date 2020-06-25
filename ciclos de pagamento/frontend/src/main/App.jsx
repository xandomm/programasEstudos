import React from 'react';
import '../common/template/dependecies'

import Header from '../common/template/header'
import SideBar from '../common/template/sidebar'
import Footer from '../common/template/footer'
import Rotas from './routes'

function App (props) {
    return (
      <div className="wrapper">
       <Header/>
       <SideBar/>
       <div className='content-wrapper'>
         <Rotas/>
       </div>
       <Footer/>
      </div>
      
    );
  };
export default App;