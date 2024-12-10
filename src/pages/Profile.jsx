import React, { useState } from "react";
import Navbar from "../components/NavbarProfile";
import Footer from "../components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faLinkedin,
  faGithub,
} from "@fortawesome/free-brands-svg-icons";
import Majo from "../assets/tipstrick/mj.png";

const Profile = () => {
  const [showPopup, setShowPopup] = useState(false);
  const [animatePopup, setAnimatePopup] = useState(false);
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);

  const handleShowPopup = (member) => {
    setSelectedTeamMember(member);
    setShowPopup(true);
    setTimeout(() => setAnimatePopup(true), 50);
  };

  const handleClosePopup = () => {
    setAnimatePopup(false);
    setTimeout(() => setShowPopup(false), 300);
  };

  const team = [
    {
      name: "Alex Ananda Romadhona",
      role: "Front End Developer",
      img: Majo,
      skills: [
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "UI/UX Design",
        "Git & GitHub",
      ],
      desc: "Saya adalah mahasiswa ITK Program Studi Informatika. Saya suka membuat desain website yang menarik dan mudah digunakan. Selain itu, saya juga senang belajar tentang teknologi dan cara membuat website yang bagus. Di luar dunia teknologi, saya sangat suka sepak bola. Tim favorit saya adalah Real Madrid, dan Manchester United tim sampah",
      ig: "https://www.instagram.com/_anandaalex/",
      linkedin: "https://www.linkedin.com/in/alex-ananda-romadhona-50aa53291/",
      github: "https://github.com/anandaalexx",
    },
    {
      name: "Christian Felix",
      role: "Front End Developer",
      img: "https://docs.material-tailwind.com/img/team-2.jpg",
      skills: [
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "UI/UX Design",
        "Git & GitHub",
      ],
      desc: "Felix adalah seorang mahasiswa keturunan Cina Indonesia yang memiliki minat besar dalam pengembangan game. Dia dikenal sebagai pribadi yang rajin dan cerdas, sering kali menjadi asisten dosen untuk membantu teman-temannya dalam memahami materi kuliah. Dengan ketekunan dan kemampuan intelektual yang luar biasa, Felix terus mengasah keterampilannya dalam dunia teknologi, terutama dalam pengembangan game, untuk mewujudkan impian karirnya di industri ini.",
      ig: "https://www.instagram.com/_anandaalex/",
      linkedin: "https://www.linkedin.com/in/alex-ananda-romadhona-50aa53291/",
      github: "https://github.com/anandaalexx",
    },
    {
      name: "Gideon Marylam Hendika",
      role: "Front End Developer",
      img: "https://docs.material-tailwind.com/img/team-4.jpg",
      skills: [
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "UI/UX Design",
        "Git & GitHub",
      ],
      desc: "Gideon adalah seorang mahasiswa yang berasal dari Sangatta. Hobinya adalah bermain game, dan dia sudah memainkan hampir semua jenis game yang ada. Dengan kecintaannya terhadap dunia game, Gideon terus mengasah keterampilannya dan mengikuti perkembangan terbaru dalam industri game. Ketekunannya dalam bermain game membuatnya memiliki wawasan yang luas tentang berbagai genre dan strategi dalam permainan.",
      ig: "https://www.instagram.com/_anandaalex/",
      linkedin: "https://www.linkedin.com/in/alex-ananda-romadhona-50aa53291/",
      github: "https://github.com/anandaalexx",
    },
    {
      name: "Febriani",
      role: "Front End Developer",
      img: "https://docs.material-tailwind.com/img/team-5.jpg",
      skills: [
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "UI/UX Design",
        "Git & GitHub",
      ],
      desc: "Febri adalah seorang mahasiswa yang berasal dari Sepaku, sebuah daerah yang dekat dengan ibu kota Nusantara. Dia memiliki keahlian yang luar biasa dalam membuat API. Febri sangat terampil dalam merancang dan mengembangkan API yang efisien, serta selalu mengikuti perkembangan teknologi terbaru di bidang tersebut. Dengan ketelitian dan kemampuannya dalam coding, Febri menjadi seorang pengembang yang andal, siap menghadapi tantangan dalam dunia pemrograman.",
      ig: "https://www.instagram.com/_anandaalex/",
      linkedin: "https://www.linkedin.com/in/alex-ananda-romadhona-50aa53291/",
      github: "https://github.com/anandaalexx",
    },
    {
      name: "Aqilah",
      role: "Front End Developer",
      img: "https://docs.material-tailwind.com/img/team-1.jpg",
      skills: [
        "React.js",
        "Tailwind CSS",
        "JavaScript",
        "UI/UX Design",
        "Git & GitHub",
      ],
      desc: "Aqilah adalah seorang mahasiswa yang memiliki minat besar dalam dunia teknologi dan desain. Dia dikenal sebagai pribadi yang kreatif dan selalu bersemangat dalam setiap proyek yang dikerjakannya. Aqilah memiliki kemampuan yang baik dalam merancang antarmuka pengguna (UI) dan pengalaman pengguna (UX), serta sering terlibat dalam berbagai proyek desain website dan aplikasi.",
      ig: "https://www.instagram.com/_anandaalex/",
      linkedin: "https://www.linkedin.com/in/alex-ananda-romadhona-50aa53291/",
      github: "https://github.com/anandaalexx",
    },
  ];

  return (
    <div>
      <Navbar />
      <div className="py-12 text-center text-[rgba(24,50,98,0.8)] mt-20">
        <h2 className="text-7xl font-bold">Meet Our Team</h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-3 justify-center w-full max-w-7xl mt-2 mb-2 mx-auto gap-12">
        {team.slice(0, 3).map((member, index) => (
          <div
            key={index}
            className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative p-1">
              <img
                src={member.img}
                alt="profile-picture"
                className="w-[360px] h-[300px] object-cover rounded-xl mx-auto mt-3 border-4 border-white"
              />
            </div>
            <div className="text-center py-6">
              <h4 className="text-2xl text-gray-800 font-bold -mt-5">
                {member.name}
              </h4>
              <p className="text-gray-500 font-medium text-md">{member.role}</p>
            </div>
            <div className="flex justify-center gap-6">
              <a
                href={member.ig}
                target="blank"
                className="transition-all"
                aria-label="Instagram"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-2xl sm:text-3xl mb-4 text-[rgba(24,50,98)]"
                />
              </a>
              <a
                href={member.github}
                target="blank"
                className="transition-all"
                aria-label="GitHub"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-2xl sm:text-3xl mb-4 text-[rgba(24,50,98)]"
                />
              </a>
              <a
                href={member.linkedin}
                target="blank"
                className="transition-all"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-2xl sm:text-3xl mb-4 text-[rgba(24,50,98)]"
                />
              </a>
            </div>
            <div className="w-[300px] h-px bg-[rgba(24,50,98)] my-5 mx-auto"></div>
            <div className="text-center mb-6">
              <button
                className="border-2 border-[rgba(24,50,98)] text-[rgba(24,50,98)] px-6 py-1 rounded-lg text-lg font-semibold transition-all hover:bg-[rgba(24,50,98,1.0)] hover:text-white"
                onClick={() => handleShowPopup(member)}
              >
                Kenalan
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 justify-center w-full max-w-3xl mt-8 mb-32 mx-auto gap-12">
        {team.slice(3, 5).map((member, index) => (
          <div
            key={index}
            className="max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden"
          >
            <div className="relative p-1">
              <img
                src={member.img}
                alt="profile-picture"
                className="w-[360px] h-[300px] object-cover rounded-xl mx-auto mt-3 border-4 border-white"
              />
            </div>
            <div className="text-center py-6">
              <h4 className="text-2xl text-gray-800 font-bold -mt-5">
                {member.name}
              </h4>
              <p className="text-gray-500 font-medium text-md">{member.role}</p>
            </div>
            <div className="flex justify-center gap-6">
              <a
                href={member.ig}
                className="transition-all"
                aria-label="Instagram"
              >
                <FontAwesomeIcon
                  icon={faInstagram}
                  className="text-2xl sm:text-3xl mb-4 text-[rgba(24,50,98)]"
                />
              </a>
              <a
                href={member.github}
                className="transition-all"
                aria-label="GitHub"
              >
                <FontAwesomeIcon
                  icon={faGithub}
                  className="text-2xl sm:text-3xl mb-4 text-[rgba(24,50,98)]"
                />
              </a>
              <a
                href={member.linkedin}
                className="transition-all"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon
                  icon={faLinkedin}
                  className="text-2xl sm:text-3xl mb-4 text-[rgba(24,50,98)]"
                />
              </a>
            </div>
            <div className="w-[300px] h-px bg-[rgba(24,50,98)] my-5 mx-auto"></div>
            <div className="text-center mb-6">
              <button
                className="border-2 border-[rgba(24,50,98)] text-[rgba(24,50,98)] px-6 py-1 rounded-lg text-lg font-semibold transition-all hover:bg-[rgba(24,50,98,1.0)] hover:text-white"
                onClick={() => handleShowPopup(member)}
              >
                Kenalan
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Pop-up */}
      {showPopup && (
        <div
          className={`fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 transition-opacity duration-300 ${
            animatePopup ? "opacity-100" : "opacity-0"
          }`}
        >
          <div
            className={`bg-white w-[90%] max-w-lg rounded-lg shadow-lg p-6 relative transform transition-transform duration-300 ${
              animatePopup ? "scale-100" : "scale-90"
            }`}
          >
            <button
              className="absolute top-3 right-3 text-[rgba(24,50,98)] text-2xl font-bold"
              onClick={handleClosePopup}
            >
              &times;
            </button>
            {selectedTeamMember && (
              <>
                <h3 className="text-xl font-bold text-[rgba(24,50,98)] mb-4">
                  Tentang {selectedTeamMember.name}
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                  {/* Kolom Gambar */}
                  <div className="flex justify-center items-center">
                    <img
                      src={selectedTeamMember.img}
                      alt={`${selectedTeamMember.name}-profile`}
                      className="w-60 h-40 rounded-md object-cover border-2 border-[rgba(24,50,98)]"
                    />
                  </div>
                  {/* Kolom Keahlian */}
                  <div className="text-gray-600">
                    <h4 className="text-lg font-semibold text-[rgba(24,50,98)] mb-2">
                      Keahlian Teknologi
                    </h4>
                    <ul className="list-disc list-inside">
                      {selectedTeamMember.skills.map((skill, index) => (
                        <li key={index}>{skill}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <p className="mt-4 text-gray-600">{selectedTeamMember.desc}</p>
              </>
            )}
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default Profile;
