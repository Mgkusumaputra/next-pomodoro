import { Logo } from "@icons/logo";

export default function Navbar() {
  return (
    <div className="w-full border-b-2 border-gray-600">
      <div className="flex mb-2">
        <Logo width={26} height={26} />
        <h1 className="text-xl font-bold mx-2">NextPomodoro</h1>
      </div>
    </div>
  );
}
