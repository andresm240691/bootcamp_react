import logo from './logo.svg';
import './App.css';
import Greeting from './components/pure/greeting';
import GreetingFunction from './components/pure/greetingFunction';
import TaskComponent from './components/pure/task';
import TaskListComponent from './components/containers/task_list';
import Ejemplo from './hooks/Ejemplo';
import Ejemplo2 from './hooks/Ejemplo2';
import Ejemplo3 from './hooks/Ejemplo3';
import Ejemplo4 from './hooks/Ejemplo4';
import GreetingStyle from './components/pure/GreetingStyle';
import Clock from './components/pure/Clock';
import Father from './components/containers/Father'
import OptionalRender from './components/pure/OptionalRender';


function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" /> */}
        {/* Componente Greeting*/}
        {/* <Greeting name={"Andres"}></Greeting> */}
        {/* <GreetingFunction name="Andres Function"></GreetingFunction> */}
        {/* <TaskListComponent></TaskListComponent> */}
        {/* <Ejemplo></Ejemplo> */}
        {/* <Ejemplo3></Ejemplo3> */}
        {/* <Ejemplo4 name="ANDRES">
          <h3>
            Contenido del props.children
          </h3>
        </Ejemplo4> */}
        {/* <GreetingStyle></GreetingStyle> */}
        {/* <Clock></Clock> */}
      {/* </header> */}
      {/* <Father></Father> */}
      <TaskListComponent></TaskListComponent>
      {/* <OptionalRender></OptionalRender> */}
    </div>
  );
}


export default App;
