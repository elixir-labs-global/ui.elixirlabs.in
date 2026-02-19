import { notFound } from "next/navigation";
import PlaygroundMainComponent from "@/app/playground/my-components";

export default function PlaygroundPage() {
  if (process.env.NEXT_PUBLIC_ENABLE_PLAYGROUND !== "true") {
    notFound();
  }

  return (
    <>
      {/* STRICTLY DO NOT CHANGE THIS COMPONENT CODE (for component builders)  */}
      <PlaygroundMainComponent />
    </>
  );
}
