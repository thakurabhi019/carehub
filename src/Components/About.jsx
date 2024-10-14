import { MdDone } from "react-icons/md";
const About = () => {
    return (
        <>
            <div className="w-[100%] mt-12">

                <div className="flex justify-between bg-green-100">

                    <div className="w-[40%]">

                        <img src="src/assets/wallpaper.PNG" alt="" />

                    </div>

                    <div className="w-[60%] my-auto mx-auto">

                        <div>
                            <p className="font-semibold text-xl text-green-400">--About our clinic</p>

                            <h1 className="">
                                <span className="text-5xl text-black font-semibold">
                                    We are a chain of Eye
                                </span> <br />
                                <p className="text-5xl mt-4">Care Hospitals</p>
                            </h1>
                        </div>

                        <div className="mt-6">
                            <h1 className="text-lg text-black font-semibold">YOUR VISION IS OUR VISION</h1>
                            <p className="text-lg text-gray-400">It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.</p>
                        </div>

                        {/* third section */}

                        <div className="flex w-[100%] mt-6 ">

                            <div className="w-[33%]">
                                <p className="flex items-center gap-2 text-gray-600"><MdDone />Treats minor illnesses</p>
                                <p className="flex items-center gap-2 text-gray-600"><MdDone />Answers health questions</p>
                                <p className="flex items-center gap-2 text-gray-600"><MdDone />Conducts health checkups</p>

                            </div>

                            <div className="w-[33%]">

                                <p className="flex items-center gap-2 text-gray-600"><MdDone />Specialty physicians</p>
                                <p className="flex items-center gap-2 text-gray-600"><MdDone />Performs routine health tests</p>
                                <p className="flex items-center gap-2 text-gray-600"><MdDone />Best lasik treatment</p>

                            </div>

                            <div className="w-[33%]">

                                <div className="border-green-300 bg-green-700 h-44 w-[10rem]">
                                    <h1 className="text-white text-5xl p-4">40 +</h1>
                                    <p className="text-white p-2">Year of top experience in eye</p>
                                </div>

                            </div>
                        </div>

                        <div className="w-[20%] mt-5">
                            <button className="text-black text-lg border-2 p-4 bg-green-600 h-18 w-56 font-bold flex">
                                <p className="p-2 text-white">APPOINTMENT</p>
                                <p className="p-2 text-white"> | +</p>
                            </button>
                        </div>

                    </div>

                </div>

            </div>
        </>
    )
}

export default About