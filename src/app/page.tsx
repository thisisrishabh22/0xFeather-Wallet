import { Header } from "@/components/header";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex h-screen w-screen flex-col items-center justify-between">
        <div className="w-full h-full">
          <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 space-y-8 h-full flex flex-col items-center justify-center gap-4">
            <div className="flex justify-center">
              <Link className="group inline-block bg-white/[.05] hover:bg-white/[.1] border border-white/[.05] p-1 pl-4 rounded-full shadow-md" href="/">
                <p className="mr-2 inline-block text-sm">
                  0xFeather is live!
                </p>
                <span className="group-hover:bg-white/[.1] py-2 px-3 inline-flex justify-center items-center gap-x-2 rounded-full bg-white/[.075] font-semibold text-sm">
                  <svg className="w-2.5 h-2.5" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                  </svg>
                </span>
              </Link>
            </div>

            <div className="max-w-3xl text-center mx-auto">
              <h1 className="block font-medium text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
                Now it&apos;s easier than ever to play around with 0xETH
              </h1>
            </div>

            <div className="max-w-3xl text-center mx-auto">
              <p className="text-lg ">0xFeather is a new open source, fast, light weight wallet in the Ethereum ecosystem.</p>
              <p className="text-lg">And you would love it!</p>
            </div>

            <div className="text-center">
              <Link href='/app'>
                <Button variant='default' size='lg' className="text-md rounded-3xl">
                  Get Started
                  <ChevronRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              {/* <Link href='/app' className="inline-flex justify-center items-center gap-x-3 text-center bg-gradient-to-tl from-blue-600 to-violet-600 shadow-lg shadow-transparent hover:shadow-blue-700/50 border border-transparent text-sm font-medium rounded-full focus:outline-none focus:ring-2 focus:ring-blue-600 focus:ring-offset-2 focus:ring-offset-white py-3 px-6 dark:focus:ring-offset-gray-800">
                Get started
                <svg className="w-2.5 h-2.5" width="26" height="26" viewBox="0 0 16 16" fill="none">
                  <path d="M5.27921 2L10.9257 7.64645C11.1209 7.84171 11.1209 8.15829 10.9257 8.35355L5.27921 14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
                </svg>
              </Link> */}
            </div>
          </div>
        </div>
      </main>
    </>
  )
}
