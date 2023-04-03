import React from "react";
import {
	IconBrandLinkedin,
	IconBrandInstagram,
	IconBrandTwitterFilled,
    IconBrandGmail,
	IconBrandWhatsapp
} from "@tabler/icons-react";

const Footer = () => {
    const year = new Date().getFullYear();
    return (
        <footer className="p-4 w-full">
			<div className="flex justify-between items-center">
				<div className="text-sm text-gray-400 font-bold">
					&#169; SignaturesbyDoyen, {year}
				</div>
                <div className="flex space-x-4">
					<a
						href="https://wa.me/+447423202952/"
						target="_blank"
						rel="noopener noreferrer"
						className="animate-bounce text-green-600 hover:text-green-800 transition-colors duration-200"
					>
						<IconBrandWhatsapp size="1.5em" />
					</a>
					<a
						href="https://ng.linkedin.com/in/adedoyin-olayode-039521a4"
						target="_blank"
						rel="noopener noreferrer"
						className="animate-bounce text-blue-600 hover:text-blue-800 transition-colors duration-200"
					>
						<IconBrandLinkedin size="1.5em" />
					</a>
					<a
						href="https://twitter.com/doyenyen_"
						target="_blank"
						rel="noopener noreferrer"
						className="animate-bounce text-blue-600 hover:text-blue-800 transition-colors duration-200"
					>
						<IconBrandTwitterFilled size="1.5em" />
					</a>
					<a
						href="https://www.instagram.com/signaturesbydoyen/"
						target="_blank"
						rel="noopener noreferrer"
						className="animate-bounce text-indigo-500 hover:text-indigo-800 transition-colors duration-200"
					>
						<IconBrandInstagram size="1.5em" />
					</a>
                    <a
						href="https://www.instagram.com/sbdrtw/"
						target="_blank"
						rel="noopener noreferrer"
						className="animate-bounce text-indigo-500 hover:text-indigo-800 transition-colors duration-200"
					>
						<IconBrandInstagram size="1.5em" />
					</a>
				</div>
            </div>
            <div className="h-[150px] lg:hidden"></div>
        </footer>
    );
}

export default Footer;