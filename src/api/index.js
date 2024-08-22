// utils/api/index.js

import axios from 'axios';

const API_BASE_URL = process.env.REACT_APP_PTF_API_V2;

const getHeader = () => {
    const token = localStorage.getItem('authToken')
    return {
        headers: {'Authorization': `Bearer ${token}`}
    }
}

export const verifyAccount = async (data, accessToken) => {
    try {
        const headers = accessToken ? {
            headers: {'Authorization': `Bearer ${accessToken}`}
        } : getHeader()
        const response = await axios.post(`${API_BASE_URL}/verification/verify-account`, data, headers);
        return response.data;
    } catch (error) {
        throw error;
    }
};

const sendPhoneVerificationCode = async (data) => {
    try {
        const response = await axios.post(`/auth/add-phone-number`, data, {withCredentials: true});
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createUserV2 = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/user/register-v2`, data, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createUserV1 = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/user/register-v1`, data, {
            withCredentials: true,
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const twoFaLogin = async (token, data) => {
    const headers = {'Authorization': `Bearer ${token}`};
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login-two-fa`, data, {headers});
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const login = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const loginV2 = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/login-v2`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getProfile = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/user/profile`, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const getActivities = async (pageNumber, perPage) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/activity/list/${pageNumber}/${perPage}`, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getTwoFaStatus = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/two-fa/status`, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getTradingList = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/trading-account/list/1/50`, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getMT5WithdrawalEligibleList = async (tradingAccountId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/mt5-withdrawal/withdrawal-eligibility/${tradingAccountId}`, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getMT5WithdrawalsList = async (page = 1, perPage = 50) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/mt5-withdrawal/list/${page}/${perPage}`, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getWalletBalance = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/wallet/balance`, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getWalletTransactionsList = async (page = 1) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/wallet/list-transactions/${page}/50`, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const postRequestProfitSplit = async (tradingAccountId, amount, type) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/mt5-withdrawal/withdraw/${tradingAccountId}`, {
            amount, type
        }, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const generateTwoFa = async () => {
    try {
        const response = await axios.post(`${API_BASE_URL}/two-fa/generate`, {}, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const enableTwoFa = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/two-fa/enable`, data, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const disableTwoFa = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/two-fa/disable`, data, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const logout = async () => {
    try {
        const response = await axios.post(`${API_BASE_URL}/auth/logout`, {}, getHeader());
        localStorage.clear();
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const changePasswordAPI = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/password/change`, data, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const inviteUsersAPI = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/affiliate/invite-users`, data, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const affiliateStatsAPI = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/affiliate/stats`, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const affiliateStatisticsAPI = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/affiliate/statistics`, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const affiliatePayoutStatisticsAPI = async (duration) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/affiliate/payout-statistics?duration=${duration}`, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const affiliateLeadersAPI = async (pageNumber, perPage, name) => {
    try {
        const params = name ? { name } : {};
        const response = await axios.get(`${API_BASE_URL}/affiliate/leaders/${pageNumber}/${perPage}`, {...getHeader(), params:
            params});
        return response.data;
    } catch (error) {
        console.log(error)
        throw error;
    }
};

export const affiliateUsersAPI = async (pageNumber, perPage, indirect) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/affiliate/users/${pageNumber}/${perPage}?indirect=${indirect}`, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const affiliateEarningsAPI = async (pageNumber, perPage, type) => {
    try {
        let query=''
        if(type){
            query=`?type=${type}`
        }
        const response = await axios.get(`${API_BASE_URL}/affiliate/earnings/${pageNumber}/${perPage}${query}`, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const affiliateTransactionsAPI = async (pageNumber, perPage) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/affiliate/transactions/${pageNumber}/${perPage}`, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const addBankAccount = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/bank/add`, data, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const walletWithdrawalAPI = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/wallet/withdraw`, data, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const bankAccountsList = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/bank/list/1/50`, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const getPurchaseByTransaction = async (transactionId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/purchase/${transactionId}`, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const contactAPI = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/support/contact`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const checkCouponCode = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/coupon-code/check`, data, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const purchaseChallenge = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/purchase/challenge`, data, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const resendNotificationAPI = async () => {
    try {
        return await axios.post(`${API_BASE_URL}/verification/verification-request`, {"destination": "EMAIL"}, getHeader());
    } catch (error) {
        throw error;
    }
};


export const advanceToNextPhaseRequest = async (tradingAccountId) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/challenge/advancing-request/${tradingAccountId}`, {}, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getChartsDataAPI = async (tradingAccountId, pageNumber, perPage) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/dashboard/chart-data/${tradingAccountId}/${pageNumber}/${perPage}`, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getTradesListAPI = async (pageNumber, perPage, userIds, status) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/trade/list`, {
            ...getHeader(),
            params: {
                pageNumber,
                perPage,
                userIds,
                status
            }
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getTradesAPI = async (tradingAccountId, pageNumber, perPage) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/trade/${tradingAccountId}/${pageNumber}/${perPage}`, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getDashboardStatisticsAPI = async (tradingAccountId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/dashboard/statistics/${tradingAccountId}`, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getTradingAccountDetailsAPI = async (tradingAccountId) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/trading-account/${tradingAccountId}`, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getTradingAccountCertificates = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/trading-account/list-certificates/1/50`, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const sendPasswordRequest = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/password/reset-request`, data, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const resetPasswordAPI = async (data) => {
    try {
        const response = await axios.post(`${API_BASE_URL}/password/reset`, data);
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const resetPasswordByAuthAPI = async (data, accessToken) => {
    try {
        const headers = accessToken ? {
            headers: {'Authorization': `Bearer ${accessToken}`}
        } : getHeader()
        const response = await axios.post(`${API_BASE_URL}/password/reset-by-auth`, data, headers);
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const getCalenderDataAPI = async (tradingAccountId, month, year) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/dashboard/trade-data/${tradingAccountId}/${month}/${year}`, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const createUserV3 = async data => {
    try {
        const response = await axios.post(`${API_BASE_URL}/user/register-v3`, data, {
            withCredentials: true
        });
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const updateUserCountry = async data => {
    try {
        const response = await axios.post(`${API_BASE_URL}/user/update-country`, data, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};

export const getTradingAccount = async (tradingAccountLogin) => {
    try {
        const response = await axios.get(`${API_BASE_URL}/support/trading-account/${tradingAccountLogin}`, getHeader());
        return response.data;
    } catch (error) {
        throw error;
    }
};


export const getUserProfileDetails = async () => {
    try {
        const response = await axios.get(`${API_BASE_URL}/user/profile-details`, {
            ...getHeader(),
        }, );
        return response.data;
    } catch (error) {
        throw error;
    }
};



export const uploadKycImage = async (formData, documentType) => {
    try {
        const response = await axios.post(
            `${API_BASE_URL}/kyc/upload-document?documentType=${documentType}`,
            formData,
            {
                headers: {
                    ...getHeader().headers,
                    'Content-Type': 'multipart/form-data',
                },
            }
        );
        return response.data;
    } catch (error) {
        throw error;
    }
};
export {
    sendPhoneVerificationCode
};
