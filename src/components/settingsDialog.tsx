import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Settings } from "@icons/settings";
import useTimer from "@hooks/useTimer";
import { useEffect } from "react";

export function SettingsDialog() {
  const {
    handleSaveTimer,
    setPomodoro,
    setShortBreak,
    setLongBreak,
    timerSettings,
  } = useTimer();

  // const handleSaveTimer = () => {
  //   setPomodoro()
  //   // updatePomodoro();
  //   // updateShortBreak();
  //   // updateLongBreak();
  // };

  return (
    <div className="mx-0">
      <AlertDialog>
        <AlertDialogTrigger asChild>
          <button className=" text-slate-300 rounded-md hover:bg-slate-700 outline-none">
            <Settings />
          </button>
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Timer Settings</AlertDialogTitle>
            <div className="flex gap-5">
              {timerSettings.map((input, index) => {
                return (
                  <div key={index}>
                    <h1 className="text-slate-600">{input.value}</h1>
                    <input
                      defaultValue={timerSettings.defaultValue}
                      onChange={input.ref}
                      type="number"
                      className="w-full caret-gray-200 bg-gray-500 bg-opacity-30 text-center py-2 rounded-md"
                    />
                  </div>
                );
              })}
            </div>
          </AlertDialogHeader>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={() => {
                handleSaveTimer;
              }}
            >
              Save
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
