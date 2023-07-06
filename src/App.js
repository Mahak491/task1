import React, { useState } from "react";
import './App.css'

function App() {
  const [listA, setListA] = useState("");
  const [listB, setListB] = useState("");
  const [result, setResult] = useState({
    onlyInA: [],
    onlyInB: [],
    inBoth: [],
    combined: [],
  });

  const computeDifferences = () => {
    const arrayA = listA.split("\n").map(item => item.trim());
    const arrayB = listB.split("\n").map(item => item.trim());

    const onlyInA = arrayA.filter(item => !arrayB.includes(item));
    const onlyInB = arrayB.filter(item => !arrayA.includes(item));
    const inBoth = arrayA.filter(item => arrayB.includes(item));
    const combined = [...new Set([...arrayA, ...arrayB])];

    setResult({
      onlyInA,
      onlyInB,
      inBoth,
      combined,
    });
  };

  return (
    <div className="container">
      <h1>List Difference Finder</h1>
      <div>
        <label>List A:</label>
        <textarea value={listA} onChange={e => setListA(e.target.value)} />
      </div>
      <div>
        <label>List B:</label>
        <textarea value={listB} onChange={e => setListB(e.target.value)} />
      </div>
      <div className="button-container">
      <button  onClick={computeDifferences}>Compute</button>
      </div>
      <div>
        <h2>Results:</h2>
        <div>
          <h3 className="results-container ">Items present only in A:</h3>
          <ul>
            {result.onlyInA.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="results-container">Items present only in B:</h3>
          <ul>
            {result.onlyInB.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="results-container">Items present in both A and B:</h3>
          <ul>
            {result.inBoth.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
        <div>
          <h3 className="results-container">Combined unique items:</h3>
          <ul>
            {result.combined.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}

export default App;
