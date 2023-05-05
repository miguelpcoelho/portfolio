"use client";

import React from "react";
import { EnvelopeIcon, MapPinIcon, PhoneIcon } from "@heroicons/react/24/solid";
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

function ContactMe() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    window.location.href = `mailto:miguelkoelho@hotmail.com?subject=${formData.subject}&body=Hi my name is ${formData.name}. ${formData.message}`;
  };

  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-center mx-auto items-center">
      <h3 className="absolute top-24 uppercase tracking-[20px] text-gray-500 text-2xl">
        Contact
      </h3>
      <div className="flex flex-col space-y-10 mt-28 md:mt-12">
        <h4 className="text-4xl font-semibold text-center">
          I have got what you need. <br className="md:hidden" />
          <span className="underline decoration-blue-400/50">Lets Talk</span>
        </h4>
        <div className="space-y-8">
          <div className="flex items-center space-x-5 justify-center">
            <PhoneIcon className="text-blue-400 h-7 w-7 animate-pulse" />
            <p className="text-2xl">+963304197</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <EnvelopeIcon className="text-blue-400 h-7 w-7 animate-pulse" />
            <p className="text-2xl">miguelkoelho@hotmail.com</p>
          </div>
          <div className="flex items-center space-x-5 justify-center">
            <MapPinIcon className="text-blue-400 h-7 w-7 animate-pulse" />
            <p className="text-2xl">Odivelas</p>
          </div>
        </div>
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="flex flex-col space-y-2 w-fit mx-auto"
        >
          <div className="flex space-x-2">
            <input
              {...register("name", { required: true })}
              className="contactInput"
              type="text"
              placeholder="Name"
            />
            <input
              {...register("email", { required: true })}
              className="contactInput"
              type="email"
              placeholder="Email"
            />
          </div>
          <input
            {...register("subject", { required: true })}
            placeholder="Subject"
            className="contactInput"
            type="text"
          />
          <textarea
            {...register("message", { required: true })}
            placeholder="Message"
            className="contactInput"
          />
          {(errors.name ||
            errors.email ||
            errors.subject ||
            errors.message) && (
            <span className="font-bold tracking-wide underline">
              All fields are requiblue
            </span>
          )}
          <button
            type="submit"
            className="bg-blue-400/40 py-2 rounded-md font-semibold text-lg tracking-wider hover:bg-blue-400/60 duration-500"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactMe;
