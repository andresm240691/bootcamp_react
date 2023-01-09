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
import LoginFormik from './components/pure/forms/loginFormik';
import RegisterFormik from './components/pure/forms/registerFormik';
import AsyncExample from './components/pure/AsyncExample';
import ObservableExample from './components/pure/ObservableExample';
import FetchExample from './components/pure/FetchExample';
import AxiosExample from './components/pure/AxiosExample';
import Chucknorris from './components/pure/Chucknorris';
import AxiosCRUDExample from './components/pure/AxiosCRUDExample';
import TodoContainer from './components/containers/TodoContainer';
import TodoFormContainer from './components/containers/TodoFormContainer';
import FilterOptions from './components/pure/FilterOptions';
import TaskListContainer from './components/containers/TaskListContainer';


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
      {/* USO DE FORMIK*/}
      {/* <LoginFormik></LoginFormik> */}
      {/* <RegisterFormik></RegisterFormik> */}
      
      {/**************** FIAL PROYECT *******************/}
      {/* <TaskListComponent></TaskListComponent> */}
      {/**************************************************/}  
      {/* <OptionalRender></OptionalRender> */}
      {/* <AsyncExample></AsyncExample>   */}
      {/* <ObservableExample></ObservableExample> */}
      {/* <FetchExample></FetchExample> */}
      {/* <AxiosExample></AxiosExample> */}
      {/* <Chucknorris></Chucknorris> */}
      {/* <AxiosCRUDExample></AxiosCRUDExample> */}

      {/* Sessions 22, 23, 24 */}
      {/* <TodoContainer></TodoContainer>
      <TodoFormContainer></TodoFormContainer>
      <FilterOptions></FilterOptions> */}

      {/* Session TEST 22,23,24 */}
      <TaskListContainer></TaskListContainer>
    </div>
  );
}


export default App;
