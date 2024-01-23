import React, { useState } from 'react';
import './App.css';
import Sidebar from './Components/Sidebar/Sidebar';
import Navbar from './Components/Navbar/Navbar';
import SearchVideo from './Pages/SearchVideo/SearchVideo';
import Home from "./Pages/Home";

function App() {

  const [submission, setsubmission] = useState(false);
  const [text, settext] = useState(false);

  const handleSubmissionChange = (value) => {
    setsubmission(value);
  };  

  const onSubmissionText = (value) => {
    settext(value);
  };


  return (
    <div>
      <Sidebar />
      <Navbar onSubmissionChange={handleSubmissionChange} onSubmissionText={onSubmissionText} />
      <div style={{ marginLeft: '225px' }}>
        {submission ? <SearchVideo text={text} /> : <Home />}
      </div>
    </div>
  );
}

export default App;
