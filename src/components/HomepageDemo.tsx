import { useState } from "preact/hooks";
import { HomepageSlide } from "./HomepageSlide";
import { HomepageTable } from "./HomepageTable";
import { HomepageSlideStack } from "./HomepageSlideStack";

const relativeDay = (addDays: number, from: Date = new Date()) => {
  const date = new Date(from);
  date.setDate(date.getDate() + addDays);
  return date;
};

const dateFormatter = new Intl.DateTimeFormat("en-US", {
  weekday: "long",
  month: "long",
  day: "numeric",
});

export interface HomepageSlideRow {
  date: string;
  reminders: string;
  warmUp: string;
}

const defaultRows: HomepageSlideRow[] = [
  {
    date: dateFormatter.format(relativeDay(0)),
    reminders: "Prom is coming up soon!",
    warmUp: "Name all the steps of the water cycle",
  },
  {
    date: dateFormatter.format(relativeDay(1)),
    reminders:
      "Rivalry basketball game Thursday\nBring an object that represents you tomorrow",
    warmUp: "Share a rose and a thorn from your day",
  },
  {
    date: dateFormatter.format(relativeDay(2)),
    reminders: "Take a deep breath\nYou can do this",
    warmUp: "Solve the equation 2x+4=12",
  },
  {
    date: dateFormatter.format(relativeDay(3)),
    reminders: "Turn in last night's homework!\nTest on Thursday",
    warmUp: "In which year did the war of 1812 begin?",
  },
];

export function HomepageDemo() {
  const [rows, setRows] = useState(defaultRows);

  return (
    <div className="grid max-w-xs mx-auto gap-y-4 grid-rows-[auto_auto_auto_auto_auto] md:max-w-none md:grid-cols-[1fr_auto_1fr_auto_1fr] md:grid-rows-[auto] items-center">
      <div>
        <HomepageSlide
          data={{
            date: "{{Date}}",
            reminders: "{{Reminders}}",
            warmUp: "{{Warm Up}}",
          }}
        />
        <div className="font-bold text-center mt-3">Template Slide</div>
      </div>
      <div className="text-3xl p-4 text-center hidden md:block">
        <span className="block -mt-3 mb-3">+</span>
      </div>
      <div>
        <div className="@container overflow-auto border border-stone-300 rounded bg-white aspect-video">
          <HomepageTable rows={rows} setRows={setRows} />
        </div>
        <div className="font-bold text-center mt-3">Data</div>
      </div>
      <div className="text-3xl p-4 text-center hidden md:block">
        <span className="block -mt-3 mb-3">=</span>
      </div>
      <div>
        <HomepageSlideStack rows={rows} />
        <div className="font-bold text-center mt-3">Generated Slides</div>
      </div>
    </div>
  );
}
