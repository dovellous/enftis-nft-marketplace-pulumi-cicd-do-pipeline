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
        
        <!-- Card Section -->
<div class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Card -->
  <div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
    <form>
      <!-- Section -->
      <div class="grid grid-cols-12 gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700">
        <div class="col-span-12">
          <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Submit your application
          </h2>
        </div>
        <!-- End Col -->

        <div class="col-span-3">
          <label for="af-submit-application-full-name" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
            Full name
          </label>
        </div>
        <!-- End Col -->

        <div class="col-span-9">
          <div class="sm:flex">
            <input id="af-submit-application-full-name" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
            <input type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
          </div>
        </div>
        <!-- End Col -->

        <div class="col-span-3">
          <label for="af-submit-application-email" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
            Email
          </label>
        </div>
        <!-- End Col -->

        <div class="col-span-9">
          <input id="af-submit-application-email" type="email" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
        </div>
        <!-- End Col -->

        <div class="col-span-3">
          <div class="inline-block">
            <label for="af-submit-application-phone" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
              Phone
            </label>
          </div>
        </div>
        <!-- End Col -->

        <div class="col-span-9">
          <input id="af-submit-application-phone" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">

          <p class="mt-3">
            <a class="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium" href="../docs/index.html">
              <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg>
              Add phone
            </a>
          </p>
        </div>
        <!-- End Col -->

        <div class="col-span-3">
          <div class="inline-block">
            <label for="af-submit-application-current-company" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
              Current Company
            </label>
          </div>
        </div>
        <!-- End Col -->

        <div class="col-span-9">
          <input id="af-submit-application-current-company" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
        </div>
        <!-- End Col -->
      </div>
      <!-- End Section -->

      <!-- Section -->
      <div class="grid grid-cols-12 gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700">
        <div class="col-span-12">
          <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Profile
          </h2>
        </div>
        <!-- End Col -->

        <div class="col-span-3">
          <label for="af-submit-application-resume-cv" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
            Resume/CV
          </label>
        </div>
        <!-- End Col -->

        <div class="col-span-9">
          <label for="af-submit-application-resume-cv" class="sr-only">Choose file</label>
          <input type="file" name="af-submit-application-resume-cv" id="af-submit-application-resume-cv" class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400
            file:bg-transparent file:border-0
            file:bg-gray-100 file:mr-4
            file:py-2 file:px-3
            dark:file:bg-gray-700 dark:file:text-gray-400">
        </div>
        <!-- End Col -->

        <div class="col-span-3">
          <div class="inline-block">
            <label for="af-submit-application-bio" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
              Personal summary
            </label>
          </div>
        </div>
        <!-- End Col -->

        <div class="col-span-9">
          <textarea id="af-submit-application-bio" class="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" rows="6" placeholder="Add a cover letter or anything else you want to share."></textarea>
        </div>
        <!-- End Col -->
      </div>
      <!-- End Section -->

      <!-- Section -->
      <div class="grid grid-cols-12 gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700">
        <div class="col-span-12">
          <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Links
          </h2>
        </div>
        <!-- End Col -->

        <div class="col-span-3">
          <label for="af-submit-application-linkedin-url" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
            LinkedIn URL
          </label>
        </div>
        <!-- End Col -->

        <div class="col-span-9">
          <input id="af-submit-application-linkedin-url" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
        </div>
        <!-- End Col -->

        <div class="col-span-3">
          <label for="af-submit-application-twitter-url" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
            Twitter URL
          </label>
        </div>
        <!-- End Col -->

        <div class="col-span-9">
          <input id="af-submit-application-twitter-url" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
        </div>
        <!-- End Col -->

        <div class="col-span-3">
          <label for="af-submit-application-github-url" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
            Github URL
          </label>
        </div>
        <!-- End Col -->

        <div class="col-span-9">
          <input id="af-submit-application-github-url" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
        </div>
        <!-- End Col -->

        <div class="col-span-3">
          <label for="af-submit-application-portfolio-url" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
            Portfolio URL
          </label>
        </div>
        <!-- End Col -->

        <div class="col-span-9">
          <input id="af-submit-application-portfolio-url" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
        </div>
        <!-- End Col -->

        <div class="col-span-3">
          <label for="af-submit-application-other-website" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
            Other website
          </label>
        </div>
        <!-- End Col -->

        <div class="col-span-9">
          <input id="af-submit-application-other-website" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
        </div>
        <!-- End Col -->

        <div class="col-start-4 col-span-8">
          <a class="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium" href="../docs/index.html">
            <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            Add URL
          </a>
        </div>
      </div>
      <!-- End Section -->

      <!-- Section -->
      <div class="grid grid-cols-12 gap-4 py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700">
        <div class="col-span-12">
          <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
            Before sending your application, please let us know...
          </h2>
        </div>
        <!-- End Col -->

        <div class="col-span-3">
          <label for="af-submit-application-desired-salary" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
            Desired salary
          </label>
        </div>
        <!-- End Col -->

        <div class="col-span-9">
          <input id="af-submit-application-desired-salary" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
        </div>
        <!-- End Col -->

        <div class="col-span-3">
          <label for="af-submit-application-available-start-date" class="inline-block text-sm font-medium text-gray-500 mt-2.5">
            Available start date
          </label>
        </div>
        <!-- End Col -->

        <div class="col-span-9">
          <input id="af-submit-application-available-start-date" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
        </div>
        <!-- End Col -->
      </div>
      <!-- End Section -->

      <!-- Section -->
      <div class="py-8 first:pt-0 last:pb-0 border-t first:border-transparent border-gray-200 dark:border-gray-700">
        <h2 class="text-lg font-semibold text-gray-800 dark:text-gray-200">
          Submit application
        </h2>
        <p class="mt-3 text-sm text-gray-600 dark:text-gray-400">
          In order to contact you with future jobs that you may be interested in, we need to store your personal data.
        </p>
        <p class="mt-2 text-sm text-gray-600 dark:text-gray-400">
          If you are happy for us to do so please click the checkbox below.
        </p>

        <div class="mt-5 flex">
          <input type="checkbox" class="shrink-0 mt-0.5 border-gray-200 rounded text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="af-submit-application-privacy-check">
          <label for="af-submit-application-privacy-check" class="text-sm text-gray-500 ml-2 dark:text-gray-400">Allow us to process your personal information.</label>
        </div>
      </div>
      <!-- End Section -->

      <button type="button" class="py-3 px-4 w-full inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
        Submit application
      </button>
    </form>
  </div>
  <!-- End Card -->
</div>
<!-- End Card Section -->
        
        </>

    )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Card Section -->
<div class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <form>
    <!-- Card -->
    <div class="bg-white rounded-xl shadow dark:bg-slate-900">
      <div class="relative h-40 rounded-t-xl bg-[url('../svg/component/abstract-bg-1.svg')] bg-no-repeat bg-cover bg-center">
        <div class="absolute top-0 right-0 p-4">
          <button type="button" class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
            <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
              <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
            </svg>
            Upload header
          </button>
        </div>
      </div>

      <div class="pt-0 p-4 sm:pt-0 sm:p-7">
        <!-- Grid -->
        <div class="space-y-4 sm:space-y-6">
          <div>
            <label class="sr-only">
              Product photo
            </label>

            <div class="grid sm:flex sm:items-center sm:gap-x-5">
              <img class="-mt-8 relative z-10 inline-block h-24 w-24 mx-auto sm:mx-0 rounded-full ring-4 ring-white dark:ring-gray-800" src="../assets/img/160x160/img1.jpg" alt="Image Description">

              <div class="mt-4 sm:mt-auto sm:mb-1.5 flex justify-center sm:justify-start gap-2">
                <button type="button" class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                  <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                  </svg>
                  Upload logo
                </button>
                <button type="button" class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-red-600 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-red-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                  Delete
                </button>
              </div>
            </div>
          </div>

          <div class="space-y-2">
            <label for="af-submit-app-project-name" class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
              Project name
            </label>

            <input id="af-submit-app-project-name" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Enter project name">
          </div>

          <div class="space-y-2">
            <label for="af-submit-project-url" class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
              Project URL
            </label>

            <input id="af-submit-project-url" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="https://example.so">
          </div>

          <div class="space-y-2">
            <label for="af-submit-app-upload-images" class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
              Preview image
            </label>

            <label for="af-submit-app-upload-images" class="group p-4 sm:p-7 block cursor-pointer text-center border-2 border-dashed border-gray-200 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:border-gray-700">
              <input id="af-submit-app-upload-images" name="af-submit-app-upload-images" type="file" class="sr-only">
              <svg class="w-10 h-10 mx-auto text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"/>
                <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
              </svg>
              <span class="mt-2 block text-sm text-gray-800 dark:text-gray-200">
                Browse your device or <span class="group-hover:text-blue-700 text-blue-600">drag 'n drop'</span>
              </span>
              <span class="mt-1 block text-xs text-gray-500">
                Maximum file size is 2 MB
              </span>
            </label>
          </div>

          <div class="space-y-2">
            <label for="af-submit-app-category" class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
              Category
            </label>

            <select id="af-submit-app-category" class="py-2 px-3 pr-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
              <option selected>Select a category</option>
              <option>Ecommerce</option>
              <option>Finance</option>
              <option>Marketplace</option>
              <option>Social</option>
              <option>Others</option>
            </select>
          </div>

          <div class="space-y-2">
            <label for="af-submit-app-description" class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
              Description
            </label>

            <textarea id="af-submit-app-description" class="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" rows="6" placeholder="A detailed summary will better explain your products to the audiences. Our users will see this in your dedicated product page."></textarea>
          </div>
        </div>
        <!-- End Grid -->

        <div class="mt-5 flex justify-center gap-x-2">
          <button type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
            Submit your project
          </button>
        </div>
      </div>
    </div>
    <!-- End Card -->
  </form>
</div>
<!-- End Card Section -->
        
        </>

    )

} 
 
export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Card Section -->
<div class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <form>
    <!-- Card -->
    <div class="bg-white rounded-xl shadow dark:bg-slate-900">
      <div class="relative h-40 rounded-t-xl bg-[url('../svg/component/abstract-bg-1.svg')] bg-no-repeat bg-cover bg-center">
        <div class="absolute top-0 right-0 p-4">
          <button type="button" class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
            <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
              <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
              <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
            </svg>
            Upload header
          </button>
        </div>
      </div>

      <div class="pt-0 p-4 sm:pt-0 sm:p-7">
        <!-- Grid -->
        <div class="space-y-4 sm:space-y-6">
          <div>
            <label class="sr-only">
              Product photo
            </label>

            <div class="grid sm:flex sm:items-center sm:gap-x-5">
              <img class="-mt-8 relative z-10 inline-block h-24 w-24 mx-auto sm:mx-0 rounded-full ring-4 ring-white dark:ring-gray-800" src="../assets/img/160x160/img1.jpg" alt="Image Description">

              <div class="mt-4 sm:mt-auto sm:mb-1.5 flex justify-center sm:justify-start gap-2">
                <button type="button" class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                  <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                  </svg>
                  Upload logo
                </button>
                <button type="button" class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-red-600 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-red-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                  Delete
                </button>
              </div>
            </div>
          </div>

          <div class="space-y-2">
            <label for="af-submit-app-project-name" class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
              Project name
            </label>

            <input id="af-submit-app-project-name" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Enter project name">
          </div>

          <div class="space-y-2">
            <label for="af-submit-project-url" class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
              Project URL
            </label>

            <input id="af-submit-project-url" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="https://example.so">
          </div>

          <div class="space-y-2">
            <label for="af-submit-app-upload-images" class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
              Preview image
            </label>

            <label for="af-submit-app-upload-images" class="group p-4 sm:p-7 block cursor-pointer text-center border-2 border-dashed border-gray-200 rounded-lg focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-500 focus-within:ring-offset-2 dark:border-gray-700">
              <input id="af-submit-app-upload-images" name="af-submit-app-upload-images" type="file" class="sr-only">
              <svg class="w-10 h-10 mx-auto text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M7.646 5.146a.5.5 0 0 1 .708 0l2 2a.5.5 0 0 1-.708.708L8.5 6.707V10.5a.5.5 0 0 1-1 0V6.707L6.354 7.854a.5.5 0 1 1-.708-.708l2-2z"/>
                <path d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383zm.653.757c-.757.653-1.153 1.44-1.153 2.056v.448l-.445.049C2.064 6.805 1 7.952 1 9.318 1 10.785 2.23 12 3.781 12h8.906C13.98 12 15 10.988 15 9.773c0-1.216-1.02-2.228-2.313-2.228h-.5v-.5C12.188 4.825 10.328 3 8 3a4.53 4.53 0 0 0-2.941 1.1z"/>
              </svg>
              <span class="mt-2 block text-sm text-gray-800 dark:text-gray-200">
                Browse your device or <span class="group-hover:text-blue-700 text-blue-600">drag 'n drop'</span>
              </span>
              <span class="mt-1 block text-xs text-gray-500">
                Maximum file size is 2 MB
              </span>
            </label>
          </div>

          <div class="space-y-2">
            <label for="af-submit-app-category" class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
              Category
            </label>

            <select id="af-submit-app-category" class="py-2 px-3 pr-9 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
              <option selected>Select a category</option>
              <option>Ecommerce</option>
              <option>Finance</option>
              <option>Marketplace</option>
              <option>Social</option>
              <option>Others</option>
            </select>
          </div>

          <div class="space-y-2">
            <label for="af-submit-app-description" class="inline-block text-sm font-medium text-gray-800 mt-2.5 dark:text-gray-200">
              Description
            </label>

            <textarea id="af-submit-app-description" class="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" rows="6" placeholder="A detailed summary will better explain your products to the audiences. Our users will see this in your dedicated product page."></textarea>
          </div>
        </div>
        <!-- End Grid -->

        <div class="mt-5 flex justify-center gap-x-2">
          <button type="button" class="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
            Submit your project
          </button>
        </div>
      </div>
    </div>
    <!-- End Card -->
  </form>
</div>
<!-- End Card Section -->
        
        </>

    )

}

export const AlertError:React.FunctionComponent<AlertProps> = ({ children, ...props}) : any | null => {

    
    return (

        <>
        
        <!-- Card Section -->
<div class="max-w-4xl px-4 py-10 sm:px-6 lg:px-8 lg:py-14 mx-auto">
  <!-- Card -->
  <div class="bg-white rounded-xl shadow p-4 sm:p-7 dark:bg-slate-900">
    <div class="mb-8">
      <h2 class="text-xl font-bold text-gray-800 dark:text-gray-200">
        Profile
      </h2>
      <p class="text-sm text-gray-600 dark:text-gray-400">
        Manage your name, password and account settings.
      </p>
    </div>

    <form>
      <!-- Grid -->
      <div class="grid grid-cols-12 gap-4 sm:gap-6">
        <div class="col-span-3">
          <label class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
            Profile photo
          </label>
        </div>
        <!-- End Col -->

        <div class="col-span-9">
          <div class="flex items-center gap-5">
            <img class="inline-block h-16 w-16 rounded-full ring-2 ring-white dark:ring-gray-800" src="../assets/img/160x160/img1.jpg" alt="Image Description">
            <div class="flex gap-x-2">
              <div>
                <button type="button" class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
                  <svg class="w-3 h-3" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                    <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                    <path d="M7.646 1.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1-.708.708L8.5 2.707V11.5a.5.5 0 0 1-1 0V2.707L5.354 4.854a.5.5 0 1 1-.708-.708l3-3z"/>
                  </svg>
                  Upload photo
                </button>
              </div>
            </div>
          </div>
        </div>
        <!-- End Col -->

        <div class="col-span-3">
          <label for="af-account-full-name" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
            Full name
          </label>
          <div class="hs-tooltip inline-block">
            <button type="button" class="hs-tooltip-toggle ml-1">
              <svg class="inline-block w-3 h-3 text-gray-400 dark:text-gray-600" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"/>
              </svg>
            </button>
            <span class="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible w-40 text-center z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded-md shadow-sm dark:bg-slate-700" role="tooltip">
              Displayed on public forums, such as Preline
            </span>
          </div>
        </div>
        <!-- End Col -->

        <div class="col-span-9">
          <div class="sm:flex">
            <input id="af-account-full-name" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Maria">
            <input type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Boone">
          </div>
        </div>
        <!-- End Col -->

        <div class="col-span-3">
          <label for="af-account-email" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
            Email
          </label>
        </div>
        <!-- End Col -->

        <div class="col-span-9">
          <input id="af-account-email" type="email" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm text-sm rounded-lg focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="maria@site.com">
        </div>
        <!-- End Col -->

        <div class="col-span-3">
          <label for="af-account-password" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
            Password
          </label>
        </div>
        <!-- End Col -->

        <div class="col-span-9">
          <div class="space-y-2">
            <input id="af-account-password" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Enter current password">
            <input type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="Enter new password">
          </div>
        </div>
        <!-- End Col -->

        <div class="col-span-3">
          <div class="inline-block">
            <label for="af-account-phone" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
              Phone
            </label>
            <span class="text-sm text-gray-400 dark:text-gray-600">
              (Optional)
            </span>
          </div>
        </div>
        <!-- End Col -->

        <div class="col-span-9">
          <div class="sm:flex">
            <input id="af-account-phone" type="text" class="py-2 px-3 pr-11 block w-full border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" placeholder="+x(xxx)xxx-xx-xx">
            <select class="py-2 px-3 pr-9 block w-full sm:w-auto border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
              <option selected>Mobile</option>
              <option>Home</option>
              <option>Work</option>
              <option>Fax</option>
            </select>
          </div>

          <p class="mt-3">
            <a class="inline-flex items-center gap-x-1.5 text-sm text-blue-600 decoration-2 hover:underline font-medium" href="../docs/index.html">
              <svg class="w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
                <path d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
              </svg>
              Add phone
            </a>
          </p>
        </div>
        <!-- End Col -->

        <div class="col-span-3">
          <label for="af-account-gender-checkbox" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
            Gender
          </label>
        </div>
        <!-- End Col -->

        <div class="col-span-9">
          <div class="sm:flex">
            <label for="af-account-gender-checkbox" class="flex py-2 px-3 block w-full border border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
              <input type="radio" name="af-account-gender-checkbox" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="af-account-gender-checkbox" checked>
              <span class="text-sm text-gray-500 ml-3 dark:text-gray-400">Male</span>
            </label>

            <label for="af-account-gender-checkbox-female" class="flex py-2 px-3 block w-full border border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
              <input type="radio" name="af-account-gender-checkbox-female" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="af-account-gender-checkbox-female">
              <span class="text-sm text-gray-500 ml-3 dark:text-gray-400">Female</span>
            </label>

            <label for="af-account-gender-checkbox-other" class="flex py-2 px-3 block w-full border border-gray-200 shadow-sm -mt-px -ml-px first:rounded-t-lg last:rounded-b-lg sm:first:rounded-l-lg sm:mt-0 sm:first:ml-0 sm:first:rounded-tr-none sm:last:rounded-bl-none sm:last:rounded-r-lg text-sm relative focus:z-10 focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400">
              <input type="radio" name="af-account-gender-checkbox-other" class="shrink-0 mt-0.5 border-gray-200 rounded-full text-blue-600 pointer-events-none focus:ring-blue-500 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800" id="af-account-gender-checkbox-other">
              <span class="text-sm text-gray-500 ml-3 dark:text-gray-400">Other</span>
            </label>
          </div>
        </div>
        <!-- End Col -->

        <div class="col-span-3">
          <label for="af-account-bio" class="inline-block text-sm text-gray-800 mt-2.5 dark:text-gray-200">
            BIO
          </label>
        </div>
        <!-- End Col -->

        <div class="col-span-9">
          <textarea id="af-account-bio" class="py-2 px-3 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400" rows="6" placeholder="Type your message..."></textarea>
        </div>
        <!-- End Col -->
      </div>
      <!-- End Grid -->

      <div class="mt-5 flex justify-end gap-x-2">
        <button type="button" class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border font-medium bg-white text-gray-700 shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-slate-900 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800">
          Cancel
        </button>
        <button type="button" class="py-2 px-3 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-blue-500 text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800">
          Save changes
        </button>
      </div>
    </form>
  </div>
  <!-- End Card -->
</div>
<!-- End Card Section --></div>
        
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
