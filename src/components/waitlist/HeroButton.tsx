"use client";

import clsx from "clsx";
import styles from "./hb.module.css";
// @ts-ignore
import confetti from "canvas-confetti";
import { useCallback, Fragment, useRef, useState } from "react";
import { Modal, Button, Text, Input, Loading, PressEvent, Row, Col, } from "@nextui-org/react";
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
	const [error, setError] = useState(null);
	const [message, setMessage] = useState(null);
	const [subscriber, setSubscriber] = useState({
		first_name: "",
		email: "",
	});
	const handler = () => setVisible(true);

	const handleChange = (event: any) => {
        const targetName = event.target.name;
        const targetValue = event.target.value;
        setSubscriber((values) => ({ ...values, [targetName]: targetValue }));
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
			await submitSubscriber(subscriber).then( (data:any) => {
				console.log(data);
				if (data.status === true) {
					setLoading(false);
                    setError(null);
                    setMessage(data.message);
                    setSubscriber({
                        first_name: "",
                        email: "",
                    });
					return showConfetti()
				}
				setLoading(false);
				setError(data.message);
				setTimeout(() => {
					setError(null);
				}, 5000)
			})
		}
		
	}

    const showConfetti = useCallback(() => {
		if (typeof window !== "undefined") {
			const end = Date.now() + 100;
			const config: confetti.Options = {
				particleCount: 35,
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
				setMessage(null)
				setVisible(false);
			}, 2000)
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
				className={clsx(
					styles.modal_bg,
				)}
			>
				<Modal.Header>	
					<Col>
						<Text b id="modal-title" size={18} >
							Subscribe to our &nbsp;
							<span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-pink-500">
								#Waitlist
							</span>
						</Text>
						<Row
							justify="center"
							align="center"
						>
							{error && <Text b aria-label="error-text" color="red" css={{textAlign: 'center', my: "$5"}}>{error}</Text>}
							{message && <Text b aria-label="message-text" color="green" css={{textAlign: 'center', my: "$5"}}>{message}</Text>}
						</Row>
					</Col>
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
						aria-labelledby="first_name"
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
						aria-labelledby="email-address"
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
						{!loading ? 'Join' : <Loading type="points" color={"currentColor"} />}
					</Button>
				</Modal.Footer>
			</Modal>
		</div>
	);

}