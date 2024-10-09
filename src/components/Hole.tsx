import React from 'react';

interface HoleProps {
  isActive: boolean;
  onClick: () => void;
}

const Hole: React.FC<HoleProps> = ({ isActive, onClick }) => {
  return (
    <div className="hole">
      {isActive && (
        <img
          src="/assets/mole.png"
          alt="Mole"
          className="mole"
          onClick={onClick}
        />
      )}
    </div>
  );
};

export default Hole;