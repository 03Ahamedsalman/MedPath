const Button = ({
  children = "Apply Now",
  color = "#00A7A3",
  className = "",
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
          z-[1]
          text-[inherit]
          group ${className}
        `}
        style={{
          "--btn-color": color,
          borderColor: "#00A7A3",
        }}
      >
        {/* Button text */}
        <span className="relative z-10 transition-colors duration-300 group-hover:text-white">
          {children}
        </span>

        {/* Styling and animation */}
        <style jsx global>{`
          .click-btn::before {
            content: "";
            position: absolute;
            top: 0;
            left: 0;
            width: 15%;
            height: 100%;
            background-color: var(--btn-color);
            z-index: -1;
            transform: rotateZ(-45deg) translate(-50%, -50%);
            transition: all 0.3s ease;
          }

          .click-btn:hover::before {
            animation: ani507 0.6s forwards;
          }

          @keyframes ani507 {
            10% {
              width: 0;
              transform: rotateZ(-45deg) translate(-100%, -50%);
            }
            20% {
              width: 0;
              transform: rotateZ(0deg) translate(-100%, 85%);
            }
            60% {
              width: 100%;
              transform: rotateZ(0deg) translate(0, 85%);
            }
            100% {
              width: 100%;
              transform: rotateZ(0deg) translate(0, 0);
            }
          }
        `}</style>
      </a>
    </div>
  );
};

export default Button;
