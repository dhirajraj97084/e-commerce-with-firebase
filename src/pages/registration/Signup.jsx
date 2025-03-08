import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { Timestamp, addDoc, collection } from "firebase/firestore";
import { auth, fireDB } from "../../firebase/FirebaseConfig";
import myContext from "../../context/myContext";
import toast, { Toaster } from "react-hot-toast";
import Loader from "../../component/loader/Loader"; // Ensure this exists

const Signup = () => {
    const { loading, setLoading } = useContext(myContext);
    const navigate = useNavigate();

    const [userSignup, setUserSignup] = useState({
        name: "",
        email: "",
        password: "",
        role: "user"
    });

    const handleChange = (e) => {
        setUserSignup((prev) => ({ ...prev, [e.target.name]: e.target.value }));
    };

    const userSignupFunction = async () => {
        if (!userSignup.name || !userSignup.email || !userSignup.password) {
            return toast.error("All fields are required");
        }

        setLoading(true);
        try {
            const users = await createUserWithEmailAndPassword(auth, userSignup.email, userSignup.password);

            const user = {
                name: userSignup.name,
                email: users.user.email,
                uid: users.user.uid,
                role: userSignup.role || "user", // Ensure role is set
                time: Timestamp.now(),
                date: new Date().toLocaleString("en-US", {
                    month: "short",
                    day: "2-digit",
                    year: "numeric",
                }),
            };

            const userReference = collection(fireDB, "users"); // Ensure collection name is correct
            await addDoc(userReference, user);

            setUserSignup({ name: "", email: "", password: "", role: "user" });
            toast.success("Signup Successfully");

            setLoading(false);
            navigate('/login');
        } catch (error) {
            console.error("Signup Error:", error.message);
            toast.error(error.message); // Show specific error
            setLoading(false);
        }
    };

    return (
        <div className='flex justify-center items-center h-screen bg-gray-200'>
            {loading && <Loader />}
            <Toaster />
            <div className="login_Form bg-white  px-4 lg:px-8 py-6 border border-pink-100 rounded-xl shadow-md">
                <div className="mb-5">
                    <h2 className='text-center text-2xl font-bold text-sky-500'>Signup</h2>
                </div>

                <div className="mb-3">
                    <input
                        type="text"
                        name="name"
                        placeholder="Full Name"
                        value={userSignup.name}
                        onChange={handleChange}
                        className='bg-gray-50 border border-gray-200 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-700'
                    />
                </div>

                <div className="mb-3">
                    <input
                        type="email"
                        name="email"
                        placeholder="Email Address"
                        value={userSignup.email}
                        onChange={handleChange}
                        className='bg-gray-50 border border-gray-200 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-700'
                    />
                </div>

                <div className="mb-5">
                    <input
                        type="password"
                        name="password"
                        placeholder="Password"
                        value={userSignup.password}
                        onChange={handleChange}
                        className='bg-gray-50 border border-gray-200 px-2 py-2 w-96 rounded-md outline-none placeholder-gray-700'
                    />
                </div>

                <div className="mb-5">
                    <button
                        onClick={userSignupFunction}
                        type="button"
                        className="bg-sky-500 hover:bg-sky-600 w-full text-white text-center py-2 font-bold rounded-md"
                        disabled={loading}
                    >
                        {loading ? "Signing up..." : "Signup"}
                    </button>
                </div>

                <div>
                    <h2 className='text-black'>
                        Have an account? <Link className='text-sky-500 font-bold' to={'/login'}>Login</Link>
                    </h2>
                </div>
            </div>
        </div>
    );
};

export default Signup;
