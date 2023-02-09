
import Image from "next/image";
import Link from "next/link";
import UhiLogo from "../assets/uhi-logo.png";

const FormBox = ({
  children,
  buttons
}) => {
  return (<div className="antialiased text-gray-900 font-sans mt-12">
    <div className="items-center h-screen w-full">
      <div className="w-full bg-white rounded shadow-xl p-12 m-8 md:max-w-xl md:mx-auto">
        <form className="mb-4">
          <Image src={UhiLogo} alt="UHI Logo" className='w-max' />
          <div className="m-5">{children}</div>
        </form>
      </div>
    </div>
  </div>)

}

export default FormBox;