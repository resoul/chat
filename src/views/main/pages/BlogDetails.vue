<script>
import { useThemeStore } from "@/components/theme/theme.js";

export default {
  setup() {
    const theme = useThemeStore();
    theme.setMainClass('main-content w-full place-items-center px-[var(--margin-x)] pb-12')
  }
}
</script>

<template>
  <div class="grid grid-cols-12 lg:gap-6">
    <div class="col-span-12 pt-6 lg:col-span-8 lg:pb-6">
      <div class="card p-4 lg:p-6">
        <!-- Author -->
        <div>
          <div class="flex items-center justify-between">
            <div class="flex items-center space-x-3">
              <div id="popover-profile" class="flex">
                <div class="avatar popper-ref size-12">
                  <img
                      class="mask is-squircle"
                      src="images/200x200.png"
                      alt="avatar"
                  />
                </div>
                <div class="popper-root">
                  <div class="popper-box">
                    <div
                        class="flex w-48 flex-col items-center rounded-md border border-slate-150 bg-white p-3 text-center dark:border-navy-600 dark:bg-navy-700"
                    >
                      <div class="avatar size-16">
                        <img
                            class="rounded-full"
                            src="images/200x200.png"
                            alt="avatar"
                        />
                      </div>
                      <p
                          class="mt-2 font-medium tracking-wide text-slate-700 dark:text-navy-100"
                      >
                        Travis Fuller
                      </p>
                      <a
                          href="#"
                          class="font-inter text-xs tracking-wide hover:text-primary focus:text-primary dark:hover:text-accent-light dark:focus:text-accent-light"
                      >@travisfuller
                      </a>
                      <button
                          class="btn mt-4 h-6 rounded-full bg-primary px-4 text-xs font-medium text-white hover:bg-primary-focus focus:bg-primary-focus active:bg-primary-focus/90 dark:bg-accent dark:hover:bg-accent-focus dark:focus:bg-accent-focus dark:active:bg-accent/90"
                      >
                        Follow
                      </button>
                    </div>
                    <div class="size-4" data-popper-arrow>
                      <svg
                          viewBox="0 0 16 9"
                          xmlns="http://www.w3.org/2000/svg"
                          class="absolute size-4"
                          fill="currentColor"
                      >
                        <path
                            class="text-slate-150 dark:text-navy-600"
                            d="M1.5 8.357s-.48.624 2.754-4.779C5.583 1.35 6.796.01 8 0c1.204-.009 2.417 1.33 3.76 3.578 3.253 5.43 2.74 4.78 2.74 4.78h-13z"
                        />
                        <path
                            class="text-white dark:text-navy-700"
                            d="M0 9s1.796-.017 4.67-4.648C5.853 2.442 6.93 1.293 8 1.286c1.07-.008 2.147 1.14 3.343 3.066C14.233 9.006 15.999 9 15.999 9H0z"
                        />
                      </svg>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a
                    href="#"
                    class="font-medium text-slate-700 line-clamp-1 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                >
                  Travis Fuller
                </a>
                <div class="mt-1.5 flex items-center text-xs">
                  <span class="line-clamp-1">Jun 26</span>
                  <div
                      class="mx-2 my-0.5 w-px self-stretch bg-white/20"
                  ></div>
                  <p class="shrink-0">8 min red</p>
                </div>
              </div>
            </div>

            <div class="flex space-x-3">
              <div class="hidden sm:flex">
                <button
                    class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        stroke-width="2"
                        d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                    ></path>
                  </svg>
                </button>
                <button
                    class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                >
                  <i class="fab fa-twitter text-base"></i>
                </button>
                <button
                    class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                >
                  <i class="fab fa-linkedin text-base"></i>
                </button>
                <button
                    class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                >
                  <i class="fab fa-instagram text-base"></i>
                </button>
                <button
                    class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                >
                  <i class="fab fa-facebook text-base"></i>
                </button>
              </div>
              <div id="blogActions" class="inline-flex">
                <button
                    class="popper-ref btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                >
                  <svg
                      xmlns="http://www.w3.org/2000/svg"
                      class="size-4.5"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                      stroke-width="2"
                  >
                    <path
                        stroke-linecap="round"
                        stroke-linejoin="round"
                        d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                    />
                  </svg>
                </button>

                <div class="popper-root">
                  <div
                      class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
                  >
                    <ul>
                      <li>
                        <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                        >Action</a
                        >
                      </li>
                      <li>
                        <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                        >Another Action</a
                        >
                      </li>
                      <li>
                        <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                        >Something else</a
                        >
                      </li>
                    </ul>
                    <div
                        class="my-1 h-px bg-slate-150 dark:bg-navy-500"
                    ></div>
                    <ul>
                      <li>
                        <a
                            href="#"
                            class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                        >Separated Link</a
                        >
                      </li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="mt-6 flex items-center space-x-3 sm:hidden">
            <button
                class="btn space-x-2 rounded-full border border-slate-300 px-4 text-xs+ font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
            >
              <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="size-4.5 text-slate-400 dark:text-navy-300"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
              >
                <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                />
              </svg>

              <span> Save</span>
            </button>
            <div class="flex">
              <button
                  class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <i class="fab fa-twitter text-base"></i>
              </button>
              <button
                  class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <i class="fab fa-linkedin text-base"></i>
              </button>
              <button
                  class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <i class="fab fa-instagram text-base"></i>
              </button>
              <button
                  class="btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
              >
                <i class="fab fa-facebook text-base"></i>
              </button>
            </div>
          </div>
        </div>

        <!-- Blog Post -->
        <div
            class="mt-6 font-inter text-base text-slate-600 dark:text-navy-200"
        >
          <h1
              class="text-xl font-medium text-slate-900 dark:text-navy-50 lg:text-2xl"
          >
            313 Pattern and Color ideas
          </h1>
          <h3 class="mt-1">
            Spurred on by my observations at work, I have come up with a
            list of things to avoid as a doctor in a hospital setting
            (especially for interns and medical students):
          </h3>
          <img
              class="mt-5 h-80 w-full rounded-lg object-cover object-center"
              src="images/800x600.png"
              alt="image"
          />
          <p
              class="mt-1 text-center text-xs+ text-slate-400 dark:text-navy-300"
          >
            <span> Photo by </span>
            <a href="#" class="underline">Unsplash</a>
          </p>
          <br />
          <p>
            Major changes have recently occured in my life, both
            personally and professionally. We're approaching five years
            since the inception of this blog, and going back to read the
            posts from May '04 is quite the experience. I suppose its what
            diaries and journals are for, the chance to go back and read
            out your thoughts and ideas from another time. Kind of like
            mental time travel.
          </p>
          <br />
          <p>
            One thing is for sure, I am not who I was then. In fact, I am
            not who I was last year or the year before that. I may have
            some (we shed and create a lot of cells frequently) of the
            bodily composition of that person but we are definitely on
            different wavelengths.
          </p>
          <br />
          <p>
            This whole blogging business started off as a documentation of
            odd and quirky ideas I might have. I had a lot of time on my
            hands back then, hence the frequency of the posts. With time,
            the posts have decreased in number but have also slightly
            sharpened in focus. They may still be random and don't
            generally adhere to one unified theme, but this thing was
            meant to be disjointed and arbitrary anyway.
          </p>
          <br />
          <div
              class="border-l-4 border-slate-300 pl-4 dark:border-navy-400"
          >
            <p
                class="font-medium italic text-slate-800 dark:text-navy-100"
            >
              Why is Tailwind removing the default styles on my h1
              elements? How do I disable this? What do you mean I lose all
              the other base styles too?
            </p>
          </div>
          <br />
          <p>
            One thing is for sure, I am not who I was then. In fact, I am
            not who I was last year or the year before that. I may have
            some (we shed and create a lot of cells frequently) of the
            bodily composition of that person but we are definitely on
            different wavelengths.
          </p>
          <br />
          <p>
            This whole blogging business started off as a documentation of
            odd and quirky ideas I might have. I had a lot of time on my
            hands back then, hence the frequency of the posts. With time,
            the posts have decreased in number but have also slightly
            sharpened in focus. They may still be random and don't
            generally adhere to one unified theme, but this thing was
            meant to be disjointed and arbitrary anyway.
          </p>
          <br />
          <ul
              class="list-inside list-disc font-medium text-slate-800 dark:text-navy-100"
          >
            <li>
              Now this is a story all about how, my life got
              flipped-turned upside down
            </li>
            <li>And I'd like to take a minute just sit right there</li>
            <li>
              I'll tell you how I became the prince of a town called
              Bel-Air
            </li>
          </ul>
          <br />
          <p>
            Major changes have recently occured in my life, both
            personally and professionally. We're approaching five years
            since the inception of this blog, and going back to read the
            posts from May '04 is quite the experience. I suppose its what
            diaries and journals are for, the chance to go back and read
            out your thoughts and ideas from another time. Kind of like
            mental time travel.
          </p>
        </div>

        <!-- Footer Blog Post -->
        <div class="mt-5 flex space-x-3">
          <button
              class="btn space-x-2 rounded-full border border-slate-300 px-4 text-xs+ font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5 text-slate-400 dark:text-navy-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M6.633 10.5c.806 0 1.533-.446 2.031-1.08a9.041 9.041 0 012.861-2.4c.723-.384 1.35-.956 1.653-1.715a4.498 4.498 0 00.322-1.672V3a.75.75 0 01.75-.75A2.25 2.25 0 0116.5 4.5c0 1.152-.26 2.243-.723 3.218-.266.558.107 1.282.725 1.282h3.126c1.026 0 1.945.694 2.054 1.715.045.422.068.85.068 1.285a11.95 11.95 0 01-2.649 7.521c-.388.482-.987.729-1.605.729H13.48c-.483 0-.964-.078-1.423-.23l-3.114-1.04a4.501 4.501 0 00-1.423-.23H5.904M14.25 9h2.25M5.904 18.75c.083.205.173.405.27.602.197.4-.078.898-.523.898h-.908c-.889 0-1.713-.518-1.972-1.368a12 12 0 01-.521-3.507c0-1.553.295-3.036.831-4.398C3.387 10.203 4.167 9.75 5 9.75h1.053c.472 0 .745.556.5.96a8.958 8.958 0 00-1.302 4.665c0 1.194.232 2.333.654 3.375z"
              />
            </svg>

            <span> 235</span>
          </button>
          <button
              class="btn space-x-2 rounded-full border border-slate-300 px-4 text-xs+ font-medium text-slate-700 hover:bg-slate-150 focus:bg-slate-150 active:bg-slate-150/80 dark:border-navy-450 dark:text-navy-100 dark:hover:bg-navy-500 dark:focus:bg-navy-500 dark:active:bg-navy-500/90"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-4.5 text-slate-400 dark:text-navy-300"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M12 20.25c4.97 0 9-3.694 9-8.25s-4.03-8.25-9-8.25S3 7.444 3 12c0 2.104.859 4.023 2.273 5.48.432.447.74 1.04.586 1.641a4.483 4.483 0 01-.923 1.785A5.969 5.969 0 006 21c1.282 0 2.47-.402 3.445-1.087.81.22 1.668.337 2.555.337z"
              />
            </svg>

            <span> 49</span>
          </button>
        </div>
      </div>

      <div class="mt-5">
        <div class="flex items-center justify-between">
          <p
              class="text-lg font-medium text-slate-800 dark:text-navy-100"
          >
            Recent Articles
          </p>
          <a
              href="#"
              class="border-b border-dotted border-current pb-0.5 text-xs+ font-medium text-primary outline-none transition-colors duration-300 hover:text-primary/70 focus:text-primary/70 dark:text-accent-light dark:hover:text-accent-light/70 dark:focus:text-accent-light/70"
          >View All</a
          >
        </div>
        <div
            class="mt-3 grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-5 lg:grid-cols-1 lg:gap-6"
        >
          <div class="card lg:flex-row">
            <img
                class="h-48 w-full shrink-0 rounded-t-lg bg-cover bg-center object-cover object-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l-lg"
                src="images/800x600.png"
                alt="image"
            />
            <div class="flex w-full grow flex-col px-4 py-3 sm:px-5">
              <div class="flex items-center justify-between">
                <a class="text-xs+ text-info" href="#">Frameworks</a>
                <div class="-mr-1.5 flex space-x-1">
                  <button
                      class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-4.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                  </button>

                  <div id="cardMenu1" class="inline-flex">
                    <button
                        class="popper-ref btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="size-4.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                      </svg>
                    </button>

                    <div class="popper-root">
                      <div
                          class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
                      >
                        <ul>
                          <li>
                            <a
                                href="#"
                                class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            >Action</a
                            >
                          </li>
                          <li>
                            <a
                                href="#"
                                class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            >Another Action</a
                            >
                          </li>
                          <li>
                            <a
                                href="#"
                                class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            >Something else</a
                            >
                          </li>
                        </ul>
                        <div
                            class="my-1 h-px bg-slate-150 dark:bg-navy-500"
                        ></div>
                        <ul>
                          <li>
                            <a
                                href="#"
                                class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            >Separated Link</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a
                    href="#"
                    class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                >What is Tailwind CSS?</a
                >
              </div>
              <p class="mt-1 line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet, provident quasi recusandae repudiandae rerum
                temporibus!
              </p>
              <div class="grow">
                <div class="mt-2 flex items-center text-xs">
                  <a
                      href="#"
                      class="flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100"
                  >
                    <div class="avatar size-6">
                      <img
                          class="rounded-full"
                          src="images/200x200.png"
                          alt="avatar"
                      />
                    </div>
                    <span class="line-clamp-1">John Doe</span>
                  </a>
                  <div
                      class="mx-3 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                  ></div>
                  <span class="shrink-0 text-slate-400 dark:text-navy-300"
                  >June 23, 2021
                        </span>
                </div>
              </div>
              <div class="mt-1 flex justify-end">
                <a
                    href="#"
                    class="btn px-2.5 py-1.5 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                >
                  READ ARTICLE
                </a>
              </div>
            </div>
          </div>
          <div class="card lg:flex-row">
            <img
                class="h-48 w-full shrink-0 rounded-t-lg bg-cover bg-center object-cover object-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l-lg"
                src="images/800x600.png"
                alt="image"
            />
            <div class="flex w-full grow flex-col px-4 py-3 sm:px-5">
              <div class="flex items-center justify-between">
                <a class="text-xs+ text-info" href="#">Frameworks</a>
                <div class="-mr-1.5 flex space-x-1">
                  <button
                      class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-4.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                  </button>

                  <div id="cardMenu2" class="inline-flex">
                    <button
                        class="popper-ref btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="size-4.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                      </svg>
                    </button>

                    <div class="popper-root">
                      <div
                          class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
                      >
                        <ul>
                          <li>
                            <a
                                href="#"
                                class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            >Action</a
                            >
                          </li>
                          <li>
                            <a
                                href="#"
                                class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            >Another Action</a
                            >
                          </li>
                          <li>
                            <a
                                href="#"
                                class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            >Something else</a
                            >
                          </li>
                        </ul>
                        <div
                            class="my-1 h-px bg-slate-150 dark:bg-navy-500"
                        ></div>
                        <ul>
                          <li>
                            <a
                                href="#"
                                class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            >Separated Link</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a
                    href="#"
                    class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                >Tailwind CSS Card Example
                </a>
              </div>
              <p class="mt-1 line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Est repellat nisi corrupti. Lorem, ipsum.
              </p>
              <div class="grow">
                <div class="mt-2 flex items-center text-xs">
                  <a
                      href="#"
                      class="flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100"
                  >
                    <div class="avatar size-6">
                      <img
                          class="rounded-full"
                          src="images/200x200.png"
                          alt="avatar"
                      />
                    </div>
                    <span class="line-clamp-1">Konnor Guzman </span>
                  </a>
                  <div
                      class="mx-3 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                  ></div>
                  <span class="shrink-0 text-slate-400 dark:text-navy-300"
                  >May 25, 2021
                        </span>
                </div>
              </div>
              <div class="mt-1 flex justify-end">
                <a
                    href="#"
                    class="btn px-2.5 py-1.5 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                >
                  READ ARTICLE
                </a>
              </div>
            </div>
          </div>
          <div class="card lg:flex-row">
            <img
                class="h-48 w-full shrink-0 rounded-t-lg bg-cover bg-center object-cover object-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l-lg"
                src="images/800x600.png"
                alt="image"
            />
            <div class="flex w-full grow flex-col px-4 py-3 sm:px-5">
              <div class="flex items-center justify-between">
                <a class="text-xs+ text-info" href="#"
                >Programming Language</a
                >
                <div class="-mr-1.5 flex space-x-1">
                  <button
                      class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-4.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                  </button>

                  <div id="cardMenu3" class="inline-flex">
                    <button
                        class="popper-ref btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="size-4.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                      </svg>
                    </button>

                    <div class="popper-root">
                      <div
                          class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
                      >
                        <ul>
                          <li>
                            <a
                                href="#"
                                class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            >Action</a
                            >
                          </li>
                          <li>
                            <a
                                href="#"
                                class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            >Another Action</a
                            >
                          </li>
                          <li>
                            <a
                                href="#"
                                class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            >Something else</a
                            >
                          </li>
                        </ul>
                        <div
                            class="my-1 h-px bg-slate-150 dark:bg-navy-500"
                        ></div>
                        <ul>
                          <li>
                            <a
                                href="#"
                                class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            >Separated Link</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a
                    href="#"
                    class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                >What is PHP?
                </a>
              </div>
              <p class="mt-1 line-clamp-3">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Eveniet, provident quasi recusandae repudiandae rerum
                temporibus!
              </p>
              <div class="grow">
                <div class="mt-2 flex items-center text-xs">
                  <a
                      href="#"
                      class="flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100"
                  >
                    <div class="avatar size-6">
                      <img
                          class="rounded-full"
                          src="images/200x200.png"
                          alt="avatar"
                      />
                    </div>
                    <span class="line-clamp-1">Travis Fuller </span>
                  </a>
                  <div
                      class="mx-3 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                  ></div>
                  <span class="shrink-0 text-slate-400 dark:text-navy-300"
                  >March 14, 2022
                        </span>
                </div>
              </div>
              <div class="mt-1 flex justify-end">
                <a
                    href="#"
                    class="btn px-2.5 py-1.5 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                >
                  READ ARTICLE
                </a>
              </div>
            </div>
          </div>
          <div class="card lg:flex-row">
            <img
                class="h-48 w-full shrink-0 rounded-t-lg bg-cover bg-center object-cover object-center lg:h-auto lg:w-48 lg:rounded-t-none lg:rounded-l-lg"
                src="images/800x600.png"
                alt="image"
            />
            <div class="flex w-full grow flex-col px-4 py-3 sm:px-5">
              <div class="flex items-center justify-between">
                <a class="text-xs+ text-info" href="#">UI/UX</a>
                <div class="-mr-1.5 flex space-x-1">
                  <button
                      class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-4.5"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          stroke-width="2"
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      />
                    </svg>
                  </button>

                  <div id="cardMenu4" class="inline-flex">
                    <button
                        class="popper-ref btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                    >
                      <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="size-4.5"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          stroke-width="2"
                      >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                        />
                      </svg>
                    </button>

                    <div class="popper-root">
                      <div
                          class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700"
                      >
                        <ul>
                          <li>
                            <a
                                href="#"
                                class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            >Action</a
                            >
                          </li>
                          <li>
                            <a
                                href="#"
                                class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            >Another Action</a
                            >
                          </li>
                          <li>
                            <a
                                href="#"
                                class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            >Something else</a
                            >
                          </li>
                        </ul>
                        <div
                            class="my-1 h-px bg-slate-150 dark:bg-navy-500"
                        ></div>
                        <ul>
                          <li>
                            <a
                                href="#"
                                class="flex h-8 items-center px-3 pr-8 font-medium tracking-wide outline-none transition-all hover:bg-slate-100 hover:text-slate-800 focus:bg-slate-100 focus:text-slate-800 dark:hover:bg-navy-600 dark:hover:text-navy-100 dark:focus:bg-navy-600 dark:focus:text-navy-100"
                            >Separated Link</a
                            >
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <a
                    href="#"
                    class="text-lg font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                >Top Design Systems
                </a>
              </div>
              <p class="mt-1 line-clamp-3">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Quidem quibusdam, ipsam in eveniet quod voluptatum!
              </p>
              <div class="grow">
                <div class="mt-2 flex items-center text-xs">
                  <a
                      href="#"
                      class="flex items-center space-x-2 hover:text-slate-800 dark:hover:text-navy-100"
                  >
                    <div class="avatar size-6">
                      <img
                          class="rounded-full"
                          src="images/200x200.png"
                          alt="avatar"
                      />
                    </div>
                    <span class="line-clamp-1">Alfredo Elliott </span>
                  </a>
                  <div
                      class="mx-3 my-1 w-px self-stretch bg-slate-200 dark:bg-navy-500"
                  ></div>
                  <span class="shrink-0 text-slate-400 dark:text-navy-300"
                  >March 14, 2022
                        </span>
                </div>
              </div>
              <div class="mt-1 flex justify-end">
                <a
                    href="#"
                    class="btn px-2.5 py-1.5 font-medium text-primary hover:bg-primary/20 focus:bg-primary/20 active:bg-primary/25 dark:text-accent-light dark:hover:bg-accent-light/20 dark:focus:bg-accent-light/20 dark:active:bg-accent-light/25"
                >
                  READ ARTICLE
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div
        class="col-span-12 py-6 lg:sticky lg:bottom-0 lg:col-span-4 lg:self-end"
    >
      <div class="card">
        <div class="h-24 rounded-t-lg bg-primary dark:bg-accent">
          <img
              class="h-full w-full rounded-t-lg object-cover object-center"
              src="images/800x600.png"
              alt="image"
          />
        </div>
        <div class="px-4 pt-2 pb-5 sm:px-5">
          <div class="avatar -mt-12 size-20">
            <img
                class="rounded-full border-2 border-white dark:border-navy-700"
                src="images/200x200.png"
                alt="avatar"
            />
          </div>
          <h3
              class="pt-2 text-lg font-medium text-slate-700 dark:text-navy-100"
          >
            Travis Fuller
          </h3>
          <p class="text-xs+ text-slate-400 dark:text-navy-300">
            1,596 followers
          </p>
          <p class="mt-3">
            Professional product designer and amateur cyclist living in
            New York City, USA.
          </p>
          <div class="mt-5 flex space-x-1">
            <button
                class="btn h-7 rounded-full bg-slate-150 px-3 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
            >
              Follow
            </button>
            <button
                class="btn size-7 rounded-full bg-slate-150 px-0 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
            >
              <i class="far fa-envelope"></i>
            </button>
            <button
                class="btn size-7 rounded-full bg-slate-150 px-0 text-xs+ font-medium text-slate-800 hover:bg-slate-200 focus:bg-slate-200 active:bg-slate-200/80 dark:bg-navy-500 dark:text-navy-50 dark:hover:bg-navy-450 dark:focus:bg-navy-450 dark:active:bg-navy-450/90"
            >
              <i class="fa fa-ellipsis-h"></i>
            </button>
          </div>
        </div>
      </div>
      <div class="mt-5">
        <p
            class="border-b border-slate-200 pb-2 text-base text-slate-800 dark:border-navy-600 dark:text-navy-100"
        >
          More from Travis Fuller
        </p>
        <div
            class="mt-3 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-1"
        >
          <div class="flex justify-between space-x-2">
            <div class="flex flex-1 flex-col justify-between">
              <div>
                <p class="text-xs font-medium line-clamp-1">06 Nov</p>
                <div
                    class="mt-1 text-slate-800 line-clamp-3 dark:text-navy-100"
                >
                  <a
                      href="#"
                      class="font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                  >What is Tailwind CSS?</a
                  >
                </div>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-xs font-medium line-clamp-1">2 min read</p>

                <div class="flex">
                  <button
                      class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      ></path>
                    </svg>
                  </button>
                  <button
                      class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <img
                src="images/800x600.png"
                class="size-24 rounded-lg object-cover object-center"
                alt="image"
            />
          </div>
          <div class="flex justify-between space-x-2">
            <div class="flex flex-1 flex-col justify-between">
              <div>
                <p class="text-xs font-medium line-clamp-1">13 Oct</p>
                <div
                    class="mt-1 text-slate-800 line-clamp-3 dark:text-navy-100"
                >
                  <a
                      href="#"
                      class="font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                  >Top Design Systems</a
                  >
                </div>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-xs font-medium line-clamp-1">6 min read</p>

                <div class="flex">
                  <button
                      class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      ></path>
                    </svg>
                  </button>
                  <button
                      class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <img
                src="images/800x600.png"
                class="size-24 rounded-lg object-cover object-center"
                alt="image"
            />
          </div>
          <div class="flex justify-between space-x-2">
            <div class="flex flex-1 flex-col justify-between">
              <div>
                <p class="text-xs font-medium line-clamp-1">22 Oct</p>
                <div
                    class="mt-1 text-slate-800 line-clamp-3 dark:text-navy-100"
                >
                  <a
                      href="#"
                      class="font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                  >10 Tips for Making a Good Camera Even Better</a
                  >
                </div>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-xs font-medium line-clamp-1">8 min read</p>

                <div class="flex">
                  <button
                      class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      ></path>
                    </svg>
                  </button>
                  <button
                      class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <img
                src="images/800x600.png"
                class="size-24 rounded-lg object-cover object-center"
                alt="image"
            />
          </div>
          <div class="flex justify-between space-x-2">
            <div class="flex flex-1 flex-col justify-between">
              <div>
                <p class="text-xs font-medium line-clamp-1">01 Nov</p>
                <div
                    class="mt-1 text-slate-800 line-clamp-3 dark:text-navy-100"
                >
                  <a
                      href="#"
                      class="font-medium text-slate-700 hover:text-primary focus:text-primary dark:text-navy-100 dark:hover:text-accent-light dark:focus:text-accent-light"
                  >25 Surprising Facts About Chair</a
                  >
                </div>
              </div>
              <div class="flex items-center justify-between">
                <p class="text-xs font-medium line-clamp-1">
                  14 min read
                </p>

                <div class="flex">
                  <button
                      class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
                      ></path>
                    </svg>
                  </button>
                  <button
                      class="btn size-7 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
                  >
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="size-4"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        stroke-width="2"
                    >
                      <path
                          stroke-linecap="round"
                          stroke-linejoin="round"
                          d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
                      ></path>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <img
                src="images/800x600.png"
                class="size-24 rounded-lg object-cover object-center"
                alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>