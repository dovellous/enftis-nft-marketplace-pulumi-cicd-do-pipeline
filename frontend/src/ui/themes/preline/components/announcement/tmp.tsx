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
        
        <!-- Announcement Banner -->
<div class="bg-white/[.6] backdrop-blur-lg dark:bg-slate-900/[.6]">
  <div class="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
    <!-- Grid -->
    <div class="grid justify-center sm:grid-cols-2 sm:items-center gap-4">
      <div class="flex items-center gap-x-3 md:gap-x-5">
        <svg class="flex-shrink-0 w-10 h-10 md:w-14 md:h-14" width="40" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="40" height="40" rx="6" fill="currentColor" class="fill-blue-600"/>
          <path d="M8 32.5V19.5C8 12.8726 13.3726 7.5 20 7.5C26.6274 7.5 32 12.8726 32 19.5C32 26.1274 26.6274 31.5 20 31.5H19" stroke="white" stroke-width="2"/>
          <path d="M12 32.5V19.66C12 15.1534 15.5817 11.5 20 11.5C24.4183 11.5 28 15.1534 28 19.66C28 24.1666 24.4183 27.82 20 27.82H19" stroke="white" stroke-width="2"/>
          <circle cx="20" cy="19.5214" r="5" fill="white"/>
        </svg>

        <div class"grow">
          <p class="md:text-xl text-gray-800 font-semibold dark:text-gray-200">
            Get started today.
          </p>
          <p class="text-sm md:text-base text-gray-800 dark:text-gray-200">
            Sign up to get unlimited updates.
          </p>
        </div>
      </div>
      <!-- End Col -->

      <div class="text-center sm:text-left flex sm:justify-end sm:items-center gap-x-3 md:gap-x-4">
        <a class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md sm:rounded-full border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm md:py-3 md:px-4" href="#">
          Free trial
        </a>
        <a class="py-[.4125rem] px-3 inline-flex justify-center items-center gap-2 rounded-md sm:rounded-full border-2 border-gray-900 font-semibold text-gray-800 hover:text-white hover:bg-gray-800 hover:border-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-800 focus:ring-offset-2 transition-all text-sm md:py-[.688rem] md:px-4 dark:hover:bg-white dark:border-gray-200 dark:hover:border-white dark:text-white dark:hover:text-gray-800 dark:focus:ring-white dark:focus:ring-offset-gray-800" href="#">
          Buy now
        </a>
      </div>
      <!-- End Col -->
    </div>
    <!-- End Grid -->
  </div>
</div>
<!-- End Announcement Banner -->
        
        </>

    )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Announcement Banner -->
<div class="bg-gradient-to-r from-red-500 via-purple-400 to-blue-500">
  <div class="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
    <!-- Grid -->
    <div class="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
      <div class="text-center md:text-left">
        <p class="text-xs text-white/[.8] uppercase tracking-wider">
          Preview of Preline
        </p>
        <p class="mt-1 text-white font-medium">
          Sign up to get unlimited updates. No credit card required.
        </p>
      </div>
      <!-- End Col -->

      <div class="mt-3 text-center md:text-left md:flex md:justify-end md:items-center">
        <a class="py-3 px-6 inline-flex justify-center items-center gap-2 rounded-full font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm" href="#">
          Sign up free
        </a>
      </div>
      <!-- End Col -->
    </div>
    <!-- End Grid -->
  </div>
</div>
<!-- End Announcement Banner -->
        
        </>

    )

} 
 
export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Announcement Banner -->
<div id="ab-full-width-with-dismiss-button-on-blue-bg" class="hs-removing:-translate-y-full bg-blue-600">
  <div class="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
    <div class="flex">
      <p class="text-white">
        Preline UI Figma is live. <a class="decoration-2 underline font-medium hover:text-white/[.8]" href="../figma.html">Learn more</a>
      </p>

      <div class="pl-3 ml-auto">
        <button type="button" class="inline-flex rounded-md p-1.5 text-white/[.8] hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-blue-600 focus:ring-white" data-hs-remove-element="#ab-full-width-with-dismiss-button-on-blue-bg">
          <span class="sr-only">Dismiss</span>
          <svg class="h-3 w-3" width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path d="M0.92524 0.687069C1.126 0.486219 1.39823 0.373377 1.68209 0.373377C1.96597 0.373377 2.2382 0.486219 2.43894 0.687069L8.10514 6.35813L13.7714 0.687069C13.8701 0.584748 13.9882 0.503105 14.1188 0.446962C14.2494 0.39082 14.3899 0.361248 14.5321 0.360026C14.6742 0.358783 14.8151 0.38589 14.9468 0.439762C15.0782 0.493633 15.1977 0.573197 15.2983 0.673783C15.3987 0.774389 15.4784 0.894026 15.5321 1.02568C15.5859 1.15736 15.6131 1.29845 15.6118 1.44071C15.6105 1.58297 15.5809 1.72357 15.5248 1.85428C15.4688 1.98499 15.3872 2.10324 15.2851 2.20206L9.61883 7.87312L15.2851 13.5441C15.4801 13.7462 15.588 14.0168 15.5854 14.2977C15.5831 14.5787 15.4705 14.8474 15.272 15.046C15.0735 15.2449 14.805 15.3574 14.5244 15.3599C14.2437 15.3623 13.9733 15.2543 13.7714 15.0591L8.10514 9.38812L2.43894 15.0591C2.23704 15.2543 1.96663 15.3623 1.68594 15.3599C1.40526 15.3574 1.13677 15.2449 0.938279 15.046C0.739807 14.8474 0.627232 14.5787 0.624791 14.2977C0.62235 14.0168 0.730236 13.7462 0.92524 13.5441L6.59144 7.87312L0.92524 2.20206C0.724562 2.00115 0.611816 1.72867 0.611816 1.44457C0.611816 1.16047 0.724562 0.887983 0.92524 0.687069Z" fill="currentColor"/>
          </svg>
        </button>
      </div>
    </div>
  </div>
</div>
<!-- End Announcement Banner -->
        
        </>

    )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Announcement Banner -->
<div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
  <div class="bg-blue-600 bg-[url('../svg/component/abstract-1.svg')] bg-no-repeat bg-cover bg-center p-4 rounded-md text-center">
    <p class="mr-2 inline-block text-white">
      Preline UI Figma is live.
    </p>
    <a class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-full border-2 border-white font-semibold text-white hover:bg-white/[.1] hover:border-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-900 focus:ring-offset-2 transition-all text-sm" href="../figma.html">
      Learn more
      <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </a>
  </div>
</div>
<!-- End Announcement Banner -->
        
        </>

    )

} 

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Announcement Banner -->
<a class="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md" href="../figma.html">
  <p class="mr-2 inline-block text-white text-sm">
    Preline UI Figma is live.
  </p>
  <span class="group-hover:bg-white/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-white text-sm">
    <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
      <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
    </svg>
  </span>
</a>
<!-- End Announcement Banner -->
        
        </>

    )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Announcement Banner -->
<div class="bg-gradient-to-r from-purple-600 to-blue-400">
  <div class="max-w-[85rem] px-4 py-4 sm:px-6 lg:px-8 mx-auto">
    <!-- Grid -->
    <div class="grid justify-center md:grid-cols-2 md:justify-between md:items-center gap-2">
      <div class="text-center md:text-left md:order-2 md:flex md:justify-end md:items-center">
        <p class="mr-5 inline-block text-sm font-semibold text-white">
          Ready to get started?
        </p>
        <a class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border-2 border-white font-medium text-white hover:bg-white hover:text-gray-800 focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm" href="#">
          Sign up
        </a>
      </div>
      <!-- End Col -->

      <div class="flex items-center">
        <a class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md font-medium text-white hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm" href="#">
          <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
            <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM6.79 5.093A.5.5 0 0 0 6 5.5v5a.5.5 0 0 0 .79.407l3.5-2.5a.5.5 0 0 0 0-.814l-3.5-2.5z"/>
          </svg>
          Watch demo
        </a>
        <span class="inline-block border-r border-white/[.3] w-px h-5 mx-2"></span>
        <a class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md font-medium text-white hover:bg-white/[.1] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 transition-all text-sm" href="#">
          Explore what's new
        </a>
      </div>
      <!-- End Col -->
    </div>
    <!-- End Grid -->
  </div>
</div>
<!-- End Announcement Banner -->
        
        </>

    )

} 
 
export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Announcement Banner -->
<a class="group block bg-gray-100 hover:bg-gray-200 p-4 rounded-md text-center transition-all duration-300 dark:bg-white/[.05] dark:hover:bg-white/[.075]" href="#">
  <div class="max-w-[85rem] px-4 sm:px-6 lg:px-8 mx-auto">
    <p class="mr-2 inline-block text-sm text-gray-800 dark:text-gray-200">
      Shop for everyone on your list with the Preline Guide.
    </p>
    <span class="group-hover:underline decoration-2 inline-flex justify-center items-center gap-x-2 font-semibold text-blue-600 text-sm dark:text-blue-500">
      Shop now
      <svg class="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
        <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
      </svg>
    </span>
  </div>
</a>
<!-- End Announcement Banner -->
        
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
