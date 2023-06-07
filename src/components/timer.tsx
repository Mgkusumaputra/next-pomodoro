import useTimer from "../hooks/useTimer";

export default function Timer() {
  const { getTime, switchStage, stage, options, seconds, start, setStart } =
    useTimer();

  return (
    <div className="flex flex-col justify-center items-center mb-8">
      <div className="flex gap-5 items-center">
        {options.map((option, index) => {
          return (
            <h1
              className={`${
                index === stage ? "bg-slate-600 rounded-lg" : ""
              } p-2 cursor-pointer transition-all`}
              onClick={() => switchStage(index)}
              key={index}
            >
              {option}
            </h1>
          );
        })}
      </div>
      <div className="my-6">
        <h1 className="text-8xl font-bold select-none m-0">
          {getTime(stage)}:{seconds.toString().padStart(2, "0")}
        </h1>
      </div>
      <button
        onClick={() => setStart((start) => !start)}
        className="border-2 border-gray-200 bg-gray-200 text-slate-600 font-semibold uppercase px-16 py-2 rounded-md hover:bg-slate-600 hover:border-gray-200 hover:text-slate-200"
      >
        {start ? "Stop" : "Start"}
      </button>
    </div>
  );
}
