import CircleImage from '@/components/CircleImage';
import FavoTitle from '@/components/FavoTitle';
import { Name } from '@/components/Name';
import ParticleAnimation from '@/components/ParticleAnimation';
import type { NextPage } from 'next';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center p-8 lg:p-36 font-DotGothic16">
        {/* Background */}
        <div className="absolute top-0 left-0 w-screen h-full -z-40 bg-black/80"></div>
        <div className="absolute top-0 left-0 w-screen h-full -z-50 bg-[url('/images/5.jpeg')] bg-center bg-no-repeat bg-cover"></div>

        {/* Name */}
        <div className="h-16" />
        <div className="flex items-center">
          {/* <div className="font-Righteous text-6xl">webshina</div> */}
          <Name />
          <div className="w-8" />
          <a
            target="_blank"
            href="https://twitter.com/webshina"
            rel="noreferrer"
          >
            <div className="relative h-10 w-10">
              <Image
                src="/images/Twitter.png"
                alt="image"
                layout="fill"
                objectFit="contain"
              />
            </div>
          </a>
        </div>
        <div className="h-16"></div>

        <CircleImage
          imgSrc="/images/webshina_icon.jpeg"
          width="160px"
          height="160px"
        />
        <div className="h-8"></div>

        <div className="h-8"></div>

        <div className="text-center">
          手羽先とweb3が好きな
          <br />
          フリーランスwebエンジニア
        </div>
        <div className="h-16"></div>

        <div className="text-3xl font-extralight">Skill</div>
        <div className="h-8"></div>
        <div className="p-8 rounded-xl bg-slate-900">
          TypeScript / React・Next.js / Flutter / Express / PHP・Laravel /
          Solidity / AWS
        </div>
        <div className="h-24"></div>

        <div className="text-3xl font-extralight ">Portfolio</div>
        <div className="h-8"></div>
        <a
          target="_blank"
          href="https://www.favo-community.com/"
          rel="noreferrer"
        >
          <div className="relative h-96 w-96">
            <ParticleAnimation />
            <div className="absolute top-12 left-16">
              <FavoTitle />
            </div>
          </div>
        </a>
        <div className="h-64" />
      </div>
    </>
  );
};

export default Home;
