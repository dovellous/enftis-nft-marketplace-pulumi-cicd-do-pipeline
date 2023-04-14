import React from 'react';

  export const Statistic1 = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="flex flex-col lg:items-center lg:flex-row">
          <div className="flex items-center mb-6 lg:w-1/2 lg:mb-0">
            <div className="flex items-center justify-center w-16 h-16 mr-5 rounded-full bg-indigo-50 sm:w-24 sm:h-24 xl:mr-10 xl:w-28 xl:h-28">
              <svg
                className="w-12 h-12 text-deep-purple-accent-400 sm:w-16 sm:h-16 xl:w-20 xl:h-20"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h3 className="text-4xl font-extrabold sm:text-5xl xl:text-6xl">
              9 312 435
            </h3>
          </div>
          <div className="lg:w-1/2">
            <p className="text-gray-800">
              Sed ut perspiciatis unde omnis iste natus error sit voluptatem
              accusantium doloremque rem aperiam, eaque ipsa quae. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
        </div>
      </div>
    );
  };

  export const Statistic2 = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">144K</h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Downloads
            </p>
          </div>
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">12.9K</h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Subscribers
            </p>
          </div>
          <div className="text-center md:border-r">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">48.3K</h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Users
            </p>
          </div>
          <div className="text-center">
            <h6 className="text-4xl font-bold lg:text-5xl xl:text-6xl">24.5K</h6>
            <p className="text-sm font-medium tracking-widest text-gray-800 uppercase lg:text-base">
              Cookies
            </p>
          </div>
        </div>
      </div>
    );
  };

  export const Statistic3 = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              819
            </h6>
            <p className="mb-2 font-bold text-md">Downloads</p>
            <p className="text-gray-700">
              It’s something that’s many of the wisest people in history have kept
              in mind.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              1.3K
            </h6>
            <p className="mb-2 font-bold text-md">Users</p>
            <p className="text-gray-700">
              For many men, the acquisition of wealth does not end their troubles,
              it only changes them.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">91</h6>
            <p className="mb-2 font-bold text-md">Subscribers</p>
            <p className="text-gray-700">
              It's a helluva start, being able to recognize what makes you happy
              today, in this moment.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-indigo-50 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-deep-purple-accent-400 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">52</h6>
            <p className="mb-2 font-bold text-md">Products</p>
            <p className="text-gray-700">
              Happiness is when what you think, what you say, and what you do are
              in harmony.
            </p>
          </div>
        </div>
      </div>
    );
  };

  export const Statistic4 = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              819
            </h6>
            <p className="mb-2 font-bold text-md">Downloads</p>
            <p className="text-gray-700">
              It’s something that’s many of the wisest people in history have kept
              in mind.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">
              1.3K
            </h6>
            <p className="mb-2 font-bold text-md">Users</p>
            <p className="text-gray-700">
              For many men, the acquisition of wealth does not end their troubles,
              it only changes them.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">91</h6>
            <p className="mb-2 font-bold text-md">Subscribers</p>
            <p className="text-gray-700">
              It's a helluva start, being able to recognize what makes you happy
              today, in this moment.
            </p>
          </div>
          <div className="text-center">
            <div className="flex items-center justify-center w-10 h-10 mx-auto mb-3 rounded-full bg-teal-accent-400 sm:w-12 sm:h-12">
              <svg
                className="w-8 h-8 text-teal-900 sm:w-10 sm:h-10"
                stroke="currentColor"
                viewBox="0 0 52 52"
              >
                <polygon
                  strokeWidth="3"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  fill="none"
                  points="29 13 14 29 25 29 23 39 38 23 27 23"
                />
              </svg>
            </div>
            <h6 className="text-4xl font-bold text-deep-purple-accent-400">52</h6>
            <p className="mb-2 font-bold text-md">Products</p>
            <p className="text-gray-700">
              Happiness is when what you think, what you say, and what you do are
              in harmony.
            </p>
          </div>
        </div>
      </div>
    );
  };

  export const Statistic5 = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="max-w-xl mb-10 md:mx-auto sm:text-center lg:max-w-2xl md:mb-12">
          <div>
            <p className="inline-block px-3 py-px mb-4 text-xs font-semibold tracking-wider text-teal-900 uppercase rounded-full bg-teal-accent-400">
              Brand new
            </p>
          </div>
          <h2 className="max-w-lg mb-6 font-sans text-3xl font-bold leading-none tracking-tight text-gray-900 sm:text-4xl md:mx-auto">
            <span className="relative inline-block">
              <svg
                viewBox="0 0 52 24"
                fill="currentColor"
                className="absolute top-0 left-0 z-0 hidden w-32 -mt-8 -ml-20 text-blue-gray-100 lg:w-32 lg:-ml-28 lg:-mt-10 sm:block"
              >
                <defs>
                  <pattern
                    id="d5589eeb-3fca-4f01-ac3e-983224745704"
                    x="0"
                    y="0"
                    width=".135"
                    height=".30"
                  >
                    <circle cx="1" cy="1" r=".7" />
                  </pattern>
                </defs>
                <rect
                  fill="url(#d5589eeb-3fca-4f01-ac3e-983224745704)"
                  width="52"
                  height="24"
                />
              </svg>
              <span className="relative">The</span>
            </span>{' '}
            quick, brown fox jumps over a lazy dog
          </h2>
          <p className="text-base text-gray-700 md:text-lg">
            Sed ut perspiciatis unde omnis iste natus error sit voluptatem
            accusantium doloremque rem aperiam, eaque ipsa quae.
          </p>
        </div>
        <div className="relative w-full p-px mx-auto mb-4 overflow-hidden transition-shadow duration-300 border rounded lg:mb-8 lg:max-w-4xl group hover:shadow-xl">
          <div className="absolute bottom-0 left-0 w-full h-1 duration-300 origin-left transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 left-0 w-1 h-full duration-300 origin-bottom transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="absolute top-0 left-0 w-full h-1 duration-300 origin-right transform scale-x-0 bg-deep-purple-accent-400 group-hover:scale-x-100" />
          <div className="absolute bottom-0 right-0 w-1 h-full duration-300 origin-top transform scale-y-0 bg-deep-purple-accent-400 group-hover:scale-y-100" />
          <div className="relative flex flex-col items-center h-full py-10 duration-300 bg-white rounded-sm transition-color sm:items-stretch sm:flex-row">
            <div className="px-12 py-8 text-center">
              <h6 className="text-4xl font-bold text-deep-purple-accent-400 sm:text-5xl">
                82%
              </h6>
              <p className="text-center md:text-base">
                Lorem ipsum dolor adipiscing sit amet, consectetur elit.
              </p>
            </div>
            <div className="w-56 h-1 transition duration-300 transform bg-gray-300 rounded-full group-hover:bg-deep-purple-accent-400 group-hover:scale-110 sm:h-auto sm:w-1" />
            <div className="px-12 py-8 text-center">
              <h6 className="text-4xl font-bold text-deep-purple-accent-400 sm:text-5xl">
                106.5K
              </h6>
              <p className="text-center md:text-base">
                Lorem ipsum elit consectetur sit amet, adipiscing dolor.
              </p>
            </div>
          </div>
        </div>
        <p className="mx-auto mb-4 text-gray-600 sm:text-center lg:max-w-2xl lg:mb-6 md:px-16">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    );
  };

  export const Statistic6 = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-10 row-gap-8 lg:grid-cols-3">
          <div>
            <div className="flex">
              <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                86K
              </h6>
              <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                <svg
                  className="text-teal-900 w-7 h-7"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <p className="mb-2 font-bold md:text-lg">Downloads</p>
            <p className="text-gray-700">
              Three movie stars, Chloe, Lexa, and Jon, are filming a movie in the
              Amazon. They’re very famous and very high-maintenance effort.
            </p>
          </div>
          <div>
            <div className="flex">
              <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                1.3K
              </h6>
              <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                <svg
                  className="text-teal-900 w-7 h-7"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <p className="mb-2 font-bold md:text-lg">Subscribers</p>
            <p className="text-gray-700">
              One day, after filming a scene deep in the rainforest, the three
              actors and their agents decide to head back to home base by foot.
            </p>
          </div>
          <div>
            <div className="flex">
              <h6 className="mr-2 text-4xl font-bold md:text-5xl text-deep-purple-accent-400">
                52M
              </h6>
              <div className="flex items-center justify-center rounded-full bg-teal-accent-400 w-7 h-7">
                <svg
                  className="text-teal-900 w-7 h-7"
                  stroke="currentColor"
                  viewBox="0 0 52 52"
                >
                  <polygon
                    strokeWidth="3"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    fill="none"
                    points="29 13 14 29 25 29 23 39 38 23 27 23"
                  />
                </svg>
              </div>
            </div>
            <p className="mb-2 font-bold md:text-lg">Cookies</p>
            <p className="text-gray-700">
              Suddenly, they come to a large river. On the riverbank, they find a
              small rowboat, but it’s only big enough to hold two of them at one
              time.
            </p>
          </div>
        </div>
      </div>
    );
  };

  export const Statistic7 = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid row-gap-8 sm:grid-cols-3">
          <div className="text-center">
            <h6 className="text-5xl font-bold text-deep-purple-accent-400">144K</h6>
            <p className="font-bold">Downloads</p>
          </div>
          <div className="text-center">
            <h6 className="text-5xl font-bold text-deep-purple-accent-400">12.9K</h6>
            <p className="font-bold">Subscribers</p>
          </div>
          <div className="text-center">
            <h6 className="text-5xl font-bold text-deep-purple-accent-400">27.3K</h6>
            <p className="font-bold">Users</p>
          </div>
        </div>
      </div>
    );
  };

  export const Statistic8 = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid grid-cols-2 row-gap-8 md:grid-cols-4">
          <div className="text-center">
            <h6 className="text-3xl font-bold text-deep-purple-accent-400">
              144K
            </h6>
            <p className="font-bold">Downloads</p>
          </div>
          <div className="text-center">
            <h6 className="text-3xl font-bold text-deep-purple-accent-400">
              32.1K
            </h6>
            <p className="font-bold">Users</p>
          </div>
          <div className="text-center">
            <h6 className="text-3xl font-bold text-deep-purple-accent-400">
              12.9K
            </h6>
            <p className="font-bold">Subscribers</p>
          </div>
          <div className="text-center">
            <h6 className="text-3xl font-bold text-deep-purple-accent-400">
              24.5K
            </h6>
            <p className="font-bold">Cookies</p>
          </div>
        </div>
      </div>
    );
  };

  export const Statistic9 = () => {
    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div className="grid gap-24 row-gap-8 lg:grid-cols-5">
          <div className="grid gap-8 lg:col-span-2">
            <div>
              <p className="mb-2 text-lg font-bold">Old man</p>
              <p className="text-gray-700">
                An old man lived in the village. He was one of the most
                unfortunate people in the world. The whole village was tired of
                him, he was always gloomy, he constantly complained.
              </p>
            </div>
            <div>
              <p className="mb-2 text-lg font-bold">The Wise Man</p>
              <p className="text-gray-700">
                People have been coming to the wise man, complaining about the
                same problems every time. One day he told them a joke and everyone
                roared in laughter.
              </p>
            </div>
          </div>
          <div className="grid border divide-y rounded lg:col-span-3 sm:grid-cols-2 sm:divide-y-0 sm:divide-x">
            <div className="flex flex-col justify-between p-10">
              <div>
                <p className="text-lg font-semibold text-gray-800 sm:text-base">
                  Funds Raised
                </p>
                <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                  $84 000 000
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800 sm:text-base">
                  Products
                </p>
                <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                  52
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800 sm:text-base">
                  Downloads
                </p>
                <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                  186M
                </p>
              </div>
            </div>
            <div className="flex flex-col justify-between p-10">
              <div>
                <p className="text-lg font-semibold text-gray-800 sm:text-base">
                  Users
                </p>
                <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                  86K
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800 sm:text-base">
                  Installations
                </p>
                <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                  917 000
                </p>
              </div>
              <div>
                <p className="text-lg font-semibold text-gray-800 sm:text-base">
                  Subscribers
                </p>
                <p className="text-2xl font-bold text-deep-purple-accent-400 sm:text-xl">
                  213K
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  };