import React, { useState } from "react";
import LeftRow from "../../assets/Left-row";
import RightRow from "../../assets/Right-row";
import Pagination from "./Pagination";

const limit = 6;

export default function Plan({ onSelect,pricePlan }) {
    console.log("plan de data =>",pricePlan);
    const [page, setPage] = useState(1);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handleSelect = (plan) => {
        setSelectedPlan(plan.PackageID); // Solo un checkbox seleccionado
        onSelect(plan.PackageID, plan.Description, plan.Price);
    };

    const offset = (page - 1) * limit;
    const totalPages = Math.ceil(pricePlan.length / limit);

    return (
        <div className="container">
            <h3 className="info-right-title">Elija una opción</h3>

            <div className="list">
                {pricePlan.slice(offset, offset + limit).map((plan) => (
                    <label key={plan.PackageID} className={`item ${selectedPlan === plan.PackageID ? "selected" : ""}`}>
                        <input
                            type="checkbox"
                            name="plan"
                            className="checkbox"
                            checked={selectedPlan === plan.PackageID}
                            onChange={() => handleSelect(plan)}
                        />
                        <span className="text">{plan.Description}</span>
                        <span className="price">${plan.Price}</span>
                    </label>
                ))}
            </div>

            {/* Paginación aquí */}
            <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
        </div>
    );
}
