import React, { useState } from "react";
import Pagination from "./Pagination";


export default function Recarga({ onSelect,price }) {
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);

  const handleSelect = (itemId,price) => {
    setSelected(itemId);
    onSelect(itemId,price);
  };

  const limit = 6; 
  const data = [
    { id: 1, price: 50 },
    { id: 2, price: 100 },
    { id: 3, price: 150 },
    { id: 4, price: 200 },
    { id: 5, price: 150 },
    { id: 6, price: 200 },
    { id: 7, price: 250 },
    { id: 8, price: 300 },
    { id: 9, price: 350 },
    { id: 10, price: 400 },
  ];

  // Calcular el offset y obtener los datos de la página actual
  const totalPages = Math.ceil(data.length / limit);
  const offset = (page - 1) * limit;
  const paginatedData = data.slice(offset, offset + limit);

  return (
    <div className="container">
      <h3 className="info-right-title">Elija una opción</h3>

      {/* Grid de tarjetas */}
      <div className="grid">
        {paginatedData.map((item) => (
          <button
            key={item.id}
            className={`cardRecarga ${selected === item.id ? "selected" : ""}`}
            onClick={() => handleSelect(item.id, item.price)}
          >
            RD${item.price}
          </button>
        ))}
      </div>

      {/* Paginación */}
      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
