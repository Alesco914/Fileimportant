const FrameComponent = () => {
  return (
    <header className="self-stretch flex flex-row items-start justify-start max-w-full text-left text-base text-negro font-body-paragraph-regular">
      <div className="w-[1292px] flex flex-row items-center justify-between py-0 pr-[21px] pl-0 box-border gap-[20px] max-w-full mq750:w-[890px]">
        <div className="flex flex-row items-center justify-start gap-[8px]">
          <div className="h-[12.3px] w-3 relative rounded-[50%] bg-primary-color" />
          <b className="relative whitespace-nowrap">Agencia digital</b>
        </div>
        <div className="w-[402px] flex flex-row items-start justify-start gap-[48px] max-w-full mq450:gap-[48px] mq750:hidden">
          <div className="flex-1 relative font-light">Proyecto</div>
          <div className="relative font-light">Cursos</div>
          <div className="flex-1 relative font-light">Nosotros</div>
          <div className="flex-1 relative font-light">Contacto</div>
        </div>
        <button className="cursor-pointer [border:none] p-4 bg-primary-color flex flex-row items-center justify-start gap-[15px] whitespace-nowrap hover:bg-blueviolet">
          <div className="relative text-base font-light font-body-paragraph-regular text-blanco text-left">
            Comienza tu proyecto
          </div>
          <img
            className="h-[9px] w-[9.8px] relative"
            alt=""
            src="/vector.svg"
          />
        </button>
      </div>
    </header>
  );
};

export default FrameComponent;
