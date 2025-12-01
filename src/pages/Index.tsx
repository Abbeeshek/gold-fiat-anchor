import { Button } from "@/components/ui/button";
import FeatureCard from "@/components/FeatureCard";
import { Shield, Coins, Globe, TrendingUp, Lock, Zap, Users, ArrowRight } from "lucide-react";
import heroImage from "@/assets/hero-image.jpg";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-holographic" />
        <div 
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `url(${heroImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/80 to-background" />
        
        <div className="container mx-auto px-6 relative z-10 text-center animate-fade-in">
          <div className="max-w-4xl mx-auto">
            <h1 className="text-5xl md:text-7xl font-orbitron font-black mb-6 bg-gradient-gold bg-clip-text text-transparent animate-float">
              MiniBitcoin Stablecoin
            </h1>
            <div className="h-1 w-32 bg-gradient-gold mx-auto mb-8 rounded-full animate-glow" />
            <p className="text-2xl md:text-3xl font-orbitron font-bold mb-4 text-gold-light">
              Backed by Gold & Paired with Global Currencies
            </p>
            <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
              The next-generation stablecoin designed for trust, transparency, and universal stability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button 
                size="lg" 
                className="bg-gradient-gold text-primary-foreground hover:shadow-glow-gold transition-all duration-300 font-orbitron font-bold text-lg px-8 py-6 group"
              >
                Get Started with Stability
                <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button 
                size="lg" 
                variant="outline"
                className="border-gold text-gold hover:bg-gold hover:text-primary-foreground font-orbitron font-bold text-lg px-8 py-6"
              >
                Learn More
              </Button>
            </div>
            <p className="mt-8 text-sm text-gold-light font-medium">
              Paired with major fiat currencies worldwide – ensuring consistent value wherever you are.
            </p>
          </div>
        </div>
      </section>

      {/* What We Do Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 text-gold">
              What We Do
            </h2>
            <div className="h-1 w-24 bg-gradient-gold mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            <FeatureCard
              icon={<Coins size={40} />}
              title="Gold-Backed Value"
              description="Each coin backed by real gold reserves, providing tangible asset security and intrinsic value."
            />
            <FeatureCard
              icon={<Globe size={40} />}
              title="Fiat-Paired Stability"
              description="Paired with major national currencies for reliable value across global markets and economies."
            />
            <FeatureCard
              icon={<Shield size={40} />}
              title="Transparent & Auditable"
              description="Real-time reporting and verifiable backing ensure complete transparency and trust."
            />
            <FeatureCard
              icon={<TrendingUp size={40} />}
              title="Global Accessibility"
              description="Easy use across borders, exchanges, and wallets with seamless integration."
            />
          </div>
        </div>
      </section>

      {/* Our Technology Section */}
      <section className="py-24 bg-card/50 relative">
        <div className="absolute inset-0 bg-gradient-holographic opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 text-gold">
              Our Technology
            </h2>
            <div className="h-1 w-24 bg-gradient-gold mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            <FeatureCard
              icon={<Lock size={40} />}
              title="Smart Contracts"
              description="Automated issuance, redemption, and transfers with secure blockchain technology."
            />
            <FeatureCard
              icon={<Shield size={40} />}
              title="Secure Blockchain"
              description="Immutable and transparent ledger ensuring complete security and traceability."
            />
            <FeatureCard
              icon={<Zap size={40} />}
              title="Real-Time Tracking"
              description="Monitor gold reserves and fiat pairing live with instant verification."
            />
            <FeatureCard
              icon={<Globe size={40} />}
              title="Cross-Chain Compatible"
              description="Smooth integration into crypto ecosystems across multiple blockchain networks."
            />
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="py-24 relative">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 text-gold">
              Why Choose MiniBitcoin
            </h2>
            <div className="h-1 w-24 bg-gradient-gold mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto animate-fade-in">
            <FeatureCard
              icon={<Shield size={40} />}
              title="Protection Against Volatility"
              description="Shields you from the extreme price swings of traditional cryptocurrencies."
            />
            <FeatureCard
              icon={<Coins size={40} />}
              title="Tangible Asset Backing"
              description="Backed by real gold and fiat currencies, not just digital promises."
            />
            <FeatureCard
              icon={<Lock size={40} />}
              title="Trusted & Transparent"
              description="Auditable system providing complete confidence for investors and users."
            />
            <FeatureCard
              icon={<Globe size={40} />}
              title="Seamless Integration"
              description="Works effortlessly with MiniBitcoin ecosystem and global platforms."
            />
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 bg-card/50 relative">
        <div className="absolute inset-0 bg-gradient-holographic opacity-30" />
        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-orbitron font-bold mb-4 text-gold">
              Use Cases
            </h2>
            <div className="h-1 w-24 bg-gradient-gold mx-auto rounded-full" />
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 animate-fade-in">
            <FeatureCard
              icon={<Zap size={40} />}
              title="Digital Payments"
              description="Fast, low-fee cross-border transactions with instant settlement."
            />
            <FeatureCard
              icon={<TrendingUp size={40} />}
              title="Savings & Investments"
              description="Stable digital asset backed by gold for long-term wealth preservation."
            />
            <FeatureCard
              icon={<Shield size={40} />}
              title="Trading & Hedging"
              description="Hedge against crypto and fiat volatility with stable value protection."
            />
            <FeatureCard
              icon={<Users size={40} />}
              title="Global Remittances"
              description="Instant and secure worldwide transfers with minimal fees."
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-holographic" />
        <div className="absolute inset-0 bg-gradient-to-r from-background via-transparent to-background" />
        <div className="container mx-auto px-6 relative z-10 text-center animate-fade-in">
          <h2 className="text-4xl md:text-6xl font-orbitron font-black mb-6 bg-gradient-gold bg-clip-text text-transparent">
            Anchor Your Wealth with MiniBitcoin Stablecoin
          </h2>
          <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Join the future of stable cryptocurrency. Backed by real assets, trusted globally.
          </p>
          <Button 
            size="lg" 
            className="bg-gradient-gold text-primary-foreground hover:shadow-glow-gold transition-all duration-300 font-orbitron font-bold text-xl px-12 py-8 group"
          >
            Get Started with Stability
            <ArrowRight className="ml-2 group-hover:translate-x-1 transition-transform" size={24} />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-border">
        <div className="container mx-auto px-6 text-center">
          <p className="text-muted-foreground">
            © 2025 MiniBitcoin Stablecoin. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
