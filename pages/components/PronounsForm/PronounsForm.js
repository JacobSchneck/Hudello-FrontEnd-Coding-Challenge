import { useState } from "react";
import styles from "./PronounsForm.module.css"

const PronounsForm = ({pronouns, formsCompleted, setFormsCompleted, setPronouns}) => {
  if (formsCompleted < 2 || formsCompleted >= 4) return null;

  const [tempPronouns, setTempPronouns] = useState("");

  const submitPronouns = (event) => {
    event.preventDefault();  
    if (pronouns === "") setFormsCompleted(formsCompleted + 1);
	 setPronouns(tempPronouns);
  }

  return (
    <div className="basic-container">
      <p> Please enter your pronouns: </p>
      <form >
			<div className={styles.form}>
				<div>
					<label for="He/Him"> He/Him </label><br/>
					<input type="radio" id="He/Him" name="pronouns" value="He/Him" onChange={ (event) => setTempPronouns(event.target.value)}/>
				</div>	

				<div>
					<label for="She/Her"> She/Her </label><br/>
					<input type="radio" id="She/Her" name="pronouns" value="She/Her" onChange={ (event) => setTempPronouns(event.target.value)}/>
				</div>

				<div>
					<label for="They/Them"> They/Them </label><br/>
					<input type="radio" id="They/Them" name="pronouns" value="They/Them" onChange={ (event) => setTempPronouns(event.target.value)}/>
				</div>
			</div>
			<input type="submit" value="submit" onClick={ event => submitPronouns(event)}/>
      </form>
		<p> {pronouns === "" ? null : pronouns} </p>
    </div>
  );
}

export default PronounsForm;