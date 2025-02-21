import React, { useState } from "react";
import LeftRow from "../../assets/Left-row";
import RightRow from "../../assets/Right-row";
import Pagination from "./Pagination";


const plans = [
    { id: 1, name: "Libre-Plus 1 Día", price: 65 },
    { id: 2, name: "Libre-Plus 3 Días", price: 120 },
    { id: 3, name: "Libre-Plus 5 Días", price: 170 },
    { id: 4, name: "Libre 1 Día", price: 50 },
    { id: 5, name: "Libre 3 Días", price: 100 },
    { id: 6, name: "Libre 5 Días", price: 150 },
    { id: 7, name: "Libre 7 Días", price: 200 }
];

const limit = 6;

export default function Plan({ onSelect }) {
    const [page, setPage] = useState(1);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const handleSelect = (planId) => {
        setSelectedPlan(planId);
        onSelect(planId); 
      };

    const offset = (page - 1) * limit;
    const totalPages = Math.ceil(plans.length / limit);

    
    return (
        <div className="container">
            <h3 className="info-right-title">Elija una opción</h3>

            <div className="list">
                {plans.slice(offset, offset + limit).map((plan) => (
                    <label key={plan.id} className={`item ${selectedPlan === plan.id ? "selected" : ""}`}>
                        <input
                            type="radio"
                            name="plan"
                            className="radio"
                            checked={selectedPlan === plan.id}
                            onChange={() => handleSelect(plan.id)}
                        />
                        <span className="text">{plan.name}</span>
                        <span className="price">${plan.price}</span>
                    </label>
                ))}
            </div>
                  {/* Pagination aqui */}
                  <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
        </div>
    );
}
