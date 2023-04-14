import React from "react";
import { HiInformationCircle } from "react-icons/hi";
import AlertSimple from "./AlertSimple";

type AlertProps = {
    children: React.ReactNode;
    title: string;
    titleClassName?: string;
    message: string;
}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Pricing -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Title -->
  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Pricing</h2>
    <p class="mt-1 text-gray-600 dark:text-gray-400">Whatever your status, our offers evolve according to your needs.</p>
  </div>
  <!-- End Title -->

  <!-- Switch -->
  <div class="flex justify-center items-center">
    <label class="min-w-[3.5rem] text-sm text-gray-500 mr-3 dark:text-gray-400">Monthly</label>

    <input type="checkbox" id="hs-basic-with-description" class="relative shrink-0 w-[3.25rem] h-7 bg-gray-100 checked:bg-none checked:bg-blue-600 border-2 border-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 border border-transparent ring-1 ring-transparent focus:border-blue-600 focus:ring-blue-600 ring-offset-white focus:outline-none appearance-none dark:bg-gray-700 dark:checked:bg-blue-600 dark:focus:ring-offset-gray-800

    before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:shadow before:rounded-full before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200" checked>

    <label class="relative min-w-[3.5rem] text-sm text-gray-500 ml-3 dark:text-gray-400">
      Annual
      <span class="absolute -top-10 left-auto -right-28">
        <span class="flex items-center">
          <svg class="w-14 h-8 -mr-6" width="45" height="25" viewBox="0 0 45 25" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M43.2951 3.47877C43.8357 3.59191 44.3656 3.24541 44.4788 2.70484C44.5919 2.16427 44.2454 1.63433 43.7049 1.52119L43.2951 3.47877ZM4.63031 24.4936C4.90293 24.9739 5.51329 25.1423 5.99361 24.8697L13.8208 20.4272C14.3011 20.1546 14.4695 19.5443 14.1969 19.0639C13.9242 18.5836 13.3139 18.4152 12.8336 18.6879L5.87608 22.6367L1.92723 15.6792C1.65462 15.1989 1.04426 15.0305 0.563943 15.3031C0.0836291 15.5757 -0.0847477 16.1861 0.187863 16.6664L4.63031 24.4936ZM43.7049 1.52119C32.7389 -0.77401 23.9595 0.99522 17.3905 5.28788C10.8356 9.57127 6.58742 16.2977 4.53601 23.7341L6.46399 24.2659C8.41258 17.2023 12.4144 10.9287 18.4845 6.96211C24.5405 3.00476 32.7611 1.27399 43.2951 3.47877L43.7049 1.52119Z" fill="currentColor" class="fill-gray-300 dark:fill-gray-700"/>
          </svg>
          <span class="mt-3 inline-block whitespace-nowrap text-[11px] leading-5 font-semibold tracking-wide uppercase bg-blue-600 text-white rounded-full py-1 px-2.5">Save up to 10%</span>
        </span>
      </span>
    </label>
  </div>
  <!-- End Switch -->

  <!-- Grid -->
  <div class="mt-12 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:items-center">
    <!-- Card -->
    <div class="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700">
      <h4 class="font-medium text-lg text-gray-800 dark:text-gray-200">Free</h4>
      <span class="mt-7 font-bold text-5xl text-gray-800 dark:text-gray-200">Free</span>
      <p class="mt-2 text-sm text-gray-500">Forever free</p>

      <ul class="mt-7 space-y-2.5 text-sm">
        <li class="flex space-x-2">
          <svg class="flex-shrink-0 h-5 w-5 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span class="text-gray-800 dark:text-gray-400">
            1 user
          </span>
        </li>

        <li class="flex space-x-2">
          <svg class="flex-shrink-0 h-5 w-5 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span class="text-gray-800 dark:text-gray-400">
            Plan features
          </span>
        </li>

        <li class="flex space-x-2">
          <svg class="flex-shrink-0 h-5 w-5 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span class="text-gray-800 dark:text-gray-400">
            Product support
          </span>
        </li>
      </ul>

      <a class="mt-5 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-blue-500 dark:border-blue-600 dark:hover:border-blue-700" href="#">
        Sign up
      </a>
    </div>
    <!-- End Card -->

    <!-- Card -->
    <div class="flex flex-col border-2 border-blue-600 text-center shadow-xl rounded-xl p-8 dark:border-blue-700">
      <p class="mb-3"><span class="inline-flex items-center gap-1.5 py-1.5 px-3 rounded-md text-xs uppercase font-semibold bg-blue-100 text-blue-800 dark:bg-blue-600 dark:text-white">Most popular</span></p>
      <h4 class="font-medium text-lg text-gray-800 dark:text-gray-200">Startup</h4>
      <span class="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200">
        <span class="font-bold text-2xl -mr-2">$</span>
        39
      </span>
      <p class="mt-2 text-sm text-gray-500">All the basics for starting a new business</p>

      <ul class="mt-7 space-y-2.5 text-sm">
        <li class="flex space-x-2">
          <svg class="flex-shrink-0 h-5 w-5 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span class="text-gray-800 dark:text-gray-400">
            2 users
          </span>
        </li>

        <li class="flex space-x-2">
          <svg class="flex-shrink-0 h-5 w-5 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span class="text-gray-800 dark:text-gray-400">
            Plan features
          </span>
        </li>

        <li class="flex space-x-2">
          <svg class="flex-shrink-0 h-5 w-5 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span class="text-gray-800 dark:text-gray-400">
            Product support
          </span>
        </li>
      </ul>

      <a class="mt-5 inline-flex justify-center items-center gap-x-3 text-center bg-blue-600 hover:bg-blue-700 text-white text-sm font-medium rounded-md hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:focus:ring-offset-gray-800" href="https://github.com/htmlstreamofficial/preline/tree/main/examples/html">
        Sign up
      </a>
    </div>
    <!-- End Card -->

    <!-- Card -->
    <div class="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700">
      <h4 class="font-medium text-lg text-gray-800 dark:text-gray-200">Team</h4>
      <span class="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200">
        <span class="font-bold text-2xl -mr-2">$</span>
        89
      </span>
      <p class="mt-2 text-sm text-gray-500">Everything you need for a growing business</p>

      <ul class="mt-7 space-y-2.5 text-sm">
        <li class="flex space-x-2">
          <svg class="flex-shrink-0 h-5 w-5 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span class="text-gray-800 dark:text-gray-400">
            5 users
          </span>
        </li>

        <li class="flex space-x-2">
          <svg class="flex-shrink-0 h-5 w-5 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span class="text-gray-800 dark:text-gray-400">
            Plan features
          </span>
        </li>

        <li class="flex space-x-2">
          <svg class="flex-shrink-0 h-5 w-5 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span class="text-gray-800 dark:text-gray-400">
            Product support
          </span>
        </li>
      </ul>

      <a class="mt-5 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-blue-500 dark:border-blue-600 dark:hover:border-blue-700" href="#">
        Sign up
      </a>
    </div>
    <!-- End Card -->

    <!-- Card -->
    <div class="flex flex-col border border-gray-200 text-center rounded-xl p-8 dark:border-gray-700">
      <h4 class="font-medium text-lg text-gray-800 dark:text-gray-200">Enterprise</h4>
      <span class="mt-5 font-bold text-5xl text-gray-800 dark:text-gray-200">
        <span class="font-bold text-2xl -mr-2">$</span>
        149
      </span>
      <p class="mt-2 text-sm text-gray-500">Advanced features for scaling your business</p>

      <ul class="mt-7 space-y-2.5 text-sm">
        <li class="flex space-x-2">
          <svg class="flex-shrink-0 h-5 w-5 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span class="text-gray-800 dark:text-gray-400">
            10 users
          </span>
        </li>

        <li class="flex space-x-2">
          <svg class="flex-shrink-0 h-5 w-5 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span class="text-gray-800 dark:text-gray-400">
            Plan features
          </span>
        </li>

        <li class="flex space-x-2">
          <svg class="flex-shrink-0 h-5 w-5 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.5219 4.0949C11.7604 3.81436 12.181 3.78025 12.4617 4.01871C12.7422 4.25717 12.7763 4.6779 12.5378 4.95844L6.87116 11.6251C6.62896 11.91 6.1998 11.94 5.9203 11.6916L2.9203 9.02494C2.64511 8.78033 2.62032 8.35894 2.86493 8.08375C3.10955 7.80856 3.53092 7.78378 3.80611 8.02839L6.29667 10.2423L11.5219 4.0949Z" fill="currentColor"/>
          </svg>
          <span class="text-gray-800 dark:text-gray-400">
            Product support
          </span>
        </li>
      </ul>

      <a class="mt-5 inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-4 dark:text-blue-500 dark:border-blue-600 dark:hover:border-blue-700" href="#">
        Sign up
      </a>
    </div>
    <!-- End Card -->
  </div>
  <!-- End Grid -->

  <!-- Comparison table -->
  <div class="mt-20 lg:mt-32">
    <div class="lg:text-center mb-10 lg:mb-20">
      <h3 class="text-2xl font-semibold dark:text-white">Compare plans</h3>
    </div>

    <!-- xs to lg -->
    <div class="space-y-24 lg:hidden">
      <section>
        <div class="px-4 mb-4">
          <h2 class="text-lg leading-6 font-medium text-gray-800">Free</h2>
        </div>
        <table class="w-full">
          <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
            Financial data
          </caption>
          <thead class="sticky top-0 inset-x-0 bg-white dark:bg-slate-900">
            <tr>
              <th class="sr-only" scope="col">Feature</th>
              <th class="sr-only" scope="col">Included</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Open/High/Low/Close</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Price-volume difference indicator</th>
              <td class="py-5 pr-4">
                <!-- Minus -->
                <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- Minus -->
                <span class="sr-only">No</span>
              </td>
            </tr>
          </tbody>
        </table>

        <table class="w-full">
          <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
            On-chain data
          </caption>
          <thead>
            <tr>
              <th class="sr-only" scope="col">Feature</th>
              <th class="sr-only" scope="col">Included</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Network growth</th>
              <td class="py-5 pr-4">
                <!-- Minus -->
                <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- Minus -->
                <span class="sr-only">No</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Average token age consumed</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Exchange flow</th>
              <td class="py-5 pr-4">
                <!-- Minus -->
                <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- Minus -->
                <span class="sr-only">No</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Total ERC20 exchange funds flow</th>
              <td class="py-5 pr-4">
                <!-- Minus -->
                <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- Minus -->
                <span class="sr-only">No</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Transaction volume</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Total circulation (beta)</th>
              <td class="py-5 pr-4">
                <!-- Minus -->
                <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- Minus -->
                <span class="sr-only">No</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Velocity of tokens (beta)</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">ETH gas used</th>
              <td class="py-5 pr-4">
                <!-- Minus -->
                <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- Minus -->
                <span class="sr-only">No</span>
              </td>
            </tr>
          </tbody>
        </table>

        <table class="w-full">
          <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
            Social data
          </caption>
          <thead>
            <tr>
              <th class="sr-only" scope="col">Feature</th>
              <th class="sr-only" scope="col">Included</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Dev activity</th>
              <td class="py-5 pr-4">
                <!-- Minus -->
                <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- Minus -->
                <span class="sr-only">No</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Topic search</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Relative social dominance</th>
              <td class="py-5 pr-4">
                <!-- Minus -->
                <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- Minus -->
                <span class="sr-only">No</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Total social volume</th>
              <td class="py-5 pr-4">
                <!-- Minus -->
                <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- Minus -->
                <span class="sr-only">No</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <div class="px-4 mb-4">
          <h2 class="text-lg leading-6 font-medium text-gray-800">Startup</h2>
        </div>
        <table class="w-full">
          <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
            Financial data
          </caption>
          <thead>
            <tr>
              <th class="sr-only" scope="col">Feature</th>
              <th class="sr-only" scope="col">Included</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Open/High/Low/Close</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Price-volume difference indicator</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>
          </tbody>
        </table>

        <table class="w-full">
          <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
            On-chain data
          </caption>
          <thead>
            <tr>
              <th class="sr-only" scope="col">Feature</th>
              <th class="sr-only" scope="col">Included</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Network growth</th>
              <td class="py-5 pr-4">
                <!-- Minus -->
                <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- Minus -->
                <span class="sr-only">No</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Average token age consumed</th>
              <td class="py-5 pr-4">
                <!-- Minus -->
                <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- Minus -->
                <span class="sr-only">No</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Exchange flow</th>
              <td class="py-5 pr-4">
                <!-- Minus -->
                <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- Minus -->
                <span class="sr-only">No</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Total ERC20 exchange funds flow</th>
              <td class="py-5 pr-4">
                <!-- Minus -->
                <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- Minus -->
                <span class="sr-only">No</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Transaction volume</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Total circulation (beta)</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Velocity of tokens (beta)</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">ETH gas used</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>
          </tbody>
        </table>

        <table class="w-full">
          <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
            Social data
          </caption>
          <thead>
            <tr>
              <th class="sr-only" scope="col">Feature</th>
              <th class="sr-only" scope="col">Included</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Dev activity</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Topic search</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Relative social dominance</th>
              <td class="py-5 pr-4">
                <!-- Minus -->
                <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- Minus -->
                <span class="sr-only">No</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Total social volume</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <div class="px-4 mb-4">
          <h2 class="text-lg leading-6 font-medium text-gray-800">Team</h2>
        </div>
        <table class="w-full">
          <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
            Financial data
          </caption>
          <thead>
            <tr>
              <th class="sr-only" scope="col">Feature</th>
              <th class="sr-only" scope="col">Included</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Open/High/Low/Close</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Price-volume difference indicator</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>
          </tbody>
        </table>

        <table class="w-full">
          <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
            On-chain data
          </caption>
          <thead>
            <tr>
              <th class="sr-only" scope="col">Feature</th>
              <th class="sr-only" scope="col">Included</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Network growth</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Average token age consumed</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Exchange flow</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Total ERC20 exchange funds flow</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Transaction volume</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Total circulation (beta)</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Velocity of tokens (beta)</th>
              <td class="py-5 pr-4">
                <!-- Minus -->
                <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- Minus -->
                <span class="sr-only">No</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">ETH gas used</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>
          </tbody>
        </table>

        <table class="w-full">
          <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
            Social data
          </caption>
          <thead>
            <tr>
              <th class="sr-only" scope="col">Feature</th>
              <th class="sr-only" scope="col">Included</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Dev activity</th>
              <td class="py-5 pr-4">
                <!-- Minus -->
                <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- Minus -->
                <span class="sr-only">No</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Topic search</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Relative social dominance</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Total social volume</th>
              <td class="py-5 pr-4">
                <!-- Minus -->
                <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- Minus -->
                <span class="sr-only">No</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <div class="px-4 mb-4">
          <h2 class="text-lg leading-6 font-medium text-gray-800">Enterprise</h2>
        </div>
        <table class="w-full">
          <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
            Financial data
          </caption>
          <thead>
            <tr>
              <th class="sr-only" scope="col">Feature</th>
              <th class="sr-only" scope="col">Included</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Open/High/Low/Close</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Price-volume difference indicator</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>
          </tbody>
        </table>

        <table class="w-full">
          <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
            On-chain data
          </caption>
          <thead>
            <tr>
              <th class="sr-only" scope="col">Feature</th>
              <th class="sr-only" scope="col">Included</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Network growth</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Average token age consumed</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Exchange flow</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Total ERC20 exchange funds flow</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Transaction volume</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Total circulation (beta)</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Velocity of tokens (beta)</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">ETH gas used</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>
          </tbody>
        </table>

        <table class="w-full">
          <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
            Social data
          </caption>
          <thead>
            <tr>
              <th class="sr-only" scope="col">Feature</th>
              <th class="sr-only" scope="col">Included</th>
            </tr>
          </thead>
          <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Dev activity</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Topic search</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Relative social dominance</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>

            <tr class="border-t border-gray-200 dark:border-gray-700">
              <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Total social volume</th>
              <td class="py-5 pr-4">
                <!-- Check -->
                <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Yes</span>
              </td>
            </tr>
          </tbody>
        </table>
      </section>
    </div>
    <!-- End xs to lg -->

    <!-- lg+ -->
    <div class="hidden lg:block">
      <table class="w-full h-px">
        <caption class="sr-only">
          Pricing plan comparison
        </caption>
        <thead>
          <tr>
            <th class="pb-4 pl-6 pr-6 text-sm font-medium text-gray-800 text-left" scope="col">
              <span class="sr-only">Feature by</span>
              <span class="dark:text-white">Plans</span>
            </th>

            <th class="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white" scope="col">Free</th>
            <th class="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white" scope="col">Startup</th>
            <th class="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white" scope="col">Team</th>
            <th class="w-1/4 pb-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center dark:text-white" scope="col">Enterprise</th>
          </tr>
        </thead>
        <tbody class="border-t border-gray-200 divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
          <tr>
            <th class="py-3 pl-6 bg-gray-50 font-bold text-gray-800 text-left dark:bg-slate-800 dark:text-white" colspan="5" scope="colgroup">Financial data</th>
          </tr>

          <tr>
            <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Open/High/Low/Close</th>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Free</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Startup</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Team</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Enterprise</span>
            </td>
          </tr>

          <tr>
            <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Price-volume difference indicator</th>

            <td class="py-5 px-6">
              <!-- Minus -->
              <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
              </svg>
              <!-- Minus -->
              <span class="sr-only">Not included in Free</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Startup</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Team</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Enterprise</span>
            </td>
          </tr>

          <tr>
            <th class="py-3 pl-6 bg-gray-50 font-bold text-gray-800 text-left dark:bg-slate-800 dark:text-white" colspan="5" scope="colgroup">On-chain data</th>
          </tr>

          <tr>
            <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Network growth</th>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Free</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Startup</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Team</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Enterprise</span>
            </td>
          </tr>

          <tr>
            <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Average token age consumed</th>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Not included in Free</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Startup</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Team</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Enterprise</span>
            </td>
          </tr>

          <tr>
            <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Exchange flow</th>

            <td class="py-5 px-6">
              <!-- Minus -->
              <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
              </svg>
              <!-- Minus -->
              <span class="sr-only">Not included in Free</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Startup</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Team</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Enterprise</span>
            </td>
          </tr>

          <tr>
            <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Total ERC20 exchange funds flow</th>

            <td class="py-5 px-6">
              <!-- Minus -->
              <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
              </svg>
              <!-- Minus -->
              <span class="sr-only">Not included in Free</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Startup</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Team</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Enterprise</span>
            </td>
          </tr>

          <tr>
            <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Transaction volume</th>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Free</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Startup</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Team</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Enterprise</span>
            </td>
          </tr>

          <tr>
            <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Total circulation (beta)</th>

            <td class="py-5 px-6">
              <!-- Minus -->
              <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
              </svg>
              <!-- Minus -->
              <span class="sr-only">Not included in Free</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Startup</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Team</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Enterprise</span>
            </td>
          </tr>

          <tr>
            <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Velocity of tokens (beta)</th>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Not included in Free</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Startup</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Team</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Enterprise</span>
            </td>
          </tr>

          <tr>
            <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">ETH gas used</th>

            <td class="py-5 px-6">
              <!-- Minus -->
              <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
              </svg>
              <!-- Minus -->
              <span class="sr-only">Not included in Free</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Startup</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Team</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Enterprise</span>
            </td>
          </tr>

          <tr>
            <th class="py-3 pl-6 bg-gray-50 font-bold text-gray-800 text-left dark:bg-slate-800 dark:text-white" colspan="5" scope="colgroup">Social data</th>
          </tr>

          <tr>
            <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Dev activity</th>

            <td class="py-5 px-6">
              <!-- Minus -->
              <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
              </svg>
              <!-- Minus -->
              <span class="sr-only">Included in Free</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Startup</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Team</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Enterprise</span>
            </td>
          </tr>

          <tr>
            <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Topic search</th>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Free</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Startup</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Team</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Enterprise</span>
            </td>
          </tr>

          <tr>
            <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Relative social dominance</th>

            <td class="py-5 px-6">
              <!-- Minus -->
              <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
              </svg>
              <!-- Minus -->
              <span class="sr-only">Included in Free</span>
            </td>

            <td class="py-5 px-6">
              <!-- Minus -->
              <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
              </svg>
              <!-- Minus -->
              <span class="sr-only">Included in Startup</span>
            </td>

            <td class="py-5 px-6">
              <!-- Minus -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- Minus -->
              <span class="sr-only">Included in Team</span>
            </td>

            <td class="py-5 px-6">
              <!-- Minus -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- Minus -->
              <span class="sr-only">Included in Enterprise</span>
            </td>
          </tr>

          <tr>
            <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Relative social dominance</th>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Free</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Startup</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Team</span>
            </td>

            <td class="py-5 px-6">
              <!-- Check -->
              <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
              </svg>
              <!-- End Solid Check -->
              <span class="sr-only">Included in Enterprise</span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    <!-- End lg+ -->
  </div>
  <!-- End Comparison table -->
</div>
<!-- End Pricing -->
        
        </>

    )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Pricing -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Title -->
  <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
    <h2 class="text-2xl font-bold md:text-4xl md:leading-tight dark:text-white">Find the right plan for your team</h2>
    <p class="mt-1 text-gray-600 dark:text-gray-400">Pay as you go service, cancel anytime.</p>
  </div>
  <!-- End Title -->

  <!-- Grid -->
  <div class="mt-12 relative before:absolute before:inset-0 before:-z-[1] before:bg-[radial-gradient(closest-side,#cbd5e1,transparent)] dark:before:bg-[radial-gradient(closest-side,#334155,transparent)]">
    <div class="grid gap-px sm:grid-cols-2 lg:grid-cols-4 lg:items-center">
      <!-- Card -->
      <div class="flex flex-col h-full text-center">
        <div class="bg-white pt-8 pb-5 px-8 dark:bg-slate-900">
          <h4 class="font-medium text-lg text-gray-800 dark:text-gray-200">Free</h4>
        </div>

        <div class="h-full bg-white lg:mt-px lg:py-5 px-8 dark:bg-slate-900">
          <span class="mt-7 font-bold text-5xl text-gray-800 dark:text-gray-200">
            Free
          </span>
        </div>

        <div class="bg-white flex justify-center lg:mt-px pt-7 px-8 dark:bg-slate-900">
          <ul class="space-y-2.5 text-center text-sm">
            <li class="text-gray-800 dark:text-gray-400">
              1 user
            </li>

            <li class="text-gray-800 dark:text-gray-400">
              Plan features
            </li>

            <li class="text-gray-800 dark:text-gray-400">
              Product support
            </li>
          </ul>
        </div>

        <div class="bg-white py-8 px-8 dark:bg-slate-900">
          <a class="inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-6 dark:text-blue-500 dark:border-blue-500 dark:hover:border-blue-700" href="#">
            Sign up
          </a>
        </div>
      </div>
      <!-- End Card -->

      <!-- Card -->
      <div class="flex flex-col h-full text-center">
        <div class="bg-white pt-8 pb-5 px-8 dark:bg-slate-900">
          <h4 class="font-medium text-lg text-gray-800 dark:text-gray-200">Startup</h4>
        </div>

        <div class="h-full bg-white lg:mt-px lg:py-5 px-8 dark:bg-slate-900">
          <span class="mt-7 font-bold text-5xl text-gray-800 dark:text-gray-200">
            <span class="font-bold text-2xl -mr-2">$</span>
            39
          </span>
        </div>

        <div class="bg-white flex justify-center lg:mt-px pt-7 px-8 dark:bg-slate-900">
          <ul class="space-y-2.5 text-center text-sm">
            <li class="text-gray-800 dark:text-gray-400">
              2 users
            </li>

            <li class="text-gray-800 dark:text-gray-400">
              Plan features
            </li>

            <li class="text-gray-800 dark:text-gray-400">
              Product support
            </li>
          </ul>
        </div>

        <div class="bg-white py-8 px-8 dark:bg-slate-900">
          <a class="inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-6 dark:text-blue-500 dark:border-blue-500 dark:hover:border-blue-700" href="#">
            Sign up
          </a>
        </div>
      </div>
      <!-- End Card -->

      <!-- Card -->
      <div class="flex flex-col h-full text-center">
        <div class="bg-white pt-8 pb-5 px-8 dark:bg-slate-900">
          <h4 class="font-medium text-lg text-gray-800 dark:text-gray-200">Team</h4>
        </div>

        <div class="h-full bg-white lg:mt-px lg:py-5 px-8 dark:bg-slate-900">
          <span class="mt-7 font-bold text-5xl text-gray-800 dark:text-gray-200">
            <span class="font-bold text-2xl -mr-2">$</span>
            89
          </span>
        </div>

        <div class="bg-white flex justify-center lg:mt-px pt-7 px-8 dark:bg-slate-900">
          <ul class="space-y-2.5 text-center text-sm">
            <li class="text-gray-800 dark:text-gray-400">
              5 users
            </li>

            <li class="text-gray-800 dark:text-gray-400">
              Plan features
            </li>

            <li class="text-gray-800 dark:text-gray-400">
              Product support
            </li>
          </ul>
        </div>

        <div class="bg-white py-8 px-8 dark:bg-slate-900">
          <a class="inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-6 dark:text-blue-500 dark:border-blue-500 dark:hover:border-blue-700" href="#">
            Sign up
          </a>
        </div>
      </div>
      <!-- End Card -->

      <!-- Card -->
      <div class="flex flex-col h-full text-center">
        <div class="bg-white pt-8 pb-5 px-8 dark:bg-slate-900">
          <h4 class="font-medium text-lg text-gray-800 dark:text-gray-200">Enterprise</h4>
        </div>

        <div class="h-full bg-white lg:mt-px lg:py-5 px-8 dark:bg-slate-900">
          <span class="mt-7 font-bold text-5xl text-gray-800 dark:text-gray-200">
            <span class="font-bold text-2xl -mr-2">$</span>
            149
          </span>
        </div>

        <div class="bg-white flex justify-center lg:mt-px pt-7 px-8 dark:bg-slate-900">
          <ul class="space-y-2.5 text-center text-sm">
            <li class="text-gray-800 dark:text-gray-400">
              10 users
            </li>

            <li class="text-gray-800 dark:text-gray-400">
              Plan features
            </li>

            <li class="text-gray-800 dark:text-gray-400">
              Product support
            </li>
          </ul>
        </div>

        <div class="bg-white py-8 px-8 dark:bg-slate-900">
          <a class="inline-flex justify-center items-center gap-2 rounded-md border-2 border-blue-600 font-semibold text-blue-600 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm py-3 px-6 dark:text-blue-500 dark:border-blue-500 dark:hover:border-blue-700" href="#">
            Sign up
          </a>
        </div>
      </div>
      <!-- End Card -->
    </div>
  </div>
  <!-- End Grid -->

  <!-- Comparison table -->
  <div class="mt-20">
    <div id="hs-pricing-comparision-content" class="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-pricing-comparision">
      <!-- xs to lg -->
      <div class="space-y-24 lg:hidden">
        <section>
          <div class="px-4 mb-4">
            <h2 class="text-lg leading-6 font-medium text-gray-800">Free</h2>
          </div>
          <table class="w-full">
            <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
              Financial data
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">Feature</th>
                <th class="sr-only" scope="col">Included</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Open/High/Low/Close</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Price-volume difference indicator</th>
                <td class="py-5 pr-4">
                  <!-- Minus -->
                  <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                  </svg>
                  <!-- Minus -->
                  <span class="sr-only">No</span>
                </td>
              </tr>
            </tbody>
          </table>

          <table class="w-full">
            <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
              On-chain data
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">Feature</th>
                <th class="sr-only" scope="col">Included</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Network growth</th>
                <td class="py-5 pr-4">
                  <!-- Minus -->
                  <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                  </svg>
                  <!-- Minus -->
                  <span class="sr-only">No</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Average token age consumed</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Exchange flow</th>
                <td class="py-5 pr-4">
                  <!-- Minus -->
                  <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                  </svg>
                  <!-- Minus -->
                  <span class="sr-only">No</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Total ERC20 exchange funds flow</th>
                <td class="py-5 pr-4">
                  <!-- Minus -->
                  <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                  </svg>
                  <!-- Minus -->
                  <span class="sr-only">No</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Transaction volume</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Total circulation (beta)</th>
                <td class="py-5 pr-4">
                  <!-- Minus -->
                  <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                  </svg>
                  <!-- Minus -->
                  <span class="sr-only">No</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Velocity of tokens (beta)</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">ETH gas used</th>
                <td class="py-5 pr-4">
                  <!-- Minus -->
                  <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                  </svg>
                  <!-- Minus -->
                  <span class="sr-only">No</span>
                </td>
              </tr>
            </tbody>
          </table>

          <table class="w-full">
            <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
              Social data
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">Feature</th>
                <th class="sr-only" scope="col">Included</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Dev activity</th>
                <td class="py-5 pr-4">
                  <!-- Minus -->
                  <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                  </svg>
                  <!-- Minus -->
                  <span class="sr-only">No</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Topic search</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Relative social dominance</th>
                <td class="py-5 pr-4">
                  <!-- Minus -->
                  <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                  </svg>
                  <!-- Minus -->
                  <span class="sr-only">No</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Total social volume</th>
                <td class="py-5 pr-4">
                  <!-- Minus -->
                  <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                  </svg>
                  <!-- Minus -->
                  <span class="sr-only">No</span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <div class="px-4 mb-4">
            <h2 class="text-lg leading-6 font-medium text-gray-800">Startup</h2>
          </div>
          <table class="w-full">
            <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
              Financial data
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">Feature</th>
                <th class="sr-only" scope="col">Included</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Open/High/Low/Close</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Price-volume difference indicator</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>
            </tbody>
          </table>

          <table class="w-full">
            <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
              On-chain data
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">Feature</th>
                <th class="sr-only" scope="col">Included</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Network growth</th>
                <td class="py-5 pr-4">
                  <!-- Minus -->
                  <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                  </svg>
                  <!-- Minus -->
                  <span class="sr-only">No</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Average token age consumed</th>
                <td class="py-5 pr-4">
                  <!-- Minus -->
                  <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                  </svg>
                  <!-- Minus -->
                  <span class="sr-only">No</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Exchange flow</th>
                <td class="py-5 pr-4">
                  <!-- Minus -->
                  <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                  </svg>
                  <!-- Minus -->
                  <span class="sr-only">No</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Total ERC20 exchange funds flow</th>
                <td class="py-5 pr-4">
                  <!-- Minus -->
                  <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                  </svg>
                  <!-- Minus -->
                  <span class="sr-only">No</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Transaction volume</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Total circulation (beta)</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Velocity of tokens (beta)</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">ETH gas used</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>
            </tbody>
          </table>

          <table class="w-full">
            <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
              Social data
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">Feature</th>
                <th class="sr-only" scope="col">Included</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Dev activity</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Topic search</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Relative social dominance</th>
                <td class="py-5 pr-4">
                  <!-- Minus -->
                  <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                  </svg>
                  <!-- Minus -->
                  <span class="sr-only">No</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Total social volume</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <div class="px-4 mb-4">
            <h2 class="text-lg leading-6 font-medium text-gray-800">Team</h2>
          </div>
          <table class="w-full">
            <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
              Financial data
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">Feature</th>
                <th class="sr-only" scope="col">Included</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Open/High/Low/Close</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Price-volume difference indicator</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>
            </tbody>
          </table>

          <table class="w-full">
            <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
              On-chain data
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">Feature</th>
                <th class="sr-only" scope="col">Included</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Network growth</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Average token age consumed</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Exchange flow</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Total ERC20 exchange funds flow</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Transaction volume</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Total circulation (beta)</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Velocity of tokens (beta)</th>
                <td class="py-5 pr-4">
                  <!-- Minus -->
                  <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                  </svg>
                  <!-- Minus -->
                  <span class="sr-only">No</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">ETH gas used</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>
            </tbody>
          </table>

          <table class="w-full">
            <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
              Social data
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">Feature</th>
                <th class="sr-only" scope="col">Included</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Dev activity</th>
                <td class="py-5 pr-4">
                  <!-- Minus -->
                  <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                  </svg>
                  <!-- Minus -->
                  <span class="sr-only">No</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Topic search</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Relative social dominance</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Total social volume</th>
                <td class="py-5 pr-4">
                  <!-- Minus -->
                  <svg class="ml-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                  </svg>
                  <!-- Minus -->
                  <span class="sr-only">No</span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>

        <section>
          <div class="px-4 mb-4">
            <h2 class="text-lg leading-6 font-medium text-gray-800">Enterprise</h2>
          </div>
          <table class="w-full">
            <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
              Financial data
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">Feature</th>
                <th class="sr-only" scope="col">Included</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Open/High/Low/Close</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Price-volume difference indicator</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>
            </tbody>
          </table>

          <table class="w-full">
            <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
              On-chain data
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">Feature</th>
                <th class="sr-only" scope="col">Included</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Network growth</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Average token age consumed</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Exchange flow</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Total ERC20 exchange funds flow</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Transaction volume</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Total circulation (beta)</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Velocity of tokens (beta)</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">ETH gas used</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>
            </tbody>
          </table>

          <table class="w-full">
            <caption class="bg-gray-50 border-t border-gray-200 py-3 px-4 text-sm font-bold text-gray-800 text-left dark:bg-gray-700 dark:border-gray-700 dark:text-white">
              Social data
            </caption>
            <thead>
              <tr>
                <th class="sr-only" scope="col">Feature</th>
                <th class="sr-only" scope="col">Included</th>
              </tr>
            </thead>
            <tbody class="divide-y divide-gray-200 dark:divide-gray-700">
              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Dev activity</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Topic search</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Relative social dominance</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>

              <tr class="border-t border-gray-200 dark:border-gray-700">
                <th class="py-5 px-4 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Total social volume</th>
                <td class="py-5 pr-4">
                  <!-- Check -->
                  <svg class="ml-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                  </svg>
                  <!-- End Solid Check -->
                  <span class="sr-only">Yes</span>
                </td>
              </tr>
            </tbody>
          </table>
        </section>
      </div>
      <!-- End xs to lg -->

      <!-- lg+ -->
      <div class="hidden lg:block">
        <table class="w-full h-px">
          <caption class="sr-only">
            Pricing plan comparison
          </caption>
          <thead>
            <tr>
              <th class="py-4 pl-6 pr-6 text-sm font-medium text-gray-800 text-left" scope="col">
                <span class="sr-only">Feature by</span>
                <span>Plans</span>
              </th>

              <th class="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center" scope="col">Free</th>
              <th class="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center" scope="col">Startup</th>
              <th class="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center" scope="col">Team</th>
              <th class="w-1/4 py-4 px-6 text-lg leading-6 font-medium text-gray-800 text-center" scope="col">Enterprise</th>
            </tr>
          </thead>
          <tbody class="border-t border-gray-200 divide-y divide-gray-200 dark:border-gray-700 dark:divide-gray-700">
            <tr>
              <th class="py-3 pl-6 bg-gray-50 font-bold text-gray-800 text-left dark:bg-slate-800 dark:text-white" colspan="5" scope="colgroup">Financial data</th>
            </tr>

            <tr>
              <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Open/High/Low/Close</th>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Free</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Startup</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Team</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Price-volume difference indicator</th>

              <td class="py-5 px-6">
                <!-- Minus -->
                <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- Minus -->
                <span class="sr-only">Not included in Free</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Startup</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Team</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th class="py-3 pl-6 bg-gray-50 font-bold text-gray-800 text-left dark:bg-slate-800 dark:text-white" colspan="5" scope="colgroup">On-chain data</th>
            </tr>

            <tr>
              <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Network growth</th>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Free</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Startup</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Team</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Average token age consumed</th>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Not included in Free</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Startup</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Team</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Exchange flow</th>

              <td class="py-5 px-6">
                <!-- Minus -->
                <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- Minus -->
                <span class="sr-only">Not included in Free</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Startup</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Team</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Total ERC20 exchange funds flow</th>

              <td class="py-5 px-6">
                <!-- Minus -->
                <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- Minus -->
                <span class="sr-only">Not included in Free</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Startup</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Team</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Transaction volume</th>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Free</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Startup</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Team</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Total circulation (beta)</th>

              <td class="py-5 px-6">
                <!-- Minus -->
                <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- Minus -->
                <span class="sr-only">Not included in Free</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Startup</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Team</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Velocity of tokens (beta)</th>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Not included in Free</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Startup</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Team</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">ETH gas used</th>

              <td class="py-5 px-6">
                <!-- Minus -->
                <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- Minus -->
                <span class="sr-only">Not included in Free</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Startup</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Team</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th class="py-3 pl-6 bg-gray-50 font-bold text-gray-800 text-left dark:bg-slate-800 dark:text-white" colspan="5" scope="colgroup">Social data</th>
            </tr>

            <tr>
              <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Dev activity</th>

              <td class="py-5 px-6">
                <!-- Minus -->
                <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- Minus -->
                <span class="sr-only">Included in Free</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Startup</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Team</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Topic search</th>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Free</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Startup</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Team</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Relative social dominance</th>

              <td class="py-5 px-6">
                <!-- Minus -->
                <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- Minus -->
                <span class="sr-only">Included in Free</span>
              </td>

              <td class="py-5 px-6">
                <!-- Minus -->
                <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- Minus -->
                <span class="sr-only">Included in Startup</span>
              </td>

              <td class="py-5 px-6">
                <!-- Minus -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- Minus -->
                <span class="sr-only">Included in Team</span>
              </td>

              <td class="py-5 px-6">
                <!-- Minus -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- Minus -->
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>

            <tr>
              <th class="py-5 pl-6 pr-6 text-sm font-normal text-gray-600 text-left dark:text-gray-400" scope="row">Relative social dominance</th>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Free</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Startup</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-gray-400" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M4.5 9.00005C4.5 8.8807 4.56773 8.76624 4.68829 8.68185C4.80885 8.59746 4.97236 8.55005 5.14286 8.55005H12.8571C13.0276 8.55005 13.1912 8.59746 13.3117 8.68185C13.4323 8.76624 13.5 8.8807 13.5 9.00005C13.5 9.1194 13.4323 9.23386 13.3117 9.31825C13.1912 9.40264 13.0276 9.45005 12.8571 9.45005H5.14286C4.97236 9.45005 4.80885 9.40264 4.68829 9.31825C4.56773 9.23386 4.5 9.1194 4.5 9.00005Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Team</span>
              </td>

              <td class="py-5 px-6">
                <!-- Check -->
                <svg class="mx-auto h-7 w-7 text-blue-600" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M10.2468 5.11462C10.4058 4.91006 10.6862 4.88519 10.8733 5.05907C11.0603 5.23295 11.0831 5.53972 10.9241 5.74428L7.1463 10.6054C6.98484 10.8131 6.69873 10.835 6.5124 10.6539L4.5124 8.70944C4.32894 8.53108 4.31241 8.22382 4.47549 8.02316C4.63856 7.8225 4.91948 7.80443 5.10294 7.98279L6.76331 9.59707L10.2468 5.11462Z" fill="currentColor"/>
                </svg>
                <!-- End Solid Check -->
                <span class="sr-only">Included in Enterprise</span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <!-- End lg+ -->
    </div>

    <div class="text-center mt-12">
      <button type="button" class="hs-collapse-toggle inline-flex justify-center items-center gap-x-2 text-center bg-white border hover:border-gray-300 text-sm text-gray-600 hover:text-gray-800 font-medium hover:shadow-sm rounded-full focus:outline-none focus:ring-2 focus:ring-gray-400 focus:ring-offset-2 focus:ring-offset-white transition py-3 px-4 dark:bg-slate-900 dark:border-gray-700 dark:hover:border-gray-600 dark:text-gray-400 dark:hover:text-gray-200 dark:hover:shadow-slate-700/[.7] dark:focus:ring-gray-700 dark:focus:ring-offset-gray-800" id="hs-pricing-comparision" data-hs-collapse="#hs-pricing-comparision-content">
        <span class="hs-collapse-open:hidden block">View pricing comparision</span>
        <span class="hs-collapse-open:block hidden">Hide pricing comparision</span>
        <svg class="hs-collapse-open:rotate-180 w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
        </svg>
      </button>
    </div>
  </div>
  <!-- End Comparison table -->
</div>
<!-- End Pricing -->
        
        </>

    )

} 
 
export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        
        
        </>

    )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Features -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Title -->
  <div class="mx-auto max-w-2xl mb-8 lg:mb-14 text-center">
    <h2 class="text-3xl lg:text-4xl text-gray-800 font-bold dark:text-gray-200">
      Solo, agency or team? We’ve got you covered.
    </h2>
  </div>
  <!-- End Title -->

  <div class="relative xl:w-10/12 xl:mx-auto">
    <!-- Grid -->
    <div class="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
      <div>
        <!-- Card -->
        <div class="p-4 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-slate-900 dark:border-gray-700">
          <h3 class="text-xl font-bold text-gray-800 dark:text-gray-200">Professional</h3>
          <div class="text-sm text-gray-500">Everything a small team needs.</div>

          <div class="mt-5">
            <span class="text-6xl font-bold text-gray-800 dark:text-gray-200">$18</span>
            <span class="text-lg font-bold text-gray-800 dark:text-gray-200">.00</span>
            <span class="ml-3 text-gray-500">USD / monthly</span>
          </div>

          <div class="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
            <!-- List -->
            <ul role="list" class="space-y-2 text-sm sm:text-base">
              <li class="flex space-x-3">
                <svg class="flex-shrink-0 h-5 w-5 text-blue-500" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="18" height="18" rx="9" fill="currentColor" fill-opacity="0.1"/>
                  <path d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z" fill="currentColor"/>
                </svg>
                <span class="text-gray-800 dark:text-gray-200">
                  Up to 10 people
                </span>
              </li>

              <li class="flex space-x-3">
                <svg class="flex-shrink-0 h-5 w-5 text-blue-500" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="18" height="18" rx="9" fill="currentColor" fill-opacity="0.1"/>
                  <path d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z" fill="currentColor"/>
                </svg>
                <span class="text-gray-800 dark:text-gray-200">
                  Collect data
                </span>
              </li>

              <li class="flex space-x-3">
                <svg class="flex-shrink-0 h-5 w-5 text-blue-500" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="18" height="18" rx="9" fill="currentColor" fill-opacity="0.1"/>
                  <path d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z" fill="currentColor"/>
                </svg>
                <span class="text-gray-800 dark:text-gray-200">
                  Code extensibility
                </span>
              </li>
            </ul>
            <!-- End List -->

            <!-- List -->
            <ul role="list" class="space-y-2 text-sm sm:text-base">
              <li class="flex space-x-3">
                <svg class="flex-shrink-0 h-5 w-5 text-gray-500" width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9Z' fill='currentColor' fill-opacity='0.1'/>
                  <path d='M5.64639 5.64654C5.74016 5.55281 5.86731 5.50015 5.99989 5.50015C6.13248 5.50015 6.25963 5.55281 6.35339 5.64654L8.99989 8.29304L11.6464 5.64654C11.6925 5.59879 11.7477 5.56069 11.8087 5.53449C11.8697 5.50829 11.9353 5.49449 12.0017 5.49392C12.0681 5.49334 12.1339 5.50599 12.1954 5.53113C12.2568 5.55627 12.3126 5.5934 12.3596 5.64034C12.4065 5.68729 12.4437 5.74312 12.4688 5.80456C12.4939 5.86601 12.5066 5.93185 12.506 5.99824C12.5054 6.06463 12.4916 6.13024 12.4654 6.19124C12.4392 6.25224 12.4011 6.30742 12.3534 6.35354L9.70689 9.00004L12.3534 11.6465C12.4445 11.7408 12.4949 11.8671 12.4937 11.9982C12.4926 12.1293 12.44 12.2547 12.3473 12.3474C12.2546 12.4402 12.1292 12.4927 11.9981 12.4939C11.867 12.495 11.7407 12.4446 11.6464 12.3535L8.99989 9.70704L6.35339 12.3535C6.25909 12.4446 6.13279 12.495 6.00169 12.4939C5.87059 12.4927 5.74519 12.4402 5.65248 12.3474C5.55978 12.2547 5.5072 12.1293 5.50606 11.9982C5.50492 11.8671 5.55531 11.7408 5.64639 11.6465L8.29289 9.00004L5.64639 6.35354C5.55266 6.25978 5.5 6.13262 5.5 6.00004C5.5 5.86746 5.55266 5.7403 5.64639 5.64654V5.64654Z' fill='currentColor'/>
                </svg>
                <span class="text-gray-800 dark:text-gray-200">
                  Custom reports
                </span>
              </li>

              <li class="flex space-x-3">
                <svg class="flex-shrink-0 h-5 w-5 text-gray-500" width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9Z' fill='currentColor' fill-opacity='0.1'/>
                  <path d='M5.64639 5.64654C5.74016 5.55281 5.86731 5.50015 5.99989 5.50015C6.13248 5.50015 6.25963 5.55281 6.35339 5.64654L8.99989 8.29304L11.6464 5.64654C11.6925 5.59879 11.7477 5.56069 11.8087 5.53449C11.8697 5.50829 11.9353 5.49449 12.0017 5.49392C12.0681 5.49334 12.1339 5.50599 12.1954 5.53113C12.2568 5.55627 12.3126 5.5934 12.3596 5.64034C12.4065 5.68729 12.4437 5.74312 12.4688 5.80456C12.4939 5.86601 12.5066 5.93185 12.506 5.99824C12.5054 6.06463 12.4916 6.13024 12.4654 6.19124C12.4392 6.25224 12.4011 6.30742 12.3534 6.35354L9.70689 9.00004L12.3534 11.6465C12.4445 11.7408 12.4949 11.8671 12.4937 11.9982C12.4926 12.1293 12.44 12.2547 12.3473 12.3474C12.2546 12.4402 12.1292 12.4927 11.9981 12.4939C11.867 12.495 11.7407 12.4446 11.6464 12.3535L8.99989 9.70704L6.35339 12.3535C6.25909 12.4446 6.13279 12.495 6.00169 12.4939C5.87059 12.4927 5.74519 12.4402 5.65248 12.3474C5.55978 12.2547 5.5072 12.1293 5.50606 11.9982C5.50492 11.8671 5.55531 11.7408 5.64639 11.6465L8.29289 9.00004L5.64639 6.35354C5.55266 6.25978 5.5 6.13262 5.5 6.00004C5.5 5.86746 5.55266 5.7403 5.64639 5.64654V5.64654Z' fill='currentColor'/>
                </svg>
                <span class="text-gray-800 dark:text-gray-200">
                  Product support
                </span>
              </li>

              <li class="flex space-x-3">
                <svg class="flex-shrink-0 h-5 w-5 text-gray-500" width='18' height='18' viewBox='0 0 18 18' fill='none' xmlns='http://www.w3.org/2000/svg'>
                  <path d='M18 9C18 4.02944 13.9706 0 9 0C4.02944 0 0 4.02944 0 9C0 13.9706 4.02944 18 9 18C13.9706 18 18 13.9706 18 9Z' fill='currentColor' fill-opacity='0.1'/>
                  <path d='M5.64639 5.64654C5.74016 5.55281 5.86731 5.50015 5.99989 5.50015C6.13248 5.50015 6.25963 5.55281 6.35339 5.64654L8.99989 8.29304L11.6464 5.64654C11.6925 5.59879 11.7477 5.56069 11.8087 5.53449C11.8697 5.50829 11.9353 5.49449 12.0017 5.49392C12.0681 5.49334 12.1339 5.50599 12.1954 5.53113C12.2568 5.55627 12.3126 5.5934 12.3596 5.64034C12.4065 5.68729 12.4437 5.74312 12.4688 5.80456C12.4939 5.86601 12.5066 5.93185 12.506 5.99824C12.5054 6.06463 12.4916 6.13024 12.4654 6.19124C12.4392 6.25224 12.4011 6.30742 12.3534 6.35354L9.70689 9.00004L12.3534 11.6465C12.4445 11.7408 12.4949 11.8671 12.4937 11.9982C12.4926 12.1293 12.44 12.2547 12.3473 12.3474C12.2546 12.4402 12.1292 12.4927 11.9981 12.4939C11.867 12.495 11.7407 12.4446 11.6464 12.3535L8.99989 9.70704L6.35339 12.3535C6.25909 12.4446 6.13279 12.495 6.00169 12.4939C5.87059 12.4927 5.74519 12.4402 5.65248 12.3474C5.55978 12.2547 5.5072 12.1293 5.50606 11.9982C5.50492 11.8671 5.55531 11.7408 5.64639 11.6465L8.29289 9.00004L5.64639 6.35354C5.55266 6.25978 5.5 6.13262 5.5 6.00004C5.5 5.86746 5.55266 5.7403 5.64639 5.64654V5.64654Z' fill='currentColor'/>
                </svg>
                <span class="text-gray-800 dark:text-gray-200">
                  Activity reporting
                </span>
              </li>
            </ul>
            <!-- End List -->
          </div>

          <div class="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
            <div>
              <p class="text-sm text-gray-500">Cancel anytime.</p>
              <p class="text-sm text-gray-500">No card required.</p>
            </div>

            <div class="flex justify-end">
              <button type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">Start free trial</button>
            </div>
          </div>
        </div>
        <!-- End Card -->
      </div>

      <div>
        <!-- Card -->
        <div class="shadow-xl shadow-gray-200 p-5 relative z-10 bg-white border rounded-xl md:p-10 dark:bg-slate-900 dark:border-gray-700 dark:shadow-gray-900/[.2]">
          <h3 class="text-xl font-bold text-gray-800 dark:text-gray-200">Teams</h3>
          <div class="text-sm text-gray-500">For growing businesses.</div>
          <span class="absolute top-0 right-0 rounded-tr-xl rounded-bl-xl text-xs font-medium bg-gray-800 text-white py-1.5 px-3 dark:bg-gray-900">Most popular</span>

          <div class="mt-5">
            <span class="text-6xl font-bold text-gray-800 dark:text-gray-200">$36</span>
            <span class="text-lg font-bold text-gray-800 dark:text-gray-200">.99</span>
            <span class="ml-3 text-gray-500">USD / monthly</span>
          </div>

          <div class="mt-5 grid sm:grid-cols-2 gap-y-2 py-4 first:pt-0 last:pb-0 sm:gap-x-6 sm:gap-y-0">
            <!-- List -->
            <ul role="list" class="space-y-2 text-sm sm:text-base">
              <li class="flex space-x-3">
                <svg class="flex-shrink-0 h-5 w-5 text-blue-500" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="18" height="18" rx="9" fill="currentColor" fill-opacity="0.1"/>
                  <path d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z" fill="currentColor"/>
                </svg>
                <span class="text-gray-800 dark:text-gray-200">
                  Up to 10 people
                </span>
              </li>

              <li class="flex space-x-3">
                <svg class="flex-shrink-0 h-5 w-5 text-blue-500" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="18" height="18" rx="9" fill="currentColor" fill-opacity="0.1"/>
                  <path d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z" fill="currentColor"/>
                </svg>
                <span class="text-gray-800 dark:text-gray-200">
                  Collect data
                </span>
              </li>

              <li class="flex space-x-3">
                <svg class="flex-shrink-0 h-5 w-5 text-blue-500" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="18" height="18" rx="9" fill="currentColor" fill-opacity="0.1"/>
                  <path d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z" fill="currentColor"/>
                </svg>
                <span class="text-gray-800 dark:text-gray-200">
                  Code extensibility
                </span>
              </li>
            </ul>
            <!-- End List -->

            <!-- List -->
            <ul role="list" class="space-y-2 text-sm sm:text-base">
              <li class="flex space-x-3">
                <svg class="flex-shrink-0 h-5 w-5 text-blue-500" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="18" height="18" rx="9" fill="currentColor" fill-opacity="0.1"/>
                  <path d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z" fill="currentColor"/>
                </svg>
                <span class="text-gray-800 dark:text-gray-200">
                  Custom reports
                </span>
              </li>

              <li class="flex space-x-3">
                <svg class="flex-shrink-0 h-5 w-5 text-blue-500" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="18" height="18" rx="9" fill="currentColor" fill-opacity="0.1"/>
                  <path d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z" fill="currentColor"/>
                </svg>
                <span class="text-gray-800 dark:text-gray-200">
                  Product support
                </span>
              </li>

              <li class="flex space-x-3">
                <svg class="flex-shrink-0 h-5 w-5 text-blue-500" width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect width="18" height="18" rx="9" fill="currentColor" fill-opacity="0.1"/>
                  <path d="M12.0603 5.78792C12.2511 5.56349 12.5876 5.5362 12.8121 5.72697C13.0365 5.91774 13.0638 6.25432 12.873 6.47875L8.3397 11.8121C8.14594 12.04 7.80261 12.064 7.57901 11.8653L5.17901 9.73195C4.95886 9.53626 4.93903 9.19915 5.13472 8.979C5.33041 8.75885 5.66751 8.73902 5.88766 8.93471L7.88011 10.7058L12.0603 5.78792Z" fill="currentColor"/>
                </svg>
                <span class="text-gray-800 dark:text-gray-200">
                  Activity reporting
                </span>
              </li>
            </ul>
            <!-- End List -->
          </div>

          <div class="mt-5 grid grid-cols-2 gap-x-4 py-4 first:pt-0 last:pb-0">
            <div>
              <p class="text-sm text-gray-500">Cancel anytime.</p>
              <p class="text-sm text-gray-500">No card required.</p>
            </div>

            <div class="flex justify-end">
              <button type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">Start free trial</button>
            </div>
          </div>
        </div>
        <!-- End Card -->
      </div>
    </div>
    <!-- End Grid -->

    <!-- SVG Element -->
    <div class="hidden md:block absolute top-0 right-0 translate-y-16 translate-x-16">
      <svg class="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
        <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
        <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
      </svg>
    </div>
    <!-- End SVG Element -->

    <!-- SVG Element -->
    <div class="hidden md:block absolute bottom-0 left-0 translate-y-16 -translate-x-16">
      <svg class="w-56 h-auto text-cyan-500" width="347" height="188" viewBox="0 0 347 188" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M4 82.4591C54.7956 92.8751 30.9771 162.782 68.2065 181.385C112.642 203.59 127.943 78.57 122.161 25.5053C120.504 2.2376 93.4028 -8.11128 89.7468 25.5053C85.8633 61.2125 130.186 199.678 180.982 146.248L214.898 107.02C224.322 95.4118 242.9 79.2851 258.6 107.02C274.299 134.754 299.315 125.589 309.861 117.539L343 93.4426" stroke="currentColor" stroke-width="7" stroke-linecap="round"/>
      </svg>
    </div>
    <!-- End SVG Element -->
  </div>

  <div class="mt-7 text-center">
    <p class="text-xs text-gray-400">
      Prices in USD. Taxes may apply.
    </p>
  </div>
</div>
<!-- End Features -->

<!-- Comparison Table -->
<div class="relative">
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 md:py-14 lg:py-20 mx-auto">
    <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2 class="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">Compare plans</h2>
    </div>

    <!-- Header -->
    <div class="hidden lg:block sticky top-0 left-0 py-2 bg-white/60 backdrop-blur-md dark:bg-slate-900/60">
      <!-- Grid -->
      <div class="grid grid-cols-6 gap-6">
        <div class="col-span-2">
          <span class="font-semibold text-lg text-gray-800 dark:text-gray-200">
            Features
          </span>
        </div>
        <!-- End Col -->

        <div class="col-span-1">
          <span class="font-semibold text-lg text-gray-800 dark:text-gray-200">
            Free
          </span>
          <p class="mt-2 text-sm text-gray-500">
            Free forever
          </p>
        </div>
        <!-- End Col -->

        <div class="col-span-1">
          <span class="font-semibold text-lg text-gray-800 dark:text-gray-200">
            Startup
          </span>
          <p class="mt-2 text-sm text-gray-500">
            $39 per month billed annually
          </p>
        </div>
        <!-- End Col -->

        <div class="col-span-1">
          <span class="font-semibold text-lg text-gray-800 dark:text-gray-200">
            Team
          </span>
          <p class="mt-2 text-sm text-gray-500">
            $89 per month billed annually
          </p>
        </div>
        <!-- End Col -->

        <div class="col-span-1">
          <span class="font-semibold text-lg text-gray-800 dark:text-gray-200">
            Enterprise
          </span>
          <p class="mt-2 text-sm text-gray-500">
            $149 per month billed annually
          </p>
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->
    </div>
    <!-- End Header -->

    <!-- Section -->
    <div class="space-y-4 lg:space-y-0">
      <!-- List -->
      <ul class="grid lg:grid-cols-6 lg:gap-6">
        <!-- Item -->
        <li class="lg:col-span-2 lg:py-3">
          <span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
            General
          </span>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>
        <!-- End Item -->
      </ul>
      <!-- End List -->

      <!-- List -->
      <ul class="grid lg:grid-cols-6 lg:gap-6">
        <!-- Item -->
        <li class="lg:col-span-2 pb-1.5 lg:py-3">
          <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
            Number of seats
          </span>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Free
            </span>
            <span class="text-sm text-gray-800 dark:text-gray-200">
              1
            </span>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Startup
            </span>
            <span class="text-sm text-gray-800 dark:text-gray-200">
              Up to 3
            </span>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Team
            </span>
            <span class="text-sm text-gray-800 dark:text-gray-200">
              Up to 10
            </span>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Enterprise
            </span>
            <span class="text-sm text-gray-800 dark:text-gray-200">
              Unlimited
            </span>
          </div>
        </li>
        <!-- End Item -->
      </ul>
      <!-- End List -->

      <!-- List -->
      <ul class="grid lg:grid-cols-6 lg:gap-6">
        <!-- Item -->
        <li class="lg:col-span-2 pb-1.5 lg:py-3">
          <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
            Storage
          </span>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Free
            </span>
            <span class="text-sm text-gray-800 dark:text-gray-200">
              15 GB
            </span>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Startup
            </span>
            <span class="text-sm text-gray-800 dark:text-gray-200">
              1 TB
            </span>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Team
            </span>
            <span class="text-sm text-gray-800 dark:text-gray-200">
              15 TB
            </span>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Enterprise
            </span>
            <span class="text-sm text-gray-800 dark:text-gray-200">
              Unlimited
            </span>
          </div>
        </li>
        <!-- End Item -->
      </ul>
      <!-- End List -->

      <!-- List -->
      <ul class="grid lg:grid-cols-6 lg:gap-6">
        <!-- Item -->
        <li class="lg:col-span-2 pb-1.5 lg:py-3">
          <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
            Email sharing
          </span>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Free
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Startup
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Team
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Enterprise
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->
      </ul>
      <!-- End List -->

      <!-- List -->
      <ul class="grid lg:grid-cols-6 lg:gap-6">
        <!-- Item -->
        <li class="lg:col-span-2 pb-1.5 lg:py-3">
          <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
            Any time, anywhere access
          </span>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Free
            </span>
            <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Startup
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Team
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Enterprise
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->
      </ul>
      <!-- End List -->
    </div>
    <!-- End Section -->

    <!-- Section -->
    <div class="mt-6 space-y-4 lg:space-y-0">
      <!-- List -->
      <ul class="grid lg:grid-cols-6 lg:gap-6">
        <!-- Item -->
        <li class="lg:col-span-2 lg:py-3">
          <span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Financial data
          </span>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>
        <!-- End Item -->
      </ul>
      <!-- End List -->

      <!-- List -->
      <ul class="grid lg:grid-cols-6 lg:gap-6">
        <!-- Item -->
        <li class="lg:col-span-2 pb-1.5 lg:py-3">
          <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
            Open/High/Low/Close
          </span>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Free
            </span>
            <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Startup
            </span>
            <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Team
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Enterprise
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->
      </ul>
      <!-- End List -->

      <!-- List -->
      <ul class="grid lg:grid-cols-6 lg:gap-6">
        <!-- Item -->
        <li class="lg:col-span-2 pb-1.5 lg:py-3">
          <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
            Price-volume difference indicator
          </span>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Free
            </span>
            <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Startup
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Team
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Enterprise
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->
      </ul>
      <!-- End List -->
    </div>
    <!-- End Section -->

    <!-- Section -->
    <div class="mt-6 space-y-4 lg:space-y-0">
      <!-- List -->
      <ul class="grid lg:grid-cols-6 lg:gap-6">
        <!-- Item -->
        <li class="lg:col-span-2 lg:py-3">
          <span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
            On-chain data
          </span>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>
        <!-- End Item -->
      </ul>
      <!-- End List -->

      <!-- List -->
      <ul class="grid lg:grid-cols-6 lg:gap-6">
        <!-- Item -->
        <li class="lg:col-span-2 pb-1.5 lg:py-3">
          <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
            Network growth
          </span>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Free
            </span>
            <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Startup
            </span>
            <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Team
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Enterprise
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->
      </ul>
      <!-- End List -->

      <!-- List -->
      <ul class="grid lg:grid-cols-6 lg:gap-6">
        <!-- Item -->
        <li class="lg:col-span-2 pb-1.5 lg:py-3">
          <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
            Average token age consumed
          </span>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Free
            </span>
            <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Startup
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Team
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Enterprise
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->
      </ul>
      <!-- End List -->

      <!-- List -->
      <ul class="grid lg:grid-cols-6 lg:gap-6">
        <!-- Item -->
        <li class="lg:col-span-2 pb-1.5 lg:py-3">
          <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
            Exchange flow
          </span>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Free
            </span>
            <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Startup
            </span>
            <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Team
            </span>
            <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Enterprise
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->
      </ul>
      <!-- End List -->

      <!-- List -->
      <ul class="grid lg:grid-cols-6 lg:gap-6">
        <!-- Item -->
        <li class="lg:col-span-2 pb-1.5 lg:py-3">
          <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
            Total ERC20 exchange funds flow
          </span>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Free
            </span>
            <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Startup
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Team
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Enterprise
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->
      </ul>
      <!-- End List -->

      <!-- List -->
      <ul class="grid lg:grid-cols-6 lg:gap-6">
        <!-- Item -->
        <li class="lg:col-span-2 pb-1.5 lg:py-3">
          <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
            Transaction volume
          </span>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Free
            </span>
            <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Startup
            </span>
            <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Team
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Enterprise
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->
      </ul>
      <!-- End List -->

      <!-- List -->
      <ul class="grid lg:grid-cols-6 lg:gap-6">
        <!-- Item -->
        <li class="lg:col-span-2 pb-1.5 lg:py-3">
          <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
            Total circulation (beta)
          </span>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Free
            </span>
            <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Startup
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Team
            </span>
            <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Enterprise
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->
      </ul>
      <!-- End List -->

      <!-- List -->
      <ul class="grid lg:grid-cols-6 lg:gap-6">
        <!-- Item -->
        <li class="lg:col-span-2 pb-1.5 lg:py-3">
          <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
            Velocity of tokens (beta)
          </span>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Free
            </span>
            <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Startup
            </span>
            <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Team
            </span>
            <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Enterprise
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->
      </ul>
      <!-- End List -->

      <!-- List -->
      <ul class="grid lg:grid-cols-6 lg:gap-6">
        <!-- Item -->
        <li class="lg:col-span-2 pb-1.5 lg:py-3">
          <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
            ETH gas used
          </span>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Free
            </span>
            <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Startup
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Team
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Enterprise
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->
      </ul>
      <!-- End List -->
    </div>
    <!-- End Section -->

    <!-- Section -->
    <div class="mt-6 space-y-4 lg:space-y-0">
      <!-- List -->
      <ul class="grid lg:grid-cols-6 lg:gap-6">
        <!-- Item -->
        <li class="lg:col-span-2 lg:py-3">
          <span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Social data
          </span>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
        </li>
        <!-- End Item -->
      </ul>
      <!-- End List -->

      <!-- List -->
      <ul class="grid lg:grid-cols-6 lg:gap-6">
        <!-- Item -->
        <li class="lg:col-span-2 pb-1.5 lg:py-3">
          <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
            Dev activity
          </span>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Free
            </span>
            <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Startup
            </span>
            <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Team
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Enterprise
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->
      </ul>
      <!-- End List -->

      <!-- List -->
      <ul class="grid lg:grid-cols-6 lg:gap-6">
        <!-- Item -->
        <li class="lg:col-span-2 pb-1.5 lg:py-3">
          <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
            Topic search
          </span>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Free
            </span>
            <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Startup
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Team
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Enterprise
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->
      </ul>
      <!-- End List -->

      <!-- List -->
      <ul class="grid lg:grid-cols-6 lg:gap-6">
        <!-- Item -->
        <li class="lg:col-span-2 pb-1.5 lg:py-3">
          <span class="font-semibold lg:font-normal text-sm text-gray-800 dark:text-gray-200">
            Relative social dominance
          </span>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Free
            </span>
            <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Startup
            </span>
            <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Team
            </span>
            <svg class="w-4 h-4 text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->

        <!-- Item -->
        <li class="col-span-1 py-1.5 lg:py-3 border-b border-gray-200 dark:border-gray-700">
          <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
            <span class="lg:hidden md:col-span-2 text-sm text-gray-800 dark:text-gray-200">
              Enterprise
            </span>
            <svg class="w-5 h-5 text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
            </svg>
          </div>
        </li>
        <!-- End Item -->
      </ul>
      <!-- End List -->
    </div>
    <!-- End Section -->

    <!-- Footer -->
    <div class="hidden lg:block mt-6">
      <!-- Grid -->
      <div class="grid grid-cols-6 gap-6">
        <div class="col-span-2">
        </div>
        <!-- End Col -->

        <div class="col-span-1">
          <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-500 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
            Get started
          </a>
        </div>
        <!-- End Col -->

        <div class="col-span-1">
          <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-x-3 text-center bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white transition dark:focus:ring-offset-gray-800" href="#">
            Get started
          </a>
        </div>
        <!-- End Col -->

        <div class="col-span-1">
          <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-500 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
            Get started
          </a>
        </div>
        <!-- End Col -->

        <div class="col-span-1">
          <a class="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-500 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
            Get started
          </a>
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->
    </div>
    <!-- End Footer -->

    <!-- Button Group -->
    <div class="mt-8 md:mt-12 flex justify-center items-center gap-x-3">
      <p class="text-sm text-gray-500 dark:text-gray-400">
        Need a custom plan?
      </p>

      <button type="button" class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-lg border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-500 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
        Contact us
      </button>
    </div>
    <!-- End Button Group -->
  </div>
</div>
<!-- End Comparison Table -->
        
        </>

    )

} 

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        
        
        </>

    )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Comparison Table -->
<div class="relative">
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 md:py-14 lg:py-20 mx-auto">
    <div class="max-w-2xl mx-auto text-center mb-10 lg:mb-14">
      <h2 class="text-2xl font-bold md:text-3xl md:leading-tight dark:text-white">Compare plans</h2>
    </div>

    <div class="relative after:absolute after:inset-x-0 after:bottom-0 after:z-10 after:w-full after:h-48 after:bg-gradient-to-t after:from-white after:via-white/70 dark:after:from-slate-900 dark:after:via-slate-900/95">
      <!-- Header -->
      <div class="hidden lg:block sticky top-0 left-0 py-2 bg-white dark:bg-slate-900">
        <!-- Grid -->
        <div class="grid grid-cols-6 gap-6">
          <div class="col-span-2">
            <!-- Header -->
            <div class="h-full">

            </div>
            <!-- End Header -->
          </div>
          <!-- End Col -->

          <div class="col-span-1">
            <!-- Header -->
            <div class="h-full p-4 flex flex-col justify-between bg-white border border-gray-200 rounded-xl dark:bg-slate-900 dark:border-gray-700">
              <div>
                <span class="font-semibold text-lg text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <p class="text-xs text-gray-500">
                  Free forever
                </p>
              </div>
              <div class="mt-2">
                <a class="w-full py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-500 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
                  Get started
                </a>
              </div>
            </div>
            <!-- End Header -->
          </div>
          <!-- End Col -->

          <div class="col-span-1">
            <!-- Header -->
            <div class="h-full p-4 flex flex-col justify-between bg-white border border-gray-200 rounded-xl dark:bg-slate-900 dark:border-gray-700">
              <div>
                <span class="font-semibold text-lg text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <p class="text-xs text-gray-500">
                  $39 per month billed annually
                </p>
              </div>
              <div class="mt-2">
                <a class="w-full py-2 px-3 inline-flex justify-center items-center gap-x-3 text-center bg-blue-500 hover:bg-blue-600 text-white text-sm font-medium rounded-lg hover:shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white transition dark:focus:ring-offset-gray-800" href="#">
                  Get started
                </a>
              </div>
            </div>
            <!-- End Header -->
          </div>
          <!-- End Col -->

          <div class="col-span-1">
            <!-- Header -->
            <div class="h-full p-4 flex flex-col justify-between bg-white border border-gray-200 rounded-xl dark:bg-slate-900 dark:border-gray-700">
              <div>
                <span class="font-semibold text-lg text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <p class="text-xs text-gray-500">
                  $89 per month billed annually
                </p>
              </div>
              <div class="mt-2">
                <a class="w-full py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-500 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
                  Get started
                </a>
              </div>
            </div>
            <!-- End Header -->
          </div>
          <!-- End Col -->

          <div class="col-span-1">
            <!-- Header -->
            <div class="h-full p-4 flex flex-col justify-between bg-white border border-gray-200 rounded-xl dark:bg-slate-900 dark:border-gray-700">
              <div>
                <span class="font-semibold text-lg text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <p class="text-xs text-gray-500">
                  $149 per month billed annually
                </p>
              </div>
              <div class="mt-2">
                <a class="w-full py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-500 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800" href="#">
                  Get started
                </a>
              </div>
            </div>
            <!-- End Header -->
          </div>
          <!-- End Col -->
        </div>
        <!-- End Grid -->
      </div>
      <!-- End Header -->

      <!-- Section -->
      <div class="space-y-4 lg:space-y-0">
        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 lg:py-3">
            <span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
              General
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="text-sm text-gray-800 dark:text-gray-200">
              Number of seats
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <span class="text-sm text-gray-800 dark:text-gray-200">
                1
              </span>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <span class="text-sm text-gray-800 dark:text-gray-200">
                Up to 3
              </span>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <span class="text-sm text-gray-800 dark:text-gray-200">
                Up to 10
              </span>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <span class="text-sm text-gray-800 dark:text-gray-200">
                Unlimited
              </span>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="text-sm text-gray-800 dark:text-gray-200">
              Storage
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <span class="text-sm text-gray-800 dark:text-gray-200">
                15 GB
              </span>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <span class="text-sm text-gray-800 dark:text-gray-200">
                1 TB
              </span>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <span class="text-sm text-gray-800 dark:text-gray-200">
                15 TB
              </span>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-2 md:grid-cols-6 lg:block">
              <span class="lg:hidden md:col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <span class="text-sm text-gray-800 dark:text-gray-200">
                Unlimited
              </span>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="text-sm text-gray-800 dark:text-gray-200">
              Email sharing
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="text-sm text-gray-800 dark:text-gray-200">
              Any time, anywhere access
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->
      </div>
      <!-- End Section -->

      <!-- Section -->
      <div class="mt-6 space-y-4 lg:space-y-0">
        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 lg:py-3">
            <span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Financial data
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="text-sm text-gray-800 dark:text-gray-200">
              Open/High/Low/Close
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="text-sm text-gray-800 dark:text-gray-200">
              Price-volume difference indicator
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->
      </div>
      <!-- End Section -->

      <!-- Section -->
      <div class="mt-6 space-y-4 lg:space-y-0">
        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 lg:py-3">
            <span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
              On-chain data
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="text-sm text-gray-800 dark:text-gray-200">
              Network growth
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="text-sm text-gray-800 dark:text-gray-200">
              Average token age consumed
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="text-sm text-gray-800 dark:text-gray-200">
              Exchange flow
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="text-sm text-gray-800 dark:text-gray-200">
              Total ERC20 exchange funds flow
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="text-sm text-gray-800 dark:text-gray-200">
              Transaction volume
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="text-sm text-gray-800 dark:text-gray-200">
              Total circulation (beta)
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="text-sm text-gray-800 dark:text-gray-200">
              Velocity of tokens (beta)
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="text-sm text-gray-800 dark:text-gray-200">
              ETH gas used
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->
      </div>
      <!-- End Section -->

      <!-- Section -->
      <div class="mt-6 space-y-4 lg:space-y-0">
        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 lg:py-3">
            <span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
              Social data
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="text-sm text-gray-800 dark:text-gray-200">
              Dev activity
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="text-sm text-gray-800 dark:text-gray-200">
              Topic search
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->

        <!-- List -->
        <ul class="grid lg:grid-cols-6 lg:gap-6">
          <!-- Item -->
          <li class="lg:col-span-2 pb-1.5 lg:py-3">
            <span class="text-sm text-gray-800 dark:text-gray-200">
              Relative social dominance
            </span>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Free
              </span>
              <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Startup
              </span>
              <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Team
              </span>
              <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->

          <!-- Item -->
          <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
            <div class="grid grid-cols-6 lg:block">
              <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                Enterprise
              </span>
              <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
              </svg>
            </div>
          </li>
          <!-- End Item -->
        </ul>
        <!-- End List -->
      </div>
      <!-- End Section -->

      <!-- Load More Content -->
      <div id="view-all-features-button" class="hs-collapse hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="view-all-features">
        <!-- Section -->
        <div class="mt-6 relative z-20 space-y-4 lg:space-y-0">
          <!-- List -->
          <ul class="grid lg:grid-cols-6 lg:gap-6">
            <!-- Item -->
            <li class="lg:col-span-2 lg:py-3">
              <span class="text-lg font-semibold text-gray-800 dark:text-gray-200">
                Additional features
              </span>
            </li>
            <!-- End Item -->

            <!-- Item -->
            <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
            </li>
            <!-- End Item -->

            <!-- Item -->
            <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
            </li>
            <!-- End Item -->

            <!-- Item -->
            <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
            </li>
            <!-- End Item -->

            <!-- Item -->
            <li class="hidden lg:block lg:col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center">
            </li>
            <!-- End Item -->
          </ul>
          <!-- End List -->

          <!-- List -->
          <ul class="grid lg:grid-cols-6 lg:gap-6">
            <!-- Item -->
            <li class="lg:col-span-2 pb-1.5 lg:py-3">
              <span class="text-sm text-gray-800 dark:text-gray-200">
                Dedicated account manager
              </span>
            </li>
            <!-- End Item -->

            <!-- Item -->
            <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
              <div class="grid grid-cols-6 lg:block">
                <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                </svg>
              </div>
            </li>
            <!-- End Item -->

            <!-- Item -->
            <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
              <div class="grid grid-cols-6 lg:block">
                <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                </svg>
              </div>
            </li>
            <!-- End Item -->

            <!-- Item -->
            <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
              <div class="grid grid-cols-6 lg:block">
                <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                </svg>
              </div>
            </li>
            <!-- End Item -->

            <!-- Item -->
            <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
              <div class="grid grid-cols-6 lg:block">
                <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                </svg>
              </div>
            </li>
            <!-- End Item -->
          </ul>
          <!-- End List -->

          <!-- List -->
          <ul class="grid lg:grid-cols-6 lg:gap-6">
            <!-- Item -->
            <li class="lg:col-span-2 pb-1.5 lg:py-3">
              <span class="text-sm text-gray-800 dark:text-gray-200">
                24/7 support
              </span>
            </li>
            <!-- End Item -->

            <!-- Item -->
            <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
              <div class="grid grid-cols-6 lg:block">
                <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                </svg>
              </div>
            </li>
            <!-- End Item -->

            <!-- Item -->
            <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
              <div class="grid grid-cols-6 lg:block">
                <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                </svg>
              </div>
            </li>
            <!-- End Item -->

            <!-- Item -->
            <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
              <div class="grid grid-cols-6 lg:block">
                <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                </svg>
              </div>
            </li>
            <!-- End Item -->

            <!-- Item -->
            <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
              <div class="grid grid-cols-6 lg:block">
                <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                </svg>
              </div>
            </li>
            <!-- End Item -->
          </ul>
          <!-- End List -->

          <!-- List -->
          <ul class="grid lg:grid-cols-6 lg:gap-6">
            <!-- Item -->
            <li class="lg:col-span-2 pb-1.5 lg:py-3">
              <span class="text-sm text-gray-800 dark:text-gray-200">
                Rewards
              </span>
            </li>
            <!-- End Item -->

            <!-- Item -->
            <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
              <div class="grid grid-cols-6 lg:block">
                <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                </svg>
              </div>
            </li>
            <!-- End Item -->

            <!-- Item -->
            <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
              <div class="grid grid-cols-6 lg:block">
                <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                </svg>
              </div>
            </li>
            <!-- End Item -->

            <!-- Item -->
            <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
              <div class="grid grid-cols-6 lg:block">
                <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                </svg>
              </div>
            </li>
            <!-- End Item -->

            <!-- Item -->
            <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
              <div class="grid grid-cols-6 lg:block">
                <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                </svg>
              </div>
            </li>
            <!-- End Item -->
          </ul>
          <!-- End List -->

          <!-- List -->
          <ul class="grid lg:grid-cols-6 lg:gap-6">
            <!-- Item -->
            <li class="lg:col-span-2 pb-1.5 lg:py-3">
              <span class="text-sm text-gray-800 dark:text-gray-200">
                Business API
              </span>
            </li>
            <!-- End Item -->

            <!-- Item -->
            <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
              <div class="grid grid-cols-6 lg:block">
                <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Free
                </span>
                <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                </svg>
              </div>
            </li>
            <!-- End Item -->

            <!-- Item -->
            <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
              <div class="grid grid-cols-6 lg:block">
                <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Startup
                </span>
                <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                </svg>
              </div>
            </li>
            <!-- End Item -->

            <!-- Item -->
            <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
              <div class="grid grid-cols-6 lg:block">
                <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Team
                </span>
                <svg class="w-4 h-4 lg:mx-auto text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2 8a.5.5 0 0 1 .5-.5h11a.5.5 0 0 1 0 1h-11A.5.5 0 0 1 2 8Z"/>
                </svg>
              </div>
            </li>
            <!-- End Item -->

            <!-- Item -->
            <li class="col-span-1 py-1.5 lg:py-3 px-4 lg:px-0 lg:text-center bg-gray-100 dark:bg-white/[.05]">
              <div class="grid grid-cols-6 lg:block">
                <span class="lg:hidden col-span-2 font-semibold text-sm text-gray-800 dark:text-gray-200">
                  Enterprise
                </span>
                <svg class="w-5 h-5 lg:mx-auto text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                  <path d="M12.736 3.97a.733.733 0 0 1 1.047 0c.286.289.29.756.01 1.05L7.88 12.01a.733.733 0 0 1-1.065.02L3.217 8.384a.757.757 0 0 1 0-1.06.733.733 0 0 1 1.047 0l3.052 3.093 5.4-6.425a.247.247 0 0 1 .02-.022Z"/>
                </svg>
              </div>
            </li>
            <!-- End Item -->
          </ul>
          <!-- End List -->
        </div>
        <!-- End Section -->
      </div>
      <!-- End Load More Content -->
    </div>

    <!-- View More Button -->
    <div class="mt-8 text-center">
      <button type="button" id="view-all-features" class="hs-collapse-toggle hs-collapse-open:rounded-full hs-collapse-open:px-3 group py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-blue-500 font-medium bg-white text-blue-500 shadow-sm align-middle hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-500 transition-all text-sm dark:bg-slate-900 dark:hover:bg-blue-800/20 dark:border-blue-500 dark:text-blue-500 dark:focus:ring-offset-gray-800" data-hs-collapse="#view-all-features-button">
        <span class="hs-collapse-open:hidden">View all features</span>
        <svg class="hidden hs-collapse-open:block group-hover:rotate-180 transition duration-300 w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
        </svg>
      </button>
    </div>
    <!-- End View More Button -->
  </div>
</div>
<!-- End Comparison Table -->
        
        </>

    )

} 
 
export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        
        
        </>

    )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        
        
        </>

    )

} 

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        
        
        </>

    )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
  return (

      <>
      
      
      
      </>

  )

} 

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

  
  return (

      <>
      
      
      
      </>

  )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

  
  return (

      <>
      
      
      
      </>

  )

} 

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
  return (

      <>
      
      
      
      </>

  )

} 

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

  
  return (

      <>
      
      
      
      </>

  )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

  
  return (

      <>
      
      
      
      </>

  )

} 

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
  return (

      <>
      
      
      
      </>

  )

} 

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

  
  return (

      <>
      
      
      
      </>

  )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

  
  return (

      <>
      
      
      
      </>

  )

} 

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
  return (

      <>
      
      
      
      </>

  )

} 

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

  
  return (

      <>
      
      
      
      </>

  )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

  
  return (

      <>
      
      
      
      </>

  )

} 
