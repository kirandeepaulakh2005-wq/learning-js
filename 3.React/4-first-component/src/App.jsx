import './App.css'
// import Button, {Dangerbutton, Successbutton} from './components/Buttons'
import DynamicComponent from './components/DynamicComponent'
import Heading from './components/Heading'
import Paragraph from './components/Paragraph'
import StudentList from './components/StudentList'
import RandomNumber from './components/RandomNumber'
import Title from './components/Title'
import Button from './components/Buttons'


function App() {
  const students=['Kiran','Jashan','Aman','Parneet','Mandeep','Manpreet'];

  const newStudents=['ram','sham','Mohan','Sohan','Seeta','Geeta'];

  const ClickMeHandler=()=>{
        console.log('ClickMeHandler Clicked');
    };
    const DeleteHandler=()=>{
        console.log('DeleteHandler Clicked');
    };
    const SaveHandler=()=>{
        console.log('SaveHandler Clicked');
    };

  return (
    <>
    <Title titleText="hello world"/>
    <Title titleText="I am kiran"/>
    <Title titleText="From MIMIT College"/>
    <Title titleText="Malout"/>
    <Button btnType='success' btnText="Click Me" handler={ClickMeHandler}/>
    <Button btnType='Danger' btnText="Delete" handler={DeleteHandler}/>
    <Button btnText="Save" handler={SaveHandler}/>


    <Heading />
    <RandomNumber/>
    <RandomNumber/>
    <RandomNumber/>
    <Paragraph/>
    {/* <Dangerbutton/>
    <Successbutton/> */}
    <DynamicComponent/>
    <StudentList students={students}/>
    <StudentList students={newStudents} />
    </>
  )
}
    
export default App;
