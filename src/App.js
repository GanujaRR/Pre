import './App.css';

import Test1 from "./components/1-componentClass";
import Test2 from "./components/2-componentFunctional";
import QuizComponent from "./components/QuizComponent";
import Question from "./components/question";
import Answers from './components/answers';
import Results from './components/results';
import Actions from './components/actions';
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
 return (
  <div className="containter">
    <QuizComponent />
 
  </div>

 );
}

export default App;