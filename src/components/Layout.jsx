import FloatingNav from "./FloatingNav";
import Footer from "./Footer";

function Layout({ children }) {
    return (
        <>
            <FloatingNav />
            <main className="main">{children}</main>
            <Footer />
        </>
    );
}

export default Layout;