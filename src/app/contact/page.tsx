"use client"
import { useRouter } from 'next/navigation';
import React from 'react';
import { NavBarre } from '../Components/navBarre';
import { Footer } from '../Components/footer';

const Page = () => {
    const { push } = useRouter();

    return (
        <div className='flex flex-col w-full min-h-screen bg-notWhite dark:bg-darkBG items-center'>
            <NavBarre />
            <div className="flex items-center justify-center p-12 ">
                <div className="mx-auto w-full max-w-[550px] ">
                    <form action="https://formbold.com/s/FORM_ID" className='bg-white dark:bg-lightDark py-10 px-5 rounded-lg shadow-lg' method="POST">
                        <div className="mb-5">
                            <label
                                htmlFor="firstName"
                                className="mb-3 block text-base font-medium text-black dark:text-white"
                            >
                                First Name
                            </label>
                            <input
                                type="text"
                                name="firstName"
                                id="firstName"
                                placeholder="First Name"
                                className="w-full rounded-md border placeholder-white border-none bg-brown dark:bg-darkBG py-3 px-6 text-base font-medium text-black outline-none focus:border-none focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="lastName"
                                className="mb-3 block text-base font-medium text-black dark:text-white"
                            >
                                Last Name
                            </label>
                            <input
                                type="text"
                                name="lastName"
                                id="lastName"
                                placeholder="Last Name"
                                className="w-full rounded-md border placeholder-white border-none bg-brown dark:bg-darkBG py-3 px-6 text-base font-medium text-black outline-none focus:border-none focus:shadow-md"
                            />
                        </div>
                        <div>
                          <div className="mb-5">
                            <label
                                htmlFor="email"
                                className="mb-3 block text-base font-medium text-black dark:text-white"
                            >
                                Email
                            </label>
                            <input
                                type="text"
                                name="email"
                                id="email"
                                placeholder="Email"
                                className="w-full rounded-md border placeholder-white border-none bg-brown dark:bg-darkBG py-3 px-6 text-base font-medium text-black outline-none focus:border-none focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="telephone"
                                className="mb-3 block text-base font-medium text-black dark:text-white"
                            >
                                Telephone
                            </label>
                            <input
                                type="text"
                                name="telephone"
                                id="telephone"
                                placeholder="Telephone"
                                className="w-full rounded-md border placeholder-white border-none bg-brown dark:bg-darkBG py-3 px-6 text-base font-medium text-black outline-none focus:border-none focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                            <label
                                htmlFor="voayge"
                                className="mb-3 block text-base font-medium text-black dark:text-white"
                            >
                                Voyage
                            </label>
                            <input
                                type="text"
                                name="voayge"
                                id="voayge"
                                placeholder="Voyage"
                                className="w-full rounded-md border placeholder-white border-none bg-brown dark:bg-darkBG py-3 px-6 text-base font-medium text-black outline-none focus:border-none focus:shadow-md"
                            />
                        </div>
                        <div className="mb-5">
                          <label
                              htmlFor="message"
                              className="mb-3 block text-base font-medium text-black dark:text-white" >
                              Message
                          </label>
                          <textarea
                              name="message"
                              id="message"
                              placeholder="Message"
                              className="w-full resize-none placeholder-white rounded-md border border-none bg-brown dark:bg-darkBG py-3 px-6 text-base font-medium text-black outline-none focus:border-none focus:shadow-md"
                              rows="8"></textarea>
                        </div>
                            <button
                                className="hover:shadow-form rounded-md bg-vert py-3 px-8 text-base font-semibold text-white outline-none"
                            >
                               Envoyé
                            </button>
                        </div>
                    </form>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Page;
