import { TraitSlider } from "../components/TraitSlider";
import { Button } from "../components/Button";
import { useNavigate } from "react-router-dom";

export const ResultsPage = () => {
  // Mock results - in real app, calculate from answers
  const personalityType = "INTJ-A";
  const traits = {
    energy: -65, // Introverted
    mind: 45, // Intuitive
    nature: 30, // Thinking
    tactics: -40, // Judging
    identity: -55, // Assertive
  };

  const navigate = useNavigate();

  const handleRetakeTest = () => {
    sessionStorage.removeItem("testAnswers");
    navigate("/");
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-teal-50 via-cyan-50 to-blue-50 py-12 px-6">
      <div className="container mx-auto max-w-5xl">
        {/* Results Header */}
        <div className="text-center mb-12">
          <div className="inline-block bg-linear-to-r from-purple-500 to-indigo-500 text-white px-6 py-3 rounded-full font-bold text-2xl mb-6 shadow-xl">
            {personalityType}
          </div>
          <h1 className="text-5xl font-bold text-gray-800 mb-4">
            The Architect
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Imaginative and strategic thinkers, with a plan for everything.
          </p>
        </div>

        {/* Main Results Card */}
        <div className="bg-white rounded-3xl shadow-2xl p-8 md:p-12 mb-8">
          {/* Personality Description */}
          <div className="mb-12">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Your Personality Type
            </h2>
            <p className="text-gray-600 leading-relaxed text-lg mb-4">
              It can be lonely at the top. As one of the rarest personality
              types, Architects (INTJs) know this all too well. Rational and
              quick-witted, Architects may struggle to find people who can keep
              up with their nonstop analysis of everything around them.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg">
              These personalities can be both the boldest of dreamers and the
              bitterest of pessimists. Architects believe that, through
              willpower and intelligence, they can achieve even the most
              challenging of goals.
            </p>
          </div>

          {/* Trait Sliders */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">
              Your Traits
            </h2>

            <TraitSlider
              leftTrait="Introverted"
              rightTrait="Extraverted"
              value={traits.energy}
              leftColor="bg-purple-500"
              rightColor="bg-yellow-500"
            />

            <TraitSlider
              leftTrait="Observant"
              rightTrait="Intuitive"
              value={traits.mind}
              leftColor="bg-blue-500"
              rightColor="bg-teal-500"
            />

            <TraitSlider
              leftTrait="Feeling"
              rightTrait="Thinking"
              value={traits.nature}
              leftColor="bg-green-500"
              rightColor="bg-cyan-500"
            />

            <TraitSlider
              leftTrait="Judging"
              rightTrait="Prospecting"
              value={traits.tactics}
              leftColor="bg-indigo-500"
              rightColor="bg-orange-500"
            />

            <TraitSlider
              leftTrait="Assertive"
              rightTrait="Turbulent"
              value={traits.identity}
              leftColor="bg-pink-500"
              rightColor="bg-red-500"
            />
          </div>
        </div>

        {/* Strengths & Weaknesses */}
        <div className="grid md:grid-cols-2 gap-8 mb-8">
          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span className="text-3xl">💪</span>
              Strengths
            </h3>
            <ul className="space-y-3">
              {[
                "Strategic",
                "Independent",
                "Determined",
                "Curious",
                "Original",
              ].map((strength) => (
                <li key={strength} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-teal-500 rounded-full" />
                  <span className="text-gray-700">{strength}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-3xl shadow-xl p-8">
            <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-3">
              <span className="text-3xl">🎯</span>
              Weaknesses
            </h3>
            <ul className="space-y-3">
              {[
                "Arrogant",
                "Dismissive",
                "Overly Critical",
                "Combative",
                "Emotionally Distant",
              ].map((weakness) => (
                <li key={weakness} className="flex items-center gap-3">
                  <div className="w-2 h-2 bg-red-500 rounded-full" />
                  <span className="text-gray-700">{weakness}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* CTA Section */}
        <div className="bg-linear-to-r from-teal-500 to-cyan-500 rounded-3xl p-12 text-center shadow-2xl">
          <h3 className="text-3xl font-bold text-white mb-4">
            Want the Full Report?
          </h3>
          <p className="text-teal-100 mb-8 text-lg max-w-2xl mx-auto">
            Unlock detailed insights about your career paths, relationships, and
            personal growth strategies.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="primary"
              className="bg-white text-teal-600 hover:bg-gray-50"
            >
              Get Premium Report
            </Button>
            <Button
              variant="outline"
              className="border-white text-white hover:bg-white/10"
              onClick={handleRetakeTest}
            >
              Retake Test
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
