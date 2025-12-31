import { RotatingTitle } from "./rotating-title"

export function ProfileHeader({ glitchActive }: { glitchActive: boolean }) {
  return (
    <div className="flex flex-col items-center justify-center w-full gap-2 md:gap-6">
      {/* Profile photo */}
      <div className="w-[260px] md:w-[300px] aspect-[3/4] overflow-hidden rounded-2xl shadow-xl border-4 border-white/20 dark:border-white/10 mt-2">
        <img
          src="/EricaZhaoProfilePic.jpg"
          alt="Erica Zhao"
          className="w-full h-full object-cover object-center"
        />
      </div>

      {/* Name and Rotating Title */}
      <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-2 text-white text-center w-full flex flex-col items-center justify-center">
        <span className="block mb-2 text-3xl md:text-5xl font-bold text-white">
          Erica Zhao
        </span>
        <span
          style={{
            display: "inline-block",
            width: 560,
            minWidth: 260,
            textAlign: "center",
          }}
        >
          <RotatingTitle glitchActive={glitchActive} />
        </span>
      </h1>
    </div>
  )
}