import Navbar from "@/app/components/Navbar";

export default function Layout({ children }) {
    return (
        <main
          className="bg-secondary"
        > 
        <Navbar/>
          {children}
        </main>

    );
}