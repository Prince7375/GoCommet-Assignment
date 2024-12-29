import React from 'react';
import './PersonDetails.css';

const PersonDetails = ({ personNumber }) => (
  <div className="person-details-form">
    <h4>Person {personNumber}</h4>
    <input type="text" placeholder="Name" />
    <input type="number" placeholder="Age" />
    <div className="gender">
      <label>
        <input type="radio" name={`gender-${personNumber}`} value="Male" />
        Male
      </label>
      <label>
        <input type="radio" name={`gender-${personNumber}`} value="Female" />
        Female
      </label>
    </div>
  </div>
);

export default PersonDetails;
