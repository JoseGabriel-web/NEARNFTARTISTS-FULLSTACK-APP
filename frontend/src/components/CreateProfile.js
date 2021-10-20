import { useState } from "react";
import { becomeAnArtist } from "../utils";

const CreateProfile = ({ wallet }) => {
  const [profesionalBackground, setProfesionalBackground] = useState();
  const [hiringCost, setHiringCost] = useState();
  const [emailContact, setEmailContact] = useState();

  const handleSubmit = () => {
    becomeAnArtist(wallet, {
      profesionalBackground,
      hiringCost: parseInt(hiringCost),
      emailContact,
    });
  };

  return (
    <div className="createProfile">
      <h1>Fill the Form An become an nft artist</h1>
      <div className="form-container">
        <label>Email:</label>
        <input
          onChange={(e) => {
            setEmailContact(e.target.value);
          }}
          type="text"
          name="emailContact"
          value={emailContact}
          placeholder="Please insert your email address:"
          required
        />
        <label>Profesional background:</label>
        <input
          onChange={(e) => {
            setProfesionalBackground(e.target.value);
          }}
          required
          type="text"
          name="profesionalBackground"
          value={profesionalBackground}
          placeholder="Here you can let people know of your previous work:"
        />
        <label>Hring cost:</label>
        <input
          onChange={(e) => {
            setHiringCost(e.target.value);
          }}
          required
          type="number"
          name="hiringCost"
          value={hiringCost}
          placeholder="This will be the amount someone would need to pay to hire you:"
        />
      </div>
      <button className="submit-button" onClick={() => handleSubmit()}>Submit</button>
    </div>
  );
};

export default CreateProfile;
