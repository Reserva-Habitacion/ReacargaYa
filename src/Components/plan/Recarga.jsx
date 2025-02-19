import React, { useState } from "react";


export default function Recarga() {
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);

  const limit = 6; // Número de elementos por página
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
  const offset = (page - 1) * limit;
  const paginatedData = data.slice(offset, offset + limit);

  return (
    <div className="container">
      <h3>Elija una opción</h3>

      {/* Grid de tarjetas */}
      <div className="grid">
        {paginatedData.map((item) => (
          <button
            key={item.id}
            className={`cardRecarga ${selected === item.id ? "selected" : ""}`}
            onClick={() => setSelected(item.id)}
          >
            RD${item.price}
          </button>
        ))}
      </div>

      {/* Paginación */}
      <div className="pagination">
        <button
          className="nav-btn"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
           ⬅
        </button>
        <span>Página {page}/{Math.ceil(data.length / limit)}</span>
        <button
          className="nav-btn"
          disabled={offset + limit >= data.length}
          onClick={() => setPage(page + 1)}
        >
            ➡
        </button>
      </div>
    </div>
  );
}
