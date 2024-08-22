import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { showError } from '../utils/utils';
import Notification from '../components/Notification';
import { getTradingAccountCertificates } from '../api';
import phase1Preview from '../images/phase1_preview.png';
import phase2Preview from '../images/phase2_preview.png';
import phase3Preview from '../images/phase3_preview.png';
import fundedPreview from '../images/funded_preview.png';

const Tab = styled.button`
    padding: 8px 12px;
    cursor: pointer;
    opacity: 0.6;
    border-radius: 8px;
    border: 0;
    outline: 0;
    color: white;
    transition: ease border-bottom 250ms;
    ${({ active }) =>
      active &&
      `
    background: #3B3C3D;
    opacity: 1;
  `}
`;

const phases = {
    all: 'All',
    PHASE_1: 'Phase 1',
    PHASE_2: 'Phase 2',
    PHASE_3: 'Phase 3',
    FUNDED: 'Funded',
    PAYOUTS: 'Payouts',
};

const phasePreviews = {
    phase_1: phase1Preview,
    phase_2: phase2Preview,
    phase_3: phase3Preview,
    funded: fundedPreview,
};

const types = Object.values(phases);

function TabGroup() {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    const [active, setActive] = useState(types[0]);
    const [certificates, setCertificates] = useState([]);
    const [allCertificates, setAllCertificates] = useState([]);
    const [notification, setNotification] = useState(null);

    useEffect(() => {
        (async () => {
            const list = await getTradingAccountCertificates();
            const customizedCertificates = list.tradingAccounts.flatMap(tradingAccount => {
                const tradingAccountCertificates = tradingAccount.Certificates.map(certificate => ({
                    certificateUrl: certificate.url,
                    phase: phases.PAYOUTS,
                    rawPhaseName: 'payouts',
                }));
                return [
                    {
                        certificateUrl: tradingAccount.certificateUrl,
                        phase: phases[tradingAccount.Challenge.phase],
                        rawPhaseName: tradingAccount.Challenge.phase.toLowerCase(),
                    },
                    ...tradingAccountCertificates,
                ];
            });
            setAllCertificates(customizedCertificates);
            setCertificates(customizedCertificates);
        })();
    }, []);

    const filterByPhase = selectedPhase => {
        setActive(selectedPhase);
        const filteredCertificates = [];
        for (const certificate of allCertificates) {
            if (certificate.phase === selectedPhase || selectedPhase === 'All') {
                filteredCertificates.push(certificate);
            }
        }
        setCertificates(filteredCertificates);
    };

    const downloadFile = async (url, filename) => {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                showError(setNotification);
            }
            const blob = await response.blob();
            const blobUrl = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = blobUrl;
            a.download = filename || 'download';
            a.click();
        } catch (error) {
            console.error(`An error occurred while downloading the file: ${error}`);
        }
    };

    return (
      <div className="p-3">
          <div className="flex flex-wrap sm:mx-3 mx-0 my-3 p-1 space-x-2 md:mx-0 bg-[#1C1D20] rounded-lg w-auto">
              {types.map(type => (
                <Tab
                  key={type}
                  active={active === type}
                  onClick={() => {
                      filterByPhase(type);
                  }}
                >
                    {type}
                </Tab>
              ))}
          </div>
          <div>
              <div className="flex flex-wrap items-center justify-center w-full gap-8 mx-auto lg:justify-start ">
                  {certificates && certificates.length ? (
                    certificates.map((certificate, index) => (
                      <div key={index} className="relative block overflow-hidden rounded-lg group h-[240px] w-[330px]">
                          <img
                            src={phasePreviews[certificate.rawPhaseName] || phasePreviews['funded']}
                            alt=""
                            className="inset-0 object-contain w-full mx-auto group-hover:opacity-50"
                          />
                          <div className="absolute bottom-0 flex justify-center w-full p-6 mx-auto transition ease-in-out group-hover:bg-secTheme/20 group-hover:backdrop-blur-sm ">
                              <div className="flex flex-wrap items-center justify-center gap-4 transition-all transform translate-y-8 opacity-0 group-hover:opacity-100 group-hover:translate-y-0 backdrop-blur-sm bg-secTheme/20">
                                  <a
                                    href={certificate.certificateUrl}
                                    download
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center gap-2 px-3 py-2 font-bold text-white rounded-md bg-mainBlue hover:bg-blue-600"
                                  >
                                      <span>Download</span>
                                  </a>
                                  <button className="inline-flex items-center gap-2 px-3 py-2 font-bold text-black bg-white rounded-md">
                                      <span>Email a copy</span>
                                  </button>
                              </div>
                          </div>
                      </div>
                    ))
                  ) : (
                    <div className="flex flex-col items-center justify-center gap-5 text-center">
                        <p className="text-sm text-mainColor">No certificates found</p>
                    </div>
                  )}
              </div>
              {notification && <Notification message={notification.message} type={notification.type} />}
          </div>
      </div>
    );
}

export default function Certificates({ activeNav, setActiveNav }) {
    useEffect(() => {
        setActiveNav(true);
        window.scrollTo(0, 0);
    }, []);
    return (
      <div className="gap-2 justify-center bg-mainTheme border border-[#3B3C3D] w-auto rounded-lg text-white overflow-x-scroll scrollbar-hide overflow-y-scroll">
          <div className="p-5 bg-grayTheme">
              <p className="text-lg">Certificates</p>
          </div>
          <TabGroup />
      </div>
    );
}
