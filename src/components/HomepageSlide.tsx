import classNames from "classnames";
import type { CSSProperties } from "preact";
import type { HomepageSlideRow } from "./HomepageDemo";

interface HomepageSlideProps {
  data: HomepageSlideRow;
  class?: string;
  style?: CSSProperties;
}

export function HomepageSlide({
  data,
  class: className,
  style,
}: HomepageSlideProps) {
  const { date, reminders, warmUp } = data;

  return (
    <div
      className={classNames([
        "@container relative aspect-video border border-stone-300 rounded bg-[#effbfc]",
        className,
      ])}
      style={style}
    >
      <div className="font-[Fraunces,serif] text-[#376b7a] absolute top-[10%] left-[6%] w-[50%] leading-tight">
        <div className="font-[Fraunces,serif] text-[#376b7a] text-[4cqw]">
          {date}
        </div>
        <div className="font-[Fraunces,serif] text-[#204652] text-[9cqw] font-bold">
          Welcome!
        </div>
      </div>
      <div className="font-sans text-gray-800 absolute text-[3cqw] top-[45%] left-[6%] w-[50%] h-[45%] p-[2cqw] bg-white border border-[#204652]">
        <p>
          <strong className="font-bold underline">Warm Up:</strong>
        </p>
        <p>{warmUp}</p>
      </div>
      <div className="absolute text-[3cqw] top-[22.5%] left-[62.5%] w-[30%] h-[60%] p-[2cqw] rotate-2 text-amber-950 bg-amber-100 border border-amber-300 bg-[repeating-linear-gradient(0deg,var(--color-amber-200),var(--color-amber-200)_1px,transparent_0,transparent_50%)] bg-size-[6cqw_6cqw] overflow-hidden">
        <strong className="block text-center font-['Comic_Sans_MS',sans-serif]">
          Reminders:
        </strong>
        <ul className="list-disc pl-[4cqw]">
          {reminders
            .split("\n")
            .map((item) => item.trim())
            .filter(Boolean)
            .map((item) => (
              <li>{item}</li>
            ))}
        </ul>
      </div>
    </div>
  );
}
