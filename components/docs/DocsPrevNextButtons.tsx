import React from "react";
import Link from "next/link";

const DocsPrevNextButtons = ({ prev, next }: { prev?: any; next?: any }) => {
  return (
    <nav className="flex justify-between max-w-3xl mx-auto w-full py-8 px-6">
      {prev ? (
        <Link href={prev.slug} className="text-sm text-primary hover:underline">
          ← Prev: {prev.label}
        </Link>
      ) : (
        <span />
      )}
      {next ? (
        <Link href={next.slug} className="text-sm text-primary hover:underline">
          Next: {next.label} →
        </Link>
      ) : (
        <span />
      )}
    </nav>
  );
};

export default DocsPrevNextButtons;
