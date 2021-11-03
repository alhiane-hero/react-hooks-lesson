import {useState} from 'react';
import ClassState from './ClassState';
import UseState from './UseState';
import LifeCycle from './LifeCycle';
import UseEffect from './UseEffect';
import Ref from './Ref';
import UseRef from './UseRef';
import Example from './Example';
import LocalContext from './LocalContext';
import Blog from './Blog';
import UseMemo from './UseMemo';
import UseCallback from './UseCallback';
import UseLayoutEffect from './UseLayoutEffect';
import CustomHook from './CustomHook';

function App() {

  const [local, setLocal] = useState('en');

  const toggleLocal = _ => {
    setLocal(local => local === 'en' ? 'ar' : 'en');
  }

  return (
    <div className='App'>
      <ClassState />
      <UseState />
      <LifeCycle />
      <UseEffect />
      <Ref />
      <UseRef />
      <Example />
      <LocalContext.Provider value={{local, toggleLocal}}>
        <Blog />
      </LocalContext.Provider>
      <UseMemo />
      <UseCallback />
      <UseLayoutEffect />
      <CustomHook />
    </div>
  );
}

export default App;
