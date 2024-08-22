import React from 'react';
import IconButton from '@mui/material/IconButton';
import Tooltip, { tooltipClasses } from '@mui/material/Tooltip';
import { AiOutlineQuestionCircle } from 'react-icons/ai';
import { styled } from '@mui/material/styles';

const LightTooltip = styled(({ className, ...props }) => <Tooltip {...props} classes={{ popper: className }} />)(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1]
  }
}));
const TraderType = ({ type }) => {
  return (
    <>
      {type === 'Intraday' && (
        <div className="flex items-center justify-center gap-1 px-2 py-1 text-sm rounded-md bg-mainBlue/20 text-mainBlue">
          Intraday
          <LightTooltip title="" placement="top-start">
            <IconButton>
              <AiOutlineQuestionCircle className="text-sm text-mainBlue" />
            </IconButton>
          </LightTooltip>
        </div>
      )}
      {type === 'Swinger' && (
        <div className="flex items-center justify-center gap-1 px-2 py-1 text-sm rounded-md bg-mainBlue/20 text-mainBlue">
          Intraday
          <LightTooltip title="" className="bg-[#00A4E633]" placement="top-start">
            <IconButton>
              <AiOutlineQuestionCircle className="text-sm text-mainBlue" />
            </IconButton>
          </LightTooltip>
        </div>
      )}
    </>
  );
};

export default TraderType;
