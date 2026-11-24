export type SourceType = "youtube" | "community";

export interface Bookmark {
  id: string;
  url: string;
  sourceType: SourceType;
  title: string;
  summary: [string, string, string];
  tags: string[];
  createdAt: string;
}
