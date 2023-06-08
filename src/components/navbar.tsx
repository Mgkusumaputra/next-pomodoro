import { Logo } from "@icons/logo";
import { SettingsDialog } from "./settingsDialog";

export default function Navbar() {
  return (
    <div className="w-full flex justify-between items-center mb-6 border-b-2 border-gray-600">
      <div className="flex mb-3">
        <Logo width={26} height={26} />
        <h1 className="text-xl font-bold mx-2">NextPomodoro</h1>
      </div>
      <SettingsDialog />
    </div>
  );
}
