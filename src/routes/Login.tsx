import {useState} from "react";
import {useNavigate} from "react-router-dom";

const Login = () => {

    const [loading, setLoading] = useState(false);
    const navigate = useNavigate()

    const handleSubmit = (evt: any) => {
        evt.preventDefault();
        setLoading(true)

        setTimeout(() => {
            setLoading(false)
            navigate('/app/dashboard')
        }, 1500)
    }
    return (
        <>
            <h2>Login Test</h2>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Email: </label>
                    <input type='text'></input>
                </div>

                <div>
                    <label>Password: </label>
                    <input type='password'></input>
                </div>
                {loading ? <div>Loading...</div> :
                    <button type={"submit"}>Submit</button>
                }
            </form>
        </>
    )
}

export default Login;