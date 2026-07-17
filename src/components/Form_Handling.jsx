import { useState } from "react"


const Form_Handling = () => {
    const [formData, setformData] = useState({
        name: "",
        email: "",
        password: "",
        phone: ""
    })
    const changeHandler = (e) => {
        const { name, value } = e.target;
        setformData({ ...formData, [name]: value }) 
    }
    const submitHandler = (e) => {
        e.preventDefault();
        console.log(formData);
    }
    return (
        <>
            <form onSubmit={submitHandler}>
                <div className="mb-3">
                    <label for="name" className="form-label">Name </label> {" "}
                    <input type="text" onChange={changeHandler} name="name" value={formData.name} class="form-control" />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label> {" "}
                    <input type="email" onChange={changeHandler} name="email" value={formData.email} class="form-control" />
                </div>

                <div className="mb-3">
                    <label for="password" className="form-label">Password</label> {" "}
                    <input type="password" onChange={changeHandler} name="password" value={formData.password} class="form-control" />

                </div>
                <div className="mb-3">
                    <label for="phone" className="form-label">Phone </label> {" "}
                    <input type="text" onChange={changeHandler} name="phone" value={formData.phone} class="form-control" />
                </div>
                <br></br>
                <div className="mb-3">
                    <button type="submit" className="btn">Submit</button>
                </div>

            </form>
        </>

    )
}

export default Form_Handling