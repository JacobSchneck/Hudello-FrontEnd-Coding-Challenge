import { useState } from "react";
import styles from "./NameForm.module.css";

const NameForm = ({name, setName, formsCompleted, setFormsCompleted}) => {
	if (formsCompleted >= 4) return null;

	const [firstname, setFirstname] = useState("");
	const [lastname, setLastname] = useState("");

  //TODO: Should validate name here 
	const submitName = (event) => {
		if (firstname === "" || lastname === "") return;
		event.preventDefault();
		if (name === "") setFormsCompleted(formsCompleted + 1);
		setName(`${firstname} ${lastname}`)
	}

	return (
		<div className="basic-container">
			<p> Please enter your name: </p>
			<form className="form">
				<input type="text" placeholder="firstname" onChange={(event) => setFirstname(event.target.value.trim())}/>
				<input type="text" placeholder="lastname" onChange={(event) => setLastname(event.target.value.trim())}/>
				<input className="submit" type="submit" value="submit" onClick={(event) => submitName(event)} />
			</form>
			<p> {name === "" ? null : name} </p>
		</div>
	);
}

export default NameForm;