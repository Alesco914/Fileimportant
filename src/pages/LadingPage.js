import FrameComponent from "../components/FrameComponent";
import FramesBrands from "../components/FramesBrands";
import ProjectsFrame from "../components/ProjectsFrame";
import OpinionMaskGroup from "../components/OpinionMaskGroup";
import CTA from "../components/CTA";

const LadingPage = () => {
  return (
    <div className="w-full relative bg-whitesmoke-100 overflow-hidden flex flex-col items-center justify-start pt-[34px] px-0 pb-0 box-border gap-[84px] tracking-[normal] text-left text-base text-negro font-body-paragraph-regular mq450:gap-[84px] mq750:gap-[84px]">
      <section className="self-stretch flex flex-row items-start justify-end max-w-full">
        <div className="w-[1376px] flex flex-col items-end justify-start py-0 pr-0 pl-5 box-border gap-[48px] max-w-full mq750:gap-[48px]">
          <FrameComponent />
          <FramesBrands />
        </div>
      </section>
      <div className="w-[675px] flex flex-col items-center justify-start pt-0 px-5 pb-[84px] box-border gap-[7px] max-w-full">
        <b className="relative inline-block max-w-full">
          Las mejores empresas trabajan con nosotros
        </b>
        <div className="self-stretch flex flex-row items-center justify-between gap-[20px] mq750:flex-wrap">
          <img
            className="h-[132px] w-[132px] relative overflow-hidden shrink-0 min-h-[132px]"
            loading="eager"
            alt=""
            src="/google-logo.svg"
          />
          <img
            className="h-[132px] w-[132px] relative overflow-hidden shrink-0 min-h-[132px]"
            loading="eager"
            alt=""
            src="/youtubetv-logo.svg"
          />
          <img
            className="h-[23px] w-[207px] relative overflow-hidden shrink-0"
            loading="eager"
            alt=""
            src="/facebook-logo.svg"
          />
        </div>
      </div>
      <ProjectsFrame />
      <section className="self-stretch flex flex-col items-center justify-start gap-[24px] max-w-full">
        <OpinionMaskGroup />
        <CTA />
      </section>
    </div>
  );
};

export default LadingPage;
