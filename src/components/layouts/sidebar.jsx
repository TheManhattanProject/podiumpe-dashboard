import Image from 'next/image';
import Link from 'next/link';

const DataSet = [
  {
    key: 'EDIT',
    links: [
      {
        name: 'Ongoing Events',
        link: '/',
      },
      {
        name: 'Completed Events',
        link: '/',
      },
      {
        name: 'Saved Game Options',
        link: '/',
      },
    ],
  },
  {
    key: 'CREATE',
    links: [
      {
        name: 'Create New Event',
        link: '/',
      },
      {
        name: 'Create New Game',
        link: '/',
      },
      {
        name: 'Create Drivers',
        link: '/',
      },
    ],
  },
  {
    key: 'MANAGE',
    links: [
      {
        name: 'Payments',
        link: '/',
      },
      {
        name: 'User Information',
        link: '/',
      },
    ],
  },
];

export default function Sidebar() {
  return (
    <aside className="bg-design-base h-screen w-[240px] flex flex-col pt-14 px-6 gap-16">
      <div className="flex flex-col gap-2 items-center">
        <Image
          src="/vercel.svg"
          alt="Vercel Logo"
          className="dark:invert"
          width={100}
          height={24}
          priority
        />
        <div className="w-6 h-1 bg-[#303030] rounded " />
        <h1 className="text-sm text-design-text font-medium">
          Admin Dashboard
        </h1>
      </div>
      {DataSet.map((item, i) => {
        const { key, links } = item;
        return (
          <div key={i} className="flex flex-col gap-2 items-center">
            <div className="w-full">
              <h2 className="text-design-secondaryText text-xs font-normal tracking-[2px]">
                {key}
              </h2>
              <div className="w-full mt-1 h-1 bg-[#303030] rounded " />
            </div>
            <div className="w-full flex flex-col gap-2 mt-2 items-left">
              {links.map((value, k) => {
                const { name, link } = value;
                return (
                  <Link key={k} href={link}>
                    {' '}
                    <h3 className="text-design-thirdText text-sm font-normal">
                      {name}
                    </h3>
                  </Link>
                );
              })}
            </div>
          </div>
        );
      })}
    </aside>
  );
}
