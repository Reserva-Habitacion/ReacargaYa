import React, { useState, useEffect } from "react";
import Pagination from "./Pagination";
import api from "../../api/api";

export default function Recarga({ onSelect,planRecarga }) {
console.log("plan recarga =>",planRecarga);
  const [recargas, setRecargas] = useState([]);
  const [selected, setSelected] = useState(null);
  const [page, setPage] = useState(1);

  // useEffect(() => {
  //   api.get(`/PriceRechargePhone/${selectedCountry}/${selectedCard}/${phoneNumber}`)
  //     .then((res) => {
  //       console.log("Recargas cargadas:", phoneNumber);
  //       const precios = res.data.Data[0]?.Recarga || [];
  
  //       const formateado = precios.map((price, index) => ({
  //         id: index + 1,
  //         price,
  //       }));
  //       setRecargas(formateado);
  //     })
  //     .catch((err) => {
  //       console.error("Error al cargar las recargas:", err);
  //     });
  // }, [selectedCountry]);

  const handleSelect = (itemId, price) => {
    setSelected(itemId);
    onSelect(itemId, price);
  };

  const limit = 6;
  const totalPages = Math.ceil(planRecarga.length / limit);
  const offset = (page - 1) * limit;
  const paginatedData = planRecarga.slice(offset, offset + limit);

  return (
    <div className="container">
      <h3 className="info-right-title">Elija una opción</h3>

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

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
