
const Home = () => {
    return (
        <>
       <div className="w-[100%]">

       <div className="w-[100%] flex gap-2 mt-5">
                <div className="w-[50%] my-auto">
                    <div className="w-[90%] mx-auto">
                        <h1 className=" text-7xl text-black">Eye Care Services
                            That You <span className="text-green-300">Can Trust</span></h1>
                        <p className="text-lg text-gray-600">
                            It is a long established fact that a reader will be distracted by the
                            readable content of a page when looking at its layout.
                        </p>
                    </div>

                    {/* button */}
                    <div className="w-[20%]">
                        <button className="text-black text-lg border-2 p-4 mt-6 ml-16 bg-green-600 h-18 w-56 font-bold flex">
                            <p className="p-2 text-white">APPOINTMENT</p>
                            <p className="p-2 text-white"> | +</p>
                        </button>
                    </div>
                </div>

                <div className="w-[50%]">
                    <div className="border-green-200  bg-green-600">
                        <img className=" relative z-10" src="https://wordpress.iqonic.design/product/wp/kivicare/wp-content/uploads/2022/02/ey-01.png" alt="" />
                    </div>
                </div>
            </div>

            {/* second section */}

            <div className=" relative w-[95%] mx-auto mt-[-84px] p-6 border-2 border-white bg-gray-50 z-5">

         <p className="text-green-600 font-bold text-xl">----Benefits</p>

                <div className="flex">
                    <div className="w-[40%] mx-auto">
                        <h1 className="text-5xl">
                      <span className="text-black font-bold">  Best Benefits</span> with Kivicare
                        </h1>
                    </div>

                    <div className="w-[60%] mx-auto">
                      <p className="text-gray-600 text-lg">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its .</p>
                    </div>
                </div>

                {/* next section */}

                <div className="flex w-[100%] mt-10 gap-4">

                    <div className="w-[33%]">
                        <img src="https://wordpress.iqonic.design/product/wp/kivicare/wp-content/uploads/2022/03/Mask-group.png" alt="" />
                        <h1 className="text-3xl mt-4" >Qualified Doctors</h1>
                        <p className="text-gray-500 mt-4">Many desktop publishing packages and web page editors now use Lorem Ipsum.</p>
                        <p className="text-green-600 mt-6 font-semibold ">READ MORE +</p>
                    </div>

                    <div className="w-[33%]">
                        <img src="https://wordpress.iqonic.design/product/wp/kivicare/wp-content/uploads/2022/03/Mask-group-1.png" alt="" />
                        <h1 className="text-3xl mt-4" >Work Improvements</h1>
                        <p className="text-gray-500 mt-4">Many desktop publishing packages and web page editors now use Lorem Ipsum.</p>
                        <p className="text-green-600 mt-6 font-semibold ">READ MORE +</p>
                    </div>

                    <div className="w-[33%]">
                        <img src="https://wordpress.iqonic.design/product/wp/kivicare/wp-content/uploads/2022/03/Mask-group-2.png" alt="" />
                        <h1 className="text-3xl mt-4" >Restoring Confidence</h1>
                        <p className="text-gray-500 mt-4">Many desktop publishing packages and web page editors now use Lorem Ipsum.</p>
                        <p className="text-green-600 mt-6 font-semibold ">READ MORE +</p>
                    </div>

                 </div>
 
            </div>


       </div>

        </>
    )
}

export default Home