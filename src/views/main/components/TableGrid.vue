<script>
import Components from "@/views/main/components/Components.vue";
import * as Gridjs from "gridjs";
import Popper from "@/components/popper.js";
export default {
  extends: Components,
  mounted() {
    const dropdownConfig = {
      placement: "bottom-start",
      modifiers: [
        {
          name: "offset",
          options: {
            offset: [0, 4],
          },
        },
      ],
    };

    new Popper(
        this.$refs["dropdown-wrapper1"],
        this.$refs["dropdown-wrapper1-ref"],
        this.$refs["dropdown-wrapper1-root"],
        dropdownConfig
    );

    new Popper(
        this.$refs["dropdown-wrapper2"],
        this.$refs["dropdown-wrapper2-ref"],
        this.$refs["dropdown-wrapper2-root"],
        dropdownConfig
    );

    new Popper(
        this.$refs["dropdown-wrapper3"],
        this.$refs["dropdown-wrapper3-ref"],
        this.$refs["dropdown-wrapper3-root"],
        dropdownConfig
    );

    new Popper(
        this.$refs["dropdown-wrapper4"],
        this.$refs["dropdown-wrapper4-ref"],
        this.$refs["dropdown-wrapper4-root"],
        dropdownConfig
    );

    // Grid JS form HTML Table
    const gridTable1 = document.querySelector("#grid-table-1");
    const gridTableRef1 = gridTable1.querySelector("[data-grid-ref]");
    const gridTableWrapper1 = gridTable1.querySelector("[data-grid-wrapper]");

    gridTable1._table = new Gridjs.Grid({
      from: gridTableRef1,
      sort: true,
      search: true,
    }).render(gridTableWrapper1);

    // Grid JS from JSON data
    const products = [
      {
        id: 59,
        title: "Spring and summershoes",
        price: 20,
        quantity: 3,
        total: 60,
        discountPercentage: 8.71,
        discountedPrice: 55,
      },
      {
        id: 88,
        title: "TC Reusable Silicone Magic",
        price: 29,
        quantity: 2,
        total: 58,
        discountPercentage: 3.19,
        discountedPrice: 56,
      },
      {
        id: 18,
        title: "Oil Free Moisturizer 100ml",
        price: 40,
        quantity: 2,
        total: 80,
        discountPercentage: 13.1,
        discountedPrice: 70,
      },
      {
        id: 95,
        title: "Wholesale cargo lashing Belt",
        price: 930,
        quantity: 1,
        total: 930,
        discountPercentage: 17.67,
        discountedPrice: 766,
      },
      {
        id: 39,
        title: "Women Sweaters Wool",
        price: 600,
        quantity: 2,
        total: 1200,
        discountPercentage: 17.2,
        discountedPrice: 994,
      },
      {
        id: 96,
        title: "lighting ceiling kitchen",
        price: 30,
        quantity: 2,
        total: 60,
        discountPercentage: 14.89,
        discountedPrice: 51,
      },
      {
        id: 91,
        title: "Black Motorbike",
        price: 569,
        quantity: 3,
        total: 1707,
        discountPercentage: 13.63,
        discountedPrice: 1474,
      },
      {
        id: 9,
        title: "Infinix INBOOK",
        price: 1099,
        quantity: 1,
        total: 1099,
        discountPercentage: 11.83,
        discountedPrice: 969,
      },
      {
        id: 16,
        title: "Hyaluronic Acid Serum",
        price: 19,
        quantity: 1,
        total: 19,
        discountPercentage: 13.31,
        discountedPrice: 16,
      },
      {
        id: 54,
        title: "Pubg Printed Graphic T-Shirt",
        price: 46,
        quantity: 3,
        total: 138,
        discountPercentage: 16.44,
        discountedPrice: 115,
      },
    ];
    const gridTable2 = document.querySelector("#grid-table-2");

    gridTable2._table = new Gridjs.Grid({
      data: products,
      sort: true,
      search: true,
    }).render(gridTable2);

    // GridJS Async Table
    const gridConfig3 = {
      pagination: true,
      search: {
        server: {
          url: (prev, keyword) => `${prev}?search=${keyword}`,
        },
      },
      sort: true,
      columns: ["Title", "Director", "Producer"],
      server: {
        url: "https://swapi.py4e.com/api/films/",
        then: (data) =>
            data.results.map((movie) => [
              movie.title,
              movie.director,
              movie.producer,
            ]),
      },
    };
    const gridTable3 = document.querySelector("#grid-table-3");

    gridTable3._table = new Gridjs.Grid(gridConfig3).render(gridTable3);

    const gridTable4 = document.querySelector("#grid-table-4");

    const gridConfig4 = {
      columns: [
        {
          id: "id",
          name: "ID",
          formatter: (cell) => Gridjs.html(`<span class="mx-2">${cell}</span>`),
        },
        {
          id: "name",
          name: "Name",
          formatter: (cell) =>
              Gridjs.html(
                  `<span class="text-slate-700 dark:text-navy-100 font-medium">${cell}</span>`
              ),
        },
        {
          id: "avatar_url",
          name: "Avatar",
          sort: false,
          formatter: (cell) =>
              Gridjs.html(`<div class="avatar flex">
                                  <img class="rounded-full" src="${cell}" alt="avatar">
                              </div>`),
        },
        {
          id: "email",
          name: "Email",
        },
        {
          id: "phone",
          name: "Phone Number",
        },
        {
          name: "Actions",
          sort: false,
          formatter: () =>
              Gridjs.html(`<div class="flex justify-center space-x-2">
                          <button onclick="$notification({ text: 'Item remove action', variant: 'warning' })" class="btn h-8 w-8 p-0 text-info hover:bg-info/20 focus:bg-info/20 active:bg-info/25">
                              <i class="fa fa-edit"></i>
                          </button>
                          <button onclick="$notification({ text: 'Item edit action', variant: 'info' })" class="btn h-8 w-8 p-0 text-error hover:bg-error/20 focus:bg-error/20 active:bg-error/25">
                              <i class="fa fa-trash-alt"></i>
                          </button>
                      </div>`),
        },
      ],
      data: [
        {
          id: "1",
          name: "John",
          email: "john@example.com",
          phone: "(01) 22 888 4444",
          avatar_url: "images/200x200.png",
        },
        {
          id: "2",
          name: "Doe",
          email: "thedoe@example.com",
          phone: "(33) 22 888 4444",
          avatar_url: "images/200x200.png",
        },
        {
          id: "3",
          name: "Nancy",
          email: "nancy@example.com",
          phone: "(21) 33 888 4444",
          avatar_url: "images/200x200.png",
        },
        {
          id: "4",
          name: "Clarke",
          email: "clarke@example.com",
          phone: "(44) 33 888 4444",
          avatar_url: "images/200x200.png",
        },
        {
          id: "5",
          name: "Robert",
          email: "robert@example.com",
          phone: "(27) 63 688 6444",
          avatar_url: "images/200x200.png",
        },
        {
          id: "6",
          name: "Tom",
          email: "thetom@example.com",
          phone: "(57) 63 688 6444",
          avatar_url: "images/200x200.png",
        },
        {
          id: "7",
          name: "Nolan",
          email: "Nolan@example.com",
          phone: "(27) 63 688 6444",
          avatar_url: "images/200x200.png",
        },
        {
          id: "8",
          name: "Adam",
          email: "Adam@example.com",
          phone: "(12) 22 888 4444",
          avatar_url: "images/200x200.png",
        },
        {
          id: "9",
          name: "Glen",
          email: "Glen@example.com",
          phone: "(74) 22 888 4444",
          avatar_url: "images/200x200.png",
        },
        {
          id: "10",
          name: "Edna",
          email: "Edna@example.com",
          phone: "(52) 33 888 4444",
          avatar_url: "images/200x200.png",
        },
        {
          id: "11",
          name: "Dianne",
          email: "dianne@example.com",
          phone: "(78) 33 888 4444",
          avatar_url: "images/200x200.png",
        },
        {
          id: "12",
          name: "Wilson",
          email: "wilson@example.com",
          phone: "(54) 63 688 6444",
          avatar_url: "images/200x200.png",
        },
        {
          id: "13",
          name: "Ross",
          email: "rose@example.com",
          phone: "(98) 63 688 6444",
          avatar_url: "images/200x200.png",
        },
        {
          id: "14",
          name: "Henry",
          email: "henry@example.com",
          phone: "(87) 63 688 6444",
          avatar_url: "images/200x200.png",
        },
        {
          id: "15",
          name: "Kerry",
          email: "kerry@example.com",
          phone: "(55) 63 688 6444",
          avatar_url: "images/200x200.png",
        },
      ],
      sort: true,
      search: true,
      pagination: {
        enabled: true,
        limit: 10,
      },
    };

    gridTable4._table = new Gridjs.Grid(gridConfig4).render(gridTable4);
  }
}
</script>

<template>
  <div class="flex items-center space-x-4 py-5 lg:py-6">
    <h2
        class="text-xl font-medium text-slate-800 dark:text-navy-50 lg:text-2xl"
    >
      Grid Table
    </h2>
    <div class="hidden h-full py-1 sm:flex">
      <div class="h-full w-px bg-slate-300 dark:bg-navy-600"></div>
    </div>
    <ul class="hidden flex-wrap items-center space-x-2 sm:flex">
      <li class="flex items-center space-x-2">
        <a
            class="text-primary transition-colors hover:text-primary-focus dark:text-accent-light dark:hover:text-accent"
            href="#"
        >Components</a
        >
        <svg
            xmlns="http://www.w3.org/2000/svg"
            class="size-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
        >
          <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M9 5l7 7-7 7"
          />
        </svg>
      </li>
      <li>Grid Table</li>
    </ul>
  </div>
  <div class="grid grid-cols-1 gap-4 sm:gap-5 lg:gap-6">
    <!-- From HTML Table -->
    <div class="card pb-4">
      <div
          class="my-3 flex h-8 items-center justify-between px-4 sm:px-5"
      >
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          From HTML Table
        </h2>
        <div ref="dropdown-wrapper1" class="inline-flex">
          <button ref="dropdown-wrapper1-ref"
              class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </button>

          <div class="popper-root" ref="dropdown-wrapper1-root">
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
              <div class="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
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
      <div>
        <div id="grid-table-1">
          <div class="is-scrollbar-hidden min-w-full overflow-x-auto">
            <table data-grid-ref class="w-full text-left">
              <thead>
              <tr>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  #
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  Name
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  Job
                </th>
                <th
                    class="whitespace-nowrap bg-slate-200 px-4 py-3 font-semibold uppercase text-slate-800 dark:bg-navy-800 dark:text-navy-100 lg:px-5"
                >
                  Favorite Color
                </th>
              </tr>
              </thead>
              <tbody>
              <tr>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  ID 1
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Cy Ganderton
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Quality Control Specialist
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Blue
                </td>
              </tr>
              <tr>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  ID 2
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Hart Hagerty
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Desktop Support Technician
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Purple
                </td>
              </tr>
              <tr>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  ID 3
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Brice Swyre
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Tax Accountant
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">Red</td>
              </tr>
              <tr>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  ID 4
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Marjy Ferencz
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Office Assistant I
                </td>
                <td class="whitespace-nowrap px-4 py-3 sm:px-5">
                  Crimson
                </td>
              </tr>
              </tbody>
            </table>
          </div>
          <div><div data-grid-wrapper></div></div>
        </div>
      </div>
    </div>

    <!-- Simple Example -->
    <div class="card pb-4">
      <div
          class="my-3 flex h-8 items-center justify-between px-4 sm:px-5"
      >
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          Simple Exapmle
        </h2>
        <div ref="dropdown-wrapper2" class="inline-flex">
          <button ref="dropdown-wrapper2-ref"
              class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </button>
          <div class="popper-root" ref="dropdown-wrapper2-root">
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
              <div class="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
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
      <div>
        <div id="grid-table-2"></div>
      </div>
    </div>

    <!-- Async Data -->
    <div class="card pb-4">
      <div
          class="my-3 flex h-8 items-center justify-between px-4 sm:px-5"
      >
        <h2
            class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base"
        >
          GridJS Async Table
        </h2>
        <div ref="dropdown-wrapper3" class="inline-flex">
          <button ref="dropdown-wrapper3-ref"
              class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25"
          >
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </button>

          <div class="popper-root" ref="dropdown-wrapper3-root">
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
              <div class="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
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
      <div>
        <div id="grid-table-3"></div>
      </div>
    </div>

    <!-- GridJS Advanced Example -->
    <div class="card pb-4">
      <div class="my-3 flex h-8 items-center justify-between px-4 sm:px-5">
        <h2 class="font-medium tracking-wide text-slate-700 line-clamp-1 dark:text-navy-100 lg:text-base">
          GridJS Advanced Table
        </h2>
        <div ref="dropdown-wrapper4" class="inline-flex">
          <button ref="dropdown-wrapper4-ref" class="popper-ref btn size-8 rounded-full p-0 hover:bg-slate-300/20 focus:bg-slate-300/20 active:bg-slate-300/25 dark:hover:bg-navy-300/20 dark:focus:bg-navy-300/20 dark:active:bg-navy-300/25">
            <svg
                xmlns="http://www.w3.org/2000/svg"
                class="size-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                stroke-width="2"
            >
              <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              />
            </svg>
          </button>

          <div class="popper-root" ref="dropdown-wrapper4-root">
            <div class="popper-box rounded-md border border-slate-150 bg-white py-1.5 font-inter dark:border-navy-500 dark:bg-navy-700">
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
              <div class="my-1 h-px bg-slate-150 dark:bg-navy-500"></div>
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
      <div>
        <div id="grid-table-4"></div>
      </div>
    </div>
  </div>
</template>
