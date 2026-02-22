export function Footer() {
  return (
    <footer className="bg-[#0a0e27] border-t border-cyan-500/10 py-8 px-6">
      <div className="max-w-6xl mx-auto text-center">
        <p className="text-gray-400 text-sm">
          &copy; {new Date().getFullYear()} Prapti Gupta. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
