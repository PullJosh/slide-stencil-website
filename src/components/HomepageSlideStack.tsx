import type { HomepageSlideRow } from "./HomepageDemo";
import { HomepageSlide } from "./HomepageSlide";

interface HomepageSlideStackProps {
  rows: HomepageSlideRow[];
}

export function HomepageSlideStack({ rows }: HomepageSlideStackProps) {
  return (
    <div class="@container group grid grid-rows-1 grid-cols-1">
      {rows.map((row, index, arr) => (
        <HomepageSlide
          data={row}
          class="col-start-1 row-start-1 origin-center translate-(--offset) group-hover:translate-[calc(var(--offset)*3)] group-hover:rotate-(--rotation-angle) scale-90 transition"
          style={{
            "--offset": `${(index - (arr.length - 1) / 2) * 3}cqw`,
            "--rotation-angle": `${(index - (arr.length - 1) / 2) * 5}deg`,
            // transform: `translate(${(index - (arr.length - 1) / 2) * 3}cqw, ${(index - (arr.length - 1) / 2) * 3}cqw) scale(0.9)`,
          }}
        />
      ))}
    </div>
  );
}
