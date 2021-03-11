import './reset.css'
// import './App.css'
import Header from './components/Header/Header'
import Main from './components/Main/'
import {Provider} from 'react-redux'
import store from './reducers/store'

function App() {
  return (
    <Provider store={store}>
      <div >
        <Header/>
        <Main/>
      </div>
    </Provider>
  );
}

export default App;
