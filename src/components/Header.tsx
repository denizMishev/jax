export function Header() {
  return (
    <header className="flex justify-between items-center w-full px-4 py-2.5 bg-primary-200">
      <div className="flex gap-4">
        {[
          "bold",
          "italic",
          "underline",
          "align-left",
          "align-justify",
          "align-right",
          "floppy-disk",
          "file",
        ].map((icon) => (
          <button
            key={icon}
            className="bg-[#003300] text-[#00ff00] px-2.5 py-1.5 cursor-pointer hover:bg-[#004400] transition-colors"
          >
            <i className={`fa-solid fa-${icon}`}></i>
          </button>
        ))}
      </div>

      <div className="flex gap-4 text-2xl text-[#00ff00]">
        <button className="transform transition-all duration-200 hover:-translate-y-0.5 hover:text-[#e6ffe6] cursor-pointer">
          REGISTER
        </button>
        <button className="transform transition-all duration-200 hover:-translate-y-0.5 hover:text-[#e6ffe6] cursor-pointer">
          LOGIN
        </button>
      </div>
    </header>
  );
}
