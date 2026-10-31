import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const StatisticsCard = ({ stat }) => {
  return (
    <div className="flex flex-col justify-between p-6 sm:p-7 rounded-3xl bg-white border border-[#A8B99A]/30 shadow-sm hover:shadow-md hover:border-[#153D2B]/40 transition-all duration-300">
      <div>
        <div className="flex items-center justify-between text-xs font-semibold text-[#92765A] mb-3">
          <span className="uppercase tracking-wider">{stat.label}</span>
          {stat.change && (
            <span className="inline-flex items-center gap-0.5 px-2 py-0.5 rounded-full bg-[#153D2B]/10 text-[#153D2B] text-[11px] font-bold">
              {stat.change}
              <ArrowUpRight className="w-3 h-3" />
            </span>
          )}
        </div>
        <div className="font-serif text-3xl sm:text-4xl font-extrabold text-[#153D2B] tracking-tight">
          {stat.formatted}
        </div>
      </div>
      <p className="text-xs text-[#5D6B60] mt-4 leading-relaxed border-t border-[#A8B99A]/20 pt-3">
        {stat.subtext}
      </p>
    </div>
  );
};

