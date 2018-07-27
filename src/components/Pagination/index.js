import React from 'react';

export default ({
                    colPages,
                    currentPage,
                    handlePagination,
                }) =>{

    let pageLink = [];

    for(let i = 0; i < colPages; i++){
        pageLink.push(
            <li className={`page-item ${currentPage === i ? 'active' : ''}`}
                key={i}
            ><a
                className="page-link"
                href="#"
                onClick={() => {
                    return handlePagination(i - currentPage )
                }}
            >{i + 1}</a></li>
        )
    }

    return(
        <nav aria-label="Page navigation example" className="d-flex justify-content-center">
            <ul className="pagination">
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Previous"
                       onClick={() => handlePagination(-1)}
                    >
                        <span aria-hidden="true">&laquo;</span>
                        <span className="sr-only">Previous</span>
                    </a>
                </li>
                {pageLink}
                <li className="page-item">
                    <a className="page-link" href="#" aria-label="Next"
                       onClick={() => handlePagination(1)}
                    >
                        <span aria-hidden="true">&raquo;</span>
                        <span className="sr-only">Next</span>
                    </a>
                </li>
            </ul>
        </nav>
    )

}
