import React, { useEffect, useRef, useState } from "react";

function App() {
  const country = useRef("all");

  const [apiData, setApiData] = useState([]);
  const [countryChanged, setCountryChanged] = useState(false);
  const date = new Date();

  useEffect(() => {
    const getData = () => {
      fetch(`https://coronavirus-19-api.herokuapp.com/${country.current}`)
        .then((res) => res.json())
        .then((result) => {
          setApiData(result);
        });
    };

    getData();
  }, [countryChanged]);

  return (
    <div className="app">
      <main>
        <div className="search-box">
          <div className="covid-svg ico">
            <img
              src="images/covid-19.svg"
              className="nav-icon"
              alt="covid-icon"
            />
          </div>
          <div className="search-input">
            <input
              type="text"
              className="search-input"
              onChange={(e) => {
                country.current = "countries/" + e.target.value;
              }}
            />
          </div>
          <div
            className="search-icon ico"
            onClick={() => {
              setCountryChanged(!countryChanged);
            }}
          >
            <img
              src="images/search.svg"
              className="nav-icon"
              alt="search-icon"
            />
          </div>
          <div className="location-icon ico">
            <img
              src="images/location.svg"
              className="nav-icon"
              alt="location-icon"
            />
          </div>
        </div>

        {typeof apiData.cases !== "undefined" ? (
          <div className="container">
            <div className="country-header">{apiData.country ?? "Global"}</div>
            <div className="current-time">
              {date.toLocaleString("default", { month: "long" })}{" "}
              {date.getDate()},{date.getFullYear()}
            </div>
            <div className="total-cases">
              <div className="tc-header">Total Cases</div>
              <div className="tc-cases">{apiData.cases}</div>
            </div>
            <div className="card active-cases">
              <div className="card-header">Active Cases</div>
              <div className="card-body">{apiData.active ?? "n/a"}</div>
            </div>
            <div className="card recovered-cases">
              <div className="card-header">Recovered</div>
              <div className="card-body">{apiData.recovered}</div>
            </div>
            <div className="card death-cases">
              <div className="card-header">Death</div>
              <div className="card-body">{apiData.deaths}</div>
            </div>
          </div>
        ) : (
          <h2>Loading</h2>
        )}

        <div className="footer">Made with ❤️️ by tsensei</div>
      </main>
    </div>
  );
}

export default App;
