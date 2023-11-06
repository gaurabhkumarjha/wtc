import { useState } from "react";
import Table from "../components/Tabel";



const Home = () => {

    const [inputdata, setinputdata] = useState({

        firstname: "",
        lastname: "",
        emailid: "",
        phonenumber: "",
        projectdetails: ""

    });

    const setinputvalue = (e) => {
        const { name, value } = e.target
        setinputdata({ ...inputdata, [name]: value });
    }


    const submitclientdetails = async (e) => {

        e.preventDefault();
        //console.log(inputdata);

        const { firstname, lastname, emailid, phonenumber, projectdetails } = inputdata

        const res = await fetch("/addclientdata", {

            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                firstname, lastname, emailid, phonenumber, projectdetails
            })
        });


        const result = await res.json();
    }
    return (
        <>
            <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                <div class="container-fluid">
                    <a class="navbar-brand" href="/">Client Panel</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarText">
                        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/">Client</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
            <div className="mb-5"></div>
            <h1>Clents Data</h1>
            <div className="container-fluid">
                <div className="row">
                    <div className="col-sm-8 col-md-8 col-lg-8">
                        <Table />
                    </div>
                    <div className="col-sm-4 col-md-4 col-lg-4">
                        Add Client!
                        <br />
                        <div className="mb-3"></div>
                        <form>
                            <label for="inputPassword5" class="form-label">Enter First Name</label>
                            <input type="text" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" name="firstname" value={inputdata.firstname} onChange={setinputvalue} />
                            <label for="inputPassword5" class="form-label">Enter Last Name</label>
                            <input type="text" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" name="lastname" value={inputdata.lastname} onChange={setinputvalue} />
                            <label for="inputPassword5" class="form-label">Enter Email ID</label>
                            <input type="email" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" name="emailid" value={inputdata.emailid} onChange={setinputvalue} />
                            <label for="inputPassword5" class="form-label">Enter Mobile Number</label>
                            <input type="number" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" name="phonenumber" value={inputdata.phonenumber} onChange={setinputvalue} />
                            <label for="inputPassword5" class="form-label">Enter Project Details</label>
                            <input type="text" id="inputPassword5" class="form-control" aria-describedby="passwordHelpBlock" name="projectdetails" value={inputdata.projectdetails} onChange={setinputvalue} />
                            <div className="mb-3"></div>
                            <button className="btn btn-primary" type="submit" onClick={submitclientdetails}>Create client</button>
                        </form>

                    </div>
                </div>
            </div>

        </>
    );

}

export default Home;