// components/HeroBackground.tsx

export default function HeroBackground() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">

      <div
        className="
        absolute
        -left-40
        bottom-0
        w-[250px]
        h-[350px]
        rounded-full
        bg-pink-500/100
        blur-[30px]
        animate-pink
        "
      />

      <div
        className="
        absolute
        -right-40
        top-0
        w-[250px]
        h-[350px]
        rounded-full
        bg-violet-500/100
        blur-[30px]
        animate-purple
        "
      />

    </div>
  );
}