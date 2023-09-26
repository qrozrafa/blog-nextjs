type GridPropd = {
  children: React.ReactNode;
};

export function Grid({ children }: GridPropd) {
  return (
    <>
      <div className="grid w-full grid-cols-[repeat(auto-fit,_minmax(240px,_3fr))] gap-6">
        {children}
      </div>
    </>
  );
}
