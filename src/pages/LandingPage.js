import React, { Component } from 'react';
import School from '../images/school2.jpg'

class LandingPage extends Component {
    render (){
        return (
            <div className="w-screen h-screen overflow-y-scroll">
                <div className="relative w-full h-calc-1 bg-center bg-no-repeat bg-cover" style={{backgroundImage: `url(${School})`}}>
                    <div className="w-full h-full bg-black opacity-50 border-b shadow-2xl border-gray-600">
                    </div>
                    <div className="mini-content absolute w-full h-full top-10 flex justify-center items-center flex-col px-6 lg:px-40 text-justify">
                        <p className="text-gray-50 text-xs lg:text-lg md:text-md">
                            Don. Agustin F. Escano National High School is  School ID : 303453 * School Name : Don Agustin F. Escano National High School * School Name w/ Add : Don Agustin F. Escano National High School, Tomas Oppus, Southern Leyte * Short Name : DAFENHS * Previous Name : Don Agustin F. Escano NHS * Address : Bantayan Bato * Municipality : Tomas Oppus * Region : Region VIII * Province : Southern Leyte * Division : Southern Leyte * Legistative District : Lone District * Curricular Class : Junior High School with Senior High School * Date of Operation : Friday, January 01, 1993 * Sub-Classification : DepED Managed * School Type : School with no Annexes * Class Organization
                        </p>
                        <a className="bg-blue-600 mt-4 opacity-90 w-48 lg:w-44 text-center rounded-md text-sm lg:text-md font-poppins text-gray-50 p-2 hover:bg-blue-700" href="https://web.facebook.com/dafenhs.page.shs.jhs/?ref=py_c&_rdc=1&_rdr"><i className="fa fa-facebook"></i>&nbsp;&nbsp;Visit Facebook Page</a>
                    </div>
                    <div className="bottom-contents pb-32 w-full h-auto bg-white flex pt-3 border-t-2 border-gray-300 flex-wrap lg:flex-nowrap">
                        <div className="mission w-full mx-6 mb-6 py-2 text-gray-800 text-justify px-4 h-auto font-poppins">
                            <i className="fa fa-star text-center w-full h-auto"></i>
                            <h3 className="w-full text-center h-auto font-semibold text-lg">Mission</h3>
                            <p className="h-auto pt-2 text-sm lg:text-lg text-gray-700">
                                The provincial and municipal governments of Southern Leyte, in active partnership with all the national line agencies, and the private sector, shall adopt a sustainable development program which shall be earnestly pursued to promote and ensure peace, health and socio-economic opportunities thus alleviating poverty of the majority of it's people.
                            </p>
                        </div>
                        <div className="vision w-full mx-6 mb-6 py-2 text-gray-800 text-justify px-4 h-auto font-poppins">
                            <i className="fa fa-eye text-center w-full h-auto"></i>
                            <h3 className="w-full text-center h-auto font-semibold text-lg">Vision</h3>
                            <p className="h-auto pt-2 text-sm lg:text-lg text-gray-700">
                                A peaceful, self-reliant and progressive province inhabited by God-loving, healthy, environment-conscious and empowered citizenry united with the rest of nation in pursuit of national goals.
                            </p>
                        </div>
                        <div className="values w-full mx-6 py-2 text-gray-800 text-justify px-4 h-auto font-poppins">
                            <i className="fa fa-gears text-center w-full h-auto"></i>
                            <h3 className="w-full text-center h-auto font-semibold text-lg">Core Values</h3>
                            <p className="h-auto pt-2 text-sm lg:text-lg text-gray-700">
                               <li>Maka-Diyos</li>
                               <li>Maka-Tao</li>
                               <li>Makakalikasan</li>
                               <li>Makabansa</li>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LandingPage;