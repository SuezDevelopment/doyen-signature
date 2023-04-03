import Head from 'next/head'
import Image from 'next/image'
import { Open_Sans } from 'next/font/google'
import clsx from "clsx";
import HeroButton from '@/components/store/waitlist/HeroButton';
import HeroText from '@/components/store/waitlist/HeroText';
import WaitingCounter from '@/components/store/waitlist/waitCounter';
import Footer from '@/components/store/waitlist/footer';
import Gallery from '@/components/store/waitlist/Gallery';
import UserReviews from '@/components/store/waitlist/UsersReview';
import { useEffect } from 'react';
const inter = Open_Sans({
	subsets: ["cyrillic"],
	weight: ["400", "500", "600"],
});


export default function Home() {
  const subscribe = async({fn,em}:any) =>{
    await fetch('https://api.signaturesbydoyen.org/v1/subscribe/new',{
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'X-POST-KEY': process.env.POST_KEY || "",
      },
      body: JSON.stringify({
        fn,
        em
      })
    }).then(res => res.json()).then(data => {
      console.log(data)
      return data
    })
  }

  return (
    <>
    <Head>
      <title>Signatures by Doyen | BRIDALS▪️CUSTOM•MADE▪️LUXURY▪️TRAINING | Coming Soon </title>
    </Head>
      <main
        className={clsx(
          "container mx-auto flex min-h-screen flex-col items-center justify-between p-4",
          inter.className
        )}
      >
        <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
          <p className="fixed left-0 top-0 flex w-full justify-center bg-gradient-to-b pb-3 pt-4 backdrop-blur-2xl bg-zinc-800/30 dark:from-inherit lg:static lg:w-auto lg:rounded-xl lg:p-4 lg:bg-zinc-800/30 uppercase text-white font-bold tracking-widest text-2xl italic">
            Signatures by Doyen
          </p>
          <div className="fixed bottom-0 left-0 flex h-36 w-full items-end justify-center bg-gradient-to-t from-white via-white dark:from-black dark:via-black lg:static lg:h-auto lg:w-auto lg:bg-none">
            <p className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
              © Signatures by Doyen
            </p>
          </div>
        </div>

        <div className="w-full">
          <HeroText />
        </div>

        <div className="flex place-items-center">
          <HeroButton submitSubscriber={subscribe} />
        </div>

        <div className="text-sm italic mt-10">
          Join the growing community of individuals eager to uncover their unique signature style.
        </div>
        <div className="">
          <WaitingCounter />
        </div>

        <div className="w-full">
          <Gallery />
        </div>

        <div className="w-full">
          <UserReviews />
        </div>

        <div className="h-24"></div>

			  <Footer />
      </main>
    </>
  )
}
