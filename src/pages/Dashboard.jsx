import React, {useEffect, useState} from 'react';
import VerifiedDashboard from '../components/VerifiedDashboard';
import {getTradingList, getUserProfileDetails} from '../api';
import {useNavigate} from 'react-router-dom';
import {
    DOCUMENT_TYPE_TEXT,
    getStatusColor,
    KYC_BUTTON_TEXT,
    KYC_DASHBOARD_STATUS_TEXT,
    KYC_STATUS_TEXT
} from '../utils/constants';

const Dashboard = ({activeNav, setActiveNav, admin, setAdmin}) => {
    const [tradingAccountExists, setTradingAccountExists] = useState(true);
    const [loading, setLoading] = useState(false);
    const [tradingAccounts, setTradingAccounts] = useState([]);
    const [profile, setProfile] = useState(null);
    const [kycDocStatusData, setKycDocStatusData] = useState([])
    const navigate = useNavigate();
    useEffect(() => {
        (async () => {
            setLoading(true);
            try {
                const response = await getTradingList();
                const accounts = response.tradingAccounts;
                setTradingAccounts(accounts);
                // console.log("tradingAccounts::",tradingAccounts);
                if (accounts && accounts.length > 0) {
                    setTradingAccountExists(true);
                } else {
                    setTradingAccountExists(false);
                }
            } catch (error) {
                console.error('Error fetching user data:', error);
            } finally {
                setLoading(false);
            }
        })();
    }, []);


    const fetchUserProfileData = async () => {
        try {
            const response = await getUserProfileDetails();
            setProfile(response)
            setKycDocStatusData(response?.KYC)

        } catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        fetchUserProfileData()
    }, []);

    const [show, setShow] = useState(true);
    const rejectedKYCs = profile?.KYC?.filter(d => d.status === 'REJECTED');

    return (
        <div>
            {/*{show ? <Banner show={show} setShow={setShow}></Banner> : null}*/}
            {tradingAccountExists ? (
                <VerifiedDashboard accounts={tradingAccounts}></VerifiedDashboard>
            ) : loading ? (
                <div className="text-center mt-8">Loading...</div>
            ) : (
                <div>
                    {(profile?.KYC?.filter(d => d.status === 'APPROVED').length < 3 || profile?.kycStatus === 'PENDING_AGREEMENT') && (
                        <div className="bg-[#1c1d20] text-white">
                            {/* Verify Button */}
                            <div className="text-center py-6">
                                {rejectedKYCs?.length > 0 ? (
                                    <>
                                        <h1 className="text-lg mb-4">
                                            Welcome to Pro Traders Fund. The following KYC documents should be
                                            re-uploaded:
                                        </h1>
                                        <h1 className="text-lg mb-4 gap-2">
                                            {rejectedKYCs?.map(doc => (
                                                <button
                                                    className={`w-25 px-3 py-1 bg-white rounded-full text-red-600 mx-2 px-2 py-1`}>
                                                    <div key={doc.id}>
                                                        {DOCUMENT_TYPE_TEXT[doc?.documentType]}
                                                    </div>
                                                </button>
                                            ))}
                                        </h1>
                                        <button
                                            onClick={kycDocStatusData.length >= 3 ? () => navigate('/kyc-document-status') : () => navigate('/verification')}
                                            className={`bg-[#00A4E6] px-4 py-2 rounded-md hover:bg-[#c0c0c0] transition-colors uppercase`}
                                        >
                                            {KYC_BUTTON_TEXT[profile?.kycStatus]}
                                        </button>
                                    </>
                                ) : (
                                    <>
                                        <h1 className="text-lg mb-4">
                                            Welcome to Pro Traders Fund. {KYC_DASHBOARD_STATUS_TEXT[profile?.kycStatus]}.
                                        </h1>
                                        <h1 className="text-lg mb-4">
                                            <button
                                                className={`w-25 px-3 py-1 bg-white rounded-full ${getStatusColor(profile?.kycStatus)}`}>
                                                {KYC_STATUS_TEXT[profile?.kycStatus]}
                                            </button>
                                        </h1>
                                        <h1 className="text-lg mb-4">
                                            Current Status
                                        </h1>
                                        <button
                                            onClick={kycDocStatusData.length >= 3 ? () => navigate('/kyc-document-status') : () => navigate('/verification')}
                                            className={`bg-[#00A4E6] px-4 py-2 rounded-md hover:bg-[#c0c0c0] transition-colors uppercase`}
                                        >
                                            {KYC_BUTTON_TEXT[profile?.kycStatus]}
                                        </button>
                                    </>
                                )}
                            </div>
                        </div>
                    )}
                    <div className="text-center mt-8">No trading accounts found.</div>
                </div>
            )}
        </div>
    );
};

export default Dashboard;
