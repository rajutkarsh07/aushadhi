import { useState } from "react";
import "./InputComponent.scss";

import Select from "react-dropdown-select";
// import User from "../../components/user/user.component";
import users from "../../data/users";
import locations from "../../data/locations";
import jobRoles from "../../data/jobRoles";

const InputComponent = () => {
  const [selectedJobRoles, setSelectedJobRoles] = useState([]);
  const [selectedLocations, setSelectedLocations] = useState([]);
  const [searchResults, setSearchResults] = useState(users);

  const handleJobChange = (selectedJobRoles) => {
    setSelectedJobRoles(selectedJobRoles);
  };

  const handleLocationChange = (selectedLocations) => {
    setSelectedLocations(selectedLocations);
  };

  const search = () => {
    if (selectedJobRoles.length == 0 && selectedLocations.length == 0) {
      setSearchResults(users);
    } else {
      const filteredUsers = users.filter(
        (user) =>
          selectedJobRoles.some((role) => role.label === user.role) &&
          selectedLocations.some((location) => location.label === user.location)
      );

      setSearchResults(filteredUsers);
    }
  };

  // console.log(searchResults);

  return (
    <div className="inputcomponent">
      <div className="searchBox">
        <div className="input">
          <label>Select job roles</label>
          <Select
            multi
            options={jobRoles}
            onChange={handleJobChange}
            className="select"
            values={selectedJobRoles}
          />
        </div>

        <div className="input">
          <label>Select Locations</label>
          <Select
            multi
            options={locations}
            onChange={handleLocationChange}
            className="select"
            values={selectedLocations}
          />
        </div>

        <a onClick={search} className="btn">
          Search Candiates
        </a>
      </div>
      <p>{`${searchResults.length} results found`}</p>
      <div className="user-list">
        {/* {searchResults.length > 0 ? (
          searchResults.map((user) => (
            <User
              key={user.id}
              name={user.name}
              email={user.email}
              role={user.role}
              link={user.linkedin}
              location={user.location}
            />
          ))
        ) : (
          <p>No results found</p>
        )} */}
      </div>
    </div>
  );
};

export default InputComponent;
