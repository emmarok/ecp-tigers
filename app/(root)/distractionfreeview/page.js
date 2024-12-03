import DoughnutTwo from "../../components/DoughnutTwo";
import Drawer from "../../components/Drawer";
import Preferences from "@/app/components/Preferences";
import BudgetSpendsGraph from "../../components/BudgetSpendsGraph"

export default function Home () {
    return (<div className="bg-secondary h-full">
       <div className="container min-h-full max-w-full mx-auto px-16 py-16">
                     
            <div className="white_container">
              <p className="text-black">Take control of your spends by category</p>
              <DoughnutTwo/>
            </div>


            <div className="white_container">
            <p className="text-black">Update the groceries category or your whole budget</p>
              <Drawer/>
              <Preferences/>
            </div>
            <div className="min-h-24"></div>
          
            

            <div className="white_container">
              <p className="text-black">See trends in your spending</p>
              <BudgetSpendsGraph/>
            </div>
            
            
    </div>
    </div>
     
    )
  }