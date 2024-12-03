import Navbar from "@/app/components/Navbar";

export default function Layout({ children }) {
    return (
        <main
          className="bg-secondary"
        > 
        <Navbar width={2000} height={2000}/>
          {children}
        </main>

    );
}