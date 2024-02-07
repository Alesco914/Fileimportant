import { useMemo } from "react";

const Project = ({ maskGroup, propFlex, propHeight }) => {
  const project4Style = useMemo(() => {
    return {
      flex: propFlex,
      height: propHeight,
    };
  }, [propFlex, propHeight]);

  return (
    <div
      className="self-stretch flex-1 flex flex-col items-start justify-start gap-[24px] text-left text-base text-negro font-body-paragraph-regular"
      style={project4Style}
    >
      <img
        className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
        loading="eager"
        alt=""
        src={maskGroup}
      />
      <b className="relative">Ejemplos de un proyecto prometedor</b>
      <div className="flex flex-row items-center justify-start gap-[4px] text-primary-color">
        <b className="relative">Ver proyecto</b>
        <img
          className="h-[9px] w-[9.8px] relative"
          loading="eager"
          alt=""
          src="/vector-2.svg"
        />
      </div>
    </div>
  );
};

export default Project;
