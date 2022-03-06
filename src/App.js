// import { arrayEvery } from './js';
import { deepCopy } from './myjs';

function App() {
  // function Counter() {
  //   this.sum = 0;
  //   this.count = 0;
  // }
  // console.log(arrayEvery.myForEach);
  // Counter.prototype.add = arrayEvery.myForEach;
  // const obj = new Counter();
  // obj.add([2, 5, 9]);
  // console.log(obj.sum, 'ppppppppp');

  // const p = [22, 4, , [0, [ , 6]]];
  // console.log(arrayEvery.forFlat(p, 2));
  //console.log(arrayEvery.deleteSameOne([2, 2, 2, 8, 2, 44, 22, 'eee']));
  // console.log(
  //   arrayEvery.deleteSame([2, 2, 2, 8, 2, 44, ';;', ';;', 22, 'eee']),
  // );
  // const double = (x) => x + x;
  // const triple = (x) => 3 * x;
  // const multiply6 = arrayEvery.pipe(double, triple);
  // console.log(multiply6(6), '888888888');

  const originObj = { a: 'a', b: 'b', c: [1, 2, 3], d: { dd: 'dd' } };
  const cloneObj = deepCopy(originObj);
  console.log(originObj, '88800000');
  console.log(cloneObj);
  return (
    <div className="App">
      <header className="App-header"></header>
    </div>
  );
}

export default App;
