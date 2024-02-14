import GenderCheckBox from './GenderCheckBox/GenderCheckBox'

function SignUp() {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Sign Up
                    <span className="text-blue-500"> ChatApp</span>
                </h1>

                <form>
                    <div>
                        <label htmlFor="fullname">Fullname</label>
                        <input
                            placeholder="Fullname"
                            spellCheck="false"
                            type="text"
                            id="fullname"
                            name="fullname"
                            className="w-full input p-2 h-10 input-bordered"
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
                        />
                    </div>

                    {/* GENDER CHECK HERE */}
                    <GenderCheckBox />

                    <a href="#">
                        <span className=" text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                            Already have an account?
                        </span>
                    </a>

                    <button type="submit" className="mt-4 btn btn-block btn-sm hover:bg-blue-600 ">
                        Sign Up
                    </button>
                </form>
            </div>
        </div>
    )
}

export default SignUp
