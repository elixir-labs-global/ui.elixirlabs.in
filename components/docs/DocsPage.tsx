import React from "react";
import { DocsPageContent } from "./DocsPageContent";
import { AsideRight } from "./AsideRight";
import { docsNavigation } from "../../lib/docs-navs";
import DocsPrevNextButtons from "./DocsPrevNextButtons";

interface Doc {
  slug: string;
  label: string;
  description: string;
  content: React.ReactNode;
  headings: { level: number; text: string; slug: string }[];
  prev?: any;
  next?: any;
}

const DocsPage = ({ doc }: { doc: Doc }) => {
  return (
    <main className="min-h-screen md:pl-64 flex">
      {/* Content and Navigation buttons */}
      <div className="flex-1 flex flex-col">
        <DocsPageContent content={doc.content} />
        {doc.slug !== "introduction" && (
          <DocsPrevNextButtons prev={doc.prev} next={doc.next} />
        )}
      </div>

      {/* Right Sidebar */}
      <AsideRight headings={doc.headings} />
    </main>
  );
};

export default DocsPage;
