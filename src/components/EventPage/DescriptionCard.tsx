import React from "react";

interface DescriptionCardProps {
  icon: React.ElementType;
  title: string;
  subtitle: string;
  items: string[];
  bulletIcons?: string[]; // array of emoji strings for bullets
  color?: string; // Tailwind class for background color
}

const DescriptionCard = ({
  icon: Icon,
  title,
  subtitle,
  items,
  bulletIcons,
  color,
}: DescriptionCardProps) => (
  <div className={`${color ?? "bg-[#e5eefc]"} rounded-xl p-6`}>
    <div className="flex items-center gap-3 mb-4">
      <div className="bg-[#FEB635]/10 p-3 rounded-lg">
        <Icon className="w-6 h-6 text-[#FEB635]" />
      </div>
      <h3 className="text-2xl font-bold text-[#1B4D98]">{title}</h3>
    </div>
    <h3 className="text-xl font-semibold text-[#1B4D98] mb-4">{subtitle}</h3>
    <ul className="space-y-3">
      {items.map((item, index) => (
        <li key={index} className="flex items-start">
          <span className="w-6 mr-2 text-gray-600">
            {bulletIcons && bulletIcons[index] ? bulletIcons[index] : "•"}
          </span>
          <span className="text-gray-600">{item}</span>
        </li>
      ))}
    </ul>
  </div>
);

export default DescriptionCard;
