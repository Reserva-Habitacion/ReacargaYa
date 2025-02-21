import React from "react";
import LeftRow from "../../assets/Left-row";
import RightRow from "../../assets/Right-row";

export default function Pagination({ page, totalPages, onPageChange }) {
  const handlePrev = () => {
    if (page > 1) onPageChange(page - 1);
  };

  const handleNext = () => {
    if (page < totalPages) onPageChange(page + 1);
  };

  return (
    <div className="pagination">
      <button onClick={handlePrev} disabled={page === 1} className="btn">
        <LeftRow />
      </button>
      <span className="page-info">Página {page}/{totalPages}</span>
      <button onClick={handleNext} disabled={page === totalPages} className="btn">
        <RightRow />
      </button>
    </div>
  );
}
