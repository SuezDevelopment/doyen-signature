"use client";

import clsx from "clsx";
import styles from "./hb.module.css";
// @ts-ignore
import confetti from "canvas-confetti";
import { useCallback, Fragment, useRef, useState } from "react";
import { Dialog, Transition } from '@headlessui/react'

export default function HeroButton(){
	const [open, setOpen] = useState(true)
  	const cancelButtonRef = useRef(null)

	const showModal = () => {
		return(
			<Transition.Root show={open} as={Fragment}>
				 <Dialog as="div" className="relative z-10" initialFocus={cancelButtonRef} onClose={setOpen}>
					<Transition.Child
						as={Fragment}
						enter="ease-out duration-300"
						enterFrom="opacity-0"
						enterTo="opacity-100"
						leave="ease-in duration-200"
						leaveFrom="opacity-100"
						leaveTo="opacity-0"
					>
						<Dialog.Overlay className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
					</Transition.Child>
					<div className="fixed inset-0 z-40 overflow-y-auto">
						<div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
						<Transition.Child
							as={Fragment}
							enter="ease-out duration-300"
							enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
							enterTo="opacity-100 translate-y-0 sm:scale-100"
							leave="ease-in duration-200"
							leaveFrom="opacity-100 translate-y-0 sm:scale-100"
							leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
						>
							 <Dialog.Panel className="relative transform overflow-hidden rounded-lg text-left shadow-xl transition-all sm:my-8 sm:w-full sm:max-w-lg">
								<Dialog.Title className="text-lg leading-6 font-medium text-gray-900">
									Join the Waitlist
								</Dialog.Title>
							 </Dialog.Panel>
						</Transition.Child>
						</div>
					</div>
				 </Dialog>
	
			</Transition.Root>
		);
	}

    const showConfetti = useCallback(() => {
		if (typeof window !== "undefined") {
			const end = Date.now() + 100;
			const config: confetti.Options = {
				particleCount: 25,
				startVelocity: 90,
				angle: 60,
				spread: 60,
				origin: { x: 0, y: 1 },
				zIndex: 300,
				gravity: 1.5,
				colors: ["#6AD991", "#F6C549", "#E65040", "#5B89F7", "#9688F2"],
			};

			(function frame() {
				confetti({
					...config,
					angle: 60,
					origin: { x: 0, y: 1 },
				});

				confetti({
					...config,
					angle: 120,
					origin: { x: 1, y: 1 },
				});

				if (Date.now() < end) {
					requestAnimationFrame(frame);
				}
			})();

			setTimeout(() => {
				showModal()
			}, 200);
		}
	}, [showModal]);

    return (
		<div>
			<button
				className={clsx(
					styles.button,
					"text-[1rem] sm:text-[1.5rem] md:text-[2rem]"
				)}
				onClick={showModal}
			>
				Join the Waitlist
			</button>
		</div>
	);

}