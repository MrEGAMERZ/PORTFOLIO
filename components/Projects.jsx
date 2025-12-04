export default function Projects() {
  return (
    <div className="min-h-screen px-6 py-20 text-center">
      <h2 className="text-5xl font-bold mb-14">Projects</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 max-w-6xl mx-auto">
        
        <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10 hover:scale-105 transition">
          <h3 className="text-2xl font-bold mb-4">Shooting Strike FPS</h3>
          <p className="text-gray-300 text-lg">
            A PC first-person shooter game developed in Unity with multiple
            levels & weapons.
          </p>
        </div>

        <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10 hover:scale-105 transition">
          <h3 className="text-2xl font-bold mb-4">Facial Attendance System</h3>
          <p className="text-gray-300 text-lg">
            AI-powered attendance with face detection, CSV logs, GUI and student
            database.
          </p>
        </div>

        <div className="bg-white/5 p-8 rounded-2xl backdrop-blur-lg border border-white/10 hover:scale-105 transition">
          <h3 className="text-2xl font-bold mb-4">Student Cloud (iOS)</h3>
          <p className="text-gray-300 text-lg">
            Centralized education app for students; login system + Firebase.
          </p>
        </div>

      </div>
    </div>
  );
}
