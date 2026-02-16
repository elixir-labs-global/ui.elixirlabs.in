export interface Doc {
  slug: string;
  label: string;
  description: string;
  content: React.ReactNode;
  headings: { level: number; text: string; slug: string }[];
  prev?: { label: string; slug: string } | null;
  next?: { label: string; slug: string } | null;
}
