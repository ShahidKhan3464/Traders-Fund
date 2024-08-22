import React, {useState} from 'react';
import styled from 'styled-components';

import PropTypes from 'prop-types';
import clsx from 'clsx';
import {Box} from '@mui/system';
import ModalUnstyled from '@mui/core/ModalUnstyled';
import {AiOutlineClose} from 'react-icons/ai';

// react-copy-to-clipboard
// https://www.npmjs.com/package/react-copy-to-clipboard
// ! Credentials Modal
const BackdropUnstyled = React.forwardRef((props, ref) => {
    const {open, className, ...other} = props;
    return <div className={clsx({'MuiBackdrop-open': open}, className)} ref={ref} {...other} />;
});
BackdropUnstyled.propTypes = {
    className: PropTypes.string.isRequired,
    open: PropTypes.bool
};
const Modal = styled(ModalUnstyled)`
    position: fixed;
    z-index: 1300;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow-y: scroll;
`;
const Backdrop = styled(BackdropUnstyled)`
    z-index: -1;
    position: fixed;
    right: 0;
    bottom: 0;
    top: 0;
    left: 0;
    overflow-y: scroll;
    background-color: rgba(0, 0, 0, 0.5);
    -webkit-tap-highlight-color: transparent;
`;
const style = theme => ({
    // width: "600px",
    bgcolor: theme.palette.mode === 'dark' ? '#0A1929' : '#1C1D20'
});

const BreachInformationModal = ({handleClose, open, reason, openingBalance, equity, maxDrawdownLimit, login}) => {
    const [copiedField, setCopiedField] = useState('');

    const handleCopy = (value, field) => {
        setCopiedField(field);
        setTimeout(() => setCopiedField(''), 1500);
    };

    return (
        <>
            <Modal
                aria-labelledby="unstyled-modal-title"
                aria-describedby="unstyled-modal-description"
                open={open}
                onClose={handleClose}
                slots={{backdrop: Backdrop}}
            >
                <Box sx={style}
                     className="space-y-3 border-gray-500 border-2 rounded-lg lg:mt-20 text-white md:w-[430px] w-auto mx-auto">
                    <div
                        className="flex items-center justify-between px-5 py-3 border-b border-gray-600 rounded-t-md bg-mainTheme">
                        <p className="text-lg">Breach Information</p>
                        <button onClick={handleClose}>
                            <AiOutlineClose className="text-2xl"></AiOutlineClose>
                        </button>
                    </div>
                    <div className="text-sm">
                        <div className="flex justify-between gap-4 py-4 border-b border-gray-500/20">
                            <div className="flex justify-between flex-1 px-3">
                                <div className="gap-2">
                                    <p>Login</p>
                                    <p className="copy-me">{login}</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between gap-4 py-4 border-b border-gray-500/20">
                            <div className="flex justify-between flex-1 px-3">
                                <div className="gap-2">
                                    <p>Breach Reason</p>
                                    <p className="copy-me">{reason ? reason : '-'}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between gap-4 py-4 border-b border-gray-500/20">
                            <div className="flex justify-between flex-1 px-3">
                                <div className="gap-2">
                                    <p>Opening Balance</p>
                                    <p>${openingBalance?.toFixed(2)}</p>
                                </div>
                            </div>
                            <div className="flex justify-between flex-1 px-3">
                                <div className="gap-2">
                                    <p>Floating / Equity Balance</p>
                                    <p>${equity?.toFixed(2)}</p>
                                </div>
                            </div>
                        </div>

                        <div className="flex justify-between gap-4 py-4 border-b border-gray-500/20">
                            <div className="flex justify-between flex-1 px-3">
                                <div className="gap-2">
                                    <p>Max Daily Draw down</p>
                                    <p>-${Math.abs(equity - openingBalance)?.toFixed(2)} (Equity - Opening Balance)</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex justify-between gap-4 py-4 border-b border-gray-500/20">
                            <div className="flex justify-between flex-1 px-3">
                                <div className="gap-2">
                                    <p>Max Daily Draw down Limit</p>
                                    <p>{(maxDrawdownLimit * 100)?.toFixed(2)}% of Opening Balance
                                        ({(maxDrawdownLimit)?.toFixed(2)} x
                                        ${openingBalance} = ${(maxDrawdownLimit * openingBalance)?.toFixed(2)})</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Box>
            </Modal>
        </>
    );
};

export default BreachInformationModal;
