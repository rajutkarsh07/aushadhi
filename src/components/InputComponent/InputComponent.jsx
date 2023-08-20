/* eslint-disable react/jsx-key */
import { useState } from "react";
import "./InputComponent.scss";

import assured from "../../images/flipkartassured.png";

import Select from "react-dropdown-select";
import { HashLoader } from "react-spinners";

import acresult from "../../data/acresult";
import admissionType from "../../data/admissionType";
import age from "../../data/age";
import change from "../../data/change";
import diabetesMed from "../../data/diabetesMed";
import disease from "../../data/disease";
import gender from "../../data/gender";
import maxGluSerum from "../../data/maxGluSerum";
import medDetails from "../../data/medDeatils";
import medications from "../../data/medications";
import race from "../../data/race";

import axios from "axios";

const InputComponent = () => {
  const [loading, setLoading] = useState(false);

  const [selectedDisease, setSelectedDisease] = useState([]);
  const [selectedMedications, setSelectedMedications] = useState([]);
  const [selectedType, setSelectedType] = useState([]);

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

  const [medicine, setMedicine] = useState([]);

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
  const handleSelectedType = (newValue) => {
    const newArray = [...selectedType, newValue[0]]; // Replace 'newValue' with your actual value
    console.log(newArray);
    setSelectedType(newArray);
  };

  let result = [];

  const handleSearch = async () => {
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
      let flag = false;
      for (let j = 0; j < selectedMedications.length; j++) {
        if (selectedMedications[j] == medications[i]) {
          result.push(selectedType[j].value);
          flag = true;
          break;
        }
      }
      if (flag == false) {
        result.push(-1.0);
      }
    }

    // result.push(selectedRace[0].value);
    // const floatResult = result.map((value) => parseFloat(value));
    const floatResult = result.map((value) => value * 1.0);

    console.log(floatResult);

    try {
      const config = {
        headers: {
          "content-type": "application/json",
        },
      };
      setLoading(true);
      const { data } = await axios.post(
        "https://aushadhi-services.onrender.com/predict",
        {
          new: floatResult,
        },
        config
      );
      console.log(data);
      setMedicine(data.indices);

      setLoading(false);
    } catch (err) {
      setLoading(false);
      console.error(err);
    }
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
      <h2>Fill the form to get personalised medicine recommendation</h2>
      <div className="searchBox">
        <div className="input">
          <label>Gender</label>
          <Select
            options={gender}
            onChange={handleGender}
            className="select"
            color="#a1af82"
          />
        </div>

        <div className="input">
          <label>Age</label>
          <Select
            options={age}
            onChange={handleAge}
            className="select"
            color="#a1af82"
          />
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
            color="#a1af82"
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
          <label>Have you taken Glucose tolerence test?</label>
          <Select
            options={maxGluSerum}
            onChange={handleMaxGluSerum}
            className="select"
            color="#a1af82"
          />
        </div>

        <div className="input">
          <label>Have you taken A1C Test?</label>
          <Select
            options={acresult}
            onChange={handleAcResult}
            className="select"
            color="#a1af82"
            // values={selectedJobRoles}
          />
        </div>

        <div className="input">
          <label>Did you change your earlier medications?</label>
          <Select
            options={change}
            onChange={handleChange}
            className="select"
            color="#a1af82"
          />
        </div>

        <div className="input">
          <label>Have you taken anti-diabetes medicine?</label>
          <Select
            options={diabetesMed}
            onChange={handleDiabetesMed}
            className="select"
            color="#a1af82"
          />
        </div>

        <div className="input">
          <label>Disease you are diagnosed with?</label>
          <Select
            multi
            options={disease}
            onChange={handleDisease}
            className="select"
            color="#a1af82"
          />
        </div>

        <div className="input">
          <label>Race</label>
          <Select
            options={race}
            onChange={handleRace}
            className="select"
            color="#a1af82"
          />
        </div>

        <div className="input">
          <label>Medications taken for diabetes</label>
          <Select
            multi
            options={medications}
            onChange={handleSelectedMedications}
            className="select"
            color="#a1af82"
          />
        </div>
        <label>Specify doses for selected medicine?</label>
        <div className="input">
          {selectedMedications?.map((val) => (
            <div>
              <label>{val.label}</label>
              <Select
                options={medDetails}
                onChange={handleSelectedType}
                className="select"
                color="#a1af82"
              />
            </div>
          ))}
        </div>

        <a onClick={handleSearch} className="btn">
          Search Medicines
        </a>
      </div>
      <div className="loader">
        {loading ? <HashLoader /> : ""}
        <h3>Recommended Medicines</h3>
      </div>
      <div className="med">
        {medicine?.map((item, i) => (
          <div className="box">
            {i + 1}. {item}
            <a href="#">Buy this on Flipkart</a>
            <img src={assured} alt="flipkart Assured" />
          </div>
        ))}
      </div>
    </div>
  );
};

export default InputComponent;
