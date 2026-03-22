import { useState } from 'react';
import { ArrowUp, Menu, Plus, Search, Settings, Sparkles, X } from 'lucide-react';
import logoSvg from '../imports/pasted_text/logo-1.svg';

export default function App() {
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);
  const [prompt, setPrompt] = useState('');

  return (
    <div className="min-h-[100dvh] w-full">
      {/* Fixed Sidebar (Desktop) */}
      <aside className="fixed inset-y-0 left-0 z-20 hidden w-64 border-r border-white/20 bg-[color:var(--color-botle-sand)]/70 p-4 backdrop-blur-sm md:flex md:flex-col md:justify-between">
        <div className="space-y-4">
          <img src={logoSvg} alt="botless logo" className="h-auto w-[min(90%,9rem)]" />
          <button className="flex w-full items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-medium text-white">
            <Search className="size-4" />
            <span>البحثوك</span>
          </button>
        </div>
        <button className="flex w-full items-center gap-2 rounded-full border border-white/30 bg-white/20 px-4 py-2 text-sm font-medium text-white">
          <Settings className="size-4" />
          <span>Settings</span>
        </button>
      </aside>

      <div className="min-h-[100dvh] md:pl-64">
        {/* Mobile Top Bar */}
        <header className="sticky top-0 z-10 flex items-center justify-between px-[10px] py-4 md:hidden bg-[color:var(--color-botle-grey)]/90 backdrop-blur-sm">
          <button
            type="button"
            aria-label="Open menu"
            onClick={() => setIsMobileSidebarOpen(true)}
            className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-white/40 bg-white/20 text-white"
          >
            <Menu className="size-5" />
          </button>
          <img src={logoSvg} alt="botless logo" className="h-auto w-[min(90%,8.5rem)]" />
          <div className="h-10 w-10" aria-hidden="true" />
        </header>

        {/* Mobile Sidebar Drawer */}
        {isMobileSidebarOpen && (
          <div className="fixed inset-0 z-50 flex md:hidden">
            <button
              type="button"
              aria-label="Close menu overlay"
              onClick={() => setIsMobileSidebarOpen(false)}
              className="flex-1 bg-black/40"
            />
            <aside className="w-64 max-w-[90%] border-l border-white/20 bg-[color:var(--color-botle-sand)] p-4 flex flex-col justify-between shadow-xl">
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <p className="text-sm font-semibold text-white">Menu</p>
                  <button
                    type="button"
                    aria-label="Close menu"
                    onClick={() => setIsMobileSidebarOpen(false)}
                    className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-white/30 bg-white/15 text-white"
                  >
                    <X className="size-4" />
                  </button>
                </div>
                <button className="w-full flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-3 py-2 text-left text-sm font-medium text-white">
                  <Search className="size-4" />
                  <span>البحثوك</span>
                </button>
              </div>
              <button className="w-full flex items-center gap-2 rounded-full border border-white/30 bg-white/20 px-3 py-2 text-left text-sm font-medium text-white">
                <Settings className="size-4" />
                <span>Settings</span>
              </button>
            </aside>
          </div>
        )}

        {/* Main Feed */}
        <main className="px-[10px] md:px-8 pt-6 md:pt-10 pb-40">
          <div className="mx-auto max-w-5xl space-y-6">
            <p className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-3 py-1 text-xs uppercase tracking-wide text-white/90">
              <Sparkles className="size-4" />
              Botless Workspace
            </p>
            <h1 className="text-3xl md:text-5xl font-semibold leading-tight max-w-3xl">
              <span className="bg-clip-text text-transparent [background:var(--bg-gemini-glow)]">
                Build smarter prompts
              </span>
              <span className="block text-white mt-1">with a Gemini-style flow.</span>
            </h1>
            <div className="grid gap-4 md:grid-cols-2">
              <article className="botle-card">
                <h2 className="text-lg font-semibold">Dynamic Bubbles</h2>
                <p className="mt-2 text-sm text-white/85">
                  Suggested responses and quick refinements appear here while keeping the interface uncluttered.
                </p>
              </article>
              <article className="botle-card">
                <h2 className="text-lg font-semibold">Context Panel</h2>
                <p className="mt-2 text-sm text-white/85">
                  Keep your current objective, brand tone, and references in view for faster iteration.
                </p>
              </article>
            </div>
          </div>
        </main>
      </div>

      {/* Bottom-Centered Gemini Input */}
      <div className="fixed inset-x-0 bottom-4 z-30 px-[10px] md:px-8 md:pl-[calc(16rem+2rem)]">
        <div className="mx-auto max-w-3xl">
          <div className="botle-input-wrapper shadow-[0_20px_50px_rgba(0,0,0,0.25)]">
            <input
              className="botle-input pr-32"
              value={prompt}
              onChange={(event) => setPrompt(event.target.value)}
              placeholder="Ask Botless anything..."
              aria-label="Prompt input"
            />
            <div className="absolute right-2 flex items-center gap-2">
              <button
                type="button"
                aria-label="Add attachment"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/30 text-white"
                style={{ backgroundColor: 'var(--color-botle-blue)' }}
              >
                <Plus className="size-4" />
              </button>
              <button
                type="button"
                aria-label="Send prompt"
                className="inline-flex h-9 w-9 items-center justify-center rounded-full text-white"
                style={{ backgroundColor: 'var(--color-botle-orange)' }}
              >
                <ArrowUp className="size-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
