"use client";

const Overlay = ({ children, setIsOpen }) => {
  return (
    <div onClick={() => setIsOpen(false)} className={`ic-modalOverlay`}>
      <div className={`ic-modalContent`} onClick={(e) => e.stopPropagation()}>
        {children}
      </div>
    </div>
  );
};

export default Overlay;
