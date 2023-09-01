import * as React from 'react';


export default function Input({ ...props}) {
    return (
        <div className="relative z-0 w-full mb-6 group transition-all">
            <input type="email" name="floating_email" id="floating_email"
                   className="block pl-2.5 py-2.5 text-sm text-gray-900 bg-transparent border border-black appearance-none focus:outline-none focus:ring-0 focus:border-primary peer"
                   placeholder=" " required/>
            <label htmlFor="floating_email"
                   className="ml-2 px-1 peer-focus:font-medium bg-white z-10 absolute text-sm text-gray-500 duration-300 transform  -translate-y-6 scale-90 top-3 origin-[0] peer-focus:left-0 peer-focus:text-primary peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-90 peer-focus:-translate-y-6">Email
                address</label>
        </div>
    );
}