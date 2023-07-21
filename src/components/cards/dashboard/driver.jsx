'use client';
import DropdownMenuDemo from '@/components/ui/dropdown';
import { UserCircle2 } from 'lucide-react';

export default function DriverCard() {
  return (
    <section className=" flex gap-x-4   justify-start">
      <p className="text-sm font-semibold pt-2 text-[#939393]">1.</p>
      <div className="flex flex-col gap-y-4">
        <div className="flex items-center gap-4">
          <DropdownMenuDemo className="w-[521px]" />
          <div className="flex items-center gap-2 mr-8">
            <label className={tw_label} htmlFor="Record:">
              Number:
            </label>
            <p className={tw_label}>-</p>
          </div>
          <div className="flex items-center gap-2">
            <label className={tw_label} htmlFor="Record:">
              Country:
            </label>
            <p className={tw_label}>-</p>
          </div>
        </div>
        <div className="flex gap-x-4 w-full">
          <div className="flex flex-col  gap-2 items-center justify-center text-[#939393] border border-[#939393] px-8 py-6 rounded">
            <UserCircle2 size={48} />
            <p className="text-sm font-light text-center">Driver Profile</p>
          </div>
          <div className="flex flex-col gap-y-4 w-full justify-center  ">
            <div className="flex flex-wrap gap-x-12 justify-between w-4/5">
              <div className="flex items-center gap-2">
                <label className={tw_label} htmlFor="Reliability::">
                  Reliability:
                </label>
                <p className={tw_label}>-</p>
              </div>
              <div className="flex items-center gap-2">
                <label className={tw_label} htmlFor="Bravado::">
                  Bravado:
                </label>
                <p className={tw_label}>-</p>
              </div>
              <div className="flex items-center gap-2">
                <label className={tw_label} htmlFor="Speed::">
                  Speed:
                </label>
                <p className={tw_label}>-</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-12 justify-between w-4/5">
              <div className="flex items-center gap-2">
                <label className={tw_label} htmlFor="Rank::">
                  Rank:
                </label>
                <p className={tw_label}>-</p>
              </div>
              <div className="flex items-center gap-2">
                <label className={tw_label} htmlFor="Podiums::">
                  Podiums::
                </label>
                <p className={tw_label}>-</p>
              </div>
              <div className="flex items-center gap-2">
                <label className={tw_label} htmlFor="Wins::">
                  Wins::
                </label>
                <p className={tw_label}>-</p>
              </div>
            </div>
            <div className="flex flex-wrap gap-x-12 justify-between w-4/6">
              <div className="flex items-center gap-2">
                <label className={tw_label} htmlFor="Distance:">
                  Season Points::
                </label>
                <p className={tw_label}>-</p>
              </div>
              <div className="flex items-center gap-2">
                <label className={tw_label} htmlFor="Record:">
                  World Championships::
                </label>
                <p className={tw_label}>-</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
const tw_label = 'text-sm font-semibol text-[#939393]';
