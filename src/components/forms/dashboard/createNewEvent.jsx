'use client';
import DriverCard from '@/components/cards/dashboard/driver';
import { Button } from '@/components/ui/button';
import Dropdown from '@/components/ui/dropdown';
import { Input } from '@/components/ui/input';
import { clsx } from 'clsx';
import { Plus } from 'lucide-react';
import { useState } from 'react';

const DataForm = {
  status: '',
  category: '',
  'maximum number of participants': '',
};

export default function DashboardForm() {
  const [form, setForm] = useState(DataForm);
  return (
    <form className="w-full h-full min-h-screen bg-design-secondaryBase">
      <div className="border-b-[1px] border-design-thirdText py-9 px-6 flex items-center justify-between">
        <h1 className="text-3xl font-medium text-design-text">
          Creating A New Event
        </h1>
        <div>
          <Button
            className="mr-2 border-transparent text-base font-medium text-design-thirdText"
            variant="outline"
            size="sm"
          >
            Reset
          </Button>
          <Button
            className="text-base font-medium text-design-text"
            variant="destructive"
            size="sm"
          >
            Save
          </Button>
        </div>
      </div>
      <section className="py-9 px-6 flex flex-col flex-wrap  gap-y-5">
        <div>
          <h1 className="text-xl  text-design-text font-normal">
            Event Details
          </h1>
          <div className="w-full h-1 bg-[#303030] rounded mt-1" />
        </div>
        <div className="flex flex-wrap gap-x-12 ">
          <div className="flex items-center gap-2">
            <label className={tw_label} htmlFor="title">
              Title
            </label>
            <Input
              className={clsx(tw_input, 'min-w-[460px]')}
              state={form.title}
              setState={setForm}
              id="title"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className={tw_label} htmlFor="Status">
              Status
            </label>
            <Dropdown />
          </div>
        </div>
        <div className="flex flex-wrap gap-x-12 ">
          <div className="flex items-center gap-2">
            <label className={tw_label} htmlFor="Category">
              Category
            </label>
            <Dropdown />
          </div>
          <div className="flex items-center gap-2">
            <label
              className={clsx(tw_label, 'whitespace-nowrap')}
              htmlFor="Participants"
            >
              Maximum Number of Participants
            </label>
            <Input
              className={tw_input}
              state={form.title}
              setState={setForm}
              id="Participants"
            />
          </div>
        </div>
      </section>
      <section className="py-9 px-6 flex flex-col flex-wrap  gap-y-5">
        <div>
          <h1 className="text-xl  text-design-text font-normal">
            Race Details
          </h1>
          <div className="w-full h-1 bg-[#303030] rounded mt-1" />
        </div>
        <div className="flex items-center gap-4">
          <label className={tw_label} htmlFor="title">
            Choose A Track
          </label>
          <Dropdown className="w-[670px]" />
          <Button
            variant="outline"
            className="text-[#F6F6F6] border-[#F6F6F6] h-8 text-sm font-light px-6"
          >
            EDIT
          </Button>
          <Button
            variant="outline"
            className="text-[#F6F6F6] border-[#F6F6F6] h-8 px-3"
          >
            <Plus />
          </Button>
        </div>
        <div className="flex flex-wrap gap-x-12 justify-between w-1/2">
          <div className="flex items-center gap-2">
            <label className={tw_label} htmlFor="Distance:">
              Distance:
            </label>
            <p className={tw_label}>-</p>
          </div>
          <div className="flex items-center gap-2">
            <label className={tw_label} htmlFor="Record:">
              Lap Record By:
            </label>
            <p className={tw_label}>-</p>
          </div>
          <div className="flex items-center gap-2">
            <label className={tw_label} htmlFor="Record:">
              Laps:
            </label>
            <p className={tw_label}>-</p>
          </div>
          <div className="flex items-center gap-2">
            <label className={tw_label} htmlFor="Record:">
              Lap Record Duration::
            </label>
            <p className={tw_label}>-</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-12   w-1/2">
          <div className="flex items-center gap-2">
            <label className={tw_label} htmlFor="Distance:">
              Primary Map::
            </label>
            <p className={tw_label}>filename.jpg</p>
          </div>
          <div className="flex items-center gap-2">
            <label className={tw_label} htmlFor="Record:">
              Secondary Map::
            </label>
            <p className={tw_label}>filename.jpg</p>
          </div>
        </div>
        <div className="flex flex-wrap gap-x-12   ">
          <div className="flex items-center gap-2">
            <label className={tw_label} htmlFor="Distance:">
              Starting Date & Time
            </label>
            <Button
              variant="default"
              className="text-[#F6F6F6] border-[#F6F6F6] bg-[#3F3F3F] h-8 text-sm font-light px-6 w-[262px]"
            >
              DD/MM/YYY 23:59
            </Button>
          </div>
          <div className="flex items-center gap-2">
            <label className={tw_label} htmlFor="Record:">
              Ending Date & Time
            </label>
            <Button
              variant="default"
              className="text-[#F6F6F6] border-[#F6F6F6] bg-[#3F3F3F] h-8 text-sm font-light px-6 w-[262px]"
            >
              DD/MM/YYY 23:59
            </Button>
          </div>
        </div>
      </section>
      <section className="py-9 px-6 flex flex-col flex-wrap  gap-y-5">
        <div>
          <h1 className="text-xl  text-design-text font-normal">Drivers</h1>
          <div className="w-full h-1 bg-[#303030] rounded mt-1" />
        </div>
        <DriverCard />
      </section>
    </form>
  );
}

const tw_label = 'text-sm font-semibol text-[#939393]';
const tw_input =
  'bg-[#3F3F3F] text-design-text border-none text-sm font-normal rounded-[4px]';
