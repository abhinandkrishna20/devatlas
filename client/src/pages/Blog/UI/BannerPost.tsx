import Card from "../../../components/ui/Card";
import { MessageCircle } from "lucide-react"; // Import WhatsApp matching icon
import profileImg from "../../../assets/Thumpnail.jpg"; // Use your existing thumbnail or dedicated image assets

const BannerPost = () => {
  return (
    <Card>
      {/* Main Container: Off-white background, horizontal flex layout with responsive behaviors */}
      <div className="Banner-post-container flex flex-col md:flex-row items-center justify-between gap-4 p-4 md:py-6 md:px-8 bg-[#1a1d27] rounded-xl shadow-md">
        
        {/* LEFT BLOCK: Profile Image + Quote Text */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          {/* Profile Image with rounded corners */}
          <div className="w-16 h-16 md:w-20 md:h-20 flex-shrink-0 overflow-hidden rounded-xl shadow-sm">
            <img 
              src={profileImg} 
              alt="Community leader profile" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Quote Text */}
          <h2 className="text-lg md:text-2xl font-black italic text-yellow-400 tracking-tight leading-tight">
           Developer Journal
          </h2>
           <p className="text-lg">A collection of lessons learned while
building real-world software.</p>

        </div>

        {/* RIGHT BLOCK: Action Interactions */}
        <div className="flex items-center gap-4 mt-4 md:mt-0 ml-auto md:ml-0">
          {/* WhatsApp Quick Link Button */}
          <a 
            href="https://wa.me/your-number" 
            target="_blank" 
            rel="noopener noreferrer"
            className="p-2.5 bg-[#d8fbe4] text-[#128c7e] rounded-full hover:bg-[#cbf7da] transition-colors shadow-sm"
            aria-label="Join WhatsApp Community"
          >
            <MessageCircle className="w-6 h-6 fill-current" />
          </a>

          {/* Registration Form Call to Action */}
          {/* <button 
            className="px-5 py-2.5 border-2 border-[#a31d1d] text-[#a31d1d] font-bold text-xs md:text-sm tracking-wider uppercase rounded-full hover:bg-[#a31d1d] hover:text-white transition-all duration-200"
            onClick={() => window.open('/form-link', '_blank')}
          >
            Fill This Form
          </button> */}
        </div>

      </div>
    </Card>
  );
};

export default BannerPost;