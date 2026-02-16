import { AsideRight } from "./AsideRight";
import { DocsPageContent } from "./DocsPageContent";
import DocsPrevNextButtons from "./DocsPrevNextButtons";
import { Doc } from "@/types/docs";

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
