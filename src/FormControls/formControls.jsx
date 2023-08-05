import { useState } from "react";
import "./FormControls.css";

const FormControls = () => {
  const [WeightValue, setWeightValue] = useState();
  const [HeightValue, setHeightValue] = useState();
  const [WidthValue, setWidthValue] = useState();
  const [DepthValue, setDepthValue] = useState();
  const [CostValue, setCostValue] = useState();
  const [msgValue, setmsgValue] = useState();

  const fetchData = async () => {
    var jsonData = {
      theParcelContract: {
        Weight: WeightValue,
        Height: HeightValue,
        Width: WidthValue,
        Depth: DepthValue,
      },
    };

    try {
      fetch("https://localhost:7169/api/v1/ParcelCostCalculation/ParcelCost", {
        method: "POST",
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
        mode: "cors",
        body: JSON.stringify(jsonData),
      })
        .then((response) => response.json())
        .then(function (parsedData) {
          setCostValue(parsedData.cost);
          setmsgValue(parsedData[0]);
        });
    } catch (error) {
      console.log(error);
    }
  };

  const ResetData = () => {
    setWeightValue("");
    setHeightValue("");
    setWidthValue("");
    setDepthValue("");
    setCostValue("");
    setmsgValue("");
  };

  const handleKeyPress = (e) => {
    const key = e.key;
    if (!/^[0-9]$/.test(key)) {
      e.preventDefault();
    }
  };

  return (
    <div className="full-screen-div" style={{ backgroundColor: "black" }}>
      <nav className="container mt-n5 ">
        <div
          className="  rounded-3 d-flex align-items-center justify-content-center shadow-lg"
          style={{ height: "60px", backgroundColor: "red" }}
        >
          <h1
            className="  text-uppercase"
            style={{
              color: "black",
              fontWeight: "bold",
              marginTop: "20px",
              fontFamily: "sans-serif",
            }}
          >
            Parcel Cost Calculation
          </h1>
        </div>
      </nav>

      <div className="container card__placeholder  rounded-2  align-items-center justify-content-center shadow-lg">
        <label htmlFor="Weight" style={{ width: "24px" }}>
          Weight:{" "}
        </label>
        <input
          type="number"
          id="Weight"
          value={WeightValue}
          onChange={(e) => setWeightValue(e.target.value)}
          onKeyPress={handleKeyPress}
          min="1"
          style={{
            marginTop: "10px",
            marginRight: "20px",
            marginBottom: "30px",
            marginLeft: "40px",
          }}
        ></input>
        <br />
        <label htmlFor="Height" style={{ width: "24px" }}>
          Height:{" "}
        </label>
        <input
          type="number"
          id="Height"
          value={HeightValue}
          onChange={(e) => setHeightValue(e.target.value)}
          onKeyPress={handleKeyPress}
          min="1"
          style={{
            marginTop: "10px",
            marginRight: "20px",
            marginBottom: "30px",
            marginLeft: "40px",
          }}
        ></input>
        <br />
        <label htmlFor="Width" style={{ width: "24px" }}>
          Width:{" "}
        </label>
        <input
          type="number"
          id="Width"
          value={WidthValue}
          onChange={(e) => setWidthValue(e.target.value)}
          onKeyPress={handleKeyPress}
          min="1"
          style={{
            marginTop: "10px",
            marginRight: "20px",
            marginBottom: "30px",
            marginLeft: "40px",
          }}
        ></input>
        <br />
        <label htmlFor="Depth" style={{ width: "24px" }}>
          Depth:{" "}
        </label>
        <input
          type="number"
          id="Depth"
          value={DepthValue}
          onChange={(e) => setDepthValue(e.target.value)}
          onKeyPress={handleKeyPress}
          min="1"
          style={{
            marginTop: "10px",
            marginRight: "20px",
            marginBottom: "30px",
            marginLeft: "40px",
          }}
        ></input>
        <br />
        <div className="d-flex justify-content-center">
          <button
            className="btn  btn-sm mt-auto fw-bold w-20"
            onClick={fetchData}
            style={{
              backgroundColor: "hsl(104, 74%, 34%)",
              color: "black",
              marginRight: "5px",
            }}
          >
            Calculate
          </button>

          <button
            className="btn btn-sm mt-auto fw-bold w-20"
            onClick={ResetData}
            style={{ backgroundColor: "hsl(2, 87%, 52%)", color: "black" }}
          >
            Reset
          </button>
        </div>
        <br />

        <div className="d-flex justify-content-center">
          <input
            type="text"
            id="Cost"
            readOnly
            placeholder="Cost"
            value={CostValue ? CostValue : msgValue}
            style={{ width: "300px" }}
          ></input>
        </div>
      </div>
    </div>
  );
};
export default FormControls;
