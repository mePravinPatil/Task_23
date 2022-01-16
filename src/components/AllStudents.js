import React,{useState,useEffect} from 'react'
import {useNavigate} from 'react-router-dom';
import axios from 'axios';
function AllStudents() {

    useEffect(()=>{
        getData();
      },[])

    let navigate = useNavigate();
    let [data,setData] = useState([])
    
      //getting the data using fetch
    // let getData = async ()=>{

    //     await fetch('https://6100fb3b1d56e10017394cbe.mockapi.io/userdetail')
    //     .then(response => response.json())
    //     .then(res =>{
    //       console.log(res)
    //       setData(res)
    //     })
    //     .catch(err=>{
    //       console.log(err)
    //     })
    //   }

    let getData = async ()=>{
        let d  = await axios.get('https://6100fb3b1d56e10017394cbe.mockapi.io/userdetail')
        console.log(d)
        setData(d.data)
    }

      //to delete the data
    //   let handleDelete = async(id)=>{
    //     await fetch('https://6100fb3b1d56e10017394cbe.mockapi.io/userdetail/'+id,{
    //         method:'DELETE',
    //     })
    //     .then(response =>response.json())
    //     .then(data=>{
    //         getData();
    //     })
    //     .catch((error)=>{
    //         console.log(error)
    //     })
    // }

    let handleDelete = async(id)=>{
        try{
            let res = await axios.delete('https://6100fb3b1d56e10017394cbe.mockapi.io/userdetail/'+id)
            console.log(res);
            getData();
        }
        catch(err){
            console.log(err)
        }
    }

    return (
        <div>
            <table class="table table-striped">
            <thead>
                <tr>
                <th scope="col">#</th>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Mobile</th>
                <th scope="col">Degree</th>
                <th scope="col">Department</th>
                <th scope="col">Options</th>
                </tr>
            </thead>
            <tbody>
                {
                    data.map((e,i)=>{
                        return<tr key={i}>
                            <th scope="row">{e.id}</th>
                            <td>{e.name}</td>
                            <td>{e.email}</td>
                            <td>{e.mobile}</td>
                            <td>{e.degree}</td>
                            <td>{e.dept}</td>
                            <td>
                                <button className="btn btn-primary" onClick={()=>{
                                    navigate('/edit-student/'+e.id) 
                                }}>Edit</button>
                                
                                 &nbsp;&nbsp; <button className="btn btn-danger" onClick={()=>handleDelete(e.id)}>Delete</button></td>
                        </tr>
                    })
                }
            </tbody>
            </table>
        </div>
    )
}

export default AllStudents