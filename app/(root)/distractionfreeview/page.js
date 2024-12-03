import Preferences from "@/app/components/Preferences";

export default function DistractionView () {
    return (<div className="bg-secondary h-full">
        <div className="container min-h-full max-w-full mx-auto px-16 py-16">
      
      <div className="white_header_container">
              <p className="text-black">Account Balance: £1000</p>
              
            </div>
            <div className="min-h-24"></div>

          
            <div className="white_header_container">
              <p className="text-black">Savings Account Balance: £1000</p>
        
            </div>
            <Preferences/>
    </div>
    </div>
     
    )
  }