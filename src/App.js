// import React from 'react';
// import Header from './components/Header';
// import Home from './components/Home';
// import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
// import Detail from './components/Detail';


// // import{Counter} from './features/counter/Counter.js';
// import './App.css';

// function App() {

//   return (
//     <div className="App">
//       <Router>
//          <Header/>
//          <Routes>
//             <Route path="/Detail">
//                <Detail/>
//             </Route>
//             <Route path="/">
//                <Home/>
//             </Route>
//          </Routes>
//       </Router>
         
         
        
    
//     </div>
//   );
// }

// export default App;

import React from 'react';
import Header from './components/Header';
import Home from './components/Home';
import Login from './components/Login';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Detail from './components/Detail';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login />} />

          
        </Routes>
      </Router>
    </div>
  );
}

export default App;

