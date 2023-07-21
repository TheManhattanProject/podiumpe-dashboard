'use client';
import { Button } from '@/components/ui/button';
import Dropdown from '@/components/ui/dropdown';
import { Input, InputwIcon } from '@/components/ui/input';
import { clsx } from 'clsx';
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
          Creating A New Game
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
            className="mr-2 border-transparent text-base font-medium text-design-thirdText"
            variant="outline"
            size="sm"
          >
            Save
          </Button>
          spa
          <Button
            className="text-base font-medium text-design-text"
            variant="destructive"
            size="sm"
          >
            Publish
          </Button>
        </div>
      </div>
      <section className="py-9 px-6 flex flex-col flex-wrap  gap-y-5">
        <div>
          <h1 className="text-xl  text-design-text font-normal">
            Details of the Game
          </h1>
          <div className="w-full h-1 bg-[#303030] rounded mt-1" />
        </div>
        <div className="flex flex-wrap gap-x-12 ">
          <div className="flex items-center gap-2">
            <label className={tw_label} htmlFor="Event">
              Event
            </label>
            <Dropdown className="w-[446px]" />
          </div>
          <div className="flex items-center gap-2">
            <label className={tw_label} htmlFor="Type">
              Game Type
            </label>
            <Dropdown className="w-[266px]" id="Type" />
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
              htmlFor="mParticipants"
            >
              Max Participants
            </label>
            <Input
              className={tw_input}
              state={form.title}
              setState={setForm}
              id="mParticipants"
              type="number"
            />
          </div>
          <div className="flex items-center gap-2">
            <label
              className={clsx(tw_label, 'whitespace-nowrap')}
              htmlFor="mParticipants"
            >
              Status:
            </label>
            <p className={tw_label}>Pre Race</p>
          </div>
        </div>
      </section>
      <section className="py-9 px-6 flex flex-col flex-wrap  gap-y-5">
        <div>
          <h1 className="text-xl  text-design-text font-normal">
            Prize Distribution
          </h1>
          <div className="w-full h-1 bg-[#303030] rounded mt-1" />
        </div>
        <div className="flex flex-wrap gap-x-12 ">
          <div className="flex items-center gap-2">
            <label className={tw_label} htmlFor="Event">
              Maximum Percentage of Winners
            </label>
            <InputwIcon
              className={tw_input}
              state={form.title}
              setState={setForm}
              id="mParticipants"
            />
          </div>
          <div className="flex items-center gap-2">
            <label className={tw_label} htmlFor="Type">
              Maximum Percentage of Net Winnings=0
            </label>
            <InputwIcon
              className={tw_input}
              state={form.title}
              setState={setForm}
              id="mParticipants"
            />
          </div>
        </div>
        <div className="flex flex-wrap gap-x-12 ">
          <div className="flex items-center gap-2">
            <label className={tw_label} htmlFor="Category">
              Percentage of Commission
            </label>
            <InputwIcon
              className={tw_input}
              state={form.title}
              setState={setForm}
              id="mParticipants"
            />
          </div>
        </div>
      </section>
    </form>
  );
}

const tw_label = 'text-sm font-bold text-[#939393]';
const tw_input =
  'bg-[#3F3F3F] text-design-text border-none text-sm font-normal rounded-[4px]';
