"use client";

import clsx from "clsx";
import styles from "./hb.module.css";
// @ts-ignore
import confetti from "canvas-confetti";
import { useCallback, Fragment, useRef, useState } from "react";
import { Modal, Button, Text, Input, Row, Checkbox } from "@nextui-org/react";
import { IconMail, IconUser } from "@tabler/icons-react";

export default function HeroButton(){
	const [visible, setVisible] = useState(false);
	const handler = () => setVisible(true);

	const closeHandler = () => {
		showConfetti()
		setVisible(false);
		console.log("closed");
	};
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
		}
	}, []);

    return (
		<div>
			<Button
				className={clsx(
					styles.button,
					"text-[1rem] sm:text-[1.5rem] md:text-[2rem]"
				)}
				auto shadow onPress={handler}
			>
				Join the Waitlist
			</Button>
			<Modal
				closeButton
				blur
				aria-labelledby="modal-title"
				open={visible}
				onClose={closeHandler}
			>
				<Modal.Header>
					<Text id="modal-title" size={18}>
						Subscribe to our
						<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
                            #Waitlist
                        </span>
					</Text>
				</Modal.Header>
				<Modal.Body>
					<Input
						clearable
						// bordered
						fullWidth
						color="primary"
						size="lg"
						type="text"
						placeholder="First Name"
						contentLeft={<IconUser size="1.5em" />}
					/>

					<Input
						clearable
						// bordered
						fullWidth
						color="primary"
						size="lg"
						type="email"
						placeholder="Email Address"
						contentLeft={<IconMail size="1.5em" />}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button auto onPress={closeHandler}>
						Join
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);

}