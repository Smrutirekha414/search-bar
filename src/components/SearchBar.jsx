import React, {useState} from 'react';
import {FaSearch} from "react-icons/fa"
import "./SearchBar.css"

export const SearchBar = ({ setResult })=> {

    const [input,setInput] = useState("");

    const fetchData = (value) =>{
        console.log(value);
        fetch("https://jsonplaceholder.typicode.com/users")
        .then((response) => response.json())
        .then((json) =>{
            //console.log(json);
            const result = json.filter((user) =>{
               // console.log(user);
                return value && 
                user && 
                user.name && 
                user.name.toLowerCase().includes(value)
            });
            // console.log(result);

            setResult(result);
        })
    }

    const handleChange = (value) =>{
        //console.log(value);
        setInput(value);
        fetchData(value);
    };

    return ( 
        <>
        <div className='input-wrapper'>
            <FaSearch id="serach-icon"/>
            <input placeholder='Type here...' 
            value={input} 
            onChange={(e) => handleChange(e.target.value)}
            />
        </div>
        </>
     );
}
