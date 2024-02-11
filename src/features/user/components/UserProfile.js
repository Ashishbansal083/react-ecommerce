import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectLoggedInUser } from "../../auth/authSlice";

export default function Counter() {
  const user = useSelector(selectLoggedInUser);
  const dispatch = useDispatch();

  return (
    <div>
      <div className="mx-auto max-w-7xl mt-10 px-4 py-6 sm:px-6 lg:px-8 bg-white">
        <h className="text-4xl font-bold tracking-tight text-gray-900 mx-5 ">
          Name : {user.name ? user.name : "New User"}
        </h>
        <h3 className="text-l font-bold tracking-tight text-gray-900 mx-5 mt-5 ">
          Email Adderess : {user.email}
        </h3>

        <div className="border-t border-gray-200 px-4 py-6 sm:px-6">
          <p className="mt-0.5 text-sm text-gray-500">Your Adderesses</p>
          {user.addresses.map((address) => (
            <div className="flex mt-2 justify-between gap-x-6 py-5 px-2 border-2 ">
              <div className="flex min-w-0 gap-x-4 ">
                <div className="min-w-0 flex-auto">
                  <p className="text-sm font-semibold leading-6 text-gray-900">
                    {address.name}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {address.street}
                  </p>
                  <p className="mt-1 truncate text-xs leading-5 text-gray-500">
                    {address.pincode}
                  </p>
                </div>
              </div>
              <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
                <p className="text-sm leading-6 text-gray-900 font-semibold">
                  Phone: {address.phone}
                </p>
                <p className="text-sm leading-6 text-gray-500 ">
                  {address.city}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
