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
        
        <!-- Icon Blocks -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-2">
    <!-- Icon Block -->
    <a class="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800" href="#">
      <div class="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-xl">
        <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </svg>
      </div>
      <div class="mt-5">
        <h3 class="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">Responsive</h3>
        <p class="mt-1 text-gray-600 dark:text-gray-400">Responsive, and mobile-first project on the web</p>
        <span class="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
          Learn more
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </span>
      </div>
    </a>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <a class="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800" href="#">
      <div class="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-xl">
        <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z"/>
          <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z"/>
          <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
        </svg>
      </div>
      <div class="mt-5">
        <h3 class="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">Customizable</h3>
        <p class="mt-1 text-gray-600 dark:text-gray-400">Components are easily customized and extendable</p>
        <span class="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
          Learn more
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </span>
      </div>
    </a>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <a class="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800" href="#">
      <div class="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-xl">
        <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
          <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
        </svg>
      </div>
      <div class="mt-5">
        <h3 class="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">Documentation</h3>
        <p class="mt-1 text-gray-600 dark:text-gray-400">Every component and plugin is well documented</p>
        <span class="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
          Learn more
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </span>
      </div>
    </a>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <a class="group flex flex-col justify-center hover:bg-gray-50 rounded-xl p-4 md:p-7 dark:hover:bg-slate-800" href="#">
      <div class="flex justify-center items-center w-12 h-12 bg-blue-600 rounded-xl">
        <svg class="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
          <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
        </svg>
      </div>
      <div class="mt-5">
        <h3 class="group-hover:text-gray-600 text-lg font-semibold text-gray-800 dark:text-white dark:group-hover:text-gray-400">24/7 Support</h3>
        <p class="mt-1 text-gray-600 dark:text-gray-400">Contact us 24 hours a day, 7 days a week</p>
        <span class="mt-2 inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 group-hover:underline font-medium">
          Learn more
          <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
        </span>
      </div>
    </a>
    <!-- End Icon Block -->
  </div>
</div>
<!-- End Icon Blocks -->
        
        </>

    )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Icon Blocks -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
    <!-- Icon Block -->
    <div>
      <div class="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-slate-900">
        <svg class="w-7 h-7 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </svg>
      </div>
      <div class="mt-5">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Responsive</h3>
        <p class="mt-1 text-gray-600 dark:text-gray-400">Responsive, and mobile-first project on the web</p>
      </div>
    </div>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <div>
      <div class="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-slate-900">
        <svg class="w-7 h-7 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z"/>
          <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z"/>
          <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
        </svg>
      </div>
      <div class="mt-5">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Customizable</h3>
        <p class="mt-1 text-gray-600 dark:text-gray-400">Components are easily customized and extendable</p>
      </div>
    </div>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <div>
      <div class="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-slate-900">
        <svg class="w-7 h-7 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
          <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
        </svg>
      </div>
      <div class="mt-5">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Documentation</h3>
        <p class="mt-1 text-gray-600 dark:text-gray-400">Every component and plugin is well documented</p>
      </div>
    </div>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <div>
      <div class="relative flex justify-center items-center w-12 h-12 bg-white rounded-xl before:absolute before:-inset-px before:-z-[1] before:bg-gradient-to-br before:from-blue-600 before:via-transparent before:to-violet-600 before:rounded-xl dark:bg-slate-900">
        <svg class="w-7 h-7 text-blue-600 dark:text-blue-500" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
          <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
        </svg>
      </div>
      <div class="mt-5">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">24/7 Support</h3>
        <p class="mt-1 text-gray-600 dark:text-gray-400">Contact us 24 hours a day, 7 days a week</p>
      </div>
    </div>
    <!-- End Icon Block -->
  </div>
</div>
<!-- End Icon Blocks -->
        
        </>

    )

} 
 
export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Icon Blocks -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-6 md:gap-10">
    <!-- Card -->
    <div class="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
      <div class="flex items-center gap-x-4 mb-3">
        <div class="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
          <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
            <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
          </svg>
        </div>
        <div class="flex-shrink-0">
          <h3 class="block text-lg font-semibold text-gray-800 dark:text-white">Build your portfolio</h3>
        </div>
      </div>
      <p class="text-gray-600 dark:text-gray-400">The simplest way to keep your portfolio always up-to-date.</p>
    </div>
    <!-- End Card -->

    <!-- Card -->
    <div class="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
      <div class="flex items-center gap-x-4 mb-3">
        <div class="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
          <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 0a.5.5 0 0 1 .447.276L8.81 1h4.69A1.5 1.5 0 0 1 15 2.5V11h.5a.5.5 0 0 1 0 1h-2.86l.845 3.379a.5.5 0 0 1-.97.242L12.11 14H3.89l-.405 1.621a.5.5 0 0 1-.97-.242L3.36 12H.5a.5.5 0 0 1 0-1H1V2.5A1.5 1.5 0 0 1 2.5 1h4.691l.362-.724A.5.5 0 0 1 8 0ZM2 11h12V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V11Zm9.61 1H4.39l-.25 1h7.72l-.25-1Z"/>
          </svg>
        </div>
        <div class="flex-shrink-0">
          <h3 class="block text-lg font-semibold text-gray-800 dark:text-white">Get freelance work</h3>
        </div>
      </div>
      <p class="text-gray-600 dark:text-gray-400">New design projects delivered to your inbox each morning.</p>
    </div>
    <!-- End Card -->

    <!-- Card -->
    <div class="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
      <div class="flex items-center gap-x-4 mb-3">
        <div class="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
          <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
          </svg>
        </div>
        <div class="flex-shrink-0">
          <h3 class="block text-lg font-semibold text-gray-800 dark:text-white">Sell your goods</h3>
        </div>
      </div>
      <p class="text-gray-600 dark:text-gray-400">Get your goods in front of millions of potential customers with ease.</p>
    </div>
    <!-- End Card -->

    <!-- Card -->
    <div class="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
      <div class="flex items-center gap-x-4 mb-3">
        <div class="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
          <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="M8 0a.5.5 0 0 1 .447.276L8.81 1h4.69A1.5 1.5 0 0 1 15 2.5V11h.5a.5.5 0 0 1 0 1h-2.86l.845 3.379a.5.5 0 0 1-.97.242L12.11 14H3.89l-.405 1.621a.5.5 0 0 1-.97-.242L3.36 12H.5a.5.5 0 0 1 0-1H1V2.5A1.5 1.5 0 0 1 2.5 1h4.691l.362-.724A.5.5 0 0 1 8 0ZM2 11h12V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V11Zm9.61 1H4.39l-.25 1h7.72l-.25-1Z"/>
          </svg>
        </div>
        <div class="flex-shrink-0">
          <h3 class="block text-lg font-semibold text-gray-800 dark:text-white">Get freelance work</h3>
        </div>
      </div>
      <p class="text-gray-600 dark:text-gray-400">New design projects delivered to your inbox each morning.</p>
    </div>
    <!-- End Card -->

    <!-- Card -->
    <div class="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
      <div class="flex items-center gap-x-4 mb-3">
        <div class="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
          <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
          </svg>
        </div>
        <div class="flex-shrink-0">
          <h3 class="block text-lg font-semibold text-gray-800 dark:text-white">Sell your goods</h3>
        </div>
      </div>
      <p class="text-gray-600 dark:text-gray-400">Get your goods in front of millions of potential customers with ease.</p>
    </div>
    <!-- End Card -->

    <!-- Card -->
    <div class="w-full h-full bg-white shadow-lg rounded-lg p-5 dark:bg-slate-900">
      <div class="flex items-center gap-x-4 mb-3">
        <div class="inline-flex justify-center items-center w-[62px] h-[62px] rounded-full border-4 border-blue-50 bg-blue-100 dark:border-blue-900 dark:bg-blue-800">
          <svg class="w-6 h-6 text-blue-600 dark:text-blue-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
            <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
          </svg>
        </div>
        <div class="flex-shrink-0">
          <h3 class="block text-lg font-semibold text-gray-800 dark:text-white">Build your portfolio</h3>
        </div>
      </div>
      <p class="text-gray-600 dark:text-gray-400">The simplest way to keep your portfolio always up-to-date.</p>
    </div>
    <!-- End Card -->
  </div>
</div>
<!-- End Icon Blocks -->
        
        </>

    )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Icon Blocks -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Grid -->
  <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
    <!-- Icon Block -->
    <div class="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
      <!-- Icon -->
      <div class="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-md mx-auto">
        <svg class="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"/>
          <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"/>
        </svg>
      </div>
      <!-- End Icon -->

      <div class="mt-3">
        <h3 class="text-sm sm:text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
          Creative minds
        </h3>
      </div>
    </div>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <div class="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
      <!-- Icon -->
      <div class="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-md mx-auto">
        <svg class="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
        </svg>
      </div>
      <!-- End Icon -->

      <div class="mt-3">
        <h3 class="text-sm sm:text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
          Effortless updates
        </h3>
      </div>
    </div>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <div class="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
      <!-- Icon -->
      <div class="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-md mx-auto">
        <svg class="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
        </svg>
      </div>
      <!-- End Icon -->

      <div class="mt-3">
        <h3 class="text-sm sm:text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
          Strong empathy
        </h3>
      </div>
    </div>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <div class="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
      <!-- Icon -->
      <div class="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-md mx-auto">
        <svg class="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/>
        </svg>
      </div>
      <!-- End Icon -->

      <div class="mt-3">
        <h3 class="text-sm sm:text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
          Conquer the best
        </h3>
      </div>
    </div>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <div class="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
      <!-- Icon -->
      <div class="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-md mx-auto">
        <svg class="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"/>
        </svg>
      </div>
      <!-- End Icon -->

      <div class="mt-3">
        <h3 class="text-sm sm:text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
          Designing for people
        </h3>
      </div>
    </div>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <div class="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
      <!-- Icon -->
      <div class="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-md mx-auto">
        <svg class="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
        </svg>
      </div>
      <!-- End Icon -->

      <div class="mt-3">
        <h3 class="text-sm sm:text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
          Simple and affordable
        </h3>
      </div>
    </div>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <div class="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
      <!-- Icon -->
      <div class="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-md mx-auto">
        <svg class="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path fill-rule="evenodd" d="M8 0a.5.5 0 0 1 .447.276L8.81 1h4.69A1.5 1.5 0 0 1 15 2.5V11h.5a.5.5 0 0 1 0 1h-2.86l.845 3.379a.5.5 0 0 1-.97.242L12.11 14H3.89l-.405 1.621a.5.5 0 0 1-.97-.242L3.36 12H.5a.5.5 0 0 1 0-1H1V2.5A1.5 1.5 0 0 1 2.5 1h4.691l.362-.724A.5.5 0 0 1 8 0ZM2 11h12V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V11Zm9.61 1H4.39l-.25 1h7.72l-.25-1Z"/>
        </svg>
      </div>
      <!-- End Icon -->

      <div class="mt-3">
        <h3 class="text-sm sm:text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
          Get freelance work
        </h3>
      </div>
    </div>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <div class="h-36 sm:h-56 flex flex-col justify-center border border-gray-200 rounded-xl text-center p-4 md:p-5 dark:border-gray-700">
      <!-- Icon -->
      <div class="flex justify-center items-center w-12 h-12 bg-gradient-to-br from-blue-600 to-violet-600 rounded-md mx-auto">
        <svg class="w-7 h-7 text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
        </svg>
      </div>
      <!-- End Icon -->

      <div class="mt-3">
        <h3 class="text-sm sm:text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
          Sell your goods
        </h3>
      </div>
    </div>
    <!-- End Icon Block -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Icon Blocks -->
        
        </>

    )

} 

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Icon Blocks -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="grid sm:grid-cols-2 lg:grid-cols-3 items-center gap-3 xl:gap-6">
    <!-- Card -->
    <a class="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all dark:hover:bg-white/[.075]" href="#">
      <svg class="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 mr-6 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M8 5a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zm4 3a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3zM5.5 7a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0zm.5 6a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3z"/>
        <path d="M16 8c0 3.15-1.866 2.585-3.567 2.07C11.42 9.763 10.465 9.473 10 10c-.603.683-.475 1.819-.351 2.92C9.826 14.495 9.996 16 8 16a8 8 0 1 1 8-8zm-8 7c.611 0 .654-.171.655-.176.078-.146.124-.464.07-1.119-.014-.168-.037-.37-.061-.591-.052-.464-.112-1.005-.118-1.462-.01-.707.083-1.61.704-2.314.369-.417.845-.578 1.272-.618.404-.038.812.026 1.16.104.343.077.702.186 1.025.284l.028.008c.346.105.658.199.953.266.653.148.904.083.991.024C14.717 9.38 15 9.161 15 8a7 7 0 1 0-7 7z"/>
      </svg>

      <div>
        <div>
          <h3 class="block font-bold text-gray-800 dark:text-white">Build your portfolio</h3>
          <p class="text-gray-600 dark:text-gray-400">The simplest way to keep your portfolio always up-to-date.</p>
        </div>

        <p class="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
          Learn more
          <svg class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
          </svg>
        </p>
      </div>
    </a>
    <!-- End Card -->

    <!-- Card -->
    <a class="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all dark:hover:bg-white/[.075]" href="#">
      <svg class="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 mr-6 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path fill-rule="evenodd" d="M8 0a.5.5 0 0 1 .447.276L8.81 1h4.69A1.5 1.5 0 0 1 15 2.5V11h.5a.5.5 0 0 1 0 1h-2.86l.845 3.379a.5.5 0 0 1-.97.242L12.11 14H3.89l-.405 1.621a.5.5 0 0 1-.97-.242L3.36 12H.5a.5.5 0 0 1 0-1H1V2.5A1.5 1.5 0 0 1 2.5 1h4.691l.362-.724A.5.5 0 0 1 8 0ZM2 11h12V2.5a.5.5 0 0 0-.5-.5h-11a.5.5 0 0 0-.5.5V11Zm9.61 1H4.39l-.25 1h7.72l-.25-1Z"/>
      </svg>

      <div>
        <div>
          <h3 class="block font-bold text-gray-800 dark:text-white">Get freelance work</h3>
          <p class="text-gray-600 dark:text-gray-400">New design projects delivered to your inbox each morning.</p>
        </div>

        <p class="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
          Learn more
          <svg class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
          </svg>
        </p>
      </div>
    </a>
    <!-- End Card -->

    <!-- Card -->
    <a class="group flex gap-y-6 w-full h-full hover:bg-gray-100 rounded-lg p-5 transition-all dark:hover:bg-white/[.075]" href="#">
      <svg class="flex-shrink-0 w-8 h-8 text-gray-800 mt-0.5 mr-6 dark:text-gray-200" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M2.97 1.35A1 1 0 0 1 3.73 1h8.54a1 1 0 0 1 .76.35l2.609 3.044A1.5 1.5 0 0 1 16 5.37v.255a2.375 2.375 0 0 1-4.25 1.458A2.371 2.371 0 0 1 9.875 8 2.37 2.37 0 0 1 8 7.083 2.37 2.37 0 0 1 6.125 8a2.37 2.37 0 0 1-1.875-.917A2.375 2.375 0 0 1 0 5.625V5.37a1.5 1.5 0 0 1 .361-.976l2.61-3.045zm1.78 4.275a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0 1.375 1.375 0 1 0 2.75 0V5.37a.5.5 0 0 0-.12-.325L12.27 2H3.73L1.12 5.045A.5.5 0 0 0 1 5.37v.255a1.375 1.375 0 0 0 2.75 0 .5.5 0 0 1 1 0zM1.5 8.5A.5.5 0 0 1 2 9v6h12V9a.5.5 0 0 1 1 0v6h.5a.5.5 0 0 1 0 1H.5a.5.5 0 0 1 0-1H1V9a.5.5 0 0 1 .5-.5zm2 .5a.5.5 0 0 1 .5.5V13h8V9.5a.5.5 0 0 1 1 0V13a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V9.5a.5.5 0 0 1 .5-.5z"/>
      </svg>

      <div>
        <div>
          <h3 class="block font-bold text-gray-800 dark:text-white">Sell your goods</h3>
          <p class="text-gray-600 dark:text-gray-400">Get your goods in front of millions of potential customers with ease.</p>
        </div>

        <p class="mt-3 inline-flex items-center gap-x-2 text-sm font-semibold text-gray-800 dark:text-gray-200">
          Learn more
          <svg class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
          </svg>
        </p>
      </div>
    </a>
    <!-- End Card -->
  </div>
</div>
<!-- End Icon Blocks -->
        
        </>

    )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Icon Blocks -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
    <!-- Icon Block -->
    <div>
      <svg class="w-9 h-9 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
        <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
      </svg>
      <div class="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 dark:from-gray-700 dark:to-slate-900/0">
        <div class="bg-gray-400 w-9 h-0.5"></div>
      </div>
      <div class="mt-5">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Responsive</h3>
        <p class="mt-1 text-gray-600 dark:text-gray-400">Responsive, and mobile-first project on the web</p>
      </div>
    </div>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <div>
      <svg class="w-9 h-9 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z"/>
        <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z"/>
        <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
      </svg>
      <div class="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 dark:from-gray-700 dark:to-slate-900/0">
        <div class="bg-gray-400 w-9 h-0.5"></div>
      </div>
      <div class="mt-5">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Customizable</h3>
        <p class="mt-1 text-gray-600 dark:text-gray-400">Components are easily customized and extendable</p>
      </div>
    </div>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <div>
      <svg class="w-9 h-9 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
        <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
      </svg>
      <div class="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 dark:from-gray-700 dark:to-slate-900/0">
        <div class="bg-gray-400 w-9 h-0.5"></div>
      </div>
      <div class="mt-5">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Documentation</h3>
        <p class="mt-1 text-gray-600 dark:text-gray-400">Every component and plugin is well documented</p>
      </div>
    </div>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <div>
      <svg class="w-9 h-9 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
      </svg>
      <div class="bg-gradient-to-r from-gray-200 to-white/0 h-0.5 mt-6 dark:from-gray-700 dark:to-slate-900/0">
        <div class="bg-gray-400 w-9 h-0.5"></div>
      </div>
      <div class="mt-5">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">24/7 Support</h3>
        <p class="mt-1 text-gray-600 dark:text-gray-400">Contact us 24 hours a day, 7 days a week</p>
      </div>
    </div>
    <!-- End Icon Block -->
  </div>
</div>
<!-- End Icon Blocks -->
        
        </>

    )

} 
 
export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Icon Blocks -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="grid sm:grid-cols-2 lg:grid-cols-4 items-center gap-12">
    <!-- Icon Block -->
    <div class="text-center">
      <div class="flex justify-center items-center w-12 h-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-gray-800 dark:border-gray-700">
        <svg class="w-5 h-5 text-gray-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h6zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H5z"/>
          <path d="M8 14a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
        </svg>
      </div>
      <div class="mt-3">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Responsive</h3>
        <p class="mt-1 text-gray-600 dark:text-gray-400">Responsive, and mobile-first project on the web</p>
      </div>
    </div>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <div class="text-center">
      <div class="flex justify-center items-center w-12 h-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-gray-800 dark:border-gray-700">
        <svg class="w-5 h-5 text-gray-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M9.465 10H12a2 2 0 1 1 0 4H9.465c.34-.588.535-1.271.535-2 0-.729-.195-1.412-.535-2z"/>
          <path d="M6 15a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm0 1a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm.535-10a3.975 3.975 0 0 1-.409-1H4a1 1 0 0 1 0-2h2.126c.091-.355.23-.69.41-1H4a2 2 0 1 0 0 4h2.535z"/>
          <path d="M14 4a4 4 0 1 1-8 0 4 4 0 0 1 8 0z"/>
        </svg>
      </div>
      <div class="mt-3">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Customizable</h3>
        <p class="mt-1 text-gray-600 dark:text-gray-400">Components are easily customized and extendable</p>
      </div>
    </div>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <div class="text-center">
      <div class="flex justify-center items-center w-12 h-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-gray-800 dark:border-gray-700">
        <svg class="w-5 h-5 text-gray-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
          <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
        </svg>
      </div>
      <div class="mt-3">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">Documentation</h3>
        <p class="mt-1 text-gray-600 dark:text-gray-400">Every component and plugin is well documented</p>
      </div>
    </div>
    <!-- End Icon Block -->

    <!-- Icon Block -->
    <div class="text-center">
      <div class="flex justify-center items-center w-12 h-12 bg-gray-50 border border-gray-200 rounded-full mx-auto dark:bg-gray-800 dark:border-gray-700">
        <svg class="w-5 h-5 text-gray-600 dark:text-gray-400" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
          <path d="M14 1a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H4.414A2 2 0 0 0 3 11.586l-2 2V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12.793a.5.5 0 0 0 .854.353l2.853-2.853A1 1 0 0 1 4.414 12H14a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
          <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
        </svg>
      </div>
      <div class="mt-3">
        <h3 class="text-lg font-semibold text-gray-800 dark:text-white">24/7 Support</h3>
        <p class="mt-1 text-gray-600 dark:text-gray-400">Contact us 24 hours a day, 7 days a week</p>
      </div>
    </div>
    <!-- End Icon Block -->
  </div>
</div>
<!-- End Icon Blocks -->
        
        </>

    )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Icon Blocks -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Grid -->
  <div class="grid md:grid-cols-2 gap-12">
    <div class="lg:w-3/4">
      <h2 class="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
        Collaborative tools to design better user experience
      </h2>
      <p class="mt-3 text-gray-800 dark:text-gray-400">
        We help businesses bring ideas to life in the digital world, by designing and implementing the technology tools that they need to win.
      </p>
      <p class="mt-5 inline-flex items-center gap-x-2 font-medium text-blue-600 dark:text-blue-500">
        Contact sales to learn more
        <svg class="w-2.5 h-2.5 transition ease-in-out group-hover:translate-x-1" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fill-rule="evenodd" clip-rule="evenodd" d="M0.975821 6.92249C0.43689 6.92249 -3.50468e-07 7.34222 -3.27835e-07 7.85999C-3.05203e-07 8.37775 0.43689 8.79749 0.975821 8.79749L12.7694 8.79748L7.60447 13.7596C7.22339 14.1257 7.22339 14.7193 7.60447 15.0854C7.98555 15.4515 8.60341 15.4515 8.98449 15.0854L15.6427 8.68862C16.1191 8.23098 16.1191 7.48899 15.6427 7.03134L8.98449 0.634573C8.60341 0.268455 7.98555 0.268456 7.60447 0.634573C7.22339 1.00069 7.22339 1.59428 7.60447 1.9604L12.7694 6.92248L0.975821 6.92249Z" fill="currentColor"/>
        </svg>
      </p>
    </div>
    <!-- End Col -->

    <div class="space-y-6 lg:space-y-10">
      <!-- Icon Block -->
      <div class="flex">
        <!-- Icon -->
        <span class="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M5.5 7a.5.5 0 0 0 0 1h5a.5.5 0 0 0 0-1h-5zM5 9.5a.5.5 0 0 1 .5-.5h5a.5.5 0 0 1 0 1h-5a.5.5 0 0 1-.5-.5zm0 2a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 0 1h-2a.5.5 0 0 1-.5-.5z"/>
            <path d="M9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V4.5L9.5 0zm0 1v2A1.5 1.5 0 0 0 11 4.5h2V14a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h5.5z"/>
          </svg>
        </span>
        <div class="ml-5 sm:ml-8">
          <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
            Industry-leading documentation
          </h3>
          <p class="mt-1 text-gray-600 dark:text-gray-400">
            Our documentation and extensive Client libraries contain everything a business needs to build a custom integration in a fraction of the time.
          </p>
        </div>
      </div>
      <!-- End Icon Block -->

      <!-- Icon Block -->
      <div class="flex">
        <!-- Icon -->
        <span class="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M2 1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h9.586a2 2 0 0 1 1.414.586l2 2V2a1 1 0 0 0-1-1H2zm12-1a2 2 0 0 1 2 2v12.793a.5.5 0 0 1-.854.353l-2.853-2.853a1 1 0 0 0-.707-.293H2a2 2 0 0 1-2-2V2a2 2 0 0 1 2-2h12z"/>
            <path d="M5 6a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm4 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
          </svg>
        </span>
        <div class="ml-5 sm:ml-8">
          <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
            Developer community support
          </h3>
          <p class="mt-1 text-gray-600 dark:text-gray-400">
            We actively contribute to open-source projects—giving back to the community through development, patches, and sponsorships.
          </p>
        </div>
      </div>
      <!-- End Icon Block -->

      <!-- Icon Block -->
      <div class="flex">
        <!-- Icon -->
        <span class="flex-shrink-0 inline-flex justify-center items-center w-[46px] h-[46px] rounded-full border border-gray-200 bg-white text-gray-800 shadow-sm mx-auto dark:bg-slate-900 dark:border-gray-700 dark:text-gray-200">
          <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
          </svg>
        </span>
        <div class="ml-5 sm:ml-8">
          <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
            Simple and affordable
          </h3>
          <p class="mt-1 text-gray-600 dark:text-gray-400">
            From boarding passes to movie tickets, there's pretty much nothing you can't store with Preline.
          </p>
        </div>
      </div>
      <!-- End Icon Block -->
    </div>
    <!-- End Col -->
  </div>
  <!-- End Grid -->
</div>
<!-- End Icon Blocks -->
        
        </>

    )

} 

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Icon Blocks -->
  <div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
    <div class="max-w-2xl mx-auto">
      <!-- Grid -->
      <div class="grid gap-12">
        <div>
          <h2 class="text-3xl text-gray-800 font-bold lg:text-4xl dark:text-white">
            Our vision
          </h2>
          <p class="mt-3 text-gray-800 dark:text-gray-400">
            For as long as there have been cities, the public square has been a fundamental part of the urban landscape - an open, approachable space to meet and engage with friends and neighbours. Space aims to capture this spirit of bringing people together in an exciting, welcoming environment.
          </p>
        </div>

        <div class="space-y-6 lg:space-y-10">
          <!-- Icon Block -->
          <div class="flex">
            <svg class="flex-shrink-0 mt-2 h-6 w-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path fill-rule="evenodd" d="M14.763.075A.5.5 0 0 1 15 .5v15a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5V14h-1v1.5a.5.5 0 0 1-.5.5h-9a.5.5 0 0 1-.5-.5V10a.5.5 0 0 1 .342-.474L6 7.64V4.5a.5.5 0 0 1 .276-.447l8-4a.5.5 0 0 1 .487.022zM6 8.694 1 10.36V15h5V8.694zM7 15h2v-1.5a.5.5 0 0 1 .5-.5h2a.5.5 0 0 1 .5.5V15h2V1.309l-7 3.5V15z"/>
              <path d="M2 11h1v1H2v-1zm2 0h1v1H4v-1zm-2 2h1v1H2v-1zm2 0h1v1H4v-1zm4-4h1v1H8V9zm2 0h1v1h-1V9zm-2 2h1v1H8v-1zm2 0h1v1h-1v-1zm2-2h1v1h-1V9zm0 2h1v1h-1v-1zM8 7h1v1H8V7zm2 0h1v1h-1V7zm2 0h1v1h-1V7zM8 5h1v1H8V5zm2 0h1v1h-1V5zm2 0h1v1h-1V5zm0-2h1v1h-1V3z"/>
            </svg>
            <div class="ml-5 sm:ml-8">
              <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                High quality Co-Living spaces
              </h3>
              <p class="mt-1 text-gray-600 dark:text-gray-400">
                Our fully furnished spaces are designed and purpose-built with Co-Living in mind, featuring high-end finishes and amenities that go far beyond traditional apartment buildings.
              </p>
            </div>
          </div>
          <!-- End Icon Block -->

          <!-- Icon Block -->
          <div class="flex">
            <svg class="flex-shrink-0 mt-2 h-6 w-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
            </svg>
            <div class="ml-5 sm:ml-8">
              <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                Fostering vibrant communities
              </h3>
              <p class="mt-1 text-gray-600 dark:text-gray-400">
                Our passion is bringing people together. Beyond creating beautiful spaces, we provide shared experiences.
              </p>
            </div>
          </div>
          <!-- End Icon Block -->

          <!-- Icon Block -->
          <div class="flex">
            <svg class="flex-shrink-0 mt-2 h-6 w-6 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
            </svg>
            <div class="ml-5 sm:ml-8">
              <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
                Simple and all-inclusive
              </h3>
              <p class="mt-1 text-gray-600 dark:text-gray-400">
                We worry about the details so that our residents don't have to. From our online application process to simple, all-inclusive billing we aim to make the living experience as effortless as possible.
              </p>
            </div>
          </div>
          <!-- End Icon Block -->
        </div>
      </div>
      <!-- End Grid -->
    </div>
  </div>
  <!-- End Icon Blocks -->
        
        </>

    )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
  return (

      <>
      
      <!-- Icon Blocks -->
<div class="max-w-[85rem] px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <div class="max-w-4xl mx-auto">
    <!-- Grid -->
    <div class="grid md:grid-cols-2 gap-6 lg:gap-12">
      <div class="space-y-6 lg:space-y-10">
        <!-- Icon Block -->
        <div class="flex">
          <svg class="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M6 12.5a.5.5 0 0 1 .5-.5h3a.5.5 0 0 1 0 1h-3a.5.5 0 0 1-.5-.5ZM3 8.062C3 6.76 4.235 5.765 5.53 5.886a26.58 26.58 0 0 0 4.94 0C11.765 5.765 13 6.76 13 8.062v1.157a.933.933 0 0 1-.765.935c-.845.147-2.34.346-4.235.346-1.895 0-3.39-.2-4.235-.346A.933.933 0 0 1 3 9.219V8.062Zm4.542-.827a.25.25 0 0 0-.217.068l-.92.9a24.767 24.767 0 0 1-1.871-.183.25.25 0 0 0-.068.495c.55.076 1.232.149 2.02.193a.25.25 0 0 0 .189-.071l.754-.736.847 1.71a.25.25 0 0 0 .404.062l.932-.97a25.286 25.286 0 0 0 1.922-.188.25.25 0 0 0-.068-.495c-.538.074-1.207.145-1.98.189a.25.25 0 0 0-.166.076l-.754.785-.842-1.7a.25.25 0 0 0-.182-.135Z"/>
            <path d="M8.5 1.866a1 1 0 1 0-1 0V3h-2A4.5 4.5 0 0 0 1 7.5V8a1 1 0 0 0-1 1v2a1 1 0 0 0 1 1v1a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1a1 1 0 0 0 1-1V9a1 1 0 0 0-1-1v-.5A4.5 4.5 0 0 0 10.5 3h-2V1.866ZM14 7.5V13a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V7.5A3.5 3.5 0 0 1 5.5 4h5A3.5 3.5 0 0 1 14 7.5Z"/>
          </svg>
          <div class="ml-5 sm:ml-8">
            <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
              Creative minds
            </h3>
            <p class="mt-1 text-gray-600 dark:text-gray-400">
              We choose our teams carefully. Our people are the secret to great work.
            </p>
          </div>
        </div>
        <!-- End Icon Block -->

        <!-- Icon Block -->
        <div class="flex">
          <svg class="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
          </svg>
          <div class="ml-5 sm:ml-8">
            <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
              Effortless updates
            </h3>
            <p class="mt-1 text-gray-600 dark:text-gray-400">
              Benefit from automatic updates to all boards any time you need to make a change to your website.
            </p>
          </div>
        </div>
        <!-- End Icon Block -->

        <!-- Icon Block -->
        <div class="flex">
          <svg class="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M11.251.068a.5.5 0 0 1 .227.58L9.677 6.5H13a.5.5 0 0 1 .364.843l-8 8.5a.5.5 0 0 1-.842-.49L6.323 9.5H3a.5.5 0 0 1-.364-.843l8-8.5a.5.5 0 0 1 .615-.09zM4.157 8.5H7a.5.5 0 0 1 .478.647L6.11 13.59l5.732-6.09H9a.5.5 0 0 1-.478-.647L9.89 2.41 4.157 8.5z"/>
          </svg>
          <div class="ml-5 sm:ml-8">
            <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
              Strong empathy
            </h3>
            <p class="mt-1 text-gray-600 dark:text-gray-400">
              We've user tested our own process by shipping over 1k products for clients.
            </p>
          </div>
        </div>
        <!-- End Icon Block -->
      </div>
      <!-- End Col -->

      <div class="space-y-6 lg:space-y-10">
        <!-- Icon Block -->
        <div class="flex">
          <svg class="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M2.5.5A.5.5 0 0 1 3 0h10a.5.5 0 0 1 .5.5c0 .538-.012 1.05-.034 1.536a3 3 0 1 1-1.133 5.89c-.79 1.865-1.878 2.777-2.833 3.011v2.173l1.425.356c.194.048.377.135.537.255L13.3 15.1a.5.5 0 0 1-.3.9H3a.5.5 0 0 1-.3-.9l1.838-1.379c.16-.12.343-.207.537-.255L6.5 13.11v-2.173c-.955-.234-2.043-1.146-2.833-3.012a3 3 0 1 1-1.132-5.89A33.076 33.076 0 0 1 2.5.5zm.099 2.54a2 2 0 0 0 .72 3.935c-.333-1.05-.588-2.346-.72-3.935zm10.083 3.935a2 2 0 0 0 .72-3.935c-.133 1.59-.388 2.885-.72 3.935zM3.504 1c.007.517.026 1.006.056 1.469.13 2.028.457 3.546.87 4.667C5.294 9.48 6.484 10 7 10a.5.5 0 0 1 .5.5v2.61a1 1 0 0 1-.757.97l-1.426.356a.5.5 0 0 0-.179.085L4.5 15h7l-.638-.479a.501.501 0 0 0-.18-.085l-1.425-.356a1 1 0 0 1-.757-.97V10.5A.5.5 0 0 1 9 10c.516 0 1.706-.52 2.57-2.864.413-1.12.74-2.64.87-4.667.03-.463.049-.952.056-1.469H3.504z"/>
          </svg>
          <div class="ml-5 sm:ml-8">
            <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
              Conquer the best
            </h3>
            <p class="mt-1 text-gray-600 dark:text-gray-400">
              We stay lean and help your product do one thing well.
            </p>
          </div>
        </div>
        <!-- End Icon Block -->

        <!-- Icon Block -->
        <div class="flex">
          <svg class="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path fill-rule="evenodd" d="m8 2.42-.717-.737c-1.13-1.161-3.243-.777-4.01.72-.35.685-.451 1.707.236 3.062C4.16 6.753 5.52 8.32 8 10.042c2.479-1.723 3.839-3.29 4.491-4.577.687-1.355.587-2.377.236-3.061-.767-1.498-2.88-1.882-4.01-.721L8 2.42Zm-.49 8.5c-10.78-7.44-3-13.155.359-10.063.045.041.089.084.132.129.043-.045.087-.088.132-.129 3.36-3.092 11.137 2.624.357 10.063l.235.468a.25.25 0 1 1-.448.224l-.008-.017c.008.11.02.202.037.29.054.27.161.488.419 1.003.288.578.235 1.15.076 1.629-.157.469-.422.867-.588 1.115l-.004.007a.25.25 0 1 1-.416-.278c.168-.252.4-.6.533-1.003.133-.396.163-.824-.049-1.246l-.013-.028c-.24-.48-.38-.758-.448-1.102a3.177 3.177 0 0 1-.052-.45l-.04.08a.25.25 0 1 1-.447-.224l.235-.468ZM6.013 2.06c-.649-.18-1.483.083-1.85.798-.131.258-.245.689-.08 1.335.063.244.414.198.487-.043.21-.697.627-1.447 1.359-1.692.217-.073.304-.337.084-.398Z"/>
          </svg>
          <div class="ml-5 sm:ml-8">
            <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
              Designing for people
            </h3>
            <p class="mt-1 text-gray-600 dark:text-gray-400">
              We actively pursue the right balance between functionality and aesthetics, creating delightful experiences.
            </p>
          </div>
        </div>
        <!-- End Icon Block -->

        <!-- Icon Block -->
        <div class="flex">
          <svg class="flex-shrink-0 mt-2 h-8 w-8 text-gray-800 dark:text-white" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M8.864.046C7.908-.193 7.02.53 6.956 1.466c-.072 1.051-.23 2.016-.428 2.59-.125.36-.479 1.013-1.04 1.639-.557.623-1.282 1.178-2.131 1.41C2.685 7.288 2 7.87 2 8.72v4.001c0 .845.682 1.464 1.448 1.545 1.07.114 1.564.415 2.068.723l.048.03c.272.165.578.348.97.484.397.136.861.217 1.466.217h3.5c.937 0 1.599-.477 1.934-1.064a1.86 1.86 0 0 0 .254-.912c0-.152-.023-.312-.077-.464.201-.263.38-.578.488-.901.11-.33.172-.762.004-1.149.069-.13.12-.269.159-.403.077-.27.113-.568.113-.857 0-.288-.036-.585-.113-.856a2.144 2.144 0 0 0-.138-.362 1.9 1.9 0 0 0 .234-1.734c-.206-.592-.682-1.1-1.2-1.272-.847-.282-1.803-.276-2.516-.211a9.84 9.84 0 0 0-.443.05 9.365 9.365 0 0 0-.062-4.509A1.38 1.38 0 0 0 9.125.111L8.864.046zM11.5 14.721H8c-.51 0-.863-.069-1.14-.164-.281-.097-.506-.228-.776-.393l-.04-.024c-.555-.339-1.198-.731-2.49-.868-.333-.036-.554-.29-.554-.55V8.72c0-.254.226-.543.62-.65 1.095-.3 1.977-.996 2.614-1.708.635-.71 1.064-1.475 1.238-1.978.243-.7.407-1.768.482-2.85.025-.362.36-.594.667-.518l.262.066c.16.04.258.143.288.255a8.34 8.34 0 0 1-.145 4.725.5.5 0 0 0 .595.644l.003-.001.014-.003.058-.014a8.908 8.908 0 0 1 1.036-.157c.663-.06 1.457-.054 2.11.164.175.058.45.3.57.65.107.308.087.67-.266 1.022l-.353.353.353.354c.043.043.105.141.154.315.048.167.075.37.075.581 0 .212-.027.414-.075.582-.05.174-.111.272-.154.315l-.353.353.353.354c.047.047.109.177.005.488a2.224 2.224 0 0 1-.505.805l-.353.353.353.354c.006.005.041.05.041.17a.866.866 0 0 1-.121.416c-.165.288-.503.56-1.066.56z"/>
          </svg>
          <div class="ml-5 sm:ml-8">
            <h3 class="text-base sm:text-lg font-semibold text-gray-800 dark:text-gray-200">
              Simple and affordable
            </h3>
            <p class="mt-1 text-gray-600 dark:text-gray-400">
              From boarding passes to movie tickets, there's pretty much nothing you can't store with Preline.
            </p>
          </div>
        </div>
        <!-- End Icon Block -->
      </div>
      <!-- End Col -->
    </div>
    <!-- End Grid -->
  </div>
</div>
<!-- End Icon Blocks -->
      
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
