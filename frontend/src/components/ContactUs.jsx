import { MdEmail } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhoneAlt } from "react-icons/fa";

export default function ContactUs() {
  return (
    <div className="mt-5">
        <h2 className="flex justify-center text-4xl font-extrabold text-green-900"> Contact us </h2>

        <div className="max-w-3xl mx-auto bg-white p-8">
        <p className="text-center text-gray-600">
          Have a question, suggestion, or feedback? We’d love to hear from you.
        </p>

        {/* Contact details */}
        <div className="space-y-3 text-center">
          <p className="flex justify-center gap-1 mt-4">
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

          <p className="flex justify-center gap-1 mt-4">
            <div className="flex justify-center items-center">
                <FaLocationDot/>
            </div>
            <span className="font-semibold">Location:</span> Adelaide, Australia
          </p>

          <p className="flex justify-center gap-1 mt-4">
            <div className="flex justify-center items-center">
                <FaPhoneAlt/>
            </div>
            <span className="font-semibold">Phone number: </span> +61000000000
          </p>
        </div>
      </div>
    </div>
  );
}