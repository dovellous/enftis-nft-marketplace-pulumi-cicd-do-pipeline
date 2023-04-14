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
        
        <!-- Features -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="relative p-6 md:p-16">
    <!-- Grid -->
    <div class="relative z-10 lg:grid lg:grid-cols-12 lg:gap-16 lg:items-center">
      <div class="mb-10 lg:mb-0 lg:col-span-6 lg:col-start-8 lg:order-2">
        <h2 class="text-2xl text-gray-800 font-bold sm:text-3xl dark:text-gray-200">
          Fully customizable rules to match your unique needs
        </h2>

        <!-- Tab Navs -->
        <nav class="grid gap-4 mt-5 md:mt-10" aria-label="Tabs" role="tablist">
          <button type="button" class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700 active" id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
            <span class="flex">
              <svg class="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/>
                <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
              </svg>
              <span class="grow ml-6">
                <span class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">Advanced tools</span>
                <span class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">Use Preline thoroughly thought and automated libraries to manage your businesses.</span>
              </span>
            </span>
          </button>

          <button type="button" class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700" id="tabs-with-card-item-2" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2" role="tab">
            <span class="flex">
              <svg class="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
              </svg>
              <span class="grow ml-6">
                <span class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">Smart dashboards</span>
                <span class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">Quickly Preline sample components, copy-paste codes, and start right off.</span>
              </span>
            </span>
          </button>

          <button type="button" class="hs-tab-active:bg-white hs-tab-active:shadow-md hs-tab-active:hover:border-transparent text-left hover:bg-gray-200 p-4 md:p-5 rounded-xl dark:hs-tab-active:bg-slate-900 dark:hover:bg-gray-700" id="tabs-with-card-item-3" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3" role="tab">
            <span class="flex">
              <svg class="flex-shrink-0 mt-2 h-6 w-6 md:w-7 md:h-7 hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z"/>
              </svg>
              <span class="grow ml-6">
                <span class="block text-lg font-semibold hs-tab-active:text-blue-600 text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">Powerful features</span>
                <span class="block mt-1 text-gray-800 dark:hs-tab-active:text-gray-200 dark:text-gray-200">Reduce time and effort on building modern look design with Preline only.</span>
              </span>
            </span>
          </button>
        </nav>
        <!-- End Tab Navs -->
      </div>
      <!-- End Col -->

      <div class="lg:col-span-6">
        <div class="relative">
          <!-- Tab Content -->
          <div>
            <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
              <img class="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]" src="https://images.unsplash.com/photo-1605629921711-2f6b00c6bbf4?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80" alt="Image Description">
            </div>

            <div id="tabs-with-card-2" class="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
              <img class="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]" src="https://images.unsplash.com/photo-1665686306574-1ace09918530?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80" alt="Image Description">
            </div>

            <div id="tabs-with-card-3" class="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-3">
              <img class="shadow-xl shadow-gray-200 rounded-xl dark:shadow-gray-900/[.2]" src="https://images.unsplash.com/photo-1598929213452-52d72f63e307?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=987&h=1220&q=80" alt="Image Description">
            </div>
          </div>
          <!-- End Tab Content -->

          <!-- SVG Element -->
          <div class="hidden absolute top-0 right-0 translate-x-20 md:block lg:translate-x-20">
            <svg class="w-16 h-auto text-orange-500" width="121" height="135" viewBox="0 0 121 135" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M5 16.4754C11.7688 27.4499 21.2452 57.3224 5 89.0164" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
              <path d="M33.6761 112.104C44.6984 98.1239 74.2618 57.6776 83.4821 5" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
              <path d="M50.5525 130C68.2064 127.495 110.731 117.541 116 78.0874" stroke="currentColor" stroke-width="10" stroke-linecap="round"/>
            </svg>
          </div>
          <!-- End SVG Element -->
        </div>
      </div>
      <!-- End Col -->
    </div>
    <!-- End Grid -->

    <!-- Background Color -->
    <div class="absolute inset-0 grid grid-cols-12 w-full h-full">
      <div class="col-span-full lg:col-span-7 lg:col-start-6 bg-gray-100 w-full h-5/6 rounded-xl sm:h-3/4 lg:h-full dark:bg-white/[.075]"></div>
    </div>
    <!-- End Background Color -->
  </div>
</div>
<!-- End Features -->
        
        </>

    )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Features -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Tab Nav -->
  <nav class="max-w-6xl mx-auto grid grid-cols-2 sm:grid-cols-3 gap-2 sm:gap-4" aria-label="Tabs" role="tablist">
    <button type="button" class="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent text-center md:text-left hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700 active" id="tabs-with-card-item-1" data-hs-tab="#tabs-with-card-1" aria-controls="tabs-with-card-1" role="tab">
      <span class="md:flex">
        <svg class="hidden md:block flex-shrink-0 md:mt-2 h-6 w-6 hs-tab-active:text-blue-600 text-gray-500 dark:hs-tab-active:text-blue-500 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M5.5 2A3.5 3.5 0 0 0 2 5.5v5A3.5 3.5 0 0 0 5.5 14h5a3.5 3.5 0 0 0 3.5-3.5V8a.5.5 0 0 1 1 0v2.5a4.5 4.5 0 0 1-4.5 4.5h-5A4.5 4.5 0 0 1 1 10.5v-5A4.5 4.5 0 0 1 5.5 1H8a.5.5 0 0 1 0 1H5.5z"/>
          <path d="M16 3a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/>
        </svg>
        <span class="md:grow md:ml-5">
          <span class="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">All-in-one workspace</span>
          <span class="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">Create a business, whether you’ve got a fresh idea.</span>
        </span>
      </span>
    </button>

    <button type="button" class="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent text-center md:text-left hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700" id="tabs-with-card-item-2" data-hs-tab="#tabs-with-card-2" aria-controls="tabs-with-card-2" role="tab">
      <span class="md:flex">
        <svg class="hidden md:block flex-shrink-0 md:mt-2 h-6 w-6 hs-tab-active:text-blue-600 text-gray-500 dark:hs-tab-active:text-blue-500 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M0 0h1v15h15v1H0V0Zm14.817 3.113a.5.5 0 0 1 .07.704l-4.5 5.5a.5.5 0 0 1-.74.037L7.06 6.767l-3.656 5.027a.5.5 0 0 1-.808-.588l4-5.5a.5.5 0 0 1 .758-.06l2.609 2.61 4.15-5.073a.5.5 0 0 1 .704-.07Z"/>
        </svg>
        <span class="md:grow md:ml-5">
          <span class="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">Automation on a whole new level</span>
          <span class="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">Use automation to scale campaigns profitably and save time doing it.</span>
        </span>
      </span>
    </button>

    <button type="button" class="hs-tab-active:bg-gray-100 hs-tab-active:hover:border-transparent text-center md:text-left hover:bg-gray-100 p-3 md:p-5 rounded-xl dark:hs-tab-active:bg-white/[.05] dark:hover:bg-gray-700" id="tabs-with-card-item-3" data-hs-tab="#tabs-with-card-3" aria-controls="tabs-with-card-3" role="tab">
      <span class="md:flex">
        <svg class="hidden md:block flex-shrink-0 md:mt-2 h-6 w-6 hs-tab-active:text-blue-600 text-gray-500 dark:hs-tab-active:text-blue-500 dark:text-gray-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z"/>
        </svg>
        <span class="md:grow md:ml-5">
          <span class="hs-tab-active:text-blue-600 block font-semibold text-gray-800 dark:hs-tab-active:text-blue-500 dark:text-gray-200">Solving problems for every team</span>
          <span class="hidden lg:block mt-2 text-gray-800 dark:text-gray-200">One tool for your company to share knowledge and ship projects.</span>
        </span>
      </span>
    </button>
  </nav>
  <!-- End Tab Nav -->

  <!-- Tab Content -->
  <div class="mt-12 md:mt-16">
    <div id="tabs-with-card-1" role="tabpanel" aria-labelledby="tabs-with-card-item-1">
      <!-- Devices -->
      <div class="max-w-[1140px] lg:pb-32 relative">
        <!-- Mobile Device -->
        <figure class="hidden absolute bottom-0 left-0 z-[2] max-w-full w-60 h-auto mb-20 ml-20 lg:block">
          <div class="p-1.5 bg-gray-100 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-700 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
            <img class="max-w-full h-auto rounded-[1.25rem]" src="../assets/img/mockups/img9.jpg" alt="Image Description">
          </div>
        </figure>
        <!-- End Mobile Device -->

        <!-- Browser Device -->
        <figure class="ml-auto mr-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
          <div class="relative flex items-center max-w-[50rem] bg-white border-b border-gray-100 rounded-t-lg py-2 px-24 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
              <span class="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
              <span class="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
              <span class="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
            </div>
            <div class="flex justify-center items-center w-full h-full bg-gray-200 text-[.25rem] text-gray-800 rounded-sm sm:text-[.5rem] dark:bg-gray-700 dark:text-gray-200">www.preline.co</div>
          </div>

          <div class="bg-gray-800 rounded-b-lg">
            <img class="max-w-full h-auto rounded-b-lg" src="../assets/img/mockups/img8.jpg" alt="Image Description">
          </div>
        </figure>
        <!-- End Browser Device -->
      </div>
      <!-- End Devices -->
    </div>

    <div id="tabs-with-card-2" class="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-2">
      <!-- Devices -->
      <div class="max-w-[1140px] lg:pb-32 relative">
        <!-- Mobile Device -->
        <figure class="hidden absolute bottom-0 left-0 z-[2] max-w-full w-60 h-auto mb-20 ml-20 lg:block">
          <div class="p-1.5 bg-gray-700 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
            <img class="max-w-full h-auto rounded-[1.25rem]" src="../assets/img/mockups/img11.jpg" alt="Image Description">
          </div>
        </figure>
        <!-- End Mobile Device -->

        <!-- Browser Device -->
        <figure class="ml-auto mr-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
          <div class="relative flex items-center max-w-[50rem] bg-gray-800 border-b border-gray-700 rounded-t-lg py-2 px-24">
            <div class="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
              <span class="w-2 h-2 bg-gray-700 rounded-full"></span>
              <span class="w-2 h-2 bg-gray-700 rounded-full"></span>
              <span class="w-2 h-2 bg-gray-700 rounded-full"></span>
            </div>
            <div class="flex justify-center items-center w-full h-full bg-gray-700 text-[.25rem] text-gray-200 rounded-sm sm:text-[.5rem]">www.preline.co</div>
          </div>

          <div class="bg-gray-800 rounded-b-lg">
            <img class="max-w-full h-auto rounded-b-lg" src="../assets/img/mockups/img10.jpg" alt="Image Description">
          </div>
        </figure>
        <!-- End Browser Device -->
      </div>
      <!-- End Devices -->
    </div>

    <div id="tabs-with-card-3" class="hidden" role="tabpanel" aria-labelledby="tabs-with-card-item-3">
      <!-- Devices -->
      <div class="max-w-[1140px] lg:pb-32 relative">
        <!-- Mobile Device -->
        <figure class="hidden absolute bottom-0 left-0 z-[2] max-w-full w-60 h-auto mb-20 ml-20 lg:block">
          <div class="p-1.5 bg-gray-100 rounded-3xl shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(45_55_75_/_20%),_0_2rem_4rem_-2rem_rgb(45_55_75_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(45_55_75_/_20%)] dark:bg-gray-700 dark:shadow-[0_2.75rem_5.5rem_-3.5rem_rgb(0_0_0_/_20%),_0_2rem_4rem_-2rem_rgb(0_0_0_/_30%),_inset_0_-0.1875rem_0.3125rem_0_rgb(0_0_0_/_20%)]">
            <img class="max-w-full h-auto rounded-[1.25rem]" src="../assets/img/mockups/img13.jpg" alt="Image Description">
          </div>
        </figure>
        <!-- End Mobile Device -->

        <!-- Browser Device -->
        <figure class="ml-auto mr-20 relative z-[1] max-w-full w-[50rem] h-auto rounded-b-lg shadow-[0_2.75rem_3.5rem_-2rem_rgb(45_55_75_/_20%),_0_0_5rem_-2rem_rgb(45_55_75_/_15%)] dark:shadow-[0_2.75rem_3.5rem_-2rem_rgb(0_0_0_/_20%),_0_0_5rem_-2rem_rgb(0_0_0_/_15%)]">
          <div class="relative flex items-center max-w-[50rem] bg-white border-b border-gray-100 rounded-t-lg py-2 px-24 dark:bg-gray-800 dark:border-gray-700">
            <div class="flex space-x-1 absolute top-2/4 left-4 -translate-y-1">
              <span class="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
              <span class="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
              <span class="w-2 h-2 bg-gray-200 rounded-full dark:bg-gray-700"></span>
            </div>
            <div class="flex justify-center items-center w-full h-full bg-gray-200 text-[.25rem] text-gray-800 rounded-sm sm:text-[.5rem] dark:bg-gray-700 dark:text-gray-200">www.preline.co</div>
          </div>

          <div class="bg-gray-800 rounded-b-lg">
            <img class="max-w-full h-auto rounded-b-lg" src="../assets/img/mockups/img12.jpg" alt="Image Description">
          </div>
        </figure>
        <!-- End Browser Device -->
      </div>
      <!-- End Devices -->
    </div>
  </div>
  <!-- End Tab Content -->
</div>
<!-- End Features -->
        
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
