import React, { useState } from 'react';
import './css/options.css';

function Options() {
  const [inp, setInp] = useState(0);
  const [values, setValues] = useState('');
  const [sd, setSd] = useState([]);

  const changeInpt = (e) => {
    setInp(e.target.value);
  };
  const changeValue = (e) => {
    if (values.includes(e) == true) {
      let obj = values.replace(e, ' ');
      setSd(obj);
    } else {
      let word = values + ' ' + e;
      setValues(word);
    }
  };
  console.log(values);
  console.log(sd);

  const options = ['Block', 'Disabled', 'Large', 'Loading', 'Small', 'X-Large', 'X-Small'];
  return (
    <div className="options">
      <h2 className="title">Options</h2>
      {options &&
        options.map((item, index) => (
          <div onClick={() => changeValue(item)} key={index} className="checks">
            <input type="checkbox" className="checkbox" id={item} />
            <label htmlFor={item} className="label">
              {item}
            </label>
          </div>
        ))}
      <div className="items">
        <input
          className="range"
          type="range"
          value={inp}
          onChange={changeInpt}
          placeholder="Color"
        />
        <input list="color" className="datalist" />
        <datalist id="color">
          <option>Grey</option>
          <option>Red</option>
          <option>Blue</option>
        </datalist>
      </div>
    </div>
  );
}

export default Options;
