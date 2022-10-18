import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Berzel Best - Full Stack Web Developer</title>
        <meta name="description" content="Online Resume of Berzel Best" />
      </Head>
    
      <div className='bg-slate-800 min-h-screen text-sm'>
        <div className="py-12 font-medium max-w-[1100px] mx-auto bg-white">

          <section className='flex justify-between'>
            <div className="flex before:block before:flex-shrink-0 before:h-20 before:w-8 before:bg-slate-800 before:mr-8 w-[33.33333%] flex-shrink-0">
              <div>
                <h1 className=" text-4xl font-semibold">Berzel Best</h1>
                <h2 className="text-lg font-semibold text-teal-600">Full Stack Web Developer</h2>
                <p className='mt-2 max-w-[25rem]'>
                  A megastar web developer with experience creating custom solutions for business of all sizes. 
                  I have a curious mind that likes to work on challenging problems and is 
                  constantly looking for new ways to improve my current skillset.
                </p>
              </div>
            </div>

            <div className='rounded-full overflow-hidden border-teal-600 border-4 h-[10rem] w-[10rem] flex-shrink-0 m-auto'>
              <Image height={500} width={500} className='w-full h-full object-center object-cover' src='/avatar.jpeg' alt="Berzel Best" />
            </div>

            <div className='flex justify-end after:block after:h-16 after:w-8 after:bg-transparent after:flex-shrink-0 after:ml-12 w-[33.33333%] flex-shrink-0'>
              <ul className='text-right flex flex-col justify-between'>
                <li>
                  <a href="mailto:berzel.best@gmail.com" className='flex items-center justify-end space-x-4'>
                    <span>
                      berzel.best@gmail.com
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="512"
                      height="512"
                      className='h-4 w-4'
                      enableBackground="new 0 0 512 512"
                      viewBox="0 0 32 32"
                    >
                      <path
                        d="M30.944 7.139A3.684 3.684 0 0027.311 4H4.689a3.684 3.684 0 00-3.633 3.139L16 16.809z"
                        data-original="#000000"
                      ></path>
                      <path
                        d="M16.543 18.84a1 1 0 01-1.086 0L1 9.486v14.825A3.693 3.693 0 004.689 28h22.622A3.693 3.693 0 0031 24.311V9.485z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="tel:+263782632563" className='flex items-center justify-end space-x-4'>
                    <span>
                      +263 782 6325 63
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="512"
                      height="512"
                      className='h-4 w-4'
                      enableBackground="new 0 0 512 512"
                      viewBox="0 0 32 32"
                    >
                      <path
                        d="M23 2H9a2 2 0 00-2 2v24a2 2 0 002 2h14a2 2 0 002-2V4a2 2 0 00-2-2zm-6 25h-2a1 1 0 010-2h2a1 1 0 010 2z"
                        data-name="handphone v2"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="#" className='flex items-center justify-end space-x-4'>
                    <span>
                      Cape Town, SA
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="512"
                      height="512"
                      className='h-4 w-4'
                      enableBackground="new 0 0 512 512"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M407.579 87.677C376.506 34.053 321.314 1.292 259.939.04c-2.62-.054-5.257-.054-7.878 0-61.374 1.252-116.566 34.013-147.64 87.637-31.762 54.812-32.631 120.652-2.325 176.123l126.963 232.387c.057.103.114.206.173.308 5.586 9.709 15.593 15.505 26.77 15.505 11.176 0 21.183-5.797 26.768-15.505.059-.102.116-.205.173-.308L409.906 263.8c30.304-55.471 29.435-121.311-2.327-176.123zM256 232c-39.701 0-72-32.299-72-72s32.299-72 72-72 72 32.299 72 72-32.298 72-72 72z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://linkedin.com/in/berzel-best" className='flex items-center justify-end space-x-4' target="_blank" rel="noreferrer">
                    <span>
                    linkedin.com/in/berzel-best
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="512"
                      height="512"
                      className='h-4 w-4'
                      enableBackground="new 0 0 512 512"
                      viewBox="0 0 176 176"
                    >
                      <g data-name="Layer 2">
                        <g>
                          <path
                            fill="#000"
                            d="M152 0H24A24 24 0 000 24v128a24 24 0 0024 24h128a24 24 0 0024-24V24a24 24 0 00-24-24zM60 139.28a3.71 3.71 0 01-3.71 3.72H40.48a3.71 3.71 0 01-3.72-3.72V73a3.72 3.72 0 013.72-3.72h15.81A3.72 3.72 0 0160 73zM48.38 63a15 15 0 1115-15 15 15 0 01-15 15zm94.26 76.54a3.41 3.41 0 01-3.42 3.42h-17a3.41 3.41 0 01-3.42-3.42v-31.05c0-4.64 1.36-20.32-12.13-20.32-10.45 0-12.58 10.73-13 15.55v35.86A3.42 3.42 0 0190.3 143H73.88a3.41 3.41 0 01-3.41-3.42V72.71a3.41 3.41 0 013.41-3.42H90.3a3.42 3.42 0 013.42 3.42v5.78c3.88-5.83 9.63-10.31 21.9-10.31 27.18 0 27 25.38 27 39.32z"
                            data-original="#000000"
                          ></path>
                        </g>
                      </g>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://twitter.com/berzel_best" className='flex items-center justify-end space-x-4' target="_blank" rel="noreferrer">
                    <span>
                      @berzel_best
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="512"
                      height="512"
                      className='h-4 w-4'
                      enableBackground="new 0 0 512 512"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M512 97.248c-19.04 8.352-39.328 13.888-60.48 16.576 21.76-12.992 38.368-33.408 46.176-58.016-20.288 12.096-42.688 20.64-66.56 25.408C411.872 60.704 384.416 48 354.464 48c-58.112 0-104.896 47.168-104.896 104.992 0 8.32.704 16.32 2.432 23.936-87.264-4.256-164.48-46.08-216.352-109.792-9.056 15.712-14.368 33.696-14.368 53.056 0 36.352 18.72 68.576 46.624 87.232-16.864-.32-33.408-5.216-47.424-12.928v1.152c0 51.008 36.384 93.376 84.096 103.136-8.544 2.336-17.856 3.456-27.52 3.456-6.72 0-13.504-.384-19.872-1.792 13.6 41.568 52.192 72.128 98.08 73.12-35.712 27.936-81.056 44.768-130.144 44.768-8.608 0-16.864-.384-25.12-1.44C46.496 446.88 101.6 464 161.024 464c193.152 0 298.752-160 298.752-298.688 0-4.64-.16-9.12-.384-13.568 20.832-14.784 38.336-33.248 52.608-54.496z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </a>
                </li>
                <li>
                  <a href="https://github.com/berzel" className='flex items-center justify-end space-x-4' target="_blank" rel="noreferrer">
                    <span>
                    github.com/berzel
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="512"
                      height="512"
                      className='w-4 h-4'
                      enableBackground="new 0 0 512 512"
                      viewBox="0 0 512 512"
                    >
                      <path
                        d="M255.968 5.329C114.624 5.329 0 120.401 0 262.353c0 113.536 73.344 209.856 175.104 243.872 12.8 2.368 17.472-5.568 17.472-12.384 0-6.112-.224-22.272-.352-43.712-71.2 15.52-86.24-34.464-86.24-34.464-11.616-29.696-28.416-37.6-28.416-37.6-23.264-15.936 1.728-15.616 1.728-15.616 25.696 1.824 39.2 26.496 39.2 26.496 22.848 39.264 59.936 27.936 74.528 21.344 2.304-16.608 8.928-27.936 16.256-34.368-56.832-6.496-116.608-28.544-116.608-127.008 0-28.064 9.984-51.008 26.368-68.992-2.656-6.496-11.424-32.64 2.496-68 0 0 21.504-6.912 70.4 26.336 20.416-5.696 42.304-8.544 64.096-8.64 21.728.128 43.648 2.944 64.096 8.672 48.864-33.248 70.336-26.336 70.336-26.336 13.952 35.392 5.184 61.504 2.56 68 16.416 17.984 26.304 40.928 26.304 68.992 0 98.72-59.84 120.448-116.864 126.816 9.184 7.936 17.376 23.616 17.376 47.584 0 34.368-.32 62.08-.32 70.496 0 6.88 4.608 14.88 17.6 12.352C438.72 472.145 512 375.857 512 262.353 512 120.401 397.376 5.329 255.968 5.329z"
                        data-original="#000000"
                      ></path>
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </section>

          <section className='border-t border-slate-800 mt-16 pt-16 flex justify-between space-x-24'>
            <div className='w-[60%] flex-shrink'>

              <div className='flex before:block before:flex-shrink-0 before:h-1 before:w-8 before:bg-transparent before:mr-8 flex-shrink-0'>
                <h2 className='font-black text-lg uppercase'>Work Experience</h2>
              </div>

              <div className="flex before:block before:flex-shrink-0 before:h-20 before:w-8 before:bg-teal-600 before:mr-8 flex-shrink-0 mt-2">
                <div>
                  <h2 className='font-bold text-xl'>Full Stack Web Developer</h2>
                  <h3 className='text-xl'>WebDev Private Limited</h3>
                  <div className='flex justify-between w-full italic text-teal-600'>
                    <span>09/2014 - 10/2022</span>
                    <span>Harare, ZW</span>
                  </div>
                  <div className='text-gray-500'>
                    Software Development
                  </div>
                  <div>
                    <h4 className='italic text-teal-600 mt-2'>Achievement/Tasks</h4>

                    <ul className='space-y-2'>
                      <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam dolorum, 
                          quasi dolores veniam modi cum accusamus nisi quia recusandae perferendis
                          soluta sit eaque, reprehenderit quaerat. Nulla, libero. Eius, magni.
                        </p>
                      </li>
                      <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam dolorum, 
                          quasi dolores veniam modi cum accusamus nisi quia recusandae perferendis
                          soluta sit eaque, reprehenderit quaerat. Nulla, libero. Eius, magni.
                        </p>
                      </li>
                      <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam dolorum, 
                          quasi dolores veniam modi cum accusamus nisi quia recusandae perferendis
                          soluta sit eaque, reprehenderit quaerat. Nulla, libero. Eius, magni.
                        </p>
                      </li>
                      <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam dolorum, 
                          quasi dolores veniam modi cum accusamus nisi quia recusandae perferendis
                          soluta sit eaque, reprehenderit quaerat. Nulla, libero. Eius, magni.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex before:block before:flex-shrink-0 before:h-20 before:w-8 before:bg-teal-600 before:mr-8 flex-shrink-0 mt-8">
                <div>
                  <h2 className='font-bold text-xl'>Full Stack Web Developer</h2>
                  <h3 className='text-xl'>WebDev Private Limited</h3>
                  <div className='flex justify-between w-full italic text-teal-600'>
                    <span>09/2014 - 10/2022</span>
                    <span>Harare, ZW</span>
                  </div>
                  <div className='text-gray-500'>
                    Software Development
                  </div>
                  <div>
                    <h4 className='italic text-teal-600 mt-2'>Achievement/Tasks</h4>

                    <ul className='space-y-2'>
                      <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam dolorum, 
                          quasi dolores veniam modi cum accusamus nisi quia recusandae perferendis
                          soluta sit eaque, reprehenderit quaerat. Nulla, libero. Eius, magni.
                        </p>
                      </li>
                      <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam dolorum, 
                          quasi dolores veniam modi cum accusamus nisi quia recusandae perferendis
                          soluta sit eaque, reprehenderit quaerat. Nulla, libero. Eius, magni.
                        </p>
                      </li>
                      <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam dolorum, 
                          quasi dolores veniam modi cum accusamus nisi quia recusandae perferendis
                          soluta sit eaque, reprehenderit quaerat. Nulla, libero. Eius, magni.
                        </p>
                      </li>
                      <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam dolorum, 
                          quasi dolores veniam modi cum accusamus nisi quia recusandae perferendis
                          soluta sit eaque, reprehenderit quaerat. Nulla, libero. Eius, magni.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

              <div className="flex before:block before:flex-shrink-0 before:h-20 before:w-8 before:bg-teal-600 before:mr-8 flex-shrink-0 mt-8">
                <div>
                  <h2 className='font-bold text-xl'>Full Stack Web Developer</h2>
                  <h3 className='text-xl'>WebDev Private Limited</h3>
                  <div className='flex justify-between w-full italic text-teal-600'>
                    <span>09/2014 - 10/2022</span>
                    <span>Harare, ZW</span>
                  </div>
                  <div className='text-gray-500'>
                    Software Development
                  </div>
                  <div>
                    <h4 className='italic text-teal-600 mt-2'>Achievement/Tasks</h4>

                    <ul className='space-y-2'>
                      <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam dolorum, 
                          quasi dolores veniam modi cum accusamus nisi quia recusandae perferendis
                          soluta sit eaque, reprehenderit quaerat. Nulla, libero. Eius, magni.
                        </p>
                      </li>
                      <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam dolorum, 
                          quasi dolores veniam modi cum accusamus nisi quia recusandae perferendis
                          soluta sit eaque, reprehenderit quaerat. Nulla, libero. Eius, magni.
                        </p>
                      </li>
                      <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam dolorum, 
                          quasi dolores veniam modi cum accusamus nisi quia recusandae perferendis
                          soluta sit eaque, reprehenderit quaerat. Nulla, libero. Eius, magni.
                        </p>
                      </li>
                      <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                        <p>
                          Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis aliquam dolorum, 
                          quasi dolores veniam modi cum accusamus nisi quia recusandae perferendis
                          soluta sit eaque, reprehenderit quaerat. Nulla, libero. Eius, magni.
                        </p>
                      </li>
                    </ul>
                  </div>
                </div>
              </div>

            </div>

            <div className='w-[40%] flex-shrink-0'>
              <div className='flex justify-between after:block after:h-20 after:w-8 after:bg-transparent after:flex-shrink-0 after:ml-12'>
                <div>
                  <h2 className='font-black text-lg uppercase'>My Skills</h2>
                  <ul className='flex flex-wrap -mx-1'>
                    <li className='border border-gray-800 rounded overflow-hidden mx-1 mt-2'>
                      <div className='bg-gray-800 w-full px-3 py-1'>
                        <p className='whitespace-nowrap text-white'>
                          PHP Laravel
                        </p>
                      </div>
                    </li>
                    <li className='border border-gray-800 rounded overflow-hidden mx-1 mt-2'>
                      <div className='bg-gray-800 w-full px-3 py-1'>
                        <p className='whitespace-nowrap text-white'>
                          ReactJS &amp; NextJS
                        </p>
                      </div>
                    </li>
                    <li className='border border-gray-800 rounded overflow-hidden mx-1 mt-2'>
                      <div className='bg-gray-800 w-full px-3 py-1'>
                        <p className='whitespace-nowrap text-white'>
                          Figma
                        </p>
                      </div>
                    </li>
                    <li className='border border-gray-800 rounded overflow-hidden mx-1 mt-2'>
                      <div className='bg-gray-800 w-full px-3 py-1'>
                        <p className='whitespace-nowrap text-white'>
                          MySQL
                        </p>
                      </div>
                    </li>
                    <li className='border border-gray-800 rounded overflow-hidden mx-1 mt-2'>
                      <div className='bg-gray-800 w-full px-3 py-1'>
                        <p className='whitespace-nowrap text-white'>
                          WordPress
                        </p>
                      </div>
                    </li>
                    <li className='border border-gray-800 rounded overflow-hidden mx-1 mt-2'>
                      <div className='bg-gray-800 w-full px-3 py-1'>
                        <p className='whitespace-nowrap text-white'>
                          Redis
                        </p>
                      </div>
                    </li>
                    <li className='border border-gray-800 rounded overflow-hidden mx-1 mt-2'>
                      <div className='bg-gray-800 w-full px-3 py-1'>
                        <p className='whitespace-nowrap text-white'>
                          Docker
                        </p>
                      </div>
                    </li>
                    <li className='border border-gray-800 rounded overflow-hidden mx-1 mt-2'>
                      <div className='bg-gray-800 w-full px-3 py-1'>
                        <p className='whitespace-nowrap text-white'>
                          Jenkins
                        </p>
                      </div>
                    </li>
                    <li className='border border-gray-800 rounded overflow-hidden mx-1 mt-2'>
                      <div className='bg-gray-800 w-full px-3 py-1'>
                        <p className='whitespace-nowrap text-white'>
                          Linux
                        </p>
                      </div>
                    </li>
                    <li className='border border-gray-800 rounded overflow-hidden mx-1 mt-2'>
                      <div className='bg-gray-800 w-full px-3 py-1'>
                        <p className='whitespace-nowrap text-white'>
                          Git
                        </p>
                      </div>
                    </li>
                    <li className='border border-gray-800 rounded overflow-hidden mx-1 mt-2'>
                      <div className='bg-gray-800 w-full px-3 py-1'>
                        <p className='whitespace-nowrap text-white'>
                          ElasticSearch
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='flex justify-between after:block after:h-20 after:w-8 after:bg-transparent after:flex-shrink-0 after:ml-12 mt-16'>
                <div>
                  <h2 className='font-black text-lg uppercase'>Personal Projects</h2>
                  <div className='mt-2'>
                    <h2 className='font-semibold text-lg'>AdFury - Online Classifieds</h2>
                    <a href="#" alt="Certified Laravel Developer" className='flex italic text-teal-600 before:h-2 before:w-2 before:mt-[0.37rem] before:mr-2 before:rounded-full before:bg-teal-600'>
                      https://adfury.co.zw
                    </a>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laboriosam repellat eius illo saepe incidunt.
                    </p>
                  </div>
                  <div className='mt-4'>
                    <h2 className='font-semibold text-lg'>Senza - Job Board Website</h2>
                    <a href="#" alt="Certified Laravel Developer" className='flex italic text-teal-600 before:h-2 before:w-2 before:mt-[0.37rem] before:mr-2 before:rounded-full before:bg-teal-600'>
                      https://senza.co.zw
                    </a>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laboriosam repellat eius illo saepe incidunt.
                    </p>
                  </div>
                  <div className='mt-4'>
                    <h2 className='font-semibold text-lg'>Easy Paynow - PHP Library</h2>
                    <a href="#" alt="Certified Laravel Developer" className='flex italic text-teal-600 before:h-2 before:w-2 before:mt-[0.37rem] before:mr-2 before:rounded-full before:bg-teal-600'>
                      https://github.com/berzel/easy-paynow
                    </a>
                    <p>
                      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequuntur laboriosam repellat eius illo saepe incidunt.
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex justify-between after:block after:h-20 after:w-8 after:bg-transparent after:flex-shrink-0 after:ml-12 mt-16'>
                <div>
                  <h2 className='font-black text-lg uppercase'>Education</h2>
                  <div className='mt-2'>
                    <h2 className='font-bold text-xl'>Msc Software Engineering</h2>
                    <h3 className='text-lg'>University of Zimbabwe</h3>
                    <div className='flex justify-between w-full italic text-teal-600'>
                      <span>09/2014 - 10/2022</span>
                      <span>Harare, ZW</span>
                    </div>
                  </div>
                  <div className='mt-8'>
                    <h2 className='font-bold text-xl'>Bsc Computer Science</h2>
                    <h3 className='text-lg'>National University of Science & Technology</h3>
                    <div className='flex justify-between w-full italic text-teal-600'>
                      <span>09/2014 - 10/2022</span>
                      <span>Bulawayo, ZW</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex justify-between after:block after:h-20 after:w-8 after:bg-transparent after:flex-shrink-0 after:ml-12 mt-16'>
                <div>
                  <h2 className='font-black text-lg uppercase'>Certifications</h2>
                  <div className='mt-2'>
                    <h2 className='font-semibold'>Certified Laravel Developer</h2>
                    <a href="#" alt="Certified Laravel Developer" className='flex before:h-2 before:w-2 before:mt-[0.37rem] before:mr-2 before:rounded-full before:bg-teal-600'>
                      https://certification.laravel.com
                    </a>
                  </div>
                  <div className='mt-4'>
                    <h2 className='font-semibold'>Certified Java SE11 Developer</h2>
                    <a href="#" alt="Certified Laravel Developer" className='flex before:h-2 before:w-2 before:mt-[0.37rem] before:mr-2 before:rounded-full before:bg-teal-600'>
                      https://certification.oracle.com
                    </a>
                  </div>
                  <div className='mt-4'>
                    <h2 className='font-semibold'>Certified Java SE11 Developer</h2>
                    <a href="#" alt="Certified Laravel Developer" className='flex before:h-2 before:w-2 before:mt-[0.37rem] before:mr-2 before:rounded-full before:bg-teal-600'>
                      https://certification.oracle.com
                    </a>
                  </div>
                </div>
              </div>

              <div className='flex justify-between after:block after:h-20 after:w-8 after:bg-transparent after:flex-shrink-0 after:ml-12 mt-16'>
                <div className='w-full'>
                  <h2 className='font-black text-lg uppercase'>Languages</h2>
                  <div className='mt-2 flex items-center space-x-4'>
                    <h2 className='font-semibold w-[40%] flex-shrink-0'>
                      English (UK) 
                    </h2>
                    <ul className='flex space-x-4'>
                        <li className='h-4 w-4 border-2 border-slate-800 rounded-full bg-slate-800'></li>
                        <li className='h-4 w-4 border-2 border-slate-800 rounded-full bg-slate-800'></li>
                        <li className='h-4 w-4 border-2 border-slate-800 rounded-full bg-slate-800'></li>
                        <li className='h-4 w-4 border-2 border-slate-800 rounded-full bg-slate-800'></li>
                        <li className='h-4 w-4 border-2 border-slate-800 rounded-full'></li>
                      </ul>
                  </div>
                  <div className='mt-4 flex items-center space-x-4'>
                    <h2 className='font-semibold w-[40%] flex-shrink-0'>
                      Zulu / Ndebele
                    </h2>
                    <ul className='flex space-x-4'>
                        <li className='h-4 w-4 border-2 border-slate-800 rounded-full bg-slate-800'></li>
                        <li className='h-4 w-4 border-2 border-slate-800 rounded-full bg-slate-800'></li>
                        <li className='h-4 w-4 border-2 border-slate-800 rounded-full bg-slate-800'></li>
                        <li className='h-4 w-4 border-2 border-slate-800 rounded-full'></li>
                        <li className='h-4 w-4 border-2 border-slate-800 rounded-full'></li>
                      </ul>
                  </div>
                  <div className='mt-4 flex items-center space-x-4'>
                    <h2 className='font-semibold w-[40%] flex-shrink-0'>
                      Shona
                    </h2>
                    <ul className='flex space-x-4'>
                        <li className='h-4 w-4 border-2 border-slate-800 rounded-full bg-slate-800'></li>
                        <li className='h-4 w-4 border-2 border-slate-800 rounded-full bg-slate-800'></li>
                        <li className='h-4 w-4 border-2 border-slate-800 rounded-full bg-slate-800'></li>
                        <li className='h-4 w-4 border-2 border-slate-800 rounded-full bg-slate-800'></li>
                        <li className='h-4 w-4 border-2 border-slate-800 rounded-full bg-slate-800'></li>
                      </ul>
                  </div>
                </div>
              </div>

              <div className='flex justify-between after:block after:h-20 after:w-8 after:bg-transparent after:flex-shrink-0 after:ml-12 mt-16'>
                <div>
                  <h2 className='font-black text-lg uppercase'>Interests &amp; Activities</h2>
                  <div className='flex flex-wrap -mx-1'>
                    <div className='border border-slate-700 rounded px-2 py-1 mx-1 mt-2'>Chess</div>
                    <div className='border border-slate-700 rounded px-2 py-1 mx-1 mt-2'>Reading</div>
                    <div className='border border-slate-700 rounded px-2 py-1 mx-1 mt-2'>Biking</div>
                    <div className='border border-slate-700 rounded px-2 py-1 mx-1 mt-2'>Cooking</div>
                    <div className='border border-slate-700 rounded px-2 py-1 mx-1 mt-2'>Online Gaming</div>
                  </div>
                </div>
              </div>
            </div>
          </section>

          </div>
      </div>
    </>
  )
}
