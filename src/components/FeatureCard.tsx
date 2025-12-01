import { ReactNode } from "react";

interface FeatureCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const FeatureCard = ({ icon, title, description }: FeatureCardProps) => {
  return (
    <div className="group relative bg-card border border-border rounded-lg p-6 hover:border-gold transition-all duration-300 hover:shadow-glow-gold">
      <div className="absolute inset-0 bg-gradient-gold opacity-0 group-hover:opacity-5 rounded-lg transition-opacity duration-300" />
      <div className="relative z-10">
        <div className="mb-4 text-gold group-hover:scale-110 transition-transform duration-300">
          {icon}
        </div>
        <h3 className="text-xl font-orbitron font-bold mb-2 text-foreground">
          {title}
        </h3>
        <p className="text-muted-foreground leading-relaxed">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;
