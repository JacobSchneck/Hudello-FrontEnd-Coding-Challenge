import { useState } from "react";

import BirthdayForm from "./components/BirthdayForm/BirthdayForm";
import NameForm from "./components/NameForm/NameForm";
import PronounsForm from "./components/PronounsForm/PronounsForm";
import VerifyForm from "./components/VerifyForm/VerifyForm";  

import "./_app.css";
import "../styles/globals.css";

// TODO: Set container based on num forms filled (even, odd scheme);
const App = () => {
	const [name, setName] = useState("");
  const [formsCompleted, setFormsCompleted] = useState(0);
  const [birthday, setBirthday] = useState("");
  const [pronouns, setPronouns] = useState("");

  // Helper function to prevent overdose on props drilling
  const handleVerify = () => {
    if (formsCompleted < 4) {
      setFormsCompleted(formsCompleted + 1);
    } else {
      setName("");
      setFormsCompleted(0);
      setBirthday("");
      setPronouns("");
    }
  }

  return (
    <div className="app-container">
      <div className="color-container">
        <h1 className="app-header"> Jacob Schneck's Fancy Form </h1>

        {/* Progress Bar */}
        <div style={{
          backgroundColor: "whitesmoke",
          height: "10px",
          borderRadius: "5px",
        }}>
          <div style={{
            backgroundColor: "#B0B0B0",
            width: `${formsCompleted / 4 * 100}%`,
            borderRadius: "5px",
            height: "100%",
          }}>

          </div>
        </div>
      </div>

      <NameForm name={name} setName={setName} formsCompleted={formsCompleted} setFormsCompleted={setFormsCompleted}/> 
      <BirthdayForm birthday={birthday} formsCompleted={formsCompleted} setFormsCompleted={setFormsCompleted} setBirthday={setBirthday} />
      <PronounsForm pronouns={pronouns} formsCompleted={formsCompleted} setFormsCompleted={setFormsCompleted} setPronouns={setPronouns} />

      <VerifyForm handleVerify={handleVerify} name={name} birthday={birthday} pronouns={pronouns} formsCompleted={formsCompleted} />

    </div>
  )
}

export default App;
