"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Lock, Loader2, ArrowLeft } from "lucide-react";
import Link from "next/link";

export default function AdminLoginPage() {
  const [passcode, setPasscode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!passcode) return;

    setLoading(true);
    setError(null);

    try {
      const res = await fetch("/api/auth", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ passcode }),
      });

      const data = await res.json();

      if (res.ok && data.success) {
        router.push("/admin");
        router.refresh();
      } else {
        setError(data.message || "Invalid admin passcode");
      }
    } catch {
      setError("An unexpected error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#06080a] flex items-center justify-center p-6 relative overflow-hidden text-white">
      {/* Ambient glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-96 h-96 bg-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="w-full max-w-md bg-[#090D13]/90 border border-white/15 rounded-[24px] p-8 md:p-10 shadow-2xl backdrop-blur-xl relative z-10 space-y-6">
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs text-white/50 hover:text-white transition-colors"
        >
          <ArrowLeft size={14} />
          Back to Portfolio
        </Link>

        <div className="text-center space-y-2">
          <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mx-auto text-[#BEFF00]">
            <Lock size={22} />
          </div>
          <h1 className="text-2xl font-bold tracking-tight text-white">Admin Dashboard Access</h1>
          <p className="text-sm text-white/60 font-light">
            Enter your admin master passcode to manage portfolio content.
          </p>
        </div>

        <form onSubmit={handleLogin} className="space-y-4 pt-2">
          <div>
            <label className="block text-xs uppercase tracking-wider text-white/60 mb-2 font-medium">
              Admin Passcode
            </label>
            <input
              type="password"
              value={passcode}
              onChange={(e) => setPasscode(e.target.value)}
              placeholder="••••••••••••"
              required
              autoFocus
              className="w-full bg-white/[0.04] border border-white/15 rounded-xl px-4 py-3.5 text-white placeholder:text-white/30 focus:outline-none focus:border-[#BEFF00] transition-colors"
            />
          </div>

          {error && (
            <p className="text-xs text-rose-400 bg-rose-500/10 border border-rose-500/20 rounded-lg p-3 text-center">
              {error}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-[#BEFF00] text-black font-semibold py-3.5 rounded-xl hover:bg-[#9acc00] transition-all flex items-center justify-center gap-2 cursor-pointer shadow-lg disabled:opacity-50"
          >
            {loading ? <Loader2 size={18} className="animate-spin" /> : "Unlock Dashboard"}
          </button>
        </form>

      </div>
    </div>
  );
}
