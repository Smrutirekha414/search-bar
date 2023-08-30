import React from 'react';
import './SearchResultList.css'
import { SearchResult } from './SearchResult';

export const SearchResultList = ({ result }) =>{
    return(
        <div className='result-list'>
        {
            result.map((result, id) => {
                return <SearchResult result={result} key={id}/>
            })
        }
    </div>
    );
}