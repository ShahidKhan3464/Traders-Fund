import React from 'react';
import LinearProgress from '@mui/material/LinearProgress';

export default function DashboardProgressBar({value, positiveOutcome}) {
    const backgroundColor = positiveOutcome ? '#1B2F28' : '#422020';
    const barColor = positiveOutcome ? '#16B364' : '#D92D20';

    return (
        <LinearProgress
            variant="determinate"
            value={value > 100 ? 100 : value}
            sx={{
                backgroundColor: backgroundColor,
                borderRadius: 10,
                height: 6,
                '& .MuiLinearProgress-bar': {
                    backgroundColor: barColor,
                    borderRadius: 10,
                    height: 6
                }
            }}
        />
    );
}
