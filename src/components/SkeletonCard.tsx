"use client";

import { Sparkles } from "lucide-react";

export default function SkeletonCard() {
  return (
    <div className="flex h-full flex-col justify-between rounded-2xl border border-indigo-200 bg-indigo-50/30 p-5 shadow-sm">
      <div>
        <div className="mb-3 flex items-center justify-between">
          <span className="inline-flex items-center gap-1.5 rounded-full bg-indigo-100 px-2.5 py-1 text-xs font-semibold text-indigo-700">
            <Sparkles className="h-3.5 w-3.5 animate-pulse" />
            AI 요약 생성 중...
          </span>
          <div className="h-3.5 w-20 animate-pulse rounded bg-slate-200" />
        </div>

        <div className="mb-4 space-y-2">
          <div className="h-5 w-11/12 animate-pulse rounded bg-slate-200" />
          <div className="h-5 w-2/3 animate-pulse rounded bg-slate-200" />
        </div>

        <div className="mb-4 space-y-2.5">
          <div className="h-3.5 w-full animate-pulse rounded bg-slate-200/80" />
          <div className="h-3.5 w-5/6 animate-pulse rounded bg-slate-200/80" />
          <div className="h-3.5 w-4/5 animate-pulse rounded bg-slate-200/80" />
        </div>
      </div>

      <div className="space-y-3 border-t border-indigo-100 pt-3.5">
        <div className="flex gap-1.5">
          <div className="h-5 w-16 animate-pulse rounded-md bg-slate-200/80" />
          <div className="h-5 w-14 animate-pulse rounded-md bg-slate-200/80" />
        </div>
        <div className="flex items-center justify-between">
          <div className="h-7 w-20 animate-pulse rounded-lg bg-slate-200/80" />
          <div className="h-7 w-14 animate-pulse rounded-lg bg-slate-200/80" />
        </div>
      </div>
    </div>
  );
}
