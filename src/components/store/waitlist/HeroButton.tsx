"use client";

import clsx from "clsx";
import styles from "./hb.module.css";
// @ts-ignore
import confetti from "canvas-confetti";
import { useCallback, Fragment, useRef, useState } from "react";
import { Modal, Button, Text, Input, Loading, PressEvent, } from "@nextui-org/react";
import { IconMail, IconUser } from "@tabler/icons-react";
import { getKeysWithoutValues } from '@/utils/tools';

type WithChildren<T = {}> = 
  T & { children?: React.ReactNode };

type AddSubscriberProps = WithChildren<{
  submitSubscriber: (obj:any) => any
}>

export default function HeroButton({submitSubscriber}:AddSubscriberProps){
	const [visible, setVisible] = useState(false);
	const [loading, setLoading] = useState(false);
	const [subscriber, setSubscriber] = useState({
		first_name: "",
		email: "",
	});
	const handler = () => setVisible(true);

	const handleChange = (event: any) => {
        const targetName = event.target.name;
        const targetValue = event.target.value;
        setSubscriber((values) => ({ ...values, [targetName]: targetValue }));
        console.log([targetName], targetValue)
    };

	const closeHandler = () => {
		setVisible(false);
		console.log("closed");
	};

	const submitHandler = async(e: PressEvent) => {
		setLoading(true);
		let emptyvalues = getKeysWithoutValues(subscriber);
		if (emptyvalues.length > 0) {
			setLoading(false);
			return setVisible(true);
		} else {
			await submitSubscriber(subscriber)
			setVisible(false);
			console.log('closed');
			return showConfetti()
		}
		
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
		}
	}, []);

	const nullFunc = () => {};

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
				preventClose
				aria-labelledby="modal-title"
				open={visible}
				onClose={closeHandler}
				css={{
					backgroundImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 80 80'%3E%3Cg fill='%239C92AC' fill-opacity='0.4'%3E%3Cpath fill-rule='evenodd' d='M11 0l5 20H6l5-20zm42 31a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM0 72h40v4H0v-4zm0-8h31v4H0v-4zm20-16h20v4H20v-4zM0 56h40v4H0v-4zm63-25a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM53 41a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-30 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm-28-8a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zM56 5a5 5 0 0 0-10 0h10zm10 0a5 5 0 0 1-10 0h10zm-3 46a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm10 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM21 0l5 20H16l5-20zm43 64v-4h-4v4h-4v4h4v4h4v-4h4v-4h-4zM36 13h4v4h-4v-4zm4 4h4v4h-4v-4zm-4 4h4v4h-4v-4zm8-8h4v4h-4v-4z'/%3E%3C/g%3E%3C/svg%3E"
				}}
			>
				<Modal.Header>
					<Text id="modal-title" size={18}>
						Subscribe to our &nbsp;
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
						name="first_name"
						type="text"
						onChange={e => handleChange(e)}
						value={subscriber.first_name}
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
						name="email"
						onChange={e => handleChange(e)}
						value={subscriber.email}
						placeholder="Email Address"
						contentLeft={<IconMail size="1.5em" />}
					/>
				</Modal.Body>
				<Modal.Footer>
					<Button 
						className={clsx(
							styles.button,
							"text-[1rem] sm:text-[1.5rem] md:text-[2rem]"
						)}
						auto onPress= {!loading ? submitHandler : nullFunc}
					>
						{!loading ? 'Join' : <Loading type="points" />}
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);

}