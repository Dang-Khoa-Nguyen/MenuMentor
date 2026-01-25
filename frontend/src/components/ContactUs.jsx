import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt, FaFacebook, FaGithub, FaInstagram } from "react-icons/fa";
import {Link} from "react-router-dom"

export default function ContactUs() {
  return (
    <div className="mt-5">
        <div className="flex justify-center text-4xl font-extrabold text-green-900">
            <Link to="/Contact" className="flex items-center gap-4 hover:bg-green-900 hover:text-white py-3 px-5 rounded-full transition-full duration-500"> 
                Contact us 
            </Link>
        </div>
        <div className="max-w-3xl mx-auto bg-white p-5">
        <p className="text-center text-gray-600">
          Have a question, suggestion, or feedback? We’d love to hear from you.
        </p>

        {/* Contact details */}
        <div className="space-y-3 text-center">
          <div className="flex justify-center gap-1 mt-4">
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
          </div>

          <div className="flex justify-center gap-1 mt-4">
            <div className="flex justify-center items-center">
                <FaLocationDot/>
            </div>
            <span className="font-semibold">Location:</span> Adelaide, Australia
          </div>

          <div className="flex justify-center gap-1 mt-4">
            <div className="flex justify-center items-center">
                <FaPhoneAlt/>
            </div>
            <span className="font-semibold">Phone number: </span> +61000000000
          </div>
        </div>
      </div>
      <div className="flex justify-center gap-10 text-3xl">
        <Link className="text-blue-500"> <FaFacebook/> </Link>
        <Link> <FaInstagram className="text-orange-500"/> </Link>
        <Link> <FaGithub/> </Link>
      </div>
    </div>
  );
}