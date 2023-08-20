import { useState } from "react";
import "./InputComponent.scss";

import Select from "react-dropdown-select";
// import User from "../../components/user/user.component";

import acresult from "../../data/acresult";
import admissionType from "../../data/admissionType";
import age from "../../data/age";
import change from "../../data/change";
import diabetesMed from "../../data/diabetesMed";
import disease from "../../data/disease";
import gender from "../../data/gender";
import maxGluSerum from "../../data/maxGluSerum";
import medications from "../../data/medications";
import race from "../../data/race";

const InputComponent = () => {
  const [selectedDisease, setSelectedDisease] = useState([]);
  const [selectedMedications, setSelectedMedications] = useState([]);

  const [selectedAcResult, setSelectedAcResult] = useState("");
  const [selectedAdmissionType, setSelectedAdmissionType] = useState("");
  const [selectedAge, setSelectedAge] = useState("");
  const [selectedChange, setSelectedChange] = useState("");
  const [selectedDiabetesMed, setSelectedDiabetesMed] = useState("");
  const [selectedGender, setSelectedGender] = useState("");
  const [selectedMaxGluSerum, setSelectedMaxGluSerum] = useState("");
  const [selectedRace, setSelectedRace] = useState("");

  const handleAcResult = (selectedAcResult) => {
    setSelectedAcResult(selectedAcResult);
  };

  const handleAdmissionType = (selectedAdmissionType) => {
    setSelectedAdmissionType(selectedAdmissionType);
  };

  const handleAge = (selectedAge) => {
    setSelectedAge(selectedAge);
  };

  const handleChange = (selectedChange) => {
    setSelectedChange(selectedChange);
  };

  const handleDiabetesMed = (selectedDiabetesMed) => {
    setSelectedDiabetesMed(selectedDiabetesMed);
  };

  const handleGender = (selectedGender) => {
    setSelectedGender(selectedGender);
  };

  const handleMaxGluSerum = (selectedMaxGluSerum) => {
    setSelectedMaxGluSerum(selectedMaxGluSerum);
  };

  const handleRace = (selectedRace) => {
    setSelectedRace(selectedRace);
  };

  const handleDisease = (selectedDisease) => {
    setSelectedDisease(selectedDisease);
  };

  const handleSelectedMedications = (selectedMedications) => {
    setSelectedMedications(selectedMedications);
  };

  return (
    <div className="inputcomponent">
      <div className="searchBox">
        <div className="input">
          <label>A1C Result</label>
          <Select
            options={acresult}
            onChange={handleAcResult}
            className="select"
            // values={selectedJobRoles}
          />
        </div>

        <div className="input">
          <label>Admission Type</label>
          <Select
            options={admissionType}
            onChange={handleAdmissionType}
            className="select"
          />
        </div>

        <div className="input">
          <label>Age</label>
          <Select options={age} onChange={handleAge} className="select" />
        </div>

        <div className="input">
          <label>Change</label>
          <Select options={change} onChange={handleChange} className="select" />
        </div>

        <div className="input">
          <label>Have you taken anti-diabetes medicine?</label>
          <Select
            options={diabetesMed}
            onChange={handleDiabetesMed}
            className="select"
          />
        </div>

        <div className="input">
          <label>Gender</label>
          <Select options={gender} onChange={handleGender} className="select" />
        </div>

        <div className="input">
          <label>Max Glu Serum</label>
          <Select
            options={maxGluSerum}
            onChange={handleMaxGluSerum}
            className="select"
          />
        </div>

        <div className="input">
          <label>Race</label>
          <Select options={race} onChange={handleRace} className="select" />
        </div>

        <div className="input">
          <label>Disease</label>
          <Select
            multi
            options={disease}
            onChange={handleDisease}
            className="select"
          />
        </div>

        <div className="input">
          <label>Selected Medications</label>
          <Select
            multi
            options={medications}
            onChange={handleSelectedMedications}
            className="select"
          />
        </div>

        <a onClick={() => console.log("meow")} className="btn">
          Search Candiates
        </a>
      </div>
      <div className="user-list"></div>
    </div>
  );
};

export default InputComponent;
