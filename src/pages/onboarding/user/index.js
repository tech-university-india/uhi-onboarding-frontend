import AadharForm from "@/components/AadharForm";
import Footer from "@/components/Footer";
import NavigationBar from "@/components/NavigationBar";
import Link from 'next/link';
export default function User() {
    return (<div>
        <NavigationBar />
            <AadharForm />
            <Footer />
    </div>
        
    );
};