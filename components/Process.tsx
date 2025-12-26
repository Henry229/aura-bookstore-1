import React from 'react';
import { SectionWrapper } from './ui/SectionWrapper';
import { BorderGradient } from './ui/BorderGradient';
import { Layers, Search, PenTool, BookOpen, Mic, Youtube } from 'lucide-react';

export const Process: React.FC = () => {
  return (
    <section className="py-24 max-w-7xl mx-auto px-6">
      <SectionWrapper className="text-center max-w-2xl mx-auto mb-12">
        <span className="inline-flex items-center text-xs text-neutral-300 bg-neutral-900/70 border border-white/10 rounded-full px-3 py-1 mb-6">
          이렇게 공부해요
        </span>
        <h2 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight mb-4">
          쏘피쌤과 함께하는 학습 여정
        </h2>
        <p className="text-neutral-300 text-base">
          워크북 예습부터 올쏘의 영어 앱으로 복습까지, 단계별 학습으로 영어 실력을 키워보세요.
        </p>
      </SectionWrapper>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Phase 1 - Workbook 공부 순서 */}
        <SectionWrapper delay={200}>
          <BorderGradient className="bg-neutral-900/50 rounded-2xl p-6 sm:p-8 h-full ring-1 ring-white/10 relative overflow-hidden transition-all duration-500 hover:ring-white/50 hover:shadow-[0_0_30px_rgba(255,255,255,0.15)]">
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* Background Gradient Blur Effect */}
            <div className="absolute -left-20 -top-20 w-80 h-80 bg-blue-500/25 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Phase 1 Badge */}
            <div className="flex justify-center mb-6">
              <span className="inline-flex items-center text-sm font-semibold text-white bg-gradient-to-r from-blue-500 to-blue-800 rounded-full px-4 py-1.5 shadow-lg shadow-blue-500/20">
                Phase 1
              </span>
            </div>

            <h3 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-10">Workbook 공부 순서</h3>

            {/* Timeline List */}
            <div className="flex flex-col gap-8">
              {/* Step 1 - Preview Page */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full ring-2 ring-blue-500 flex items-center justify-center">
                    <Search className="w-5 h-5 text-blue-400" />
                  </div>
                  <div className="w-0.5 h-16 bg-blue-500/50 mt-2"></div>
                </div>
                <div className="pt-1">
                  <h4 className="text-lg font-semibold text-blue-400 mb-1">Preview Page</h4>
                  <p className="text-neutral-400 text-sm">새로운 단어/표현 학습, 필수 English Tip 배우기</p>
                </div>
              </div>

              {/* Step 2 - Warm-Up Page */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full ring-2 ring-yellow-500 flex items-center justify-center">
                    <Layers className="w-5 h-5 text-yellow-400" />
                  </div>
                  <div className="w-0.5 h-16 bg-yellow-500/50 mt-2"></div>
                </div>
                <div className="pt-1">
                  <h4 className="text-lg font-semibold text-yellow-400 mb-1">Warm-Up Page</h4>
                  <p className="text-neutral-400 text-sm">Preview 내용 토대로 문제 풀기</p>
                </div>
              </div>

              {/* Step 3 - Main Exercise Page */}
              <div className="flex items-start gap-4">
                <div className="flex flex-col items-center">
                  <div className="w-10 h-10 rounded-full ring-2 ring-emerald-500 flex items-center justify-center">
                    <Youtube className="w-5 h-5 text-emerald-400" />
                  </div>
                </div>
                <div className="pt-1">
                  <h4 className="text-lg font-semibold text-emerald-400 mb-1">Main Exercise Page</h4>
                  <p className="text-neutral-400 text-sm">국문 문장을 보고 스스로 영작, 쏘피쌤 유튜브로 비교 및 학습 마무리</p>
                </div>
              </div>
            </div>
          </BorderGradient>
        </SectionWrapper>

        {/* Phase 2 - 온라인 강의 공부 순서 */}
        <SectionWrapper delay={400}>
          <BorderGradient className="bg-neutral-900/50 rounded-2xl p-6 sm:p-8 h-full ring-1 ring-white/10 relative overflow-hidden">
            <div className="absolute inset-x-0 -top-px h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

            {/* Background Gradient Blur Effect */}
            <div className="absolute -right-20 -top-20 w-80 h-80 bg-purple-500/25 rounded-full blur-[100px] pointer-events-none"></div>

            {/* Phase 2 Badge */}
            <div className="flex justify-center mb-4">
              <span className="inline-flex items-center text-sm font-semibold text-white bg-gradient-to-r from-purple-500 to-purple-600 rounded-full px-4 py-1.5 shadow-lg shadow-purple-500/20">
                Phase 2
              </span>
            </div>

            <h3 className="text-2xl sm:text-3xl font-bold text-center mb-8">올쏘의 영어 앱 공부 순서</h3>

            {/* Vertical Flow Steps */}
            <div className="flex flex-col items-center gap-3">
              {/* Step 1 - 영작연습 */}
              <div className="w-full max-w-sm">
                <div className="rounded-xl overflow-hidden ring-1 ring-rose-500/30 bg-neutral-900/60">
                  <div className="bg-gradient-to-r from-rose-500 to-rose-600 px-4 py-2">
                    <h4 className="text-white font-semibold text-center text-sm">1. 영작연습</h4>
                  </div>
                  <div className="p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-neutral-800/80 flex items-center justify-center ring-1 ring-white/10 shrink-0">
                      <PenTool className="w-5 h-5 text-rose-400" />
                    </div>
                    <div className="flex-1 space-y-0.5">
                      <p className="text-xs text-neutral-200">- 한글 문장을 영어로 작성</p>
                      <p className="text-xs text-neutral-200">- 문법과 표현 연습</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-3 bg-gradient-to-b from-rose-500 to-violet-500"></div>
                <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-violet-500"></div>
              </div>

              {/* Step 2 - 플래쉬카드 */}
              <div className="w-full max-w-sm">
                <div className="rounded-xl overflow-hidden ring-1 ring-violet-500/30 bg-neutral-900/60">
                  <div className="bg-gradient-to-r from-violet-500 to-violet-600 px-4 py-2">
                    <h4 className="text-white font-semibold text-center text-sm">2. 플래쉬카드</h4>
                  </div>
                  <div className="p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-neutral-800/80 flex items-center justify-center ring-1 ring-white/10 shrink-0">
                      <BookOpen className="w-5 h-5 text-violet-400" />
                    </div>
                    <div className="flex-1 space-y-0.5">
                      <p className="text-xs text-neutral-200">- 핵심 표현 암기</p>
                      <p className="text-xs text-neutral-200">- 반복 학습으로 기억력 강화</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Arrow Down */}
              <div className="flex flex-col items-center">
                <div className="w-0.5 h-3 bg-gradient-to-b from-violet-500 to-cyan-500"></div>
                <div className="w-0 h-0 border-l-[5px] border-l-transparent border-r-[5px] border-r-transparent border-t-[6px] border-t-cyan-500"></div>
              </div>

              {/* Step 3 - 말하기연습 */}
              <div className="w-full max-w-sm">
                <div className="rounded-xl overflow-hidden ring-1 ring-cyan-500/30 bg-neutral-900/60">
                  <div className="bg-gradient-to-r from-cyan-500 to-cyan-600 px-4 py-2">
                    <h4 className="text-white font-semibold text-center text-sm">3. 말하기연습</h4>
                  </div>
                  <div className="p-3 flex items-center gap-3">
                    <div className="w-10 h-10 rounded-lg bg-neutral-800/80 flex items-center justify-center ring-1 ring-white/10 shrink-0">
                      <Mic className="w-5 h-5 text-cyan-400" />
                    </div>
                    <div className="flex-1 space-y-0.5">
                      <p className="text-xs text-neutral-200">- 음성으로 직접 말하기</p>
                      <p className="text-xs text-neutral-200">- 발음과 유창성 향상</p>
                    </div>
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