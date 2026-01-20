import UserProfile from "@/components/Userprofile/userprofile";
import TopBar from '@/components/TopBar';
import Footer from '@/components/Footer';
import FooterSection from '@/components/FooterSection';

export default function ProfilePage() {
    return (<>
        <TopBar />
        <div className="min-h-screen bg-gray-100 p-8">
            <UserProfile/>
        </div>
        <FooterSection />
        <Footer />
    </>
    );
}
