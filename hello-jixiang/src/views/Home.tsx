import React from 'react';
import Header from '../components/Header';

//@ts-ignore
import avatarUrl from "assets/me.jpeg";


const Home = () => {
    return (
        <React.Fragment>
            {/* <Header title="Biography" /> */}
            <div className="container items-center mx-auto px-4 leading-normal">
                <div className="md:flex">
                    <div className="md:flex justify-center flex-gold-prev">
                        <div className="md:flex flex-col p-4 justify-items-center items-center">
                            <img className="md:w-24 rounded-full m-auto w-40" src={avatarUrl} alt="Avatar" />
                            <div className="text-center">
                                <h2>Jixiang Li</h2>
                                <h3>Software Engineer</h3>
                                <ul>
                                    <li>
                                        <a href="https://github.com/ljx213101212">github icon</a>
                                        <i className="fab fa-github big-icon"></i>
                                    </li>

                                    <li>
                                        <a href="https://www.linkedin.com/in/jixiang-li-89b4a5b6/">linkedin icon</a>
                                        <i className="fab fa-linkedin big-icon"></i>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="md:flex justify-center flex-col flex-gold-after">
                        <div className="md:flex flex-col p-4 justify-items-center items-center">
                            <h1>Biography</h1>
                            <p>Jixiang Li aims to be a fullstack developer with a good vision of design and implementation
                                in software engineering. He is specialized in frontend software development and delivered software 
                                applications through different platforms from Windows 10, Xbox and Web Browser. Working in an user && 
                                developer expereince oriented way.
                            </p>
                        </div>
                        <div className="md:flex p-4 justify-items-center items-center">
                            <div className="md:flex-5 text-center p-4 m-4">
                                <h1>Education</h1>
                                <h3>M.S in Information Technology</h3>
                                <li>2015 - 2016</li>

                                <h3>B.S in Computer Science and Technology</h3>
                                <li>2010 - 2014</li>
                            </div>
                            <div className="md:flex-7 text-center">
                                <h1>Education</h1>
                                <h3>M.S in Information Technology</h3>
                                <li>2015 - 2016</li>

                                <h3>B.S in Computer Science and Technology</h3>
                                <li>2010 - 2014</li>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            {/* <div className="container items-center justify-between mx-auto px-4 leading-normal">
                <div className="block text-center pt-16 md:pt-20 lg:pt-48 mb-24">
                    <p className="font-rubik font-medium text-center text-primary-color uppercase">About Me</p>
                    <h2 className="font-black text-primary-grey uppercase pt-8 pb-8 text-3xl"></h2>
                    <div className="flex flex-wrap">
                        <p className="w-full md:w-2/3 mr-auto ml-auto text-grey-darker text-base"></p>
                    </div>
                    <div className="avatar pt-24"><img src="/img/avatar.156dd5d9.png" alt="Drive a successful digital transformation" /></div>
                </div>
            </div> */}
        </React.Fragment>
    );
};

export default Home;