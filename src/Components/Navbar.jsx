import { FaFacebookF } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { BsInstagram } from "react-icons/bs";
import { MdOutlineLocalPhone, MdOutlineLocationOn } from "react-icons/md";




const Navbar = () => {
  return (
   <>

   <div>
   <nav className="bg-[#eefff7] p-4">
    
      <div className=" flex justify-between items-center">
   
        <div className=" flex gap-3 items-center">
        <h1 className="text-base">Follow us:</h1>
          <h1 href="#" className=" px-3 py-2 rounded">
          <FaFacebookF />
          </h1>
          <h1 href="#" className=" px-3 py-2 rounded">
          <FaXTwitter />
          </h1>
          <h1 href="#" className=" px-3 py-2 rounded">
          <BsInstagram />
          </h1>
        </div>

        <div className=" flex gap-3">
       
          <h1 href="#" className="  gap-4 flex px-3 py-2 items-center">
          <MdOutlineLocalPhone /> +(80)8968668979
          </h1>
          <h1 href="#" className=" gap-4 flex px-3 py-2  items-center">
          <MdOutlineLocationOn />1234 North Avenue Luke Lane
          </h1>

        </div>

      </div>

     
    
    </nav>
   </div>

   {/* second section main nav bar */}

   <div className=" flex items-center w-[100%] mt-4 mx-auto">

        <div className="text-black  items-center mx-auto text-lg font-bold w-[20%] ml-5">liquidhealth</div>

        <div className="w-[60%]  flex items-center">
          <h1  className=" text-lg font-medium  px-3 py-2 rounded">
            HOME +
          </h1>
          <h1  className=" text-lg font-medium  px-3 py-2 rounded">
         RTL DEMO 
          </h1>
          <h1  className=" text-lg font-medium  px-3 py-2 rounded">
            PAGES +
          </h1>
          <h1  className=" text-lg font-medium  px-3 py-2 rounded">
            SPECIALIZATION +
          </h1>
          <h1  className=" text-lg font-medium  px-3 py-2 rounded">
            BLOG +
          </h1>
          <h1  className=" text-lg font-medium  px-3 py-2 rounded">
            SHOP +
          </h1>

        </div>

       <div className="w-[20%]">
       <button className="text-black text-lg border-2 p-4 bg-green-600 h-18 w-56 font-bold flex">
        <p className="p-2 text-white">APPOINTMENT</p>
        <p className="p-2 text-white"> | +</p>
       </button>
       </div>
      </div>

   </>
  )
}

export default Navbar