import React from 'react';
import Button from './Button/Button';

const About = () => {
    return (
             <div>
                 <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                <div className="flex flex-col mb-6 lg:justify-between lg:flex-row md:mb-8">
                  <h2 className="max-w-lg mb-5 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none md:mb-6 group">
                    <span className="inline-block mb-1 sm:mb-4">
                      There is no must in art
                      <br className="hidden md:block" />
                      because art is free.
                    </span>
                    <div className="h-1 ml-auto duration-300 origin-left transform bg-deep-purple-accent-400 scale-x-30 group-hover:scale-x-100" />
                  </h2>
                  
                </div>
                <div className="grid gap-6 row-gap-5 mb-8 lg:grid-cols-4 sm:row-gap-6 sm:grid-cols-2">
                  <a href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                      <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src="https://images.pexels.com/photos/3184311/pexels-photo-3184311.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;w=500"
                        alt=""
                      />
                      <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                        <p className="mb-4 text-lg font-bold text-gray-100">Mona Lisa</p>
                        <p className="text-sm tracking-wide text-gray-300">
                          Painted between 1503 and 1517, Da Vinci’s alluring portrait has
                          been dogged by two questions since the day it was made: Who’s
                          the subject and why is she smiling?
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                      <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src="https://images.pexels.com/photos/3184338/pexels-photo-3184338.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt=""
                      />
                      <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                        <p className="mb-4 text-lg font-bold text-gray-100">
                          The Starry Night
                        </p>
                        <p className="text-sm tracking-wide text-gray-300">
                          Vincent Van Gogh’s most popular painting, The Starry Night was
                          created by Van Gogh at the asylum in Saint-Rémy, where he’d
                          committed himself in 1889.
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                      <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt=""
                      />
                      <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                        <p className="mb-4 text-lg font-bold text-gray-100">The Kiss</p>
                        <p className="text-sm tracking-wide text-gray-300">
                          Opulently gilded and extravagantly patterned, The Kiss, Gustav
                          Klimt’s fin-de-siècle portrayal of intimacy, is a mix of
                          Symbolism and Vienna Jugendstil, the Austrian variant of Art
                          Nouveau.
                        </p>
                      </div>
                    </div>
                  </a>
                  <a href="/" aria-label="View Item">
                    <div className="relative overflow-hidden transition duration-200 transform rounded shadow-lg hover:-translate-y-2 hover:shadow-2xl">
                      <img
                        className="object-cover w-full h-56 md:h-64 xl:h-80"
                        src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&amp;cs=tinysrgb&amp;dpr=2&amp;h=750&amp;w=1260"
                        alt=""
                      />
                      <div className="absolute inset-0 px-6 py-4 transition-opacity duration-200 bg-black bg-opacity-75 opacity-0 hover:opacity-100">
                        <p className="mb-4 text-lg font-bold text-gray-100">
                          The Harvesters
                        </p>
                        <p className="text-sm tracking-wide text-gray-300">
                          Bruegel’s fanfare for the common man is considered one of the
                          defining works of Western art. This composition was one of six
                          created on the theme of the seasons.
                        </p>
                      </div>
                    </div>
                  </a>
                </div>
                <div className="text-center">
                  <a
                    href="/"
                    aria-label=""
                    className="inline-flex items-center font-semibold transition-colors duration-200 text-deep-purple-accent-400 hover:text-deep-purple-800"
                  >
                    View gallery
                    <svg
                      className="inline-block w-3 ml-2"
                      fill="currentColor"
                      viewBox="0 0 12 12"
                    >
                      <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                    </svg>
                  </a>
                </div>
              </div>
              <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
                
                <div className="grid gap-5 mb-8 md:grid-cols-2 lg:grid-cols-3">
                  <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                      <svg
                        className="w-10 h-10 text-deep-purple-accent-400"
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
                    <h6 className="mb-2 font-semibold leading-5">The doctor said</h6>
                    <p className="text-sm text-gray-900">
                      Baseball ipsum dolor sit amet cellar rubber win hack tossed.
                      Slugging catcher slide bench league, left fielder nubber.
                    </p>
                  </div>
                  <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                      <svg
                        className="w-10 h-10 text-deep-purple-accent-400"
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
                    <h6 className="mb-2 font-semibold leading-5">That is the true</h6>
                    <p className="text-sm text-gray-900">
                      We meet at one of those defining moments - a moment when our nation
                      is at war, our economy is in turmoil, and the American promise has
                      been threatened once more.
                    </p>
                  </div>
                  <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                      <svg
                        className="w-10 h-10 text-deep-purple-accent-400"
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
                    <h6 className="mb-2 font-semibold leading-5">Those options</h6>
                    <p className="text-sm text-gray-900">
                      Strategic high-level 30,000 ft view. Drill down re-inventing the
                      wheel at the end of the day but curate imagineer, or to be inspired
                      is to become creative.
                    </p>
                  </div>
                  <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                      <svg
                        className="w-10 h-10 text-deep-purple-accent-400"
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
                    <h6 className="mb-2 font-semibold leading-5">Swearem ipsum</h6>
                    <p className="text-sm text-gray-900">
                      Aliquam scelerisque accumsan nisl, a mattis eros vestibulum et.
                      Vestibulum placerat purus ut nibh aliquam fringilla. Aenean et
                      tortor diam, id tempor elit.
                    </p>
                  </div>
                  <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                      <svg
                        className="w-10 h-10 text-deep-purple-accent-400"
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
                    <h6 className="mb-2 font-semibold leading-5">Webtwo ipsum</h6>
                    <p className="text-sm text-gray-900">
                      Sed ut perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque rem aperiam, eaque ipsa quae. Sed ut
                      perspiciatis unde omnis.
                    </p>
                  </div>
                  <div className="p-5 duration-300 transform bg-white border rounded shadow-sm hover:-translate-y-2">
                    <div className="flex items-center justify-center w-12 h-12 mb-4 rounded-full bg-indigo-50">
                      <svg
                        className="w-10 h-10 text-deep-purple-accent-400"
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
                    <h6 className="mb-2 font-semibold leading-5">Lookout flogging</h6>
                    <p className="text-sm text-gray-900">
                      Flatland! Hypatia. Galaxies Orion's sword globular star cluster?
                      Light years quasar as a patch of light gathered by gravity Vangelis
                      radio telescope.
                    </p>
                  </div>
                </div>
                <div className="text-center">
                  <Button label='Learn More'></Button>
                </div>
              </div>
             </div>
          
    );
};

export default About;