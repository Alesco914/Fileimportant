const CTA = () => {
  return (
    <footer className="self-stretch bg-negro overflow-hidden flex flex-col items-center justify-start pt-[119px] pb-[83px] pr-5 pl-[88px] box-border gap-[141px] max-w-full text-left text-77xl text-blanco font-body-paragraph-regular lg:gap-[141px] lg:pl-11 lg:box-border mq450:gap-[141px] mq750:gap-[141px] mq750:pl-[22px] mq750:pt-[77px] mq750:pb-[54px] mq750:box-border">
      <div className="w-[966px] flex flex-row items-start justify-start max-w-full">
        <div className="flex flex-col items-center justify-start gap-[56px] max-w-full mq450:gap-[56px]">
          <div className="flex flex-col items-center justify-start max-w-full">
            <h1 className="m-0 h-[116px] relative text-inherit font-bold font-inherit inline-block mq450:text-10xl mq1050:text-29xl">
              <span>Trabajamos</span>
              <span className="text-primary-color"> juntos.</span>
            </h1>
            <div className="relative text-base font-light inline-block max-w-full">
              ¿Tienes alguna idea general de loque llevar acabo? Contáctanos y
              hagamos realidad tu proyecto
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
      <div className="w-[1208px] flex flex-row items-end justify-between gap-[20px] max-w-full text-base lg:flex-wrap">
        <div className="w-[565px] flex flex-col items-start justify-start gap-[34px] min-w-[565px] max-w-full lg:flex-1 mq750:gap-[34px] mq750:min-w-full">
          <div className="self-stretch flex flex-col items-start justify-start gap-[24px] max-w-full">
            <div className="relative font-light inline-block max-w-full">
              <span>{`Descubre porque somos la mejor `}</span>
              <span className="text-primary-color">Agencia Digital</span>
            </div>
            <div className="self-stretch flex flex-row items-start justify-start gap-[24px] text-11xl mq750:flex-wrap">
              <h2 className="m-0 flex-1 relative text-inherit font-bold font-inherit inline-block min-w-[88px] mq450:text-lg mq1050:text-5xl">
                Proyecto
              </h2>
              <h2 className="m-0 h-9 relative text-inherit font-bold font-inherit inline-block mq450:text-lg mq1050:text-5xl">
                Curso
              </h2>
              <h2 className="m-0 h-9 flex-1 relative text-inherit font-bold font-inherit inline-block min-w-[88px] mq450:text-lg mq1050:text-5xl">
                Nosotros
              </h2>
              <h2 className="m-0 h-9 flex-1 relative text-inherit font-bold font-inherit inline-block min-w-[89px] mq450:text-lg mq1050:text-5xl">
                Contacto
              </h2>
            </div>
          </div>
          <div className="h-[38px] relative font-light inline-block">
            <p className="m-0">2024© Todos los derechos reservados</p>
          </div>
        </div>
        <div className="w-[421px] flex flex-row items-center justify-start gap-[82px] min-w-[421px] max-w-full lg:flex-1 mq450:flex-wrap mq450:gap-[82px] mq750:min-w-full">
          <img
            className="h-[132px] w-[132px] relative overflow-hidden shrink-0 mq450:flex-1"
            loading="eager"
            alt=""
            src="/youtubetv-logo-1.svg"
          />
          <img
            className="h-[23px] w-[207px] relative"
            loading="eager"
            alt=""
            src="/vector-7.svg"
          />
        </div>
      </div>
    </footer>
  );
};

export default CTA;
