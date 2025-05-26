import Head from "next/head";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <Head>
        <title>Berzel Best - Full Stack Laravel Developer</title>
        <meta name="description" content="Online Resume of Berzel Best" />
      </Head>
    
      <div className='min-h-screen text-sm bg-slate-800 mx-auto max-w-[1920px]'>
        <div className="py-12 font-medium mx-auto bg-white">

          <section className='flex justify-between'>
            <div className="flex before:block before:flex-shrink-0 before:h-20 before:w-8 before:bg-slate-800 before:mr-8 w-[33.33333%] flex-shrink-0">
              <div>
                <h1 className="text-4xl font-semibold ">Berzel Best</h1>
                <h2 className="text-lg font-semibold text-teal-600">Full Stack Laravel Developer</h2>
                <p className='mt-2 max-w-[25rem]'>
                  I am a skilled full-stack Laravel developer with over 6 years of experience working on large payment gateways, CRMs, classifieds and e-commerce platforms. I possess a curious mindset that thrives on tackling challenging problems, and I am always exploring innovative ways to optimize everything within my purview.
                </p>
              </div>
            </div>

            <div className='rounded-full overflow-hidden border-teal-600 border-4 h-[10rem] w-[10rem] flex-shrink-0 m-auto'>
              <Image height={500} width={500} className='object-cover object-center w-full h-full' src='/avatar.jpeg' alt="Berzel Best" />
            </div>

            <div className='flex justify-end after:block after:h-16 after:w-8 after:bg-transparent after:flex-shrink-0 after:ml-12 w-[33.33333%] flex-shrink-0'>
              <ul className='flex flex-col justify-between text-right'>
                <li>
                  <a href="mailto:berzel.best@gmail.com" className='flex items-center justify-end space-x-4'>
                    <span>
                      berzel.best@gmail.com
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="512"
                      height="512"
                      className='w-4 h-4'
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
                      +27 611 8062 90
                    </span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="512"
                      height="512"
                      className='w-4 h-4'
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
                      className='w-4 h-4'
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
                      className='w-4 h-4'
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
                      className='w-4 h-4'
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

          <section className='flex justify-between pt-16 mt-16 space-x-24 border-t border-slate-800'>
            <div className='w-[50%] flex-shrink-0'>

              <div className='flex flex-shrink-0 before:block before:flex-shrink-0 before:h-1 before:w-8 before:bg-transparent before:mr-8'>
                <h2 className='text-lg font-black uppercase'>Work Experience</h2>
              </div>

              <div className="space-y-10">
              <div className="flex flex-shrink-0 mt-2 before:block before:flex-shrink-0 before:h-20 before:w-8 before:bg-teal-600 before:mr-8">
                  <div>
                    <h2 className='text-xl font-bold'>Full Stack Laravel Developer</h2>
                    <h3 className='text-xl'>Payfast by Network</h3>
                    <div className='flex justify-between w-full italic text-teal-600'>
                      <span>04/2023 - Present</span>
                      <span>Cape Town, SA</span>
                    </div>
                    <div className='text-gray-500'>
                      Software Development
                    </div>
                    <div>
                      <h4 className='mt-2 italic text-teal-600'>Achievement/Tasks</h4>

                      <ul className='space-y-2'>
                        <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                          <p>
                            Led the development of the backend API for the Payfast mobile application
                          </p>
                        </li>
                        <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                          <p>
                            Design & architect backend APIs for the new in person payments platform
                          </p>
                        </li>
                        <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                          <p>
                             Meetings with stakeholders and developers to ensure timely delivery of projects.
                          </p>
                        </li>
                        <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                          <p>
                            Did code reviews and monitoring to ensure the system is performing well in production.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-shrink-0 mt-2 before:block before:flex-shrink-0 before:h-20 before:w-8 before:bg-teal-600 before:mr-8">
                  <div>
                    <h2 className='text-xl font-bold'>Laravel Developer</h2>
                    <h3 className='text-xl'>STAXO Group</h3>
                    <div className='flex justify-between w-full italic text-teal-600'>
                      <span>11/2022 - 11/2024</span>
                      <span>London, UK</span>
                    </div>
                    <div className='text-gray-500'>
                      Software Development
                    </div>
                    <div>
                      <h4 className='mt-2 italic text-teal-600'>Achievement/Tasks</h4>

                      <ul className='space-y-2'>
                        <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                          <p>
                            I utilized Laravel and ReactJS to construct the REST API backend and administrative dashboard for Bankzy, a pay-by-open-banking platform that offers faster and more cost-effective transactions than Paypal
                          </p>
                        </li>
                        <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                          <p>
                            I attended meetings with clients and other stakeholders to ensure accurate capture of project requirements.
                          </p>
                        </li>
                        <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                          <p>
                            I participated in technical discussions and daily stand-up meetings and ensured timely delivery of projects.
                          </p>
                        </li>
                        <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                          <p>
                            I offered constructive feedback during code reviews, with the goal of enhancing the performance and maintainability of the source code.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-shrink-0 before:block before:flex-shrink-0 before:h-20 before:w-8 before:bg-teal-600 before:mr-8">
                  <div>
                    <h2 className='text-xl font-bold'>Full Stack Web Developer</h2>
                    <h3 className='text-xl'>WebDev Private Limited</h3>
                    <div className='flex justify-between w-full italic text-teal-600'>
                      <span>12/2019 - 10/2022</span>
                      {/* <span>Harare, ZW</span> */}
                    </div>
                    <div className='text-gray-500'>
                      Software Development
                    </div>
                    <div>
                      <h4 className='mt-2 italic text-teal-600'>Achievement/Tasks</h4>

                      <ul className='space-y-2'>
                        <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                          <p>
                            Implemented and documented multiple microservices that integrated with both REST and SOAP APIs for Topup.co.zw, the largest online bill payments platform in Zimbabwe.
                          </p>
                        </li>
                        <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                          <p>
                            I employed blackfire.io, a code profiling tool, to identify problematic methods and queries responsible for the lengthy loading time of the classifieds.co.zw homepage, which took anywhere from 8 to 12 seconds to load without using cache. I optimized the SQL queries involved in retrieving data from the data source and resolved N+1 issues and 0(N^3) methods by using recursion with memoization. These efforts successfully reduced the load time to an average of 800ms seconds.
                          </p>
                        </li>
                        <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                          <p>
                            I implemented cypress.io for automated end-to-end tests in our deployment pipeline, enabling us to rapidly detect any regressions or bugs introduced during development. This initiative led to a 50% reduction in time spent by developers on bug fixing, thereby freeing up time to focus on new feature development.
                          </p>
                        </li>
                        <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                          <p>
                            I oversaw the daily upkeep of the Paynow payments gateway and disbursals API, while also offering support to client developers seeking assistance with API integration through the Paynow forum and on-site.
                          </p>
                        </li>
                        <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                          <p>
                            I contributed to daily stand-up meetings and monthly review meetings with developers and stakeholders, where we discussed progress updates, identified problem areas, and devised solutions to enhance our daily operations and overall throughput.
                          </p>
                        </li>
                        <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                          <p>
                            I partnered with the Classifieds marketing team and project manager to enhance Google Analytics tracking and Google Search sitemaps, enabling us to gain valuable insights into user behavior and optimize Google AdWords campaigns managed by the marketing team.
                          </p>
                        </li>
                        <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                          <p>
                          I developed custom WordPress themes for the PPC Zimbabwe branch website (ppc.co.zw), Rainham Park Housing Project (rainhampark.co.zw), and Unified Councils Pension Fund (ucpf.co.zw). I collaborated closely with client representatives throughout the software development lifecycle, from designing and iterating using Figma, to implementing the designs in HTML, CSS, and JavaScript, as well as handling deployment, testing, and post-deployment support.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-shrink-0 before:block before:flex-shrink-0 before:h-20 before:w-8 before:bg-teal-600 before:mr-8">
                  <div>
                    <h2 className='text-xl font-bold'>Full Stack Web Developer</h2>
                    <h3 className='text-xl'>QwikTech Solutions</h3>
                    <div className='flex justify-between w-full italic text-teal-600'>
                      <span>03/2018 - 11/2019</span>
                      {/* <span>Harare, ZW</span> */}
                    </div>
                    <div className='text-gray-500'>
                      Software Development
                    </div>
                    <div>
                      <h4 className='mt-2 italic text-teal-600'>Achievement/Tasks</h4>

                      <ul className='space-y-2'>
                        <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                          <p>
                            Created multiple micro services and the frontend of magetsi.co.zw, a bill payments platform that aims to provide an accessible bill payments platform.
                          </p>
                        </li>
                        <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                          <p>
                            I established an automated deployment pipeline for the four microservices supporting the Magetsi.co.zw backend using Jenkins. This initiative facilitated faster iterations and deployments, thereby improving productivity.
                          </p>
                        </li>
                        <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                          <p>
                            I developed an onmni-channel chatbot that seamlessly integrated with core APIs to enable Magetsi clients to purchase airtime, prepaid tokens, and WiFi bundles using their WhatsApp, Telegram or Twitter. 
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div className="flex flex-shrink-0 before:block before:flex-shrink-0 before:h-20 before:w-8 before:bg-teal-600 before:mr-8">
                  <div>
                    <h2 className='text-xl font-bold'>Backend Java Developer</h2>
                    <h3 className='text-xl'>Quatrohaus Private Limited</h3>
                    <div className='flex justify-between w-full italic text-teal-600'>
                      <span>02/2016 - 07/2017</span>
                      {/* <span>Harare, ZW</span> */}
                    </div>
                    <div className='text-gray-500'>
                      Software Development
                    </div>
                    <div>
                      <h4 className='mt-2 italic text-teal-600'>Achievement/Tasks</h4>

                      <ul className='space-y-2'>
                        <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                          <p>
                            I collaborated with fellow developers to implement an enterprise business process management system for the Civil Aviation Authority of Zimbabwe. The system relied on SpringBoot MicroServices on the backend and Angular on the frontend. During the project, I gained experience with Kamunda BPMN business process modeling systems and JasperSoft for generating various certificates, such as Air Worthiness Certificates
                          </p>
                        </li>
                        <li className='flex before:block before:h-2 before:w-2 before:mt-[0.35rem] before:mr-2 before:bg-teal-600 before:flex-shrink-0 before:rounded-full'>
                          <p>
                            I designed and built multiple admin portals using Laravel with Blade.
                          </p>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className='w-[50%] flex-shrink'>
              <div className='flex justify-between after:block after:h-20 after:w-8 after:bg-transparent after:flex-shrink-0 after:ml-12'>
                <div>
                  <h2 className='text-lg font-black uppercase'>My Skills</h2>
                  <ul className='flex flex-wrap -mx-1'>
                    <li className='mx-1 mt-2 overflow-hidden bg-gray-800 rounded'>
                      <div className='w-full px-3 py-1 bg-gray-800'>
                        <p className='text-white whitespace-nowrap'>
                          PHP Laravel
                        </p>
                      </div>
                    </li>
                    <li className='mx-1 mt-2 overflow-hidden bg-gray-800 rounded'>
                      <div className='w-full px-3 py-1 bg-gray-800'>
                        <p className='text-white whitespace-nowrap'>
                          ReactJS &amp; NextJS
                        </p>
                      </div>
                    </li>
                    <li className='mx-1 mt-2 overflow-hidden bg-gray-800 rounded'>
                      <div className='w-full px-3 py-1 bg-gray-800'>
                        <p className='text-white whitespace-nowrap'>
                          NodeJS
                        </p>
                      </div>
                    </li>
                    <li className='mx-1 mt-2 overflow-hidden bg-gray-800 rounded'>
                      <div className='w-full px-3 py-1 bg-gray-800'>
                        <p className='text-white whitespace-nowrap'>
                          Figma
                        </p>
                      </div>
                    </li>
                    <li className='mx-1 mt-2 overflow-hidden bg-gray-800 rounded'>
                      <div className='w-full px-3 py-1 bg-gray-800'>
                        <p className='text-white whitespace-nowrap'>
                          MySQL
                        </p>
                      </div>
                    </li>
                    <li className='mx-1 mt-2 overflow-hidden bg-gray-800 rounded'>
                      <div className='w-full px-3 py-1 bg-gray-800'>
                        <p className='text-white whitespace-nowrap'>
                          WordPress
                        </p>
                      </div>
                    </li>
                    <li className='mx-1 mt-2 overflow-hidden bg-gray-800 rounded'>
                      <div className='w-full px-3 py-1 bg-gray-800'>
                        <p className='text-white whitespace-nowrap'>
                          Redis
                        </p>
                      </div>
                    </li>
                    <li className='mx-1 mt-2 overflow-hidden bg-gray-800 rounded'>
                      <div className='w-full px-3 py-1 bg-gray-800'>
                        <p className='text-white whitespace-nowrap'>
                          Docker
                        </p>
                      </div>
                    </li>
                    <li className='mx-1 mt-2 overflow-hidden bg-gray-800 rounded'>
                      <div className='w-full px-3 py-1 bg-gray-800'>
                        <p className='text-white whitespace-nowrap'>
                          Jenkins
                        </p>
                      </div>
                    </li>
                    <li className='mx-1 mt-2 overflow-hidden bg-gray-800 rounded'>
                      <div className='w-full px-3 py-1 bg-gray-800'>
                        <p className='text-white whitespace-nowrap'>
                          Linux
                        </p>
                      </div>
                    </li>
                    <li className='mx-1 mt-2 overflow-hidden bg-gray-800 rounded'>
                      <div className='w-full px-3 py-1 bg-gray-800'>
                        <p className='text-white whitespace-nowrap'>
                          Git
                        </p>
                      </div>
                    </li>
                    <li className='mx-1 mt-2 overflow-hidden bg-gray-800 rounded'>
                      <div className='w-full px-3 py-1 bg-gray-800'>
                        <p className='text-white whitespace-nowrap'>
                          ElasticSearch
                        </p>
                      </div>
                    </li>
                    <li className='mx-1 mt-2 overflow-hidden bg-gray-800 rounded'>
                      <div className='w-full px-3 py-1 bg-gray-800'>
                        <p className='text-white whitespace-nowrap'>
                          Google Analytics
                        </p>
                      </div>
                    </li>
                    <li className='mx-1 mt-2 overflow-hidden bg-gray-800 rounded'>
                      <div className='w-full px-3 py-1 bg-gray-800'>
                        <p className='text-white whitespace-nowrap'>
                          Google SEO
                        </p>
                      </div>
                    </li>
                    <li className='mx-1 mt-2 overflow-hidden bg-gray-800 rounded'>
                      <div className='w-full px-3 py-1 bg-gray-800'>
                        <p className='text-white whitespace-nowrap'>
                          Microsoft Clarity
                        </p>
                      </div>
                    </li>
                    <li className='mx-1 mt-2 overflow-hidden bg-gray-800 rounded'>
                      <div className='w-full px-3 py-1 bg-gray-800'>
                        <p className='text-white whitespace-nowrap'>
                          MeiliSearch
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='flex justify-between mt-16 after:block after:h-20 after:w-8 after:bg-transparent after:flex-shrink-0 after:ml-12'>
                <div>
                  <h2 className='text-lg font-black uppercase'>Personal Projects</h2>
                  <div className='mt-2'>
                    <h2 className='text-lg font-semibold'>AdFury - Online Classifieds</h2>
                    <a href="#" alt="Certified Laravel Developer" className='flex italic text-teal-600 before:h-2 before:w-2 before:mt-[0.37rem] before:mr-2 before:rounded-full before:bg-teal-600'>
                      https://adfury.co.zw
                    </a>
                    <p>
                      My take on how the improved version of Classifieds.co.zw could be like. AdFury is a freemium online 
                      classifieds platform that allows sellers to list their products online and boost their adverts through social media influencers
                      and get real value for their money. Built using Laravel + Inertia + ReactJS.
                    </p>
                  </div>
                  <div className='mt-4'>
                    <h2 className='text-lg font-semibold'>Senza - Job Board Website</h2>
                    <a href="#" alt="Certified Laravel Developer" className='flex italic text-teal-600 before:h-2 before:w-2 before:mt-[0.37rem] before:mr-2 before:rounded-full before:bg-teal-600'>
                      https://senza.co.zw
                    </a>
                    <p>
                      Me learning NextJs. Senza is a better Zimbabweans job board website. Built using Laravel + NextJs Frontend
                    </p>
                  </div>
                  <div className='mt-4'>
                    <h2 className='text-lg font-semibold'>Easy Paynow - PHP Library</h2>
                    <a href="#" alt="Certified Laravel Developer" className='flex italic text-teal-600 before:h-2 before:w-2 before:mt-[0.37rem] before:mr-2 before:rounded-full before:bg-teal-600'>
                      https://github.com/berzel/paynow-ecocash-payments
                    </a>
                    <p>
                      A PHP Library that makes it easy for php developers to integrate with the Paynow Payments Gateway API 
                    </p>
                  </div>
                </div>
              </div>

              <div className='flex justify-between mt-16 after:block after:h-20 after:w-8 after:bg-transparent after:flex-shrink-0 after:ml-12'>
                <div>
                  <h2 className='text-lg font-black uppercase'>Education</h2>
                  <div className='mt-2'>
                    <h2 className='text-xl font-bold'>Bsc Computer Science</h2>
                    <h3 className='text-lg'>National University of Science & Technology</h3>
                    <div className='flex justify-between w-full italic text-teal-600'>
                      <span>09/2014 - 10/2022</span>
                      <span>Bulawayo, ZW</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className='flex justify-between mt-16 after:block after:h-20 after:w-8 after:bg-transparent after:flex-shrink-0 after:ml-12'>
                <div>
                  <h2 className='text-lg font-black uppercase'>Certifications</h2>
                  <div className='mt-2'>
                    <h2 className='font-semibold'>Certified Laravel Developer</h2>
                    <a href="#" alt="Certified Laravel Developer" className='flex before:h-2 before:w-2 before:mt-[0.37rem] before:mr-2 before:rounded-full before:bg-teal-600'>
                      https://certification.laravel.com
                    </a>
                  </div>
                  <div className='mt-4'>
                    <h2 className='font-semibold'>Responsive Website Development</h2>
                    <a href="#" alt="Responsive Website Development" className='flex before:h-2 before:w-2 before:mt-[0.37rem] before:mr-2 before:rounded-full before:bg-teal-600'>
                      https://freecodecamp.com
                    </a>
                  </div>
                  <div className='mt-4'>
                    <h2 className='font-semibold'>JavaScript Data Structures</h2>
                    <a href="#" alt="JavaScript Data Structures" className='flex before:h-2 before:w-2 before:mt-[0.37rem] before:mr-2 before:rounded-full before:bg-teal-600'>
                      https://freecodecamp.com
                    </a>
                  </div>
                  <div className='mt-4'>
                    <h2 className='font-semibold'>D3 Data Visualization</h2>
                    <a href="#" alt="D3 Data Visualization" className='flex before:h-2 before:w-2 before:mt-[0.37rem] before:mr-2 before:rounded-full before:bg-teal-600'>
                      https://freecodecamp.com
                    </a>
                  </div>
                  <div className='mt-4'>
                    <h2 className='font-semibold'>Java Programmer</h2>
                    <a href="#" alt="ava Programmer" className='flex before:h-2 before:w-2 before:mt-[0.37rem] before:mr-2 before:rounded-full before:bg-teal-600'>
                      https://sololearn.com
                    </a>
                  </div>
                  <div className='mt-4'>
                    <h2 className='font-semibold'>Introduction to MySQL</h2>
                    <a href="#" alt="Introduction to MySQL" className='flex before:h-2 before:w-2 before:mt-[0.37rem] before:mr-2 before:rounded-full before:bg-teal-600'>
                      https://sololearn.com
                    </a>
                  </div>
                </div>
              </div>

              <div className='flex justify-between mt-16 after:block after:h-20 after:w-8 after:bg-transparent after:flex-shrink-0 after:ml-12'>
                <div className='w-full'>
                  <h2 className='text-lg font-black uppercase'>Languages</h2>
                  <div className='flex items-center mt-2 space-x-4'>
                    <h2 className='font-semibold w-[40%] flex-shrink-0'>
                      English (UK) 
                    </h2>
                    <ul className='flex space-x-4'>
                        <li className='w-4 h-4 border-2 rounded-full border-slate-800 bg-slate-800'></li>
                        <li className='w-4 h-4 border-2 rounded-full border-slate-800 bg-slate-800'></li>
                        <li className='w-4 h-4 border-2 rounded-full border-slate-800 bg-slate-800'></li>
                        <li className='w-4 h-4 border-2 rounded-full border-slate-800 bg-slate-800'></li>
                        <li className='w-4 h-4 border-2 rounded-full border-slate-800 bg-slate-800'></li>
                      </ul>
                  </div>
                  <div className='flex items-center mt-4 space-x-4'>
                    <h2 className='font-semibold w-[40%] flex-shrink-0'>
                      Zulu / Ndebele
                    </h2>
                    <ul className='flex space-x-4'>
                        <li className='w-4 h-4 border-2 rounded-full border-slate-800 bg-slate-800'></li>
                        <li className='w-4 h-4 border-2 rounded-full border-slate-800 bg-slate-800'></li>
                        <li className='w-4 h-4 border-2 rounded-full border-slate-800 bg-slate-800'></li>
                        <li className='w-4 h-4 border-2 rounded-full border-slate-800 bg-slate-800'></li>
                        <li className='w-4 h-4 border-2 rounded-full border-slate-800'></li>
                      </ul>
                  </div>
                  <div className='flex items-center mt-4 space-x-4'>
                    <h2 className='font-semibold w-[40%] flex-shrink-0'>
                      Shona
                    </h2>
                    <ul className='flex space-x-4'>
                        <li className='w-4 h-4 border-2 rounded-full border-slate-800 bg-slate-800'></li>
                        <li className='w-4 h-4 border-2 rounded-full border-slate-800 bg-slate-800'></li>
                        <li className='w-4 h-4 border-2 rounded-full border-slate-800 bg-slate-800'></li>
                        <li className='w-4 h-4 border-2 rounded-full border-slate-800 bg-slate-800'></li>
                        <li className='w-4 h-4 border-2 rounded-full border-slate-800 bg-slate-800'></li>
                      </ul>
                  </div>
                </div>
              </div>

              <div className='flex justify-between mt-16 after:block after:h-20 after:w-8 after:bg-transparent after:flex-shrink-0 after:ml-12'>
                <div>
                  <h2 className='text-lg font-black uppercase'>Interests &amp; Activities</h2>
                  <div className='flex flex-wrap -mx-1'>
                    <div className='px-2 py-1 mx-1 mt-2 border rounded border-slate-700'>Chess</div>
                    <div className='px-2 py-1 mx-1 mt-2 border rounded border-slate-700'>Reading</div>
                    <div className='px-2 py-1 mx-1 mt-2 border rounded border-slate-700'>Biking</div>
                    <div className='px-2 py-1 mx-1 mt-2 border rounded border-slate-700'>Cooking</div>
                    <div className='px-2 py-1 mx-1 mt-2 border rounded border-slate-700'>Online Gaming</div>
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


// CONVERT TO PDF: https://www.ilovepdf.com/html-to-pdf