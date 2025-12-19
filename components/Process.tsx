import React from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from 'recharts';
import { SectionWrapper } from './ui/SectionWrapper';
import { BorderGradient } from './ui/BorderGradient';
import { Activity, Layers, Zap, Clock, TrendingUp, Code, FileText, Search, Settings } from 'lucide-react';

const RADAR_DATA = [
  { subject: 'System', A: 85, fullMark: 100 },
  { subject: 'Process', A: 70, fullMark: 100 },
  { subject: 'Speed', A: 45, fullMark: 100 },
  { subject: 'Manual', A: 90, fullMark: 100 },
  { subject: 'Repetition', A: 76, fullMark: 100 },
];

export const Process: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <SectionWrapper className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-flex items-center text-xs text-neutral-300 bg-neutral-900/70 border border-white/10 rounded-full px-3 py-1 mb-6">
          How We Work
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-4">
          Transform Your Workflow
        </h2>
        <p className="text-neutral-300 text-base">
          From initial discovery to full deployment, we guide you through every stage of your automation journey.
        </p>
      </SectionWrapper>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Phase 1 */}
        <SectionWrapper delay={200}>
          <BorderGradient className="bg-neutral-900/50 rounded-2xl p-6 sm:p-8 h-full ring-1 ring-white/10">
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <span className="inline-flex items-center text-xs text-neutral-300 bg-neutral-800/70 ring-1 ring-white/10 rounded-full px-2.5 py-1 mb-4">
              Phase 1
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-2">Discovery & Analysis</h3>
            <p className="text-neutral-300 text-sm sm:text-base mb-6">
              We dive deep into your operations to identify bottlenecks and opportunities for intelligent automation.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Radar Chart */}
              <BorderGradient className="bg-neutral-900/60 rounded-xl p-4 ring-1 ring-white/10 min-h-[250px] flex flex-col items-center justify-center">
                <div className="w-full h-[200px]">
                  <ResponsiveContainer width="100%" height="100%">
                    <RadarChart cx="50%" cy="50%" outerRadius="70%" data={RADAR_DATA}>
                      <PolarGrid stroke="rgba(255,255,255,0.1)" />
                      <PolarAngleAxis dataKey="subject" tick={{ fill: 'rgba(255,255,255,0.5)', fontSize: 10 }} />
                      <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                      <Radar
                        name="Analysis"
                        dataKey="A"
                        stroke="#a855f7"
                        strokeWidth={2}
                        fill="url(#colorUv)"
                        fillOpacity={0.5}
                      />
                      <defs>
                        <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#a855f7" stopOpacity={0.6}/>
                            <stop offset="95%" stopColor="#a855f7" stopOpacity={0.1}/>
                        </linearGradient>
                      </defs>
                    </RadarChart>
                  </ResponsiveContainer>
                </div>
                <div className="mt-2 text-xs text-neutral-400">Evaluating operational metrics...</div>
              </BorderGradient>

              {/* Checklist */}
              <div className="space-y-2">
                {[
                  { icon: Activity, text: 'Infrastructure audit', status: 'Complete', color: 'text-neutral-300' },
                  { icon: Layers, text: 'Workflow mapping', status: 'In Progress', color: 'text-neutral-300' },
                  { icon: Zap, text: 'Performance analysis', status: 'Critical', color: 'text-neutral-300' },
                  { icon: Clock, text: 'Time consumption', status: '85%', color: 'text-neutral-300' },
                  { icon: TrendingUp, text: 'Automation potential', status: 'Very High', color: 'text-neutral-300' },
                ].map((item, idx) => (
                  <div key={idx} className="flex items-center justify-between rounded-lg bg-neutral-900/60 ring-1 ring-white/10 px-3 py-2">
                    <div className="flex items-center gap-2">
                      <item.icon className="w-4 h-4 text-neutral-300" />
                      <span className="text-sm">{item.text}</span>
                    </div>
                    <span className="text-[10px] text-neutral-400">{item.status}</span>
                  </div>
                ))}
              </div>
            </div>
          </BorderGradient>
        </SectionWrapper>

        {/* Phase 2 */}
        <SectionWrapper delay={400}>
          <BorderGradient className="bg-neutral-900/50 rounded-2xl p-6 sm:p-8 h-full ring-1 ring-white/10">
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
            <span className="inline-flex items-center text-xs text-neutral-300 bg-neutral-800/70 ring-1 ring-white/10 rounded-full px-2.5 py-1 mb-4">
              Phase 2
            </span>
            <h3 className="text-2xl sm:text-3xl font-semibold mb-2">Build & Integrate</h3>
            <p className="text-neutral-300 text-sm sm:text-base mb-6">
              Our engineers create custom solutions that seamlessly integrate with your existing systems and processes.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
              <div className="md:col-span-1 flex md:flex-col gap-2">
                 {[FileText, Search, Settings].map((Icon, idx) => (
                    <BorderGradient key={idx} as="button" className="h-9 w-9 inline-flex items-center justify-center rounded-lg bg-neutral-900/60 ring-1 ring-white/10 hover:bg-neutral-900 transition">
                        <Icon className="w-4 h-4 text-neutral-200" />
                    </BorderGradient>
                 ))}
              </div>

              <div className="md:col-span-4">
                <BorderGradient className="rounded-xl bg-neutral-950/70 ring-1 ring-white/10 overflow-hidden">
                    <div className="flex items-center gap-2 px-4 py-2 bg-neutral-900/70">
                        <span className="h-2.5 w-2.5 rounded-full bg-red-500/70"></span>
                        <span className="h-2.5 w-2.5 rounded-full bg-yellow-500/70"></span>
                        <span className="h-2.5 w-2.5 rounded-full bg-green-500/70"></span>
                        <span className="ml-auto text-[10px] text-neutral-400">workflow_engine.py</span>
                    </div>
                    <pre className="text-[12px] leading-6 px-4 py-4 overflow-auto text-neutral-200 font-mono">
                        <span className="text-neutral-500"># Intelligent workflow processor</span>{'\n'}
                        <span className="text-purple-400">class</span> <span className="text-sky-300">WorkflowEngine</span>:{'\n'}
                        {'    '}<span className="text-purple-400">def</span> <span className="text-emerald-300">process_task</span>(self, task):{'\n'}
                        {'        '}<span className="text-purple-400">if</span> task.priority <span className="text-purple-400">==</span> <span className="text-emerald-300">'high'</span>:{'\n'}
                        {'            '}<span className="text-purple-400">return</span> self.fast_track(task)
                    </pre>
                </BorderGradient>
                
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-3 gap-2">
                    <div className="flex items-center gap-2 rounded-lg bg-neutral-900/60 ring-1 ring-white/10 px-3 py-2">
                        <Code className="w-4 h-4 text-blue-400" />
                        <span className="text-xs text-neutral-300">Modular</span>
                    </div>
                    <div className="flex items-center gap-2 rounded-lg bg-neutral-900/60 ring-1 ring-white/10 px-3 py-2">
                        <Zap className="w-4 h-4 text-emerald-400" />
                        <span className="text-xs text-neutral-300">Fast</span>
                    </div>
                     <div className="flex items-center gap-2 rounded-lg bg-neutral-900/60 ring-1 ring-white/10 px-3 py-2">
                        <TrendingUp className="w-4 h-4 text-amber-400" />
                        <span className="text-xs text-neutral-300">Efficient</span>
                    </div>
                </div>
              </div>
            </div>

          </BorderGradient>
        </SectionWrapper>
      </div>
    </section>
  );
};