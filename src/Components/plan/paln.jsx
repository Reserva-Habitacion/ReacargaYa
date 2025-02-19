import React, { useState } from "react";
import LeftRow from "../../assets/Left-row";
import RightRow from "../../assets/Right-row";


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

export default function Plan() {
    const [page, setPage] = useState(1);
    const [selectedPlan, setSelectedPlan] = useState(null);

    const offset = (page - 1) * limit;
    const totalPages = Math.ceil(plans.length / limit);

    const handlePrev = () => {
        if (page > 1) setPage(page - 1);
    };

    const handleNext = () => {
        if (page < totalPages) setPage(page + 1);
    };

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
                            onChange={() => setSelectedPlan(plan.id)}
                        />
                        <span className="text">{plan.name}</span>
                        <span className="price">${plan.price}</span>
                    </label>
                ))}
            </div>

            <div className="pagination">
                <button onClick={handlePrev} disabled={page === 1} className="btn">
                    <LeftRow />

                </button>
                <span className="page-info">Página {page}/{totalPages}</span>
                <button onClick={handleNext} disabled={page === totalPages} className="btn">
                    <RightRow />
                </button>
            </div>
        </div>
    );
}
