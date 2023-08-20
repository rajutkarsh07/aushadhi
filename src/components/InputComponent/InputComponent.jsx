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

  const [selectedWeight, setSelectedWeight] = useState("");
  const [selectedTimeInHospital, setSelectedTimeInHospital] = useState("");
  const [selectedNumOfMedications, setSelectedNumOfMedications] = useState("");

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

  let result = [];

  const handleSearch = () => {
    let diseaseVal = [];
    for (let i = 0; i < disease.length; i++) {
      if (disease[i] === selectedDisease[0].value) {
        diseaseVal.push(1);
      } else {
        diseaseVal.push(0);
      }
    }

    result.push(selectedGender[0].value);
    result.push(selectedAge[0].value);
    result.push(selectedWeight);
    result.push(selectedAdmissionType[0].value);
    result.push(selectedTimeInHospital);
    result.push(selectedNumOfMedications);
    result.push(selectedMaxGluSerum[0].value);
    result.push(selectedAcResult[0].value);
    result.push(selectedChange[0].value);
    result.push(selectedDiabetesMed[0].value);

    // for (let i = 0; i < disease.length; i++) {
    //   for (let j = 0; j < selectedDisease.length; j++) {
    //     if (disease[i].value === selectedDisease[j].value) {
    //       result.push(1);
    //     } else {
    //       result.push(0);
    //     }
    //   }
    // }

    for (let i = 0; i < disease.length; i++) {
      let found = false;
      for (let j = 0; j < selectedDisease.length; j++) {
        if (disease[i].value === selectedDisease[j].value) {
          found = true;
          break;
        }
      }

      if (found) {
        result.push(1.0);
      } else {
        result.push(0.0);
      }
    }

    for (let i = 0; i < race.length; i++) {
      if (race[i].value === selectedRace[0].value) {
        result.push(1.0);
      } else {
        result.push(0.0);
      }
    }

    //giving random data for now

    for (let i = 0; i < medications.length; i++) {
      result.push(-1);
    }

    // result.push(selectedRace[0].value);

    console.log(result);
  };

  // console.log(selectedAcResult);
  // console.log(selectedAge);
  // console.log(selectedAdmissionType);
  // console.log(selectedChange);
  // console.log(selectedDiabetesMed);
  // console.log(selectedDisease);
  // console.log(selectedGender);
  // console.log(selectedMaxGluSerum);
  // console.log(selectedMedications);
  // console.log(selectedRace);

  return (
    <div className="inputcomponent">
      <div className="searchBox">
        <div className="input">
          <label>Gender</label>
          <Select options={gender} onChange={handleGender} className="select" />
        </div>

        <div className="input">
          <label>Age</label>
          <Select options={age} onChange={handleAge} className="select" />
        </div>

        <div className="input">
          <label>Weight</label>
          <input
            type="number"
            className="text-input"
            onChange={(e) => setSelectedWeight(e.target.value)}
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
          <label>Time in Hospital (in days)</label>
          <input
            type="number"
            className="text-input"
            onChange={(e) => setSelectedTimeInHospital(e.target.value)}
          />
        </div>

        <div className="input">
          <label>Number of Medications</label>
          <input
            type="number"
            className="text-input"
            onChange={(e) => setSelectedNumOfMedications(e.target.value)}
          />
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
          <label>A1C Result</label>
          <Select
            options={acresult}
            onChange={handleAcResult}
            className="select"
            // values={selectedJobRoles}
          />
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
          <label>Disease</label>
          <Select
            multi
            options={disease}
            onChange={handleDisease}
            className="select"
          />
        </div>

        <div className="input">
          <label>Race</label>
          <Select options={race} onChange={handleRace} className="select" />
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

        <a onClick={handleSearch} className="btn">
          Search Candiates
        </a>
      </div>
      <div className="user-list"></div>
    </div>
  );
};

export default InputComponent;
