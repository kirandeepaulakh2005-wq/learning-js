import './App.css'
import {Dangerbutton, Successbutton} from './components/Buttons'
import DynamicComponent from './components/DynamicComponent'
import Heading from './components/Heading'
import Paragraph from './components/Paragraph'
import StudentList from './components/StudentList'
import RandomNumber from './components/RandomNumber'
function App() {

  return (
    <div>
    <Heading />
    <RandomNumber/>
    <RandomNumber/>
    <RandomNumber/>
    <Paragraph/>
    <Dangerbutton/>
    <Successbutton/>
    <DynamicComponent/>
    <StudentList/>
    </div>
  )
}
    
export default App
