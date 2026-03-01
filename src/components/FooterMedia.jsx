import { Facebook, Instagram } from "@mui/icons-material";

const FooterMedia = () => {

    return (
        <div className="w-full bg-black flex items-start justify-between p-8">
            <div className="flex gap-3 items-center">
                <Facebook className="animate-pulse cursor-pointer" color="warning" />
                <a href="https://www.instagram.com/le216burger/" target="_blank" aria-label="instagram">
                    <Instagram className="animate-pulse cursor-pointer" color="warning" />
                </a>
            </div>
            <span className="text-orange-primary font-medium">Le 216 Burger | © 2026 All rights reserved</span>
        </div>
    )
}
export default FooterMedia;