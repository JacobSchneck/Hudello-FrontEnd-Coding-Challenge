import { useState } from "react";
import styles from "./BirthdayForm.module.css";

const reorganizeBirthday = (birthday) => {
  return `${birthday.slice(5,7)}-${birthday.slice(8)}-${birthday.slice(0, 4)}`;
}

const BirthdayForm = ({formsCompleted, setFormsCompleted, birthday, setBirthday}) => {
	if (formsCompleted < 1 || formsCompleted >= 4) return null;

	const [tempBirthday, setTempBirthday] = useState("");

  // TODO: Should validate Birthday here 
  const submitBirthday = (event) => {
    event.preventDefault();
    if (tempBirthday === "") return;
    if (birthday === "") setFormsCompleted(formsCompleted + 1);
    setBirthday(tempBirthday);
  }

  return (
    <div className="color-container">
      <p> Hello {name}. Please enter your birthday: </p>
      <form className="form">
        <input type="date" min="1900-01-01" onChange={(event) => setTempBirthday(reorganizeBirthday(event.target.value))}/>
        <input type="submit" value="Submit" onClick={(event) => submitBirthday(event)}/>
      </form>
		<p> {birthday === "" ? null : birthday} </p>
    </div>
  );
}

export default BirthdayForm;