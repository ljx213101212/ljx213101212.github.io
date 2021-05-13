import React from 'react';
import Header from '../components/Header';

import avatarUrl from "assets/me.jpeg";


const Home = () => {
    return (
        <React.Fragment>
            <Header title="Biography" />
            <div className="container items-center mx-auto px-4 leading-normal">
                <div className="grid grid-rows-2 md:grid-rows-1 grid-flow-col gap-4">
                <div className="flex">
                    <div className="flex flex-col p-4 justify-items-center items-center">
                        <img className="rounded-full w-40 md:w-24" src={avatarUrl} alt="Avatar"/>  
                        <div className="text-center">
                            <h2>Jixiang Li</h2>
                            <h3>Software Engineer</h3>
                            <h3>
                                <span ></span>
                            </h3>
                        </div>
                    </div>
                </div>
                <div>2</div>
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