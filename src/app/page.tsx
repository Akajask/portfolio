import Image from "next/image";

export default function Home() {
  return (
    <main>
      <div className="header">
        <Image
          src="/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />

        <div>
          <h1>Hi. i'm Matheus👋</h1>
          <h2>Software Engineer</h2>
        </div>
      </div>

      <div className="experience">
        <h3>Experience</h3>
        <p>texto</p>
        <div className="time">

        </div>
      </div>

      <div className="infos">
        <h3>Languages</h3>
        <div className="languages-info">
          <span>🇧🇷 PT-BR - Native</span>
          <span>🇺🇸 En - intermediary</span>
        </div>
        <h3>Education</h3>
        <div className="educational-info">
          <span>🎓</span>
          <span>Software Engineering at the Universidade Católica de Brasilia</span>
        </div>
        <div className="buttons">
          <button>Contact-me</button>
        </div>
      </div>

    </main>
  );
}
