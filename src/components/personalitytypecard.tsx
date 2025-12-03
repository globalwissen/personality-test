import React from "react";

interface PersonalityTypeCardProps {
  type: string;
  title: string;
  description: string;
  color: string;
}

export const PersonalityTypeCard: React.FC<PersonalityTypeCardProps> = ({
  type,
  title,
  description,
  color,
}) => {
  return (
    <div className="bg-white rounded-3xl shadow-xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
      <div className={`h-2 ${color}`} />
      <div className="p-8">
        <div className="flex items-center gap-4 mb-4">
          <div
            className={`w-16 h-16 rounded-2xl ${color} flex items-center justify-center`}
          >
            <span className="text-2xl font-bold text-white">{type}</span>
          </div>
          <div>
            <h3 className="text-xl font-bold text-gray-800">{title}</h3>
            <p className="text-sm text-gray-500">{type}</p>
          </div>
        </div>
        <p className="text-gray-600 leading-relaxed">{description}</p>
      </div>
    </div>
  );
};
