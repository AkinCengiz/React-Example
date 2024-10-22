import React, {useState} from 'react'

function sortArray() {
    const [cities, setCities] = useState(["Türkiye","Almanya","İran","Rusya","Çin","Suriye","Yunanistan"]);

    const sortArray = () => {
        setCities([...cities].sort());
    }
  return (
    <>
        <h1>Cities</h1>
        <button onClick={sortArray()}>Clear</button>

        <ul>
            {
                //cities.map((item, key) => <li>{item}</li>)
                cities.map((item, key) => <li key={key}>{item}</li>)
            }
        </ul>
    </>
  )
}

export default sortArray