import { ThemeToggle } from "./ThemeToggle";

export function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900 text-black dark:text-white">
      <header className="p-4 flex justify-between items-center">
        <h1>Your App Name</h1>
        <ThemeToggle />
      </header>
      <main>{children}</main>
    </div>
  );
}
