"use client";
import React, { useState } from "react";
import clsx from "clsx";
import "./component-viewer.css";
import { ScrollArea } from "@/components/ui/scroll-area";
import {
  IconClipboard,
  IconCopy,
  IconCheck,
  IconClipboardCheck,
} from "@tabler/icons-react";

interface ComponentViewerBoxProps {
  children: React.ReactNode;
  center?: boolean;
  background?: boolean;
  className?: string;
  code?: string;
}

const ComponentViewerBox = ({
  children,
  center = true,
  background = true,
  className,
  code,
}: ComponentViewerBoxProps) => {
  const [activeTab, setActiveTab] = useState<"preview" | "code">("preview");
  const [copied, setCopied] = useState(false);

  const copyToClipboard = async () => {
    if (code) {
      await navigator.clipboard.writeText(code);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="mb-8">
      {/* Tab Headers */}
      <div className="flex mb-2 gap-4 px-4">
        <button
          onClick={() => setActiveTab("preview")}
          className={clsx(
            "cursor-pointer py-2 text-sm font-medium transition-colors",
            activeTab === "preview"
              ? " text-white"
              : "border-transparent text-gray-500 hover:text-gray-300"
          )}
        >
          Preview
        </button>
        {code && (
          <button
            onClick={() => setActiveTab("code")}
            className={clsx(
              "cursor-pointer py-2 text-sm font-medium transition-colors",
              activeTab === "code"
                ? " text-white"
                : "border-transparent text-gray-500 hover:text-gray-300"
            )}
          >
            Code
          </button>
        )}
      </div>

      {/* Tab Content */}
      <div
        className={clsx(
          "component-viewer h-[420px] flex items-center rounded-lg border border-dashed border-gray-500/20",
          background && "bg-gray-500/10",
          center && "flex items-center justify-center",
          className
        )}
      >
        {activeTab === "preview" ? (
          <div className="p-8">{children}</div>
        ) : (
          <ScrollArea className="h-[420px] w-full py-[1px] rounded-lg relative">
            <span
              className={clsx(
                "absolute top-3 right-4 p-2 rounded cursor-pointer transition-colors",
                copied
                  ? "bg-green-500/20 text-green-400"
                  : "bg-gray-500/20 hover:bg-gray-500/30"
              )}
              onClick={copyToClipboard}
            >
              {copied ? (
                <IconClipboardCheck size={18} />
              ) : (
                <IconClipboard size={18} />
              )}
            </span>
            <pre>
              <code>{code}</code>
            </pre>
          </ScrollArea>
        )}
      </div>
    </div>
  );
};

export default ComponentViewerBox;
