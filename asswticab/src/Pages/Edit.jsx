import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";


const Edit = () =>{

    const [clientdata, setclientdata]= useState({
       
        firstname: "",
        lastname: "",
        emailid: "",
        phonenumber: "",
        projectdetails: ""
    });
    const setinputvalue = (e) => {
        const { name, value } = e.target
        setclientdata({ ...clientdata, [name]: value });
    }
    const {id}= useParams();

    const submitclientdetails = async (e) =>{

        e.preventDefault();
        const { firstname, lastname, emailid, phonenumber, projectdetails } = clientdata;

        const res = await fetch("/editclientdata/" + id, {

            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                firstname, lastname, emailid, phonenumber, projectdetails
            })
        });


        const result = await res.json();
         console.log(result);
        alert("Successfully Data Edited ! " + result.legalname);
    }
    useEffect(() => {
        
        const userGetDetailsbyid = async () => {
            const res = await fetch("/getclientdetailsbyid/" +id, {

                method: "GET",
                headers: {
                    "Content-Type": "application/json"
                },
            });


            const result = await res.json();
            setclientdata(result);
        }
        userGetDetailsbyid();
    }, [id])
    return(
        <>
          <div className="col-sm-4 col-md-4 col-lg-4">
                       Edit Client Details!
                        <br />
                        <div className="mb-3"></div>
                        <form> 
                            <label for="inputPassword5" class="form-label">Enter First Name</label>
                            <input type="text" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" name="firstname" value={clientdata.firstname} onChange={setinputvalue} />
                            <label for="inputPassword5" class="form-label">Enter Last Name</label>
                            <input type="text" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" name="lastname" value={clientdata.lastname} onChange={setinputvalue} />
                            <label for="inputPassword5" class="form-label">Enter Email ID</label>
                            <input type="email" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" name="emailid" value={clientdata.emailid} onChange={setinputvalue} />
                            <label for="inputPassword5" class="form-label">Enter Mobile Number</label>
                            <input type="number" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" name="phonenumber" value={clientdata.phonenumber} onChange={setinputvalue} />
                            <label for="inputPassword5" class="form-label">Enter Project Details</label>
                            <input type="text" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" name="projectdetails" value={clientdata.projectdetails} onChange={setinputvalue} />
                            <div className="mb-3"></div>
                            <button className="btn btn-primary" type="submit" onClick={submitclientdetails}>Edit client</button>
                        </form>

                    </div>

        </>
    );
}

export default Edit;