import React, { useState, useEffect } from "react";
import { faCaretDown, faCaretUp } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./Column.css";

function Column({ title, data, currentSort, onSort }) {
  const [sortIndicator, setSortIndicator] = useState(null);
  useEffect(() => {
    setSortIndicator(currentSort);
  }, [currentSort]);

  const changeState = () => {
    let newSortIndicator = sortIndicator;

    if (sortIndicator === null) {
      newSortIndicator = "asc";
    } else if (sortIndicator === "asc") {
      newSortIndicator = "desc";
    } else {
      newSortIndicator = null;
    }

    onSort(data, newSortIndicator);

    setSortIndicator(newSortIndicator);
  };
  return (
    <th onClick={changeState}>
      {title}
      <div className="arrow-order">
        <FontAwesomeIcon
          className={
            sortIndicator === "asc" ? "fa-carret-up-active" : "fa-carret-up"
          }
          icon={faCaretUp}
        />
        <FontAwesomeIcon
          className={
            sortIndicator === "desc"
              ? "fa-carret-down-active"
              : "fa-carret-down"
          }
          icon={faCaretDown}
        />
      </div>
    </th>
  );
}
export default Column;
