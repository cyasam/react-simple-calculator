import React from 'react';

interface OtherFunctionsProps {
  acState: boolean;
  handleCButtonClick(): void;
  handleACButtonClick(): void;
  handleNegativePositiveButtonClick(): void;
  handlePercentageButtonClick(): void;
}

const OtherFunctions = ({
  handleCButtonClick,
  handleACButtonClick,
  handleNegativePositiveButtonClick,
  handlePercentageButtonClick,
  acState,
}: OtherFunctionsProps) => {
  return (
    <>
      <div className="row">
        {acState ? (
          <button className="key misc" onClick={handleACButtonClick}>
            AC
          </button>
        ) : (
          <button className="key misc" onClick={handleCButtonClick}>
            C
          </button>
        )}
        <button
          className="key misc"
          onClick={handleNegativePositiveButtonClick}
        >
          <sup>+</sup>/<sub>−</sub>
        </button>
        <button className="key misc" onClick={handlePercentageButtonClick}>
          %
        </button>
      </div>
    </>
  );
};

export default OtherFunctions;
