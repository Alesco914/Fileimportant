const FramesBrands = () => {
  return (
    <div className="w-[1250px] flex flex-row items-center justify-start gap-[150px] max-w-full text-left text-21xl text-negro font-heading-titulos lg:gap-[150px] mq450:gap-[150px] mq750:gap-[150px] mq1050:flex-wrap">
      <div className="w-[400px] flex flex-col items-start justify-start pt-[69px] px-0 pb-0 box-border min-w-[400px] max-w-full mq450:pt-[45px] mq450:box-border mq450:min-w-full mq1050:flex-1">
        <div className="self-stretch flex flex-col items-start justify-start gap-[32px] mq450:gap-[32px]">
          <div className="self-stretch flex flex-col items-start justify-start gap-[8px]">
            <h1 className="m-0 self-stretch h-[180px] relative text-inherit font-normal font-inherit inline-block mq450:text-5xl mq1050:text-13xl">
              <span>Creamos los mejores productos digitales</span>
              <span className="text-primary-color">.</span>
            </h1>
            <div className="self-stretch h-[38px] relative text-base font-light font-body-paragraph-regular inline-block">
              Diseñamos y desarrollamos mejoras siempre pensando en nuestros
              usuarios.
            </div>
          </div>
          <button className="cursor-pointer [border:none] py-6 pr-[23px] pl-6 bg-primary-color flex flex-row items-center justify-start gap-[16px] whitespace-nowrap hover:bg-blueviolet">
            <b className="relative text-base font-body-paragraph-regular text-blanco text-left">
              Comienza tu proyecto
            </b>
            <img
              className="h-[9px] w-[9.8px] relative"
              alt=""
              src="/vector.svg"
            />
          </button>
        </div>
      </div>
      <img
        className="h-[630px] flex-1 relative max-w-full overflow-hidden object-cover min-w-[455px] mq750:min-w-full"
        loading="eager"
        alt=""
        src="/imagen@2x.png"
      />
    </div>
  );
};

export default FramesBrands;
