import React from "react";
import { DocsPageContent } from "./DocsPageContent";
import { AsideRight } from "./AsideRight";

const DocsPage = ({ doc }: any) => {
  return (
    <main className="min-h-screen px-6 md:pl-64 flex">
      {/* Content */}
      <DocsPageContent content={doc.content} />

      {/* Right Sidebar */}
      <AsideRight headings={doc.headings} />
    </main>
  );
};

export default DocsPage;
