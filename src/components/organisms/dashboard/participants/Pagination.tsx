import { FC } from 'react'

interface IPagination {
    data: {
        totalPages: number;
    }
    start: number;
    end: number;
    page: number;
    setStart: (start: number) => void;
    setEnd: (end: number) => void;
    setPage: (page: number) => void;
}

const Pagination: FC<IPagination> = ({data, start, end, page, setStart, setEnd, setPage }) => {
    
    const handlePageChange = (newPage: number) => {
        setPage(newPage);
        if (newPage > 2) {
            setStart(newPage - 2);
            setEnd(newPage + 3);
        } else {
            setStart(0);
            setEnd(5);
        }
    };

    return (
        <>
            <div className="d-flex justify-content-between align-items-center px-5">
                <span>Page {page} of {data.totalPages}</span>
                <div className="d-flex align-items-center gap-2">
                    <button
                        onClick={() => handlePageChange(page - 1)}
                        disabled={page === 1}
                        className="dark-700 bg-white w-25 inactive-page-btn rounded-2 manrope-500 fs-small page-btn"
                    >
                        Prev
                    </button>

                    {
                        Array.from({ length: data.totalPages })
                            .slice(start, end)
                            .map((el: any, i: number) => {
                                const pageNumber = start + i + 1;
                                return (
                                    <button
                                        key={pageNumber}
                                        onClick={() => handlePageChange(pageNumber)}
                                        className={`${pageNumber === page
                                            ? "dark-950 active-page-btn"
                                            : "dark-700 bg-white inactive-page-btn"
                                            } rounded-2 manrope-500 fs-small page-btn`}
                                    >
                                        {pageNumber}
                                    </button>
                                );
                            })
                    }

                    {
                        data.totalPages > 5 && (
                            <>
                                <button
                                    disabled
                                    className="dark-700 bg-white inactive-page-btn rounded-2 manrope-500 fs-small page-btn">
                                    ...
                                </button>
                                <button
                                    onClick={() => handlePageChange(data.totalPages)}
                                    className={`${data.totalPages === page ? "dark-950 active-page-btn" : "dark-700 bg-white inactive-page-btn"} rounded-2 manrope-500 fs-small page-btn`}>
                                    {data.totalPages}
                                </button>
                            </>
                        )
                    }

                    <button
                        onClick={() => handlePageChange(page + 1)}
                        disabled={page === data.totalPages}
                        className="dark-700 bg-white w-25 inactive-page-btn rounded-2 manrope-500 fs-small page-btn"
                    >
                        Next
                    </button>
                </div>
                <div></div>
            </div>
        </>
    )
}

export default Pagination;
