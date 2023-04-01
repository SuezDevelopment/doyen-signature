"use client";

import clsx from "clsx";
import styles from "./hb.module.css";
// @ts-ignore
import confetti from "canvas-confetti";
import { useCallback } from "react";

export default function HeroButton(){
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
				// show modal dialog
			}, 200);
		}
	}, []);

    return (
		<div>
			<button
				className={clsx(
					styles.button,
					"text-[1rem] sm:text-[1.5rem] md:text-[2rem]"
				)}
				onClick={showConfetti}
			>
				Join the Waitlist
			</button>
		</div>
	);

}