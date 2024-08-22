export const KYC_BUTTON_TEXT = {
    PENDING: 'Verify Now',
    PROCESSING: 'Check Details',
    PENDING_MANUAL_VERIFICATION: 'Check Details',
    PENDING_AGREEMENT: 'Pending Agreement',
    APPROVED: 'Approved',
    REJECTED: 'Know More'
}

export const KYC_DASHBOARD_STATUS_TEXT = {
    PENDING: 'Please complete your KYC verification to Get Started',
    PROCESSING: `Your KYC verification is In Progress`,
    PENDING_MANUAL_VERIFICATION: 'Your KYC verification is In Progress',
    PENDING_AGREEMENT: 'Your KYC verification is completed, please sign agreement to complete the process',
    APPROVED: 'Your KYC verification is completed',
    REJECTED: 'Your KYC verification was not success, please find the details below'
}

export const KYC_STATUS_TEXT = {
    PENDING: 'PENDING',
    PROCESSING: 'PROCESSING',
    PENDING_MANUAL_VERIFICATION: 'PROCESSING',
    PENDING_AGREEMENT: 'PENDING AGREEMENT',
    APPROVED: 'APPROVED',
    REJECTED: 'REJECTED'
}

export const DOCUMENT_TYPE_TEXT = {
    PASSPORT: 'PASSPORT',
    NATIONAL_ID: 'NATIONAL ID',
    DRIVING_LICENSE: 'DRIVING LICENSE',
    SIGNATURE: 'SIGNATURE',
    SELFIE_WITH_ID: 'SELFIE WITH ID',
    AGREEMENT_FORM: 'AGREEMENT FORM'
}

export const getStatusColor = (status) => {
    switch (status) {
        case 'REJECTED':
            return 'text-red-600';
        case 'PENDING':
        case 'PENDING_MANUAL_VERIFICATION':
        case 'PENDING_AGREEMENT':
        case 'PROCESSING':
            return 'text-yellow-600';
        default:
            return 'text-green-600';
    }
};
