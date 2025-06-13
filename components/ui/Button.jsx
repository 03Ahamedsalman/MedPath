const Button = ({ 
  children = 'Hover me', 
  color = '#dd6395',
  className = ''
}) => {
  return (
    <div className={className}>
      <a
        href="#"
        className={`
          click-btn 
          relative 
          border 
          overflow-hidden 
          px-5 py-2 
          inline-block 
          no-underline 
          bg-transparent 
          transition-[color] 
          duration-300 
          z-[1]
          before:content-[''] 
          before:absolute 
          before:w-[15%] 
          before:h-full 
          before:top-0 
          before:left-0 
          before:transition-all 
          before:duration-300 
          before:z-[-1]
          hover:text-white 
          hover:transition-delay-300
          hover:before:animate-[ani507_0.6s_forwards]
        `}
        style={{
          '--btn-color': color,
          borderColor: color,
          color: color,
        }}
      >
        <span className="relative z-10">{children}</span>
        <style jsx global>{`
          .click-btn::before {
            background-color: var(--btn-color);
            transform: rotateZ(-45deg) translate(-50%, -50%);
          }
          @keyframes ani507 {
            10% {
              width: 0;
              transform: rotateZ(-45deg) translate(-100%, -50%);
            }
            20% {
              width: 0;
              transform: rotateZ(0) translate(-100%, 85%);
            }
            60% {
              width: 100%;
              transform: rotateZ(0) translate(0, 85%);
            }
            100% {
              width: 100%;
              transform: rotateZ(0) translate(0, 0);
            }
          }
        `}</style>
      </a>
    </div>
  );
};

export default Button;