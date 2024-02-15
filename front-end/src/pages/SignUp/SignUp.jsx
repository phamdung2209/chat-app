import { Link } from 'react-router-dom'
import { useState } from 'react'

import GenderCheckBox from './GenderCheckBox/GenderCheckBox'
import config from '~/config'
import useSignUp from '../../hooks/useSignUp'

function SignUp() {
    const [inputs, setInputs] = useState({
        fullname: '',
        username: '',
        password: '',
        confirmPassword: '',
        gender: '',
    })

    const { loading, signup } = useSignUp()

    const handleCheckboxChange = (gender) => {
        setInputs({ ...inputs, gender })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await signup(inputs)
    }

    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign Up
                    <span className="text-blue-500"> ChatApp</span>
                </h1>

                <form onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="fullname">Fullname</label>
                        <input
                            placeholder="Fullname"
                            spellCheck="false"
                            type="text"
                            id="fullname"
                            name="fullname"
                            className="w-full input p-2 h-10 input-bordered"
                            value={inputs.fullname}
                            onChange={(e) => setInputs({ ...inputs, fullname: e.target.value })}
                        />
                    </div>

                    <div>
                        <label htmlFor="username">Username</label>
                        <input
                            placeholder="Username"
                            spellCheck="false"
                            type="text"
                            id="username"
                            name="username"
                            className="w-full input p-2 h-10 input-bordered"
                            value={inputs.username}
                            onChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                        />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="password">Password</label>
                        <input
                            placeholder="Password"
                            spellCheck="false"
                            type="password"
                            id="password"
                            name="password"
                            className="w-full input p-2 h-10 input-bordered"
                            value={inputs.password}
                            onChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                        />
                    </div>

                    <div className="mt-4">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            placeholder="Confirm Password"
                            spellCheck="false"
                            type="password"
                            id="confirmPassword"
                            name="confirmPassword"
                            className="w-full input p-2 h-10 input-bordered"
                            value={inputs.confirmPassword}
                            onChange={(e) => setInputs({ ...inputs, confirmPassword: e.target.value })}
                        />
                    </div>

                    {/* GENDER CHECK HERE */}
                    <GenderCheckBox selectedGender={inputs.gender} onCheckBoxChange={handleCheckboxChange} />

                    <Link to={config.routes.signIn}>
                        <span className=" text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                            Already have an account?
                        </span>
                    </Link>

                    <button disabled={loading} type="submit" className="mt-4 btn btn-block btn-sm hover:bg-blue-600 ">
                        {loading ? <span className="loading loading-spinner"></span> : 'Sign Up'}
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
