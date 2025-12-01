export default function Navbar() {
  return (
    <nav className="w-full fixed top-0 left-0 bg-black/40 backdrop-blur-md text-white z-50 py-4 px-8">
      <ul className="flex gap-6 text-lg font-semibold">
        <li><a href="#hero">Home</a></li>
        <li><a href="#about">About</a></li>
        <li><a href="#projects">Projects</a></li>
        <li><a href="#experience">Experience</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  );
}
