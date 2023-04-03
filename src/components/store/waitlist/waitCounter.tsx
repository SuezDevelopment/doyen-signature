export default function WaitingCounter({count}:{count: number}) {
    return (
		<div className="my-10">
			There are currently{" "}
			<span className="font-bold font-mono">
				{count}
			</span>{" "}
			people that have joined the waitlist to{" "}
			<span className="underline decoration-dashed group relative">
				<span className="hidden group-hover:block absolute top-[-120%] left-0 w-fit h-full bg-white text-black text-sm rounded px-2">
				    🤩
				</span>
				discover their signature style.
			</span>
			.
		</div>
	);
}