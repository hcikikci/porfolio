import React from 'react';
import IconLinkedIn from "@/app/components/atoms/Icons/IconLinkedIn";
import IconGithub from "@/app/components/atoms/Icons/IconGithub";
import IconTwitter from "@/app/components/atoms/Icons/IconTwitter";
import IconEmail from "@/app/components/atoms/Icons/IconEmail";
import IconDiscord from "@/app/components/atoms/Icons/IconDiscord";
import Link from "next/link";

const Social = ({withNicknames, className, size="small"}) => {
    return (
        <div className={"flex flex-wrap place-items-baseline md:justify-around justify-items-start gap-3  md:gap-5 w-fit " + (className && className)}>
            <Link target={"_blank"} href="https://discordapp.com/users/hcikikci" className="flex place-items-center space-x-2">
                <IconDiscord size={size}/>
                {withNicknames && <span className="text-gray font-medium">hcikikci</span>}
            </Link>
            <Link target={"_blank"} href="https://www.linkedin.com/in/halitcan-çıkıkçı/" className="flex place-items-center space-x-2">
                <IconLinkedIn size={size}/>
                {withNicknames && <span className="text-gray font-medium">halitcan-çıkıkçı</span>}
            </Link>
            <Link target={"_blank"} href="https://github.com/hcikikci" className="flex place-items-center space-x-2">
                <IconGithub size={size}/>
                {withNicknames && <span className="text-gray font-medium">hcikikci</span>}
            </Link>
            <Link target={"_blank"} href="https://twitter.com/halitcancikikci" className="flex place-items-center space-x-2">
                <IconTwitter size={size}/>
                {withNicknames && <span className="text-gray font-medium">halitcancikikci</span>}
            </Link>
            <Link target={"_blank"} href="mailto:hello@halitcancikikci.com"  className="flex space-x-5 place-items-center">
                <IconEmail size={size}/>
                {withNicknames &&  <span className="text-gray font-medium">hello@halitcancikikci.com</span>}
            </Link>
        </div>
    );
};

export default Social;