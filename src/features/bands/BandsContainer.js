import React from "react";
import { useDispatch, useSelector } from "react-redux";
import BandInput from "./BandInput";
import { bandAdded, bandRemoved } from "./bandsSlice";
import Band from "./Band"

function BandsContainer() {
  const dispatch = useDispatch();
  const bands = useSelector((state) => state.bands.entities);

  function handleBandSubmit(name) {
    dispatch(bandAdded(name));
    console.log(bands)
  }

  function handleDelete(id) {
    console.log(id)
    dispatch(bandRemoved(id));
  }

  return (
    <div>
      <BandInput onBandSubmit={handleBandSubmit} />
      <ul>
        {bands.map((band) => (
          <Band band={band} key={band.id} deleter={handleDelete} />
        ))}
      </ul>
    </div>
  );
}

export default BandsContainer;
