"use client";

import { useMemo, useState } from "react";
import { Bookmark as BookmarkIcon, Inbox } from "lucide-react";
import BookmarkCard from "@/components/BookmarkCard";
import SearchAndFilter from "@/components/SearchAndFilter";
import SkeletonCard from "@/components/SkeletonCard";
import UrlInputBar from "@/components/UrlInputBar";
import { createMockBookmark, INITIAL_BOOKMARKS } from "@/data/mockBookmarks";
import { Bookmark } from "@/types/bookmark";

export default function HomePage() {
  const [bookmarks, setBookmarks] = useState<Bookmark[]>(INITIAL_BOOKMARKS);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTag, setSelectedTag] = useState("전체");
  const [isLoading, setIsLoading] = useState(false);

  const allTags = useMemo(() => {
    const tagSet = new Set<string>();
    bookmarks.forEach((bm) => bm.tags.forEach((tag) => tagSet.add(tag)));
    return ["전체", ...Array.from(tagSet)];
  }, [bookmarks]);

  const filteredBookmarks = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return bookmarks.filter((bm) => {
      const matchesTag =
        selectedTag === "전체" || bm.tags.includes(selectedTag);
      const matchesSearch =
        !q ||
        bm.title.toLowerCase().includes(q) ||
        bm.summary.some((line) => line.toLowerCase().includes(q));
      return matchesTag && matchesSearch;
    });
  }, [bookmarks, searchQuery, selectedTag]);

  const handleAddUrl = (url: string) => {
    setIsLoading(true);
    setSelectedTag("전체");
    setSearchQuery("");

    setTimeout(() => {
      const newBookmark = createMockBookmark(url);
      setBookmarks((prev) => [newBookmark, ...prev]);
      setIsLoading(false);
    }, 1500);
  };

  const handleDelete = (id: string) => {
    setBookmarks((prev) => {
      const next = prev.filter((bm) => bm.id !== id);
      if (
        selectedTag !== "전체" &&
        !next.some((bm) => bm.tags.includes(selectedTag))
      ) {
        setSelectedTag("전체");
      }
      return next;
    });
  };

  return (
    <div className="min-h-screen bg-slate-50/70">
      <header className="sticky top-0 z-10 border-b border-slate-200/80 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6">
          <div className="flex items-center gap-2.5">
            <div className="flex h-9 w-9 items-center justify-center rounded-xl bg-indigo-600 text-white shadow-sm">
              <BookmarkIcon className="h-5 w-5" />
            </div>
            <div>
              <h1 className="text-lg font-bold tracking-tight text-slate-900">
                AI Trend Clip
              </h1>
              <p className="text-xs text-slate-500">
                AI 기술 트렌드 3줄 요약 북마크 · Week 1 MVP
              </p>
            </div>
          </div>

          <span className="hidden rounded-full border border-indigo-200 bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700 sm:inline-flex">
            Mock AI Mode
          </span>
        </div>
      </header>

      <main className="mx-auto max-w-6xl space-y-6 px-4 py-6 sm:px-6 sm:py-8">
        <UrlInputBar onAddUrl={handleAddUrl} isLoading={isLoading} />

        <SearchAndFilter
          searchQuery={searchQuery}
          onSearchChange={setSearchQuery}
          tags={allTags}
          selectedTag={selectedTag}
          onSelectTag={setSelectedTag}
          totalCount={filteredBookmarks.length}
        />

        {filteredBookmarks.length === 0 && !isLoading ? (
          <div className="flex flex-col items-center justify-center rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <Inbox className="mb-3 h-10 w-10 text-slate-300" />
            <p className="text-sm font-semibold text-slate-700">
              조건에 맞는 북마크가 없습니다
            </p>
            <p className="mt-1 text-xs text-slate-500">
              다른 검색어나 태그를 선택하거나 새 URL을 추가해 보세요.
            </p>
            {(searchQuery || selectedTag !== "전체") && (
              <button
                type="button"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedTag("전체");
                }}
                className="mt-4 rounded-lg bg-indigo-50 px-3.5 py-2 text-xs font-semibold text-indigo-600 transition hover:bg-indigo-100"
              >
                필터 초기화
              </button>
            )}
          </div>
        ) : (
          <section className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
            {isLoading && <SkeletonCard />}
            {filteredBookmarks.map((bookmark) => (
              <BookmarkCard
                key={bookmark.id}
                bookmark={bookmark}
                onDelete={handleDelete}
                onTagClick={setSelectedTag}
              />
            ))}
          </section>
        )}
      </main>
    </div>
  );
}
