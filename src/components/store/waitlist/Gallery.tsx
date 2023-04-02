'use-client';

import { useEffect, useState } from "react";
import { getAllSignaturesByDoyenPost } from "@/utils/getuserposts";
import { IPost } from "@/utils/IPosts";


export default function Gallery() {
    const [gallery, setGallery] = useState<any | Array<IPost>>([]);
    const posts = getAllSignaturesByDoyenPost();
    useEffect(() => {
        posts && posts.then(post => setGallery(post))
        gallery && console.log(gallery)
    },[posts, gallery])

    return(
        <>
            <div className="my-[5rem]">
                <div>
                    <h2 className="text-4xl font-bold text-center mb-10">
                        A Fashion Gallery of Signatures by Doyen{" "}
                        <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
                            #UnveilingtheChic
                        </span>
                    </h2>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-10">
                    <div className="flex flex-col items-center">
                        <div className="py-12 animate-marquee whitespace-nowrap">
                            <span className="mx-4 text-4xl">Marquee Item 1</span>
                            <span className="mx-4 text-4xl">Marquee Item 2</span>
                            <span className="mx-4 text-4xl">Marquee Item 3</span>
                            <span className="mx-4 text-4xl">Marquee Item 4</span>
                            <span className="mx-4 text-4xl">Marquee Item 5</span>
                        </div>
                        <div className="py-12 animate-marquee2 whitespace-nowrap">
                            <span className="mx-4 text-4xl">Marquee Item 11</span>
                            <span className="mx-4 text-4xl">Marquee Item 12</span>
                            <span className="mx-4 text-4xl">Marquee Item 13</span>
                            <span className="mx-4 text-4xl">Marquee Item 14</span>
                            <span className="mx-4 text-4xl">Marquee Item 15</span>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}