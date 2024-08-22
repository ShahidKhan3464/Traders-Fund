import React, {useState} from 'react';
import QuestionIcon from '../images/icons/question.svg';
import {useNavigate} from 'react-router-dom';
import {formatDate} from "../utils/utils";
import {DOCUMENT_TYPE_TEXT, getStatusColor, KYC_STATUS_TEXT} from "../utils/constants";
import {useStore} from "../store";

const KycStatusTable = ({iskycverified, kycDocsResponseDate, kycDocsSubmittedDate, kycData}) => {
    const [hoveredItemId, setHoveredItemId] = useState(null);
    const navigate = useNavigate()
    const {setReUploadDocument} = useStore();

    const handleMouseOver = (id) => {
        setHoveredItemId(id);
    };

    const handleMouseOut = () => {
        setHoveredItemId(null);
    };

    const onResubmit = (item) => {
        let index;
        if (item.documentType === 'NATIONAL_ID' || item.documentType === 'PASSPORT' || item.documentType === 'DRIVING_LICENSE') {
            index = 2
        } else if (item.documentType === 'SELFIE_WITH_ID') {
            index = 4
        } else {
            index = 5
        }
        setReUploadDocument(true);
        const params = new URLSearchParams({tab: index, from:'kyc-document-status'});
        navigate(`/verification?${params.toString()}`);
    }

    return (
        <div className="overflow-x-auto shadow-md sm:rounded-lg">
            <div className="inline-block min-w-full align-middle">
                <div className="overflow-hidden">
                    <div className="px-6 py-5 bg-secTheme">Submitted documents</div>
                    <table className="min-w-full table-fixed divide-y divide-black border border-gray-500/20">
                        <thead className="bg-[#3B3C3D] text-white">
                        <tr>
                            <th scope="col" className="py-3 px-6 text-xs tracking-wider text-left uppercase">
                                DOCUMENT TYPE
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs tracking-wider text-left uppercase">
                                CREATED DATE
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs tracking-wider text-left uppercase">
                                LAST UPDATED
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs tracking-wider text-left uppercase">
                                STATUS
                            </th>
                            <th scope="col" className="py-3 px-6 text-xs tracking-wider text-left uppercase">
                                ACTION
                            </th>
                        </tr>
                        </thead>
                        <tbody className="bg-[#1C1D20] divide-y divide-gray-500/50 text-white text-left">
                        {kycData?.map((item) => (
                            <tr key={item.id} className="relative">
                                <td className="py-4 px-6 text-sm whitespace-nowrap font-light">{DOCUMENT_TYPE_TEXT[item.documentType]}</td>
                                <td className="py-4 px-6 text-sm whitespace-nowrap font-light">{formatDate(item.createdAt)}</td>
                                <td className="py-4 px-6 text-sm whitespace-nowrap font-light">{formatDate(item.updatedAt)}</td>
                                <td className="py-4 px-6 text-sm whitespace-nowrap">
                                    <div
                                        className="flex items-center gap-1"
                                        onMouseOver={() => handleMouseOver(item.id)}
                                        onMouseOut={handleMouseOut}
                                    >
                                        <button
                                            className={`flex w-auto px-3 py-1 bg-white rounded-full ${getStatusColor(item.status)}`}>
                                            {KYC_STATUS_TEXT[item.status]}
                                        </button>
                                        {item.status === 'REJECTED' && <img src={QuestionIcon} alt=""/>}
                                        {item.status === 'REJECTED' && hoveredItemId === item.id && (
                                            <div
                                                className="absolute top-2 right-40 w-[300px] text-xs overflow-wrap whitespace-normal p-1 sm:text-sm text-white break-words z-[1000] bg-gray-700 rounded">
                                                Reason for rejection: {item.reason || 'NA'}
                                            </div>
                                        )}
                                    </div>
                                </td>
                                <td className="px-6 py-4 text-sm font-light whitespace-nowrap">
                                    {item.status === 'REJECTED' ? (
                                        <button
                                            className="px-3 py-2 rounded-md bg-[#00A4E6] font-semibold"
                                            onClick={() => onResubmit(item)}
                                        >
                                            RE-SUBMIT
                                        </button>
                                    ) : (
                                        'NONE'
                                    )}
                                </td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default KycStatusTable;
