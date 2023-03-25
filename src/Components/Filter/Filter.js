import React from "react";
import Gender from "./Category/Gender";
import Species from "./Category/Species";
import Status from "./Category/Status";

const Filter = ({
  setStatus,
  updatePageNumber = () => {},
  setGender,
  setSpecies,
}) => {
  let clear = () => {
    setStatus("");
    updatePageNumber("");
    setGender("");
    setSpecies("");
    window.location.reload(false);
  };
  return (
    <div className="col-lg-3 col-12 mb-5">
      <div className="text-center fw-bold fs-4 mb-2"> Filters</div>

      <div
        onClick={clear}
        style={{ cursor: "pointer" }}
        className="text-center text-primary text-decoration-underline mb-4"
      >
        Clear Filters
      </div>
      <div className="accordion" id="accordionExample">
        <Status setPageNumber={updatePageNumber} setStatus={setStatus} />
        <Species setSpecies={setSpecies} setPageNumber={updatePageNumber} />
        <Gender setGender={setGender} setPageNumber={updatePageNumber} />
      </div>
    </div>
  );
};

export default Filter;
