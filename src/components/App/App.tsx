import './App.css';

// Import our other base parts of the App
import Title from '../Title/Title'
import Summary from '../Summary/Summary'
import Content from '../Content/Content'
import Contact from '../Contact/Contact'

// Import our logo
import logo from "../../assets/Kamon_Maru_ni_Kikyo.png"

// Import our data
import resumeData from "../../resume.json"

// Pull out our different fields from the JSON data
const {
    name,
    summaries,
    attributes,
    activities,
    contact
} = resumeData


function App() {
  return (
    <div id="app" className='flex-vertical' >
      <Title logo={logo} logoAltText='Family Crest' name={name}/>
      <Summary summaries={ summaries } />
      <Content 
        attributes={ attributes } 
        activities={ activities }
        />
      <Contact items={contact}/>
    </div>
  );
}

export default App;
