import { Facebook, Instagram } from "@mui/icons-material";

const FooterMedia = () => {

    return (
        <div className="w-full bg-black flex items-start justify-between p-8">
            <div className="flex gap-3 items-center">
                <Facebook className="animate-pulse cursor-pointer" color="warning" />
                <Instagram className="animate-pulse cursor-pointer" color="warning" />
            </div>
            <span className="text-orange-primary font-medium">Le 216 Burger | © 2025 All rights reserved</span>
        </div>
    )
}
export default FooterMedia;