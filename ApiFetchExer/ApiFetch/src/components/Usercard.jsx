import React from 'react'
import { useState, useEffect } from 'react'

const Usercard = () => {
    const [data, setData] = useState([]);

    async function getData() {
        let url = "https://jsonplaceholder.typicode.com/posts";

        try {
            //fetch data from url.
            let response = await fetch(url);

            // json is an async object so we use await keyword
            let fetchedData = await response.json();

            console.log(fetchedData);

            setData(fetchedData)


        } catch (error) {
            console.log("something went wrong !");
        }


    }

    useEffect(() => {
        getData();

    }, []);
    return (
        <div className='cards-container'>
            {data.map((item) => (
                <>
                    <div key={item.id} className="cards">
                        <h2>{item.id}</h2>
                        <h3>{item.title}</h3>
                        <p>{item.body}</p>
                    </div>
                </>
            ))}
        </div>
    )
}

export default Usercard
