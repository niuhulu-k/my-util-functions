import { arrayEvery } from './js';

function App() {
  function Counter() {
    this.sum = 0;
    this.count = 0;
  }
  console.log(arrayEvery.myForEach);
  Counter.prototype.add = arrayEvery.myForEach;
  const obj = new Counter();
  obj.add([2, 5, 9]);
  console.log(obj.sum, 'ppppppppp');

  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
