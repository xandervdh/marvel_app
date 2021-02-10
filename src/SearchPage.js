import React, { useState, useEffect } from 'react';
import SearchBar from './Searchbar';
import DataList from './DataList';
import './App.sass';
import ReactPaginate from 'react-paginate';

function SearchPage(props) {
    const [input, setInput] = useState('');
    const [dataListDefault, setDataListDefault] = useState([]);
    const [dataList, setDataList] = useState([]);
    const [loading, setLoading] = useState(true)
    const [pageCount, setPageCount] = useState(10);
    const [offset, setOffset] = useState(52);
    const [pagedData, setPagedData] = useState([]);

    let marvel = props.marvel.charAt(0).toUpperCase() + props.marvel.slice(1)

    const fetchData = async () => {
        return await fetch('/comics/' + props.marvel)
            .then(response => response.json())
            .then(data => {
                setDataList(data)
                setDataListDefault(data)
                let pages = data.length / offset;
                setPageCount(pages);
                setLoading(false)
            });
    }

    const updateInput = async (input) => {
        const filtered = dataListDefault.filter(data => {
            if (data.name) {
                console.log("name");
                return data.name.toLowerCase().includes(input.toLowerCase())
            } else if (data.title) {
                console.log("title");
                return data.title.toLowerCase().includes(input.toLowerCase())
            }
        })
        setInput(input);
        setDataList(filtered);
        let pages = dataList.length / offset;
        setPageCount(pages);
        handlePageClick({selected: 0});
    }

    const handlePageClick = (data) => {
        let selected = data.selected;
        let off = Math.ceil(selected * offset);
        setPagedData(dataList.slice(off, off + offset));
    };

    useEffect(() => {
        fetchData()
    }, []);
    return (
        <>
            <h1>{marvel} List</h1>
            <SearchBar
                input={input}
                setKeyword={updateInput}
            />
            <DataList
                dataList={pagedData}
                marvel={props.marvel}
            />
            {loading === false ? (
                <nav className={"pagination is-centered"}>
                <ReactPaginate
                    previousLabel={'previous'}
                    nextLabel={'next'}
                    breakLabel={'...'}
                    pageCount={pageCount}
                    marginPagesDisplayed={2}
                    pageRangeDisplayed={5}
                    onPageChange={handlePageClick}
                    containerClassName={'pagination-list'}
                    breakLinkClassName={"pagination-ellipsis"}
                    pageLinkClassName={"pagination-link"}
                    activeLinkClassName={"pagination-link is-current"}
                    previousLinkClassName={"pagination-previous"}
                    nextLinkClassName={"pagination-next"}
                    initialPage={0}
                />
                </nav>
            ) : (
                <h1>Loading...</h1>
            )}
        </>
    );
}

export default SearchPage
