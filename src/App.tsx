import Step1 from "./Steps/Step1";
import Step2 from "./Steps/Step2";
import Step3 from "./Steps/Step3";
import Step4 from "./Steps/Step4";
import {Routes, Route} from 'react-router-dom'

const App = () => {

  return (
    <div className="flex md:flex-row md:justify-center md:items-center h-screen">
      <Routes>
        <Route path="/" element={<Step1/>}></Route>
        <Route path="/step2" element={<Step2/>}></Route>
        <Route path="/step3" element={<Step3/>}></Route>
        <Route path="/step4" element={<Step4/>}></Route>
      </Routes>
    </div>
  )
}

export default App;
