import { useNavigate } from "react-router-dom";
import { HeroSection } from "./Herosection";
import { PersonalityTypeCard } from "../components/personalitytypecard";

export default function HomePage() {
  const navigate = useNavigate();

  const handleStartTest = () => {
    navigate("/test");
  };

  // Personality types data
  const personalityTypes = [
    {
      type: "INTJ",
      title: "The Architect",
      description:
        "Imaginative and strategic thinkers, with a plan for everything.",
      color: "bg-teal-500",
    },
    {
      type: "INTP",
      title: "The Thinker",
      description:
        "Innovative inventors with an unquenchable thirst for knowledge.",
      color: "bg-cyan-500",
    },
    {
      type: "ENTJ",
      title: "The Commander",
      description:
        "Bold, imaginative and strong-willed leaders, always finding a way.",
      color: "bg-green-500",
    },
    {
      type: "ENTP",
      title: "The Debater",
      description:
        "Smart and curious thinkers who cannot resist an intellectual challenge.",
      color: "bg-lime-500",
    },
    {
      type: "INFJ",
      title: "The Advocate",
      description:
        "Quiet and mystical, yet very inspiring and tireless idealists.",
      color: "bg-purple-500",
    },
    {
      type: "INFP",
      title: "The Mediator",
      description: "Poetic, kind and altruistic people, always eager to help.",
      color: "bg-pink-500",
    },
    {
      type: "ENFJ",
      title: "The Protagonist",
      description:
        "Charismatic and inspiring leaders, able to mesmerize their listeners.",
      color: "bg-orange-500",
    },
    {
      type: "ENFP",
      title: "The Campaigner",
      description: "Enthusiastic, creative and sociable free spirits.",
      color: "bg-yellow-500",
    },
    {
      type: "ISTJ",
      title: "The Logistician",
      description:
        "Practical and fact-minded individuals, reliable and hard-working.",
      color: "bg-gray-500",
    },
    {
      type: "ISFJ",
      title: "The Defender",
      description:
        "Very dedicated and warm protectors, always ready to defend those they care about.",
      color: "bg-indigo-500",
    },
    {
      type: "ESTJ",
      title: "The Executive",
      description:
        "Excellent administrators, unsurpassed at managing things—or people.",
      color: "bg-red-500",
    },
    {
      type: "ESFJ",
      title: "The Consul",
      description:
        "Extraordinarily caring, social and popular people, always eager to help.",
      color: "bg-pink-400",
    },
    {
      type: "ISTP",
      title: "The Virtuoso",
      description:
        "Bold and practical experimenters, master of all kinds of tools.",
      color: "bg-teal-400",
    },
    {
      type: "ISFP",
      title: "The Adventurer",
      description:
        "Flexible and charming artists, always ready to explore and experience something new.",
      color: "bg-cyan-400",
    },
    {
      type: "ESTP",
      title: "The Entrepreneur",
      description:
        "Smart, energetic and very perceptive people, who truly enjoy living on the edge.",
      color: "bg-orange-400",
    },
    {
      type: "ESFP",
      title: "The Entertainer",
      description:
        "Spontaneous, energetic and enthusiastic people—life is never boring around them.",
      color: "bg-yellow-400",
    },
  ];

  return (
    <div className="min-h-screen">
      <HeroSection />

      {/* Features Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              Why Take This Test?
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Gain deep insights into your personality and discover what makes
              you unique
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                icon: "🎯",
                title: "Career Guidance",
                description:
                  "Find careers that align with your natural strengths and preferences",
              },
              {
                icon: "💝",
                title: "Better Relationships",
                description:
                  "Understand yourself and others to build stronger connections",
              },
              {
                icon: "🚀",
                title: "Personal Growth",
                description:
                  "Identify areas for development and leverage your strengths",
              },
            ].map((feature, idx) => (
              <div
                key={idx}
                className="bg-linear-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 hover:shadow-xl transition-all duration-300 hover:-translate-y-2"
              >
                <div className="text-5xl mb-4">{feature.icon}</div>
                <h3 className="text-xl font-bold text-gray-800 mb-3">
                  {feature.title}
                </h3>
                <p className="text-gray-600">{feature.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Personality Types Preview */}
      <section className="py-20 bg-linear-to-br from-gray-50 to-gray-100">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              16 Personality Types
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Discover which type best describes you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {personalityTypes.map((type) => (
              <PersonalityTypeCard
                key={type.type}
                type={type.type}
                title={type.title}
                description={type.description}
                color={type.color}
              />
            ))}
          </div>

          <div className="text-center mt-12">
            {/* <button
              onClick={handleStartTest}
              className="text-teal-600 font-semibold hover:text-teal-700 transition-colors"
            >
              View All 16 Types →
            </button> */}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-4">
              What People Say
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                quote:
                  "Incredibly thorough and scary accurate. It's like someone putting a mirror to your face.",
                author: "Sarah M.",
              },
              {
                quote:
                  "This site is just AMAZING! The results were so spot on, I felt like I had been vindicated.",
                author: "John D.",
              },
              {
                quote:
                  "It's great to have my strengths and weaknesses so clearly articulated.",
                author: "Emma L.",
              },
            ].map((testimonial, idx) => (
              <div
                key={idx}
                className="bg-linear-to-br from-teal-50 to-cyan-50 rounded-3xl p-8 shadow-lg"
              >
                <div className="text-teal-600 text-4xl mb-4">"</div>
                <p className="text-gray-700 mb-6 italic">{testimonial.quote}</p>
                <p className="text-gray-600 font-semibold">
                  — {testimonial.author}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 bg-[#003058]">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Ready to Discover Yourself?
          </h2>
          <p className="text-xl text-gray-200 mb-8 max-w-2xl mx-auto">
            Join millions who have already taken the journey to self-discovery
          </p>
          <button
            onClick={handleStartTest}
            className="bg-white text-[#003058] px-10 py-4 rounded-full font-bold text-lg hover:shadow-2xl transition-all duration-300 hover:scale-105"
          >
            Start Your Free Test Now
          </button>
        </div>
      </section>
    </div>
  );
}
