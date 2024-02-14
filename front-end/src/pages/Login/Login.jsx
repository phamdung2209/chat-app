function Login() {
    return (
        <div className="flex flex-col items-center justify-center min-w-96 mx-auto">
            <div className="w-full p-6 rounded-lg shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
                <h1 className="text-3xl font-semibold text-center text-gray-300">
                    Welcome to <span className="text-blue-500"> ChatApp</span>
                </h1>

                <form>
                    <div>
                        <label htmlFor="username">Username</label>
                        <input
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
                            spellCheck="false"
                            type="password"
                            id="password"
                            name="password"
                            className="w-full input p-2 h-10 input-bordered"
                        />
                    </div>

                    <a href="#">
                        <span className=" text-sm hover:underline hover:text-blue-600 mt-2 inline-block">
                            {"Don't"} you have an account?
                        </span>
                    </a>

                    <button type="submit" className="mt-4 btn btn-block btn-sm hover:bg-blue-600 ">
                        Login
                    </button>
                </form>
            </div>
        </div>
    )
}

export default Login
