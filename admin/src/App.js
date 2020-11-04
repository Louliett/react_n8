import React, { useEffect, useState } from 'react';
import './App.css';
import { AdminFormContainer } from './components/containers/AdminFormContainer';
import { AdminHomeContainer } from './components/containers/AdminHomeContainer';


function App() {
  
  const [access, setAccess] = useState(false);
  const [currentComponent, setCurrentComponent] = useState(<AdminFormContainer setAccess={setAccess} />);

  useEffect(() => {
    if (access) {
      setCurrentComponent(<AdminHomeContainer />);
    }
  },[access]);

  return (
    <div className="App">
      {currentComponent}
    </div>
  );
}

export default App;
