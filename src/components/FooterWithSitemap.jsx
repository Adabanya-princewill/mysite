import { Typography } from "@material-tailwind/react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";

export function FooterWithSitemap() {
    return (
        <footer className="relative w-full rounded-lg">
            <div className="mx-auto w-full max-w-7xl px-8">
                <div className="flex w-full flex-col items-center justify-center border-t border-blue-gray-50 py-4 md:flex-row md:justify-between">
                    <Typography
                        variant="small"
                        className="mb-4 text-center font-normal text-blue-gray-900 md:mb-0"
                    ><div> &copy; 2020, All
                        Rights Reserved.</div>
                        <div>919 Catawba St, Apt 536. Columbia 29201 SC.</div>
                    </Typography>
                    <div className="flex items-center gap-4 text-blue-gray-900 sm:justify-center">
                        <Typography as="a" className="flex gap-4 cursor-pointer items-center opacity-80 transition-opacity hover:opacity-100">
                            <IoIosCall /> 803 238 2083
                        </Typography>
                        <Typography as="a" target="_blank" href="mailto:nuelsmart27@gmail.com" className="opacity-80 transition-opacity hover:opacity-100">
                            <MdEmail />
                        </Typography>
                        <Typography as="a" target="_blank" href="https://github.com/Adabanya-princewill" className="opacity-80 transition-opacity hover:opacity-100">
                            <FaGithub />
                        </Typography>
                        <Typography as="a" target="_blank" href="https://www.linkedin.com/in/princewilladabanya/" className="opacity-80 transition-opacity hover:opacity-100">
                            <FaLinkedin />
                        </Typography>
                    </div>
                </div>
            </div>
        </footer>
    );
}