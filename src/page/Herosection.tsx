import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export const HeroSection = () => {
  const navigate = useNavigate();

  const handleStartTest = () => {
    navigate("/test");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#003058]">
      {/* Optional subtle background blobs */}
      <div className="absolute top-20 left-10 w-96 h-96 bg-[#002040] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse" />
      <div
        className="absolute bottom-20 right-10 w-96 h-96 bg-[#001830] rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-pulse"
        style={{ animationDelay: "2s" }}
      />

      <div className="relative z-10 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-block mb-6">
            <span className="px-6 py-2 bg-white text-[#003058] rounded-full text-sm font-bold shadow-lg">
              Global Wissen Consult
            </span>
          </div>

          {/* Main Heading */}
          <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
            Discover Your True Self
          </h1>

          {/* Subheading */}
          <p className="text-xl md:text-2xl text-gray-200 mb-8 leading-relaxed">
            Take our scientifically validated personality test in just 10
            minutes and uncover what really drives you.
          </p>

          {/* CTA Button */}
          <Button size="lg" onClick={handleStartTest}>
            Take The Test
          </Button>
        </div>
      </div>
    </section>
  );
};
