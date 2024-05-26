import React, { useState, useEffect } from 'react';
import Card from './Card';
import ReactPaginate from 'react-paginate';
import { useDispatch, useSelector } from 'react-redux';
import { fetchResources } from '../actions';

const Resources = () => {
    const dispatch = useDispatch();
    const [currentPage, setCurrentPage] = useState(0);   
    let resources = useSelector(state => state.resources);
    const itemsPerPage = 6;

    useEffect(() => {
        dispatch(fetchResources());
    }, [dispatch])

    useEffect(() => {
        if (resources.length > 0) {
            setCurrentPage(1);
        }
    }, [resources]);

    const handlePageClick = (event) => {
        setCurrentPage(event.selected + 1);
    };

    const offset = (currentPage - 1) * itemsPerPage;
    const currentItems = resources.slice(offset, offset + itemsPerPage);

    return(
        <>{resources && resources.length > 0 ?
            <div style={{display: "flex", flexDirection: 'column'}}>
                <div className='resources-layout'>
                    {(currentItems && currentItems.length) ? currentItems.map((resource, index) => <Card key={index} data={resource}/>) : <p>No Resources1</p>}
                </div>
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    breakClassName={'break-me'}
                    pageCount={Math.ceil(resources.length / itemsPerPage)}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination'}
                    subContainerClassName={'pages pagination'}
                    activeClassName={'active'}
                    initialPage={currentPage} 
                />
            </div>
            : <p>No Resources</p>
        }
        </>)
}

export default Resources;