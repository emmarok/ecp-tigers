import DoughnutTwo from "../../components/DoughnutTwo";
import Drawer from "../../components/Drawer";

export default function Home () {
    return (<div className="bg-secondary h-full">
       <div className="container min-h-full max-w-full mx-auto px-16 py-16">
                     
            <div className="green_header_container">
              <h1>We are LBG anything is within the realm of possibility</h1>
            </div>
            <div className="white_header_container">
              <p className="text-black">Secondary motivational text</p>
              <Drawer/>
            </div>
            <div className="min-h-24"></div>
            <div className="green_container">
              <h1>We are LBG anything is within the realm of possibility</h1>
            </div>
            <div className="white_container">
              <p className="text-black">Secondary motivational text</p>
              <DoughnutTwo/>
            </div>
            
    </div>
    </div>
     
    )
  }