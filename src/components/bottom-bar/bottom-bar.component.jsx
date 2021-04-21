import React from "react";
import "./bottom-bar.styles.css";

const BottomBarComponent = ({ onChange }) => {
  return (
    <form>
      <label>
        <input
          className="search-bottom"
          type="text"
          name="name"
          placeholder="Zadej API klic"
          onChange={onChange}
        />
      </label>
    </form>
  );
};

export default BottomBarComponent;
