import Head from 'next/head'
import { Open_Sans, Amarante } from 'next/font/google'
import clsx from "clsx";
import HeroButton from '@/components/waitlist/HeroButton';
import HeroText from '@/components/waitlist/HeroText';
import WaitingCounter from '@/components/waitlist/waitCounter';
import Footer from '@/components/waitlist/footer';
import Gallery from '@/components/waitlist/Gallery';
import UserReviews from '@/components/waitlist/UsersReview';
import { useEffect, useState } from 'react';
const inter = Amarante({
	subsets: ["latin-ext"],
	weight: ["400"],
});


export default function Home() {
  const [count, setCount] = useState(0);

  const fetchCount = async () => {
    try {
      const res = await fetch(`https://api.signaturesbydoyen.org/v1/subscribe/count?get_key=${process.env.NEXT_PUBLIC_GET_KEY || ''}`,{
      mode: 'cors',
    });
    const data = await res.json();
    setCount(data.subscribers);
    } catch (error:any) {
      console.log(error.message);
    }
  }
  useEffect(() => {
    async () => await fetchCount()
  })

  const subscribe = async(obj:any) =>{
    try {
      const res = await fetch(`https://api.signaturesbydoyen.org/v1/subscribe/new?post_key=${process.env.NEXT_PUBLIC_POST_KEY || ''}`,{
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          first_name: obj.first_name,
          email: obj.email,
        })
      })
      const data = await res.json();
      return data;
    } catch (error:any) {
      console.log(error.message);
      return error;
    }
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
          <div className="fixed bottom-0 left-0 flex h-15 w-full items-end justify-center bg-gradient-to-t backdrop-blur-2xl bg-zinc-800/30 dark:from-inherit lg:static lg:h-auto lg:w-auto lg:bg-none">
            <p className="pointer-events-none flex place-items-center gap-2 p-8 lg:pointer-events-auto lg:p-0">
              © Signatures by Doyen
            </p>
          </div>
        </div>
        <div className="w-full">
          <HeroText />
        </div>

        <div className="mt-20 flex place-items-center">
          <HeroButton submitSubscriber={subscribe} />
        </div>

        <div className="text-sm italic mt-10">
          Join the growing community of individuals eager to uncover their unique signature style.
        </div>
        <div className="">
          <WaitingCounter count={count} />
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
