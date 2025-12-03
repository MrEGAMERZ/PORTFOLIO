export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-lg py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6">
        <h1 className="text-xl font-bold">YourName</h1>

        <ul className="flex gap-8 text-lg font-medium">
          <li><a href="#hero">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
