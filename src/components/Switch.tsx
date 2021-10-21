import { Switch as HeadlessSwitch } from "@headlessui/react";

type SwitchProps = {
  srLabel: string;
  checked: boolean;
  onChange: (checked: boolean) => void;
};

export default function Switch({
  srLabel,
  checked,
  onChange,
}: SwitchProps): JSX.Element {
  return (
    <HeadlessSwitch
      checked={checked}
      onChange={onChange}
      className={`${
        checked ? "bg-primary" : "bg-gray-200"
      } relative inline-flex items-center h-6 rounded-full w-11 transition-colors ease-in-out duration-200 focus:outline-none focus-visible:ring-2  focus-visible:ring-white focus-visible:ring-opacity-75`}
    >
      <span className="sr-only">{srLabel}</span>
      <span
        className={`${
          checked ? "translate-x-6" : "translate-x-1"
        } inline-block w-4 h-4 transform bg-white rounded-full transform ring-0 transition ease-in-out duration-200`}
      />
    </HeadlessSwitch>
  );
}
