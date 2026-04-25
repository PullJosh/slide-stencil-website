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
    <div class="grid grid-cols-[1fr_auto_1fr_auto_1fr] grid-rows-[auto_auto] items-center">
      <div>
        <HomepageSlide
          data={{
            date: "{{Date}}",
            reminders: "{{Reminders}}",
            warmUp: "{{Warm Up}}",
          }}
        />
      </div>
      <div class="text-3xl p-4">+</div>
      <div>
        <div class="@container overflow-auto border border-stone-300 rounded bg-white aspect-video">
          <HomepageTable rows={rows} setRows={setRows} />
        </div>
      </div>
      <div class="text-3xl p-4">=</div>
      <div>
        <HomepageSlideStack rows={rows} />
      </div>

      <div class="font-bold text-center mt-4 self-start">Template Slide</div>
      <div></div>
      <div class="font-bold text-center mt-4 self-start">Data</div>
      <div></div>
      <div class="font-bold text-center mt-4 self-start">Generated Slides</div>
    </div>
  );
}
