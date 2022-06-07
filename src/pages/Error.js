import React from "react";

function Erorr() {
  return (
    <div>
      <section class="flex items-center h-full p-16 dark:bg-gray-900 dark:text-gray-100">
        <div class="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div class="max-w-md text-center">
            <h2 class="mb-8 font-extrabold text-9xl dark:text-gray-600">
              <span class="sr-only">Error</span>404
            </h2>
            <p class="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Erorr;
