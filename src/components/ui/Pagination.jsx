import React from 'react';

/** 
 * @description -
 * Call this component- <Pagination currentPage={currentPage} totalPages={totalPages} onPageChange={handlePageChange} />
 * const [currentPage, setCurrentPage] = useState(1);
    const totalPages = 100; // Example total pages

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        // Fetch data for the new page
    };
 * */
function Pagination({ currentPage, totalPages, onPageChange }) {
    const maxPagesToShow = 3; // Maximum number of pages to display
    const pageNumbers = [];
    let startPage, endPage;

    if (totalPages <= maxPagesToShow) {
        startPage = 1;
        endPage = totalPages;
    } else {
        const halfPagesToShow = Math.floor(maxPagesToShow / 2);
        if (currentPage <= halfPagesToShow) {
            startPage = 1;
            endPage = maxPagesToShow;
        } else if (currentPage + halfPagesToShow >= totalPages) {
            startPage = totalPages - maxPagesToShow + 1;
            endPage = totalPages;
        } else {
            startPage = currentPage - halfPagesToShow;
            endPage = currentPage + halfPagesToShow;
        }
    }

    for (let i = startPage; i <= endPage; i++) {
        pageNumbers.push(i);
    }

    return (
        <div className="flex justify-end mt-4">
            <nav className="relative z-0 inline-flex rounded-md shadow-sm -space-x-px" aria-label="Pagination">
                {currentPage > 1 && (
                    <button
                        onClick={() => onPageChange(currentPage - 1)}
                        className="relative inline-flex items-center px-2 py-2 rounded-l-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <span className="sr-only">Previous</span>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L15.586 11H4a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                )}
                {startPage > 1 && (
                    <button
                        onClick={() => onPageChange(1)}
                        className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${currentPage === 1 ? 'text-indigo-500 bg-indigo-100' : 'text-gray-700 hover:bg-gray-50'} focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500`}
                    >
                        1
                    </button>
                )}
                {startPage > 2 && (
                    <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">...</span>
                )}
                {pageNumbers.map((number) => (
                    <button
                        key={number}
                        onClick={() => onPageChange(number)}
                        className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${currentPage === number ? 'text-indigo-500 bg-indigo-100' : 'text-gray-700 hover:bg-gray-50'} focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500`}
                    >
                        {number}
                    </button>
                ))}
                {endPage < totalPages - 1 && (
                    <span className="relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500">...</span>
                )}
                {endPage < totalPages && (
                    <button
                        onClick={() => onPageChange(totalPages)}
                        className={`relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium ${currentPage === totalPages ? 'text-indigo-500 bg-indigo-100' : 'text-gray-700 hover:bg-gray-50'} focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500`}
                    >
                        {totalPages}
                    </button>
                )}
                {currentPage < totalPages && (
                    <button
                        onClick={() => onPageChange(currentPage + 1)}
                        className="relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50 focus:z-10 focus:outline-none focus:ring-1 focus:ring-indigo-500 focus:border-indigo-500"
                    >
                        <span className="sr-only">Next</span>
                        <svg className="h-5 w-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
                            <path fillRule="evenodd" d="M10.707 16.707a1 1 0 01-1.414 0l-6-6a1 1 0 010-1.414l6-6a1 1 0 111.414 1.414L4.414 9H16a1 1 0 110 2H4.414l6.293 6.293a1 1 0 010 1.414z" clipRule="evenodd" />
                        </svg>
                    </button>
                )}
            </nav>
        </div>
    );
}

export default Pagination;
