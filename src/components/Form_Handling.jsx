import { useState } from "react"


const Form_Handling = () => {
    const [name, setname] = useState('')
    const [email, setemail] = useState('')
    const [password, setpassword] = useState('')
    const onSubmitHandler = (e) => {
        e.preventDefault();
        console.log(name, email, password);
    }
    return (
        <>
            <form onSubmit={onSubmitHandler}>
                <div className="mb-3">
                    <label for="name" className="form-label">Name </label>
                    <input type="text" onChange={(e) => setname(e.target.value)} value={name} class="form-control" id="name" />
                </div>
                <div className="mb-3">
                    <label for="email" className="form-label">Email</label>
                    <input type="email" onChange={(e) => setemail(e.target.value)} value={email} class="form-control" id="email" placeholder="name@example.com" />
                </div>

                <div className="mb-3">
                    <label for="password" className="form-label">Password</label>
                    <input type="password" onChange={(e) => setpassword(e.target.value)} value={password} id="password" class="form-control" aria-describedby="passwordHelpBlock" />
                    <div id="passwordHelpBlock" className="form-text">
                        Your password must be 8-20 characters long, contain letters and numbers, and must not contain spaces, special characters, or emoji.
                    </div>
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