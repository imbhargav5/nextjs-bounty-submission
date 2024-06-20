import React from 'react';
import {
  Accordion,
  AccordionItem,
  AccordionContent,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Orbit from './components/Orbit';
import Testimonial from './components/Testimonial';
import Companies from './components/Companies';

export default function Page() {
  return (
    <section className="text-gray-600 body-font">
<<<<<<< HEAD
      {/* Hero section */}
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <button className="flex mx-auto mt-16 text-slate-900 dark:text-slate-50 bg-slate-100 dark:bg-slate-800 border-0 p-1 focus:outline-none rounded-full text-sm font-sans">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 p-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
            <h5 className="text-slate-900 dark:text-slate-50 font-semibold text-sm p-1">
              Introducing
            </h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 p-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-slate-800 dark:text-slate-50 mt-2">
            Nextbase Ultimate Landing Page
          </h1>
          <p className="lg:w-3/4 mx-auto mb-7 leading-relaxed text-base text-slate-500 dark:text-slate-400">
            Welcome to Nextbase Ultimate Landing Page: Your Gateway to
            Innovation. Discover the Future of Excellence and Elevate Your
            Experience.
          </p>
          <div className="flex justify-center mb-12 md:w-full">
            <button className="inline-flex text-slate-50 dark:text-slate-900 bg-slate-900 dark:bg-slate-50 border-0 py-2 px-14 focus:outline-none rounded text-lg ">
              <h5 className="text-slate-50 dark:text-slate-900 text-sm p-1">
                Log in
              </h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 p-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
            <button className="ml-4 inline-flex text-slate-900 dark:text-slate-50 bg-slate-50 dark:bg-slate-900 border-0 py-2 px-11 focus:outline-none rounded text-lg">
              <h5 className="text-slate-900 dark:text-slate-50 text-sm p-1">
                Learn more
              </h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="size-6 p-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                />
              </svg>
            </button>
          </div>
        </div>
        <img
          className="lg:w-4/6 h-96 md:w-5/6 mb-0 object-cover object-center rounded"
          alt="hero"
          src="https://dummyimage.com/720x600"
        />
      </div>

      {/* Company Carousel */}

      <div className="container mx-auto flex px-5 py-2 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <h1 className="lg:w-2/3 mx-auto leading-relaxed text-base">
            Trusted by 150+ companies
          </h1>
        </div>
        <Companies />
      </div>

      {/* Features section */}

      <div className="container text-slate-900 dark:text-slate-50 mx-auto flex px-5 py-1 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <button className="flex mx-auto mt-16 text-slate-900 dark:text-slate-50 bg-slate-100 dark:bg-slate-800 border-0 p-1 focus:outline-none rounded-full text-sm font-sans">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 p-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
            <h5 className="text-slate-900 dark:text-slate-50 font-semibold text-sm p-1">
              Features
            </h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 p-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
          <h1 className="sm:text-3xl text-2xl font-semibold title-font mb-2 text-slate-800 dark:text-slate-50 mt-2">
            Discover Next-Level Features
          </h1>
          <p className="lg:w-3/4 mx-auto leading-relaxed text-base text-slate-500 dark:text-slate-400">
            Discover the ultimate insights into cutting-edge advancements. Our
            next-level features guide reveals the essentials for staying ahead.
          </p>
        </div>
      </div>
      <div className="container px-5 py-10 mx-auto">
        <div className="flex flex-wrap w-3/4 mx-auto mb-2">
          <div className="p-3 md:w-1/2 sm:mb-0 mb-6 border-2 rounded">
            <div className="rounded h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1203x503"
              />
            </div>
            <h2 className="text-lg font-medium title-font text-slate-900 dark:text-slate-50 mt-5">
              Shooting Stars
            </h2>
            <p className="text-base leading-relaxed mt-2 text-slate-500 dark:text-slate-400">
              Swag shoivdigoitch literally meditation subway tile tumblr
              cold-pressed. Gastropub street art beard dreamcatcher neutra,
              ethical XOXO lumbersexual.
            </p>
          </div>
          <div className="p-3 md:w-1/2 sm:mb-0 mb-6 border-2 rounded">
            <div className="rounded h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1203x503"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-slate-900 dark:text-slate-50 mt-5">
              Shooting Stars
            </h2>
            <p className="text-base leading-relaxed mt-2 text-slate-500 dark:text-slate-400">
              Swag shoivdigoitch literally meditation subway tile tumblr
              cold-pressed. Gastropub street art beard dreamcatcher neutra,
              ethical XOXO lumbersexual.
            </p>
          </div>
        </div>
        <div className="flex flex-wrap w-3/4 mx-auto">
          <div className="p-3 md:w-1/3 sm:mb-0 mb-6 border-2 rounded">
            <div className="rounded h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1203x503"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-slate-900 dark:text-slate-50 mt-5">
              Shooting Stars
            </h2>
            <p className="text-base leading-relaxed mt-2 text-slate-500 dark:text-slate-400">
              Swag shoivdigoitch literally meditation subway tile tumblr
              cold-pressed. Gastropub street art beard dreamcatcher neutra,
              ethical XOXO lumbersexual.
            </p>
          </div>
          <div className="p-3 md:w-1/3 sm:mb-0 mb-6 border-2 rounded">
            <div className="rounded h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1204x504"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-slate-900 dark:text-slate-50 mt-5">
              The Catalyzer
            </h2>
            <p className="text-base leading-relaxed mt-2 text-slate-500 dark:text-slate-400">
              Swag shoivdigoitch literally meditation subway tile tumblr
              cold-pressed. Gastropub street art beard dreamcatcher neutra,
              ethical XOXO lumbersexual.
            </p>
          </div>
          <div className="p-3 md:w-1/3 sm:mb-0 mb-6 border-2 rounded">
            <div className="rounded h-64 overflow-hidden">
              <img
                alt="content"
                className="object-cover object-center h-full w-full"
                src="https://dummyimage.com/1205x505"
              />
            </div>
            <h2 className="text-xl font-medium title-font text-slate-900 dark:text-slate-50 mt-5">
              The 400 Blows
            </h2>
            <p className="text-base leading-relaxed mt-2 text-slate-500 dark:text-slate-400">
              Swag shoivdigoitch literally meditation subway tile tumblr
              cold-pressed. Gastropub street art beard dreamcatcher neutra,
              ethical XOXO lumbersexual.
            </p>
          </div>
        </div>
      </div>

      {/* Lorem ipsum */}
      <footer className="text-gray-600 body-font bg-slate-100 dark:bg-slate-800">
        <div className="container h-96 w-full bg-slate-100 dark:bg-slate-800 flex items-center sm:flex-row flex-col">
          <div className="text-center relative z-10 w-full">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-14 p-1 mt-1 mx-auto mb-4 text-slate-900 dark:text-slate-50"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
            <h2 className="mx-auto text-4xl text-slate-900 dark:text-slate-50 font-semibold title-font mt-2 mb-2">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
              nec odio. Praesent libero.
            </h2>
            <p className="leading-relaxed text-slate-500 dark:text-slate-400 mt-2">
              Mark Zukerberg | CEO, Facebook
            </p>
          </div>
        </div>
      </footer>

      {/* Orbiting circles */}
      <div className="container mx-auto flex px-5 py-1 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <button className="flex mx-auto mt-16 text-slate-900 dark:text-slate-50 bg-slate-100 dark:bg-slate-800 border-0 p-1 focus:outline-none rounded-full text-sm font-sans">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 p-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456ZM16.894 20.567 16.5 21.75l-.394-1.183a2.25 2.25 0 0 0-1.423-1.423L13.5 18.75l1.183-.394a2.25 2.25 0 0 0 1.423-1.423l.394-1.183.394 1.183a2.25 2.25 0 0 0 1.423 1.423l1.183.394-1.183.394a2.25 2.25 0 0 0-1.423 1.423Z"
              />
            </svg>
            <h5 className="text-slate-900 dark:text-slate-50 font-semibold text-sm p-1">
              Integration
            </h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 p-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-slate-800 dark:text-slate-50 mt-2">
            Master Integration Like Pros
          </h1>
          <p className="lg:w-3/4 mx-auto leading-relaxed text-base mb-8 text-slate-500 dark:text-slate-400">
            Discover the ultimate insights into cutting-edge advancements. Our
            next-level features guide reveals the essentials for staying ahead.
          </p>
        </div>
        {/* <img className="lg:w-2/6 h-96 md:w-5/6 mb-32 object-cover object-center rounded" alt="hero" src="https://dummyimage.com/720x600"/> */}
        <Orbit />
      </div>

      {/* Testimonial */}

      <footer className="text-gray-600 body-font bg-slate-100 dark:bg-slate-800">
        <Testimonial />
      </footer>

      {/* Pricing Section */}
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-col text-center w-full mb-20">
          <button className="flex mx-auto mt-16 text-slate-900 dark:text-slate-50 bg-slate-100 dark:bg-slate-800 border-0 p-1 focus:outline-none rounded-full text-sm font-sans">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 pl-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 6v12m-3-2.818.879.659c1.171.879 3.07.879 4.242 0 1.172-.879 1.172-2.303 0-3.182C13.536 12.219 12.768 12 12 12c-.725 0-1.45-.22-2.003-.659-1.106-.879-1.106-2.303 0-3.182s2.9-.879 4.006 0l.415.33M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"
              />
            </svg>

            <h5 className="text-slate-900 dark:text-slate-50 text-sm p-1 font-semibold">
              Pricing
            </h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 p-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
          <h1 className="sm:text-4xl text-3xl font-bold title-font mb-2 text-slate-800 dark:text-slate-50 mt-2">
            Quality without any compromise
          </h1>
          <p className="lg:w-2/3 mx-auto leading-relaxed text-base text-slate-500 dark:text-slate-400">
            CI/CD streamlines feature delivery, scalable infrastructure ensures
            global edge optimization and app monitoring capabilities for peak
            site performance.
          </p>
          <div className="flex mx-auto border-4 border-slate-100 dark:border-slate-800 rounded-lg overflow-hidden mt-6">
            <button className="py-1 px-8 text-slate-900 dark:text-slate-50 focus:outline-none rounded-lg">
              Monthly
            </button>
            <button className="py-1 px-8 bg-slate-100 dark:bg-slate-800 focus:outline-none">
              Yearly
            </button>
          </div>
        </div>
        <div className="grid gap-6 md:grid-cols-3 w-3/4 mx-auto">
          <div className="h-full p-6 rounded-lg border-2 border-slate-100 flex flex-col relative overflow-hidden">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-4">
              Basic
            </h3>
            <p className="text-4xl font-extrabold text-gray-900 dark:text-slate-50 mb-4">
              $19
              <span className="text-base font-normal text-gray-500">
                /month
              </span>
            </p>
            <button className="w-full px-4 py-2 text-sm text-slate-50 dark:text-slate-900 bg-slate-900 dark:bg-slate-50 rounded mb-7">
              Buy Now
            </button>
            <hr className="py-3"></hr>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-slate-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.293-9.707a1 1 0 10-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                10 Projects
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-slate-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.293-9.707a1 1 0 10-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                5 GB Storage
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-slate-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.293-9.707a1 1 0 10-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Email Support
              </li>
            </ul>
          </div>

          <div className="h-full p-6 rounded-lg border-2 border-slate-100 bg-slate-100 dark:border-slate-800 dark:bg-slate-800 flex flex-col relative overflow-hidden">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-4">
              Pro
            </h3>
            <p className="text-4xl font-extrabold text-gray-900 dark:text-slate-50 mb-4">
              $49
              <span className="text-base font-normal text-gray-500">
                /month
              </span>
            </p>
            <button className="w-full px-4 py-2 text-sm text-slate-50 dark:text-slate-900 bg-slate-900 dark:bg-slate-50 rounded mb-7">
              Buy Now
            </button>
            <hr className="py-3"></hr>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-slate-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.293-9.707a1 1 0 10-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                50 Projects
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-slate-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.293-9.707a1 1 0 10-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                100 GB Storage
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-slate-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.293-9.707a1 1 0 10-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Priority Email Support
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-slate-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.293-9.707a1 1 0 10-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Priority Email Support
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-slate-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.293-9.707a1 1 0 10-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Priority Email Support
              </li>
            </ul>
          </div>

          <div className="h-full p-6 rounded-lg border-2 border-slate-100 flex flex-col relative overflow-hidden">
            <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-50 mb-4">
              Enterprise
            </h3>
            <p className="text-4xl font-extrabold text-gray-900 mb-4 dark:text-slate-50">
              $99
              <span className="text-base font-normal text-gray-500">
                /month
              </span>
            </p>
            <button className="w-full px-4 py-2 text-sm text-slate-50 dark:text-slate-900 bg-slate-900 dark:bg-slate-50 rounded mb-7">
              Buy Now
            </button>
            <hr className="py-3"></hr>
            <ul className="space-y-2 mb-6">
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-slate-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.293-9.707a1 1 0 10-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                Unlimited Projects
              </li>
              <li className="flex items-center">
                <svg
                  className="w-6 h-6 text-slate-500 mr-2"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path
                    fill-rule="evenodd"
                    d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.293-9.707a1 1 0 10-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                    clip-rule="evenodd"
                  ></path>
                </svg>
                1 TB Storage
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <button className="flex mx-auto mt-16 text-slate-900 dark:text-slate-50 bg-slate-100 dark:bg-slate-800 border-0 p-1 focus:outline-none rounded-full text-sm font-sans">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 p-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M9.879 7.519c1.171-1.025 3.071-1.025 4.242 0 1.172 1.025 1.172 2.687 0 3.712-.203.179-.43.326-.67.442-.745.361-1.45.999-1.45 1.827v.75M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 5.25h.008v.008H12v-.008Z"
              />
            </svg>

            <h5 className="text-slate-900 dark:text-slate-50 text-sm p-1 font-semibold">
              FAQ
            </h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 p-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-slate-900 dark:text-slate-50 mt-2">
            Frequetely Asked Questions
          </h1>
          <p className="lg:w-3/4 mx-auto mb-7 leading-relaxed text-base text-slate-500 dark:text-slate-400">
            Get detailed answers to common inquiries. Enhance your understanding
            of our offerings and policies.
          </p>
          <div className="flex justify-center mb-12 md:w-full"></div>

          <div className="container mx-auto p-4 text-slate-900 dark:text-slate-50 font-normal">
            <Accordion type="single" collapsible>
              <AccordionItem value="item-1">
                <AccordionTrigger>Is it styled?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-left">This is the content of item 1.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger>Is it accesible?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-left">This is the content of item 2.</p>
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger>is it animated?</AccordionTrigger>
                <AccordionContent>
                  <p className="text-left">This is the content of item 3.</p>
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </div>

      {/* Get Started section */}
      <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
        <div className="text-center lg:w-2/3 w-full">
          <button className="flex mx-auto mt-16 text-slate-900 dark:text-slate-50 bg-slate-100 dark:bg-slate-800 border-0 p-1 focus:outline-none rounded-full text-sm font-sans">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 p-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
              />
            </svg>

            <h5 className="text-slate-900 dark:text-slate-50 text-sm p-1 font-medium">
              Start your Journey
            </h5>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="size-6 p-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
              />
            </svg>
          </button>
          <h1 className="sm:text-3xl text-2xl font-bold title-font mb-2 text-slate-800 dark:text-slate-50 mt-2">
            Ready to move with Ultimate?
          </h1>
          <p className="lg:w-3/4 mx-auto mb-7 leading-relaxed text-base text-slate-500 dark:text-slate-400">
            Automated CI/CD streamlines feature delivery, scalable
            infrastructure ensures global edge optimization and app monitoring
            capabilities for peak site performance.
          </p>
          <div className="flex justify-center mb-12 md:w-full">
            <button className="inline-flex text-slate-50 dark:text-slate-900 bg-slate-900 dark:bg-slate-50 border-0 py-2 px-14 focus:outline-none rounded text-lg ">
              <h5 className="text-slate-50 dark:text-slate-900 text-sm p-1">
                Get Started
              </h5>
            </button>
          </div>
        </div>
      </div>
      {/* Footer in Layout.tsx */}
    </section>
=======
  <div className="container px-5 py-24 mx-auto bg-slate-800">
    <div className="flex flex-col text-center w-full mb-20">
    <button className="w-[148px] h-[32px] p-[4px_12px] rounded-[var(--80)] border border-transparent opacity-0">Introducing</button>
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-slate-50">Nextbase Ultimate Landing Page</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Welcome to Nextbase Ultimate Landing Page: Your Gateway to Innovation. Discover the Future of Excellence and Elevate Your Experience.</p>
    </div>
    <div className="flex flex-wrap">
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Shooting Stars</h2>
        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <a className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">The Catalyzer</h2>
        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <a className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Neptune</h2>
        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <a className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
      <div className="xl:w-1/4 lg:w-1/2 md:w-full px-8 py-6 border-l-2 border-gray-200 border-opacity-60">
        <h2 className="text-lg sm:text-xl text-gray-900 font-medium title-font mb-2">Melanchole</h2>
        <p className="leading-relaxed text-base mb-4">Fingerstache flexitarian street art 8-bit waistcoat. Distillery hexagon disrupt edison bulbche.</p>
        <a className="text-indigo-500 inline-flex items-center">Learn More
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-2" viewBox="0 0 24 24">
            <path d="M5 12h14M12 5l7 7-7 7"></path>
          </svg>
        </a>
      </div>
    </div>
    <button className="flex mx-auto mt-16 text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">Button</button>
  </div>
</section>
>>>>>>> 92222e53ff7c0ab0be605657aeee7c7ca2acd41b
  );
}
