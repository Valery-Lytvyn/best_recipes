import { HealthLabelsListProps } from "../types";

function HealthLabelsList({
  healthLabels,
}: HealthLabelsListProps): JSX.Element {
  return (
    <section className="py-4">
      <p className="text-primary text-2xl underline pb-4">Health Labels</p>
      <ul className="flex flex-wrap gap-2">
        {healthLabels.map((label) => (
          <li
            className="flex justify-center items-center gap-1 bg-gray-500 rounded-full px-3"
            key={label}
          >
            <div className="min-w-2 min-h-2 h-2 w-2 bg-primary"></div>
            <span className="text-xl text-center">{label}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}

export default HealthLabelsList;
