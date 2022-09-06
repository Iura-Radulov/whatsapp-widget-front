import Contact from './Contact';
import Experience from './Experience';
import Work from './Work';
import iconArray from './IconArray';
import utmLogo from '../icons/utm-logo.svg';
import goitIcon from '../icons/goitIcon.png';

export default function About() {
  return (
    <section id="about" className="pl-5">
      <div className="lg:flex lg:h-screen items-center">
        <div className="lg:w-[700px] pl-[30px] pr-[30px]">
          <h3 className="font-bold text-[22px] mb-[25px] text-green-500">
            My name is
          </h3>
          <p className="font-bold text-[38px] mb-[25px] text-blue-400">
            Yuri Radulov{' '}
          </p>
          <h3 className="font-bold text-[28px] mb-[25px]">About me</h3>
          <p className="text-[22px]">
            I am a Junior Front-End developer with specialization in JavaScript
            and React. I have been interested in programming since a long time
            and wanted to make something important and useful. That’s why I
            decided to learn one of the most famous programing language –
            JavaScript and its frameworks: React, Vue, Angular. A lot of
            practice and work for the result are important for me. Also I am
            focused on the company development and on the team communication.
          </p>
        </div>
        <div className="">
          <p className="font-bold text-[28px] mb-[25px] text-center">
            Tech Skills
          </p>
          <ul className="flex flex-wrap pl-[20px] max-w-[600px]">
            {iconArray.map(icon => (
              <li className="w-[50px] lg:w-[80px] m-[15px] lg:m-[25px]">
                <img src={icon} alt="icon" className="max-h-[80px]" />
              </li>
            ))}
          </ul>
        </div>
        <div>
          <p className="font-bold text-[28px] mb-[25px] text-center">
            Education
          </p>
          <img src={utmLogo} className="w-[60px] inline" alt="" />
          <span className="text-[22px] ml-2 text-orange-500">
            Technical University of Moldova
          </span>
          <p className="text-[22px] pl-[65px]">Electric power Engineering</p>
          <p className="font-bold text-[18px] mb-[25px] pl-[65px] text-zinc-400">
            September 2003 - June 2007
          </p>
          <p className="font-bold text-[24px] mb-[20px] text-center">
            IT corse
          </p>
          <img src={goitIcon} className="w-[60px] inline" alt="" />
          <span className="text-[22px] ml-2 text-orange-500">
            IT School GoIT
          </span>
          <p className="text-[22px] pl-[65px]">Full stack developer</p>
          <p className="font-bold text-[18px] mb-[25px] pl-[65px] text-zinc-400">
            September 2021 - September 2022
          </p>
        </div>
      </div>
      <Experience title="Experience" dark={true} id="experience" />
      <Work title="Work" dark={true} id="work" />
      <Contact title="Contact" dark={true} id="contact" />
    </section>
  );
}
