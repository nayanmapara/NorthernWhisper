import { socials } from "@/constants";
import { SocialIcon } from "react-social-icons";

function Socials() {
  return (
    <div className="flex items-center justify-center sm:gap-x-4 mt-20 md:w-[250px]">
      {socials.map((social) => (
        <div
          key={social.id}
          className="flex items-center justify-center flex-1 animate-fade-in-3 cursor-pointer group md:hover:shadow-outline-gray rounded-[9px] p-1 md:p-5 transition duration-200 ease-out"
        >
          <SocialIcon
            url={social.url}
            fgColor="#FFF"
            bgColor="transparent"
            className="!h-16 !w-16"
          />
          <div className="text-xs sm:text-sm space-y-1">
            <p className="text-[#ADB0B1] group-hover:text-white transition font-medium">
              {social.name}
            </p>
            <p className="text-[#4B4C52]">{social.handle}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Socials;