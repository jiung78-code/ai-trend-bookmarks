# AI Trend Clip — AI 기술 트렌드 요약 북마크 앱 (Week 1 MVP)

유튜브 영상이나 개발 커뮤니티 링크를 입력하면 3줄 핵심 요약과 태그로 정리해 주는 **AI 기술 트렌드 북마크 앱**의 1주차 MVP(프론트엔드 UI + Mock 데이터)입니다.

## 주요 기능

- **상단 URL 입력 및 자동 분류**: URL이 비어 있거나 `http`로 시작하지 않으면 안내 메시지를 표시합니다. `youtube.com` / `youtu.be` 링크는 `YouTube`, 그 외 링크는 `Community`로 자동 분류됩니다.
- **1.5초 AI 분석 로딩 UI**: `요약하기` 클릭 시 1.5초 동안 스켈레톤 카드를 표시한 뒤 Mock 3줄 요약 카드를 리스트 최상단에 추가합니다.
- **실시간 검색 및 태그 필터**: 제목과 요약 내용을 실시간 검색하고, 등록된 모든 태그 칩(`전체` 포함)으로 카드를 필터링할 수 있습니다.
- **반응형 카드 그리드**: 모바일 1열, 태블릿 2열, 데스크톱 3열 레이아웃으로 출처 배지, 제목, 3줄 요약, 태그, 저장 날짜, 원본 링크, 삭제 버튼을 제공합니다.

## 기술 스택

- **Framework**: Next.js (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Icons**: lucide-react

## 폴더 구조

```text
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx               # 메인 페이지 및 전체 상태 관리
├── components/
│   ├── BookmarkCard.tsx       # 북마크 카드 UI
│   ├── SearchAndFilter.tsx    # 실시간 검색창 및 태그 필터 칩
│   ├── SkeletonCard.tsx       # 1.5초 로딩 스켈레톤 카드
│   └── UrlInputBar.tsx        # URL 입력 및 유효성 검증 바
├── data/
│   └── mockBookmarks.ts       # 초기 한국어 Mock 데이터 4개 및 요약 생성기
└── types/
    └── bookmark.ts            # Bookmark 타입 정의
```

## 로컬 실행 방법

```bash
npm install
npm run dev
```

브라우저에서 `http://localhost:3000`으로 접속하면 바로 확인할 수 있습니다.

## 로드맵

- [x] **Week 1**: 프론트엔드 UI + Mock 데이터 기반 MVP
- [ ] **Week 2**: 실제 AI 요약 API 및 데이터베이스(Supabase/PostgreSQL) 연동
- [ ] **Week 3**: 사용자 인증 및 배포(Vercel)
