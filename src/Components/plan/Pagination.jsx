import LeftRow from "../../assets/Left-row";
import RightRow from "../../assets/Right-row";
const Pagination = () =>{
    return (
        
        <>
             <div className="pagination">
                <button onClick={handlePrev} disabled={page === 1} className="btn">
                    <LeftRow />

                </button>
                <span className="page-info">Página {page}/{totalPages}</span>
                <button onClick={handleNext} disabled={page === totalPages} className="btn">
                    <RightRow />
                </button>
            </div>
        </>
    )
}

export default Pagination