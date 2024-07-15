"use client";

import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function NotFound() {
  const router = useRouter();

  return (
    <section className="bg-white">
      <div className="container  px-8 py-16 mx-auto flex items-center justify-center gap-12 flex-col md:flex-row">
        <div className="wf-ull lg:w-1/2">
          <p className="text-sm font-medium text-blue-500">404 error</p>
          <h1 className="mt-3 text-2xl font-semibold text-gray-800 md:text-3xl">
            Page not found
          </h1>
          <p className="mt-4 text-gray-500">
            Sorry, the page you are looking for doesn&apos;t exist.Here are some
            helpful links:
          </p>

          <div className="flex flex-col xs:flex-row items-center mt-6 gap-3">
            <button
              onClick={() => router.back()}
              className="flex items-center justify-center px-5 py-2 text-sm text-gray-700 transition-colors duration-200 bg-white border rounded-lg gap-x-2 w-auto dark:hover:bg-gray-800 dark:bg-gray-900 hover:bg-gray-100 dark:text-gray-200 dark:border-gray-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="w-5 h-5 rtl:rotate-180"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
                />
              </svg>

              <span>Go back</span>
            </button>

            <Link
              href={"/"}
              className="px-5 py-2 text-sm tracking-wide text-white transition-colors duration-200 bg-blue-500 rounded-lg shrink-0 w-auto hover:bg-blue-600 dark:hover:bg-blue-500 dark:bg-blue-600"
            >
              Take me home
            </Link>
          </div>
        </div>

        <div className="relative w-full mt-12 lg:w-1/2 lg:mt-0">
          <Image
            className="w-full max-w-lg lg:mx-auto"
            src="/image/illustration.svg"
            alt="404"
            width={500}
            height={300}
          />
        </div>
      </div>
    </section>
  );
}
