export const Header = () => {
  return (
    <header className="w-full flex items-center justify-between border-b border-foreground/10 px-8 py-4 h-[60px]">
      <h1 className="text-2xl font-bold text-primary-1">Muninn Tech UI</h1>
      <select className="bg-transparent border border-foreground/10 rounded px-2 py-1">
        <option value="light">Light</option>
        <option value="dark">Dark</option>
      </select>
    </header>
  );
};
