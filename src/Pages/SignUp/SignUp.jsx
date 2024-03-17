import { Link } from "react-router-dom";
import logo from "../../assets/images/login/login.svg"

const SignUp = () => {
    const handleForm = event => {
        event.preventDefault();
    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content lg:flex-row flex-col">
                <div className="w-1/2 mr-8">
                    <img src={logo} alt="" />
                </div>
                <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
                    <div className="card-body">
                        <h1 className="text-3xl text-center font-bold">
                            Sign Up
                        </h1>
                        <form onSubmit={handleForm}>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Name</span>
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="input input-bordered"
                                    required
                                />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Password</span>
                                </label>
                                <input
                                    type="password"
                                    name="password"
                                    placeholder="Password"
                                    className="input input-bordered"
                                    required
                                />
                                <label className="label">
                                    <a
                                        href="#"
                                        className="label-text-alt link link-hover"
                                    >
                                        Forgot password?
                                    </a>
                                </label>
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-primary">
                                    Sign Up
                                </button>
                            </div>
                        </form>
                        <p className="font-semibold">
                            Already have an account?{" "}
                            <Link to="/login" className="text-orange-600 ">
                                Login
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;