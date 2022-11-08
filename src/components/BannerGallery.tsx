import {useRouter} from 'next/router';
import {bannerInfo} from "../data/Banner";
import ButtonInfo from "./ButtonInfo";


const BannerGallery = () => {
    const router = useRouter()
    let title = bannerInfo[0].title
    let btnText = bannerInfo[0].btnText
    if ( router.pathname == "/gallery") {
        title = bannerInfo[1].title
        btnText = bannerInfo[1].btnText
    }
    return (
        <div className="bg-[#e9ede8]">
            <div className="container mx-auto w-5/6 md:max-w-[1100px] pb-5 md:pb-0">
                <div className="flex md:flex-row flex-col items-center justify-between">
                    <h3 className="text-[#846342] text-center mx-1 font-[300] text-[24px] md:mx-0 lg:text-[40px] md:text-start">{title}</h3>
                    <ButtonInfo route={router.pathname == "/gallery" ? "proposal" : "gallery"} title={btnText} />
                </div>
            </div>
        </div>
    )
}

export default BannerGallery