"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

type CreateWorkspaceModalProps = {
  open: boolean;
  onClose: () => void;
};

export default function CreateWorkspaceModal({
  open,
  onClose,
}: CreateWorkspaceModalProps) {
  const [email, setEmail] = useState("");
  const router = useRouter();

  if (!open) return null;

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    localStorage.setItem(
      "creatorDraft",
      JSON.stringify({
        email,
        world: "Untitled world",
      }),
    );

    onClose();
    router.push("/");
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <section
        role="dialog"
        aria-modal="true"
        aria-labelledby="workspace-title"
        className="relative w-full max-w-xl rounded-2xl bg-[#002c33] p-6 text-white shadow-2xl sm:p-10"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="mb-6 flex items-center justify-between">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-lg bg-white/20">
            <Image
              src="/assets/c4fb8.svg"
              alt="icon"
              width={25}
              height={25}
              className="shrink-0"
            />
          </div>

          <button
            type="button"
            onClick={onClose}
            aria-label="Close popup"
            className="text-3xl text-white/70 hover:text-white"
          >
            ×
          </button>
        </div>

        <p className="mb-5 text-sm font-bold tracking-[0.2em] text-[#52ece1]">
          YOUR CREATOR JOURNEY STARTS HERE
        </p>

        <h2
          id="workspace-title"
          className="mb-4 text-3xl font-bold tracking-wide sm:text-4xl"
        >
          Make room for your imagination.
        </h2>

        <p className="mb-7 text-lg leading-relaxed text-white/75">
          “Untitled world” is ready for you. Create a simulated account to save
          it as a private draft in this browser.
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <label htmlFor="creator-email" className="block text-sm">
            Your email
          </label>

          <input
            id="creator-email"
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="you@example.com"
            className="w-full rounded-lg border border-white/20 bg-white px-4 py-3 text-[#1d2129] outline-none focus:ring-2 focus:ring-[#52ece1]"
          />

          <button
            type="submit"
            className="w-full rounded-lg bg-[#52ece1] px-5 py-3 font-semibold text-[#002c33] transition hover:opacity-90"
          >
            Create my workspace →
          </button>
        </form>

        <p className="mt-6 text-center text-sm leading-relaxed text-white/50">
          Prototype only. No account is created and no email is sent. Your
          selected world stays with you.
        </p>
      </section>
    </div>
  );
}
