import {  FaPhoneAlt, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import {Link} from "react-router-dom"

export default function Contact() {
  return (
  <div className="">
    <h1 className="flex justify-center text-4xl font-extrabold text-green-900 p-10">
  Get in touch
</h1>

<p className="text-center text-gray-600 mb-6">
  Feel free to reach out for questions, feedback, or collaboration opportunities.
</p>

{/* Contact info */}
<div className="flex flex-col items-center gap-2 text-gray-700 mb-8">
  <p className="flex justify-center gap-1 mb-2">
    <div className="flex justify-center items-center">
        <MdEmail/> 
    </div>
    <span className="font-semibold">Email:</span>
  
    <a
      href="mailto:contact@menumentor.com"
      className="text-green-700 hover:underline"
    >
      contact@menumentor.com
    </a>
  </p>

  <p className="flex justify-center gap-1">
    <div className="flex justify-center items-center">
        <FaPhoneAlt/>
    </div>
    <span className="font-semibold">Phone number:</span> +61 4XX XXX XXX
  </p>
</div>

{/* Social icons */}
<div className="flex justify-center gap-10 text-3xl mb-10">
  <Link to="#" className="text-blue-600 hover:scale-110 transition">
    <FaFacebook />
  </Link>
  <Link to="#" className="text-pink-500 hover:scale-110 transition">
    <FaInstagram />
  </Link>
  <Link to="#" className="hover:scale-110 transition">
    <FaGithub />
  </Link>
</div>

{/* Divider */}
<div className="flex items-center justify-center gap-4 mb-8">
  <hr className="w-1/3 border-gray-300" />
  <span className="text-gray-500 font-semibold">OR</span>
  <hr className="w-1/3 border-gray-300" />
</div>

{/* Contact form */}
<div className="max-w-xl mx-auto bg-white shadow-lg rounded-xl p-8">
  <form className="flex flex-col gap-4">
    <input
      type="text"
      placeholder="Your name"
      className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
    />

    <input
      type="email"
      placeholder="Your email"
      className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
    />

    <textarea
      placeholder="Your message"
      rows="4"
      className="border rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
    />

    <button
      type="submit"
      className="bg-green-700 text-white font-semibold py-2 rounded-lg hover:bg-green-800 transition"
    >
      Send message
    </button>
  </form>
</div>
  </div>
);
}