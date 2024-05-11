import React, { useEffect, useState } from 'react'
import CSVReader from 'react-csv-reader';



import Table from 'react-bootstrap/Table';

function CSV() {
  const [data, setData] = useState([]);
  const [myData, setMyData] = useState([]);
   
  useEffect( ()=>{
    const getuserdata=async()=>{
      const userreq=await fetch('"C:\Users\BISWARUP\Downloads\annual-enterprise-survey-2021-financial-year-provisional-csv.csv"');
      const userres= await userreq.json();
      console.log(userres);
      setMyData(userres);
      
    }
    getuserdata();
  },[]);

  const handleSubmit = () => {
    // console.log("submit")
    setData(myData);
   
  }

  return (
    <>
    <CSVReader onFileLoaded={(data, fileInfo, originalFile) => setMyData(data)} />
    <button onClick={handleSubmit}>Submit</button>
    {
        data.length >0?(
              <Table striped bordered hover>
                <thead>
                  <tr>
                    <th>{data[0][0]}</th>
                    <th>{data[0][1]}</th>
                    <th>{data[0][2]}</th>
                  </tr>
                </thead>
                <tbody>
                  {
                    data.filter((_,index,arr)=>((index !=0) && (index != arr.length-1))).map((value,index)=>(
                        <tr key={index}>
                        <td>{value[0]}</td>
                        <td>{value[1]}</td>
                        <td>{value[2]}</td>
                      </tr>  
                    ))
                  }
                </tbody>
              </Table>
          
        ):
        "No data Present"
    }
    </>
  )
}

export default CSV;