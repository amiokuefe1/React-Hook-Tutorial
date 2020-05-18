import React, {useReducer} from 'react';
import logo from './logo.svg';
import './App.css';
// import ClassCounter from './components/ClassCounter';
// import HookCounter from './components/HookCounter';
// import HookCounterTwo from './components/HookCounterTwo';
// import HookCounterThree from './components/HookCounterThree';
// import HookCounterFour from './components/HookCounterFour';
// import HookCounterOne from './components/HookCounterOne';
import HookMouse from './components/HookMouse';
import MouseContainer from './components/MouseContainer';
import IntervalHookCounter from './components/IntervalHookCounter';
// import DataFetching from './components/DataFectching';
// import DataFetchingTwo from './components/DataFectchingTwo';
import DataFetchingThree from './components/DataFectchingThree';
import ComponentC from './components/ComponentC'


import CountOne from './components/reducerCountOne'
import CountTwo from './components/reducerCountTwo'
import CountThree from './components/reducerCountThree'

import ParentComponent from './components/callBack/ParentComponent'

import ComponentA from './components/reduceWithuseContex/ComponentA'
// import ComponentB from './components/reduceWithuseContex/ComponentB'
// import ComponentC1 from './components/reduceWithuseContex/ComponentC1'

import DataFetchingOne from './components/reduceWithuseContex/DataFetchingOne'
import DataFetchingToo from './components/reduceWithuseContex/DataFetchingToo'
import Counta from './components/reduceWithuseContex/Counta'
// import FocusInput from './components/reduceWithuseContex/FocusInput'
import HookTimer from './components/reduceWithuseContex/HookTimer'

export const UserContext = React.createContext()
export const ChannelContext = React.createContext()


{/*
export const CountContext = React.createContext()

const initialState = 0
const reducer = (state, action) =>{
  switch (action) {
    case 'increment':
     return state + 1
    case 'decrement':
     return state - 1
    case 'reset':
     return initialState
    default:
     return state
  }
}

function App(){
  const [count, dispatch] = useReducer(reducer, initialState)

        return (
          <CountContext.Provider
            value={{ countState: count, countDispatch: dispatch}}>

            <div className='App'>
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                 
                 Count - {count}
                 <ComponentA />
                 {/*
                 <ComponentB />
                 <ComponentC1 /> 

             </header>
            </div>
          </CountContext.Provider>
          )
} */}


function App(){
    return(
            <div className='App'>
              <header className="App-header">
                <img src={logo} className="App-logo" alt="logo" />
                
                {/*
                <DataFetchingOne />   */}

                {/* <DataFetchingToo />   

                <Counta /> */}

                {/*<FocusInput /> */}

                <HookTimer />
                 
                 
             </header>
            </div>
          )
}


function App1() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

        {/* <p>
        //   Edit <code>src/App.js</code> and save to reload.
        // </p>

        // <ClassCounter />

        // <br/> 

        // <HookCounter /> 

        <HookCounterTwo /> 

        <HookCounterThree /> 

        <HookCounterFour /> 

        <HookCounterOne /> 

        <HookMouse />  

        <MouseContainer /> 

        <IntervalHookCounter /> 

        <DataFetching /> 

        <DataFetchingTwo /> 

        <DataFetchingThree />

        <UserContext.Provider value={'Efe'}>

          <ChannelContext.Provider value={'JavaScript Star'}>

            <ComponentC />

          </ChannelContext.Provider>

        </UserContext.Provider> 

        <CountOne />

        <CountTwo /> 

        <CountThree /> 

        <ParentComponent /> */}

        <p></p>



        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
