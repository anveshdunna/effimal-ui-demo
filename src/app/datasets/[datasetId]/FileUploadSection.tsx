"use client";

import { ArrowUpFilled20, Bin16 } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { ProgressCircle } from "@/components/ui/progress-circle";
import Link from "next/link";
import { usePathname } from "next/navigation";

type UploadItem = {
  id: number;
  status: "Uploading..." | "Uploaded";
  progress: number;
};

type FileUploadSectionProps = {
  datasetName: string;
};

let x = 0;

export default function FileUploadSection({}: FileUploadSectionProps) {
  const pathname = usePathname();
  const [items, setItems] = useState<UploadItem[]>([]);

  const addItem = () => {
    x++;
    const newItem: UploadItem = { id: x, status: "Uploading...", progress: 0 };
    setItems((items) => [...items, newItem]);

    // Simulate progress
    const interval = setInterval(() => {
      setItems((prev) =>
        prev.map((item) =>
          item.id === newItem.id
            ? {
                ...item,
                progress: Math.min(item.progress + 5, 100),
                status: item.progress + 5 >= 100 ? "Uploaded" : "Uploading...",
              }
            : item,
        ),
      );
    }, 150); // 150ms x ~20 = 3 seconds

    // Stop interval after 3 seconds
    setTimeout(() => clearInterval(interval), 3000);
  };

  const removeItem = (id: number) => {
    setItems((items) => items.filter((item) => item.id !== id));
  };

  return (
    <>
      <button
        className="group bg-bg-secondary border-border-tertiary hover:border-border-secondary active:border-border-active mt-2 flex w-full items-center justify-center gap-6 rounded-lg border border-dashed p-6"
        onClick={addItem}
      >
        <div className="bg-fill-primary group-hover:bg-fill-primary-hover group-active:bg-fill-primary-active flex size-12 items-center justify-center rounded-full transition">
          <ArrowUpFilled20 />
        </div>
        <p className="text-body-md text-left font-semibold">
          Click to select files <br />
          <span className="text-fg-secondary text-body-md-tall mt-0.5 font-normal">
            or drag and drop it here
          </span>
        </p>
      </button>

      {/* Upload rows */}
      <AnimatePresence>
        {items.length > 0 && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
              transition: {
                opacity: { duration: 0.2 },
                height: { duration: 0.25 },
                ease: "easeOut",
              },
            }}
            exit={{
              opacity: 0,
              height: 0,
              transition: {
                opacity: { duration: 0.1 },
                height: { duration: 0.15 },
                ease: "easeInOut",
              },
            }}
            className="border-border-tertiary bg-bg-secondary mt-2 flex flex-col-reverse overflow-hidden rounded-lg border"
          >
            <AnimatePresence initial={false}>
              {items.map((item) => (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{
                    opacity: 1,
                    height: "auto",
                    transition: {
                      opacity: { duration: 0.2 },
                      height: { duration: 0.25 },
                      ease: "easeOut",
                    },
                  }}
                  exit={{
                    opacity: 0,
                    height: 0,
                    transition: {
                      opacity: { duration: 0.1 },
                      height: { duration: 0.15 },
                      ease: "easeInOut",
                    },
                  }}
                  key={item.id}
                >
                  <div className="flex items-center gap-3 px-4 py-3 last:border-b-0">
                    <ProgressCircle
                      value={item.progress}
                      size={16}
                      strokeWidth={1.5}
                      showCheck
                      unique={item.id}
                    />

                    <div className="flex flex-1 flex-col gap-0.5">
                      <p className="text-body-md font-semibold">{`filename_${item.id}.xlsx`}</p>
                      <p className="text-body-sm text-fg-secondary">
                        {item.status}
                      </p>
                    </div>
                    <Button
                      variant="ghost"
                      size="icon"
                      onClick={() => removeItem(item.id)}
                    >
                      <Bin16 />
                    </Button>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Import button */}
      {items.length === 0 ? (
        <Button disabled className="mt-2">
          Import
        </Button>
      ) : (
        <Button asChild className="mt-2">
          <Link href={`${pathname}/imports`}>Import</Link>
        </Button>
      )}
    </>
  );
}
