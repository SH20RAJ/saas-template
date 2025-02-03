import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen flex flex-col justify-between p-8 font-[family-name:var(--font-geist-sans)]">
      <header className="flex justify-between items-center mb-12">
        <Image
          src="/logo.svg"
          alt="Project Logo"
          width={120}
          height={40}
          priority
        />
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#features" className="hover:text-gray-600 transition-colors">Features</a></li>
            <li><a href="#about" className="hover:text-gray-600 transition-colors">About</a></li>
            <li><a href="#contact" className="hover:text-gray-600 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main className="flex-grow">
        <section className="text-center mb-16">
          <h1 className="text-4xl font-bold mb-4">Welcome to Our Project</h1>
          <p className="text-xl mb-8">Revolutionizing the way you work with Next.js</p>
          <a
            href="#get-started"
            className="bg-blue-600 text-white px-6 py-3 rounded-full hover:bg-blue-700 transition-colors"
          >
            Get Started
          </a>
        </section>

        <section id="features" className="mb-16">
          <h2 className="text-2xl font-semibold mb-6">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="border p-6 rounded-lg">
              <h3 className="font-bold mb-2">Fast Performance</h3>
              <p>Optimized for speed and efficiency</p>
            </div>
            <div className="border p-6 rounded-lg">
              <h3 className="font-bold mb-2">Easy Integration</h3>
              <p>Seamlessly works with your existing stack</p>
            </div>
            <div className="border p-6 rounded-lg">
              <h3 className="font-bold mb-2">Scalable Solution</h3>
              <p>Grows with your project needs</p>
            </div>
          </div>
        </section>

        <section id="about" className="mb-16">
          <h2 className="text-2xl font-semibold mb-4">About Us</h2>
          <p>We are a team of passionate developers committed to creating innovative solutions with Next.js.</p>
        </section>

        <section id="contact">
          <h2 className="text-2xl font-semibold mb-4">Contact Us</h2>
          <p>Have questions? Reach out to us at <a href="mailto:info@project.com" className="text-blue-600 hover:underline">info@project.com</a></p>
        </section>
      </main>

      <footer className="mt-12 text-center text-sm text-gray-600">
        <p>&copy; 2023 Our Project. All rights reserved.</p>
      </footer>
    </div>
  );
}
