import Project from "./Project";

const ProjectsFrame = () => {
  return (
    <section className="w-[1294px] flex flex-row items-start justify-end pt-0 px-5 pb-[39px] box-border max-w-full text-left text-11xl text-negro font-body-paragraph-regular">
      <div className="w-[1157px] flex flex-row items-end justify-start gap-[91px] max-w-full lg:gap-[91px] mq750:gap-[91px] mq1050:flex-wrap">
        <div className="h-[1397px] w-[459px] flex flex-col items-start justify-start gap-[40px] min-w-[459px] max-w-full mq450:gap-[40px] mq750:min-w-full mq1050:flex-1">
          <div className="self-stretch h-[625px] flex flex-col items-start justify-start gap-[7px]">
            <h2 className="m-0 h-[72px] relative text-inherit font-bold font-inherit inline-block mq450:text-lg mq1050:text-5xl">
              <p className="m-0">{`Conoce nuestros `}</p>
              <p className="m-0">mejores proyectos</p>
            </h2>
            <Project maskGroup="/mask-group@2x.png" />
          </div>
          <Project
            maskGroup="/mask-group-1@2x.png"
            propFlex="1"
            propHeight="unset"
          />
        </div>
        <div className="flex-1 flex flex-col items-start justify-start gap-[39px] min-w-[395px] max-w-full text-base mq750:gap-[39px] mq750:min-w-full">
          <div className="self-stretch h-[38px] relative font-light inline-block">
            <p className="m-0">&nbsp;</p>
          </div>
          <div className="w-[459px] h-[1318px] flex flex-col items-start justify-start gap-[21px] max-w-full">
            <div className="self-stretch flex-1 flex flex-col items-start justify-start gap-[24px]">
              <img
                className="self-stretch flex-1 relative max-w-full overflow-hidden max-h-full object-cover"
                loading="eager"
                alt=""
                src="/mask-group-1@2x.png"
              />
              <b className="relative">Ejemplos de un proyecto prometedor</b>
              <div className="flex flex-row items-center justify-start gap-[4px] text-primary-color">
                <b className="h-[38px] relative inline-block">
                  <p className="m-0">&nbsp;</p>
                  <p className="m-0"> proyecto</p>
                </b>
                <img
                  className="h-[9px] w-[9.8px] relative"
                  alt=""
                  src="/vector-4.svg"
                />
              </div>
            </div>
            <Project
              maskGroup="/mask-group@2x.png"
              propFlex="unset"
              propHeight="546px"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsFrame;
