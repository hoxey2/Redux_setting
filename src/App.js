import './App.css';
import { useDispatch, useSelector } from 'react-redux';

function App() {

  const 체중 = useSelector((state) => state)
  const dispatch = useDispatch()

  return (
    <div className="App">
    <h1>내 몸무게는: {체중}kg</h1>
    <button onClick={() => {dispatch({type: '증가'})}}>더하기</button>
    <button onClick={() => {dispatch({type: '감소'})}}>빼기</button>
    </div>
  );
}

export default App;
