import React, { useState, useMemo } from 'react';
import { Compass, RotateCcw, AlertCircle, Sparkles, Car, Zap, ShoppingBag, Utensils, Info, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CategoryBreakdownChart, BenchmarkBarChart } from '../components/ImpactChart';

export const ImpactCalculator = () => {
  // Input State
  const [commuteKm, setCommuteKm] = useState(15);
  const [transportMode, setTransportMode] = useState('transit'); // 'bike', 'transit', 'ev', 'petrol'
  const [monthlyKwh, setMonthlyKwh] = useState(180);
  const [renewablePercent, setRenewablePercent] = useState(10);
  const [plasticBottles, setPlasticBottles] = useState(4);
  const [plasticTakeaways, setPlasticTakeaways] = useState(3);
  const [plasticBags, setPlasticBags] = useState(2);
  const [dietType, setDietType] = useState('vegetarian'); // 'vegan', 'vegetarian', 'flexitarian', 'meat'
  const [shoppingStyle, setShoppingStyle] = useState('moderate'); // 'mindful', 'moderate', 'frequent'

  // Calculations
  const results = useMemo(() => {
    // 1. Transport CO2 (kg/year)
    // Working days: ~250 days/year * commuteKm (roundtrip)
    const annualKm = commuteKm * 2 * 250;
    let transportFactor = 0.04; // transit
    if (transportMode === 'bike') transportFactor = 0.0;
    if (transportMode === 'ev') transportFactor = 0.05;
    if (transportMode === 'petrol') transportFactor = 0.18;
    const transportCO2 = Math.round(annualKm * transportFactor);

    // 2. Electricity CO2 (kg/year)
    // India grid factor roughly ~0.72 kg CO2 / kWh
    const annualKwh = monthlyKwh * 12;
    const effectiveGridKwh = annualKwh * (1 - renewablePercent / 100);
    const electricityCO2 = Math.round(effectiveGridKwh * 0.72);

    // 3. Plastic Impact (kg/year & items count)
    // Bottles: ~25g each. Takeaways: ~35g each. Bags: ~8g each.
    const annualBottles = plasticBottles * 52;
    const annualTakeaways = plasticTakeaways * 52;
    const annualBags = plasticBags * 52;
    const totalPlasticItems = annualBottles + annualTakeaways + annualBags;
    const totalPlasticKg = Math.round((annualBottles * 0.025 + annualTakeaways * 0.035 + annualBags * 0.008) * 10) / 10;
    // Plastic lifecycle carbon: ~4kg CO2 per kg of plastic
    const plasticCO2 = Math.round(totalPlasticKg * 4.2);

    // 4. Food CO2 (kg/year)
    let foodCO2 = 850; // vegetarian
    let waterLiters = 420000;
    if (dietType === 'vegan') {
      foodCO2 = 600;
      waterLiters = 280000;
    } else if (dietType === 'flexitarian') {
      foodCO2 = 1250;
      waterLiters = 650000;
    } else if (dietType === 'meat') {
      foodCO2 = 1950;
      waterLiters = 1100000;
    }

    // 5. Shopping / Goods CO2 (kg/year)
    let shoppingCO2 = 450;
    if (shoppingStyle === 'mindful') shoppingCO2 = 200;
    if (shoppingStyle === 'frequent') shoppingCO2 = 980;

    // Total CO2 in kg & Tonnes
    const totalCO2Kg = transportCO2 + electricityCO2 + plasticCO2 + foodCO2 + shoppingCO2;
    const totalTonnes = (totalCO2Kg / 1000).toFixed(2);

    // Chart breakdown
    const breakdown = [
      { name: 'Transport', value: transportCO2 },
      { name: 'Electricity', value: electricityCO2 },
      { name: 'Diet & Food', value: foodCO2 },
      { name: 'Goods & Fashion', value: shoppingCO2 },
      { name: 'Plastic Waste', value: plasticCO2 }
    ];

    // Identify highest contributor for tailored recommendations
    const highestDriver = [...breakdown].sort((a, b) => b.value - a.value)[0].name;

    return {
      totalTonnes,
      totalCO2Kg,
      totalPlasticKg,
      totalPlasticItems,
      waterThousandsLiters: Math.round(waterLiters / 1000),
      breakdown,
      highestDriver
    };
  }, [
    commuteKm,
    transportMode,
    monthlyKwh,
    renewablePercent,
    plasticBottles,
    plasticTakeaways,
    plasticBags,
    dietType,
    shoppingStyle
  ]);

  const handleReset = () => {
    setCommuteKm(15);
    setTransportMode('transit');
    setMonthlyKwh(180);
    setRenewablePercent(10);
    setPlasticBottles(4);
    setPlasticTakeaways(3);
    setPlasticBags(2);
    setDietType('vegetarian');
    setShoppingStyle('moderate');
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12">
      {/* Header */}
      <div className="space-y-3 text-left">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#153D2B]/10 text-xs font-semibold text-[#153D2B]">
          <Compass className="w-3.5 h-3.5" />
          <span>Interactive Ecological Telemetry</span>
        </div>
        <h1 className="font-serif text-3xl sm:text-5xl font-extrabold text-[#153D2B] tracking-tight">
          Personal Impact Calculator
        </h1>
        <p className="text-sm sm:text-base text-[#5D6B60] max-w-2xl leading-relaxed">
          Estimate your annual carbon footprint, plastic footprint, and resource intensity in real-time. Discover personalized, high-leverage sustainable swaps.
        </p>
      </div>

      {/* Main Grid: Inputs vs Results Dashboard */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
        {/* Left: Input Form Controls (7 cols) */}
        <div className="lg:col-span-7 bg-white p-6 sm:p-8 rounded-3xl border border-[#A8B99A]/30 shadow-sm space-y-8 text-left">
          <div className="flex items-center justify-between pb-4 border-b border-[#A8B99A]/20">
            <h2 className="font-serif text-xl font-bold text-[#153D2B]">
              Your Lifestyle Inputs
            </h2>
            <button
              onClick={handleReset}
              className="text-xs text-[#92765A] hover:text-[#153D2B] flex items-center gap-1 font-medium transition-colors cursor-pointer"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span>Reset Values</span>
            </button>
          </div>

          {/* Section 1: Travel & Commute */}
          <div className="space-y-4">
            <div className="flex items-center gap-2 text-sm font-bold text-[#153D2B]">
              <Car className="w-4 h-4 text-[#92765A]" />
              <span>1. Daily Commute & Transportation</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-[#5D6B60]">One-Way Distance:</span>
                <span className="text-[#153D2B] font-bold">{commuteKm} km</span>
              </div>
              <input
                type="range"
                min="0"
                max="80"
                step="1"
                value={commuteKm}
                onChange={(e) => setCommuteKm(Number(e.target.value))}
                className="w-full accent-[#153D2B] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#92765A]">
                <span>0 km (Work from home)</span>
                <span>80 km</span>
              </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 pt-1">
              {[
                { id: 'bike', label: 'Walk / Bicycle' },
                { id: 'transit', label: 'Bus / Metro' },
                { id: 'ev', label: 'Electric EV' },
                { id: 'petrol', label: 'Petrol / Diesel' }
              ].map((mode) => (
                <button
                  key={mode.id}
                  type="button"
                  onClick={() => setTransportMode(mode.id)}
                  className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                    transportMode === mode.id
                      ? 'bg-[#153D2B] text-[#F6F4EA] border-[#153D2B]'
                      : 'bg-[#F6F4EA] text-[#252B26] border-[#A8B99A]/30 hover:bg-white'
                  }`}
                >
                  {mode.label}
                </button>
              ))}
            </div>
          </div>

          {/* Section 2: Home Electricity */}
          <div className="space-y-4 pt-4 border-t border-[#A8B99A]/20">
            <div className="flex items-center gap-2 text-sm font-bold text-[#153D2B]">
              <Zap className="w-4 h-4 text-[#92765A]" />
              <span>2. Home Electricity & Energy Mix</span>
            </div>

            <div className="space-y-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-[#5D6B60]">Monthly Power Usage:</span>
                <span className="text-[#153D2B] font-bold">{monthlyKwh} kWh/month</span>
              </div>
              <input
                type="range"
                min="50"
                max="600"
                step="10"
                value={monthlyKwh}
                onChange={(e) => setMonthlyKwh(Number(e.target.value))}
                className="w-full accent-[#153D2B] cursor-pointer"
              />
              <div className="flex justify-between text-[10px] text-[#92765A]">
                <span>50 kWh (1 BHK)</span>
                <span>600 kWh (Large Villa)</span>
              </div>
            </div>

            <div className="space-y-2 pt-2">
              <div className="flex justify-between text-xs font-semibold">
                <span className="text-[#5D6B60]">Solar / Rooftop Clean Share:</span>
                <span className="text-[#153D2B] font-bold">{renewablePercent}% Clean</span>
              </div>
              <input
                type="range"
                min="0"
                max="100"
                step="5"
                value={renewablePercent}
                onChange={(e) => setRenewablePercent(Number(e.target.value))}
                className="w-full accent-[#153D2B] cursor-pointer"
              />
            </div>
          </div>

          {/* Section 3: Single-Use Plastics */}
          <div className="space-y-4 pt-4 border-t border-[#A8B99A]/20">
            <div className="flex items-center gap-2 text-sm font-bold text-[#153D2B]">
              <ShoppingBag className="w-4 h-4 text-[#92765A]" />
              <span>3. Weekly Single-Use Plastic Disposables</span>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
              <div className="p-3 bg-[#F6F4EA] rounded-2xl border border-[#A8B99A]/30 space-y-1">
                <span className="font-semibold text-[#252B26] block">Plastic Bottles / Wk:</span>
                <input
                  type="number"
                  min="0"
                  max="50"
                  value={plasticBottles}
                  onChange={(e) => setPlasticBottles(Math.max(0, Number(e.target.value)))}
                  className="w-full bg-white border border-[#A8B99A]/40 rounded-lg p-1.5 text-center font-bold text-[#153D2B]"
                />
              </div>

              <div className="p-3 bg-[#F6F4EA] rounded-2xl border border-[#A8B99A]/30 space-y-1">
                <span className="font-semibold text-[#252B26] block">Takeout Containers / Wk:</span>
                <input
                  type="number"
                  min="0"
                  max="30"
                  value={plasticTakeaways}
                  onChange={(e) => setPlasticTakeaways(Math.max(0, Number(e.target.value)))}
                  className="w-full bg-white border border-[#A8B99A]/40 rounded-lg p-1.5 text-center font-bold text-[#153D2B]"
                />
              </div>

              <div className="p-3 bg-[#F6F4EA] rounded-2xl border border-[#A8B99A]/30 space-y-1">
                <span className="font-semibold text-[#252B26] block">Plastic Carry Bags / Wk:</span>
                <input
                  type="number"
                  min="0"
                  max="30"
                  value={plasticBags}
                  onChange={(e) => setPlasticBags(Math.max(0, Number(e.target.value)))}
                  className="w-full bg-white border border-[#A8B99A]/40 rounded-lg p-1.5 text-center font-bold text-[#153D2B]"
                />
              </div>
            </div>
          </div>

          {/* Section 4: Diet & Food */}
          <div className="space-y-4 pt-4 border-t border-[#A8B99A]/20">
            <div className="flex items-center gap-2 text-sm font-bold text-[#153D2B]">
              <Utensils className="w-4 h-4 text-[#92765A]" />
              <span>4. Primary Dietary Lifestyle</span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
              {[
                { id: 'vegan', label: '100% Plant-Based' },
                { id: 'vegetarian', label: 'Vegetarian' },
                { id: 'flexitarian', label: 'Flexitarian' },
                { id: 'meat', label: 'Regular Meat' }
              ].map((d) => (
                <button
                  key={d.id}
                  type="button"
                  onClick={() => setDietType(d.id)}
                  className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                    dietType === d.id
                      ? 'bg-[#153D2B] text-[#F6F4EA] border-[#153D2B]'
                      : 'bg-[#F6F4EA] text-[#252B26] border-[#A8B99A]/30 hover:bg-white'
                  }`}
                >
                  {d.label}
                </button>
              ))}
            </div>
          </div>

          {/* Section 5: Shopping & Consumerism */}
          <div className="space-y-4 pt-4 border-t border-[#A8B99A]/20">
            <div className="flex items-center gap-2 text-sm font-bold text-[#153D2B]">
              <Sparkles className="w-4 h-4 text-[#92765A]" />
              <span>5. Wardrobe & Shopping Habits</span>
            </div>

            <div className="grid grid-cols-3 gap-2">
              {[
                { id: 'mindful', label: 'Mindful / Slow' },
                { id: 'moderate', label: 'Moderate' },
                { id: 'frequent', label: 'Frequent Online' }
              ].map((s) => (
                <button
                  key={s.id}
                  type="button"
                  onClick={() => setShoppingStyle(s.id)}
                  className={`py-2 px-3 rounded-xl text-xs font-medium border text-center transition-all cursor-pointer ${
                    shoppingStyle === s.id
                      ? 'bg-[#153D2B] text-[#F6F4EA] border-[#153D2B]'
                      : 'bg-[#F6F4EA] text-[#252B26] border-[#A8B99A]/30 hover:bg-white'
                  }`}
                >
                  {s.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Right: Results Dashboard & Visual Analytics (5 cols) */}
        <div className="lg:col-span-5 space-y-6">
          {/* Main Footprint Highlight Card */}
          <div className="bg-[#153D2B] text-[#F6F4EA] p-6 sm:p-8 rounded-3xl shadow-xl space-y-6 text-left relative overflow-hidden">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase tracking-widest text-[#A8B99A] font-bold">
                Your Annual Footprint
              </span>
              <span className="px-2.5 py-1 rounded-full bg-white/10 text-[10px] text-white/80 font-medium">
                Live Estimate
              </span>
            </div>

            <div>
              <div className="font-serif text-5xl sm:text-6xl font-extrabold text-white tracking-tight">
                {results.totalTonnes}
                <span className="text-lg font-normal text-[#A8B99A] ml-2">Tonnes CO₂e</span>
              </div>
              <p className="text-xs text-white/70 mt-2">
                Estimated total greenhouse gas equivalent emitted across your commute, home, diet, and goods.
              </p>
            </div>

            {/* Micro Stats Grid */}
            <div className="grid grid-cols-2 gap-3 pt-4 border-t border-white/10 text-xs">
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-white/60 block text-[11px]">Plastic Generated:</span>
                <span className="text-base font-bold text-[#A8B99A]">{results.totalPlasticKg} kg / yr</span>
                <span className="text-[10px] text-white/50 block mt-0.5">({results.totalPlasticItems} items)</span>
              </div>
              <div className="p-3 rounded-2xl bg-white/5 border border-white/10">
                <span className="text-white/60 block text-[11px]">Water Intensity:</span>
                <span className="text-base font-bold text-[#A8B99A]">{results.waterThousandsLiters}k Liters</span>
                <span className="text-[10px] text-white/50 block mt-0.5">Dietary supply chain</span>
              </div>
            </div>
          </div>

          {/* Interactive Recharts: Category Breakdown */}
          <div className="bg-white p-6 rounded-3xl border border-[#A8B99A]/30 shadow-xs space-y-4 text-left">
            <h3 className="font-serif text-lg font-bold text-[#153D2B]">
              Emissions Breakdown by Category
            </h3>
            <CategoryBreakdownChart data={results.breakdown} />
          </div>

          {/* Interactive Recharts: Benchmark Bar Chart */}
          <div className="bg-white p-6 rounded-3xl border border-[#A8B99A]/30 shadow-xs space-y-4 text-left">
            <h3 className="font-serif text-lg font-bold text-[#153D2B]">
              Global & National Comparison
            </h3>
            <BenchmarkBarChart userFootprintTonnes={results.totalTonnes} />
          </div>

          {/* Personalized Recommendations Card */}
          <div className="bg-[#A8B99A]/20 p-6 rounded-3xl border border-[#A8B99A]/40 text-left space-y-3">
            <div className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#153D2B]" />
              <h4 className="font-serif text-base font-bold text-[#153D2B]">
                Highest Impact Opportunity: {results.highestDriver}
              </h4>
            </div>
            <p className="text-xs text-[#5D6B60] leading-relaxed">
              Based on your inputs, your largest environmental lever is in <strong className="text-[#153D2B]">{results.highestDriver}</strong>. Making even two mindful swaps this month can trim up to 35% of your personal footprint.
            </p>
            <div className="pt-2">
              <Link
                to="/marketplace"
                className="inline-flex items-center gap-2 text-xs font-bold text-[#153D2B] hover:text-[#1D543B] transition-colors"
              >
                <span>Find verified low-impact alternatives</span>
                <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>

          {/* Scientific Disclaimer Note */}
          <div className="p-4 rounded-2xl bg-[#ECE8D7] text-[11px] text-[#5D6B60] flex items-start gap-2.5 text-left">
            <Info className="w-4 h-4 text-[#92765A] shrink-0 mt-0.5" />
            <p className="leading-relaxed">
              <strong>Methodology Note:</strong> Calculations utilize peer-reviewed life-cycle assessment (LCA) averages from the IPCC and national grid emission factors. These figures represent educational benchmarks rather than certified corporate audits.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

