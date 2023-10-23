import { InfoTileProps } from "../types";

function InfoTile({ value, title }: InfoTileProps): JSX.Element {
  const tileValue = Math.round(value);
  return (
    <div className="flex flex-col gap-2 text-center">
      <div className="border border-gray-500 rounded-full py-1 px-4">
        {tileValue}
      </div>
      <span className="uppercase text-neutral-100 text-[12px] md:text-md px-2">
        {title}
      </span>
    </div>
  );
}

export default InfoTile;
