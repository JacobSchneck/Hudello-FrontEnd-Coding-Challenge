import styles from "./VerifyForm.module.css";

const VerifyForm = ({handleVerify, name, birthday, pronouns, formsCompleted}) => {
  if (formsCompleted < 3) return null;

  return (
    <div className={formsCompleted >= 4 ? "basic-container" : "color-container"}>
      {/* <p>
        name: {name} <br/>
        birthday: {birthday} <br/>
        pronouns: {pronouns} <br/>
      </p> */}

      <div className={styles.table}>
        <div className={styles.row}>
          <div className={styles.column}> Name </div>
          <div className={styles.column}> Birthday </div>
          <div className={styles.column}> Pronouns </div>
        </div>

        <div className={styles.row}>
          <div className={styles.column}> {name} </div>
          <div className={styles.column}> {birthday} </div>
          <div className={styles.column}> {pronouns} </div>
        </div>

      </div>
      <button onClick={() => handleVerify()}> {formsCompleted  >= 4 ? "Reset" : "Verify"} </button>
    </div>
  )
}

export default VerifyForm;