import Navbar from "@/app/components/Navbar";
import OverviewToggle from "../components/OverviewToggle";

export default function Layout({ children }) {
    return (
        <main
          className="bg-secondary"
        > 
        <Navbar/>
        <OverviewToggle/>
          {children}
        </main>

    );
}