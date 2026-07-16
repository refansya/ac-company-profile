export default function Aurora() {
  return (
    <>
      <div
        className="
          absolute
          -left-52
          top-[-180px]
          h-[650px]
          w-[650px]
          rounded-full
          bg-[var(--color-primary)]
          opacity-20
          blur-[170px]
        "
      />

      <div
        className="
          absolute
          right-[-120px]
          bottom-[-120px]
          h-[550px]
          w-[550px]
          rounded-full
          bg-[var(--color-secondary)]
          opacity-20
          blur-[170px]
        "
      />

      <div
        className="
          absolute
          left-1/2
          top-1/2
          h-[450px]
          w-[450px]
          -translate-x-1/2
          -translate-y-1/2
          rounded-full
          bg-cyan-300/10
          blur-[140px]
        "
      />
    </>
  );
}