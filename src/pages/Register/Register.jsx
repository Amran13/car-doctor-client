import React, { useContext } from 'react';
import img from '../../assets/images/login/login.svg'
import { Link } from 'react-router-dom';
import { authContext } from '../../Provider/AuthProvider';
import Swal from 'sweetalert2';

const Register = () => {
    const {createUserWithEmail} = useContext(authContext)

    const handleRegister = (e) => {
        e.preventDefault()
        const form = e.target
        const name = form.name.value 
        const email = form.email.value
        const password = form.password.value
        console.log(name, email, password)
        createUserWithEmail(email, password)
        .then(res => {
            console.log( 'created User: ', res.user)
            Swal.fire({
                title: "User Created!",
                text: `New User has created ${res.email}`,
                icon: "success"
              });
        })
        .catch(err => {
            Swal.fire({
                title: "Error!",
                text: err,
                icon: "error"
              });
        })

    }
    return (
        <div className="hero min-h-screen bg-base-200">
            <div className="hero-content flex-col lg:flex-row">
                <div className="w-1/2 mr-24">
                    <img className='w-full' src={img} alt="" />
                </div>
                <div className="card shrink-0 w-1/2 max-w-lg shadow-2xl bg-base-100">
                    <form onSubmit={handleRegister} className="card-body">
                    <h1 className="text-3xl text-center font-bold">Register</h1>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn bg-orange-500 hover:bg-orange-600">Register</button>
                        </div>
                        <span className='mt-4'>Already have an account? <Link to="/login">LOGIN</Link> </span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Register;