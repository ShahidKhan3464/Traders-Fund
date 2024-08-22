import React from 'react';

const BonusAndRefund = () => {
  return (
    <p>
      When it comes to the Bonus & Refund status at Pro Traders Fund, there are three different statuses: Eligible, Not Eligible, and
      Pending. <br /> <br />
      Eligible Status: Traders are considered eligible for the Bonus & Refund if they successfully pass the Demo Challenge Phase 1 & 2
      within 30 days. Additionally, their profits generated on the Live Phase 3 account must be equal to or greater than the in-phase bonus
      amount derived from the profit target in Phase 1 & 2. <br />
      <br />
      Not Eligible Status: Traders are marked as Not Eligible if they fail to pass Phase 1 and 2 within the given 30-day timeframe.
      Furthermore, if their profits generated on the Live Phase 3 account are less than the in-phase bonus amount derived from the profit
      target in Phase 1 & 2, they are also not eligible for the Bonus & Refund. <br />
      <br />
      Pending Status: The Pending status applies when the trader has not yet exceeded 30 days since the inception of their account. This
      means that their Bonus & Refund status is still being determined and will be updated once the 30-day period has passed. <br />
      <br />
      Please note that the Bonus & Refund status is a crucial factor in determining whether traders are eligible for bonuses and refunds
      based on their performance in the different phases of the Pro Traders Fund challenge.
    </p>
  );
};

export default BonusAndRefund;
