import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";



const Table = () => {

    const [getclientdata, setclientdata] = useState([]);
    // console.log(getclientdata);
    const userGetDetails = async () => {
        const res = await fetch("/getclientdetails", {

            method: "GET",
            headers: {
                "Content-Type": "application/json"
            },
        });


        const result = await res.json();
        setclientdata(result);
    }
    const {id}= useParams();
    const deleteuser = async (id) => {
console.log(id);

        const res = await fetch("/deleteclientdata/" + id, {

            method: "DELETE",
        });

        const result = await res.json();
        if (result._id === id) {
            userGetDetails();
            alert("User Deleted ! " + result.firstname);
        }

        else {
            alert("Something Went Wrong !");
        }
    }

    useEffect(() => {
        const userGetDetails = async () => {
            const res = await fetch("/getclientdetails", {

                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });


            const result = await res.json();
            setclientdata(result);
        }
        userGetDetails();
    }, [])
    return (
        <>
            <div class="card-body">
                <table class="table table-hover">
                    <thead>
                        <tr>
                        <th scope="col">Sno.</th>
                            <th scope="col">firstname</th>
                            <th scope="col">Last Name</th>
                            <th scope="col">Mobile Number</th>
                            <th scope="col">Email</th>
                            <th scope="col">Project</th>
                            <th scope="col">Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            getclientdata.length > 0 ? getclientdata.map((element, index) => {
                                return (
                                    <>
                                        <tr>
                                            <th scope="row">{index+1}</th>
                                            <td>{element.firstname}</td>
                                            <td>{element.lastname}</td>
                                            <td>{element.phonenumber}</td>
                                            <td>{element.emailid}</td>
                                            <td>{element.projectdetails}</td>
                                            <td>
                                                <li class="nav-item actioncss" style={{listStyle: 'none', color: 'blue'}}>
                                                    <a class="nav-link warning" href={`/Edit/${element._id}`}> Edit</a>
                                                </li>
                                                <li class="nav-item danger actioncss" onClick={() => deleteuser(element._id)} style={{listStyle: 'none', color: 'red'}}>
                                                   Delete
                                                </li>
                                            </td>
                                        </tr>
                                    </>
                                )
                            }) : <h2>No Data Found !</h2>
                        }
                    </tbody>
                </table>
            </div>
        </>
    );
}

export default Table;
