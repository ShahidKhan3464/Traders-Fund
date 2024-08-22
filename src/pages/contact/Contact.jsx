import Navbar2 from '../../components-website/Navbar2';
import Footer from '../../components-website/FooterV2';
import colored_at from '../../images/icons/colored_at.svg';
import pin from '../../images/icons/pin.svg';
import {useEffect, useState} from 'react';
import {showCustomError} from '../../utils/utils';
import Notification from '../../components-website/Notification';
import {useNavigate} from 'react-router-dom';
import {Grid} from '@mui/material';
import {contactAPI} from '../../api';

export default function Contact() {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [message, setMessage] = useState('');
    const [notification, setNotification] = useState(null);

    useEffect(() => {
        localStorage.removeItem('redirect_to');
        window.scrollTo(0, 0);
    }, []);

    const handleSubmit = async e => {
        e.preventDefault(); // Prevent default form submission

        // Define the POST request body data
        const data = {
            firstName, lastName, email, phone, message
        };

        try {
            await contactAPI(data);
            await navigate(`/contact-form-submitted`);
        } catch (error) {
            if (error.response && error.response.data && error.response.data.message) {
                showCustomError(setNotification, error.response.data.message);
            } else {
                showCustomError(setNotification, error.message);
            }
        }
    };

    return (<div className="bg-[#141518] h-full">
        <Navbar2></Navbar2>
        <section className="text-white" id="contactus">
            <div className="container sm:py-[54px] ">
                <div className="flex flex-col justify-center gap-4 sm:gap-0 md:flex-row">
                    <Grid container spacing={2} justifyContent="center">
                        <Grid item md={6} lg={4} xl={4}>
                            <div className="me-5">
                                <div className="space-y-4 intro">
                                    <div className="flex gap-4">
                                        <img src={colored_at} alt="" className=""/>
                                        <p>Support@ProTradersFund.com</p>
                                    </div>
                                    <div className="flex gap-4">
                                        <img src={pin} alt="" className=""/>
                                        <p>
                                            1266 E Main St, Suite 700R<br />
                                            Stamford CT 06902<br/>
                                            United States
                                        </p>

                                    </div>
                                    <div className="flex items-start gap-4">
                                        {/* <img src={pin} alt="" className="" /> */}
                                        <div>
                                            <p>
                                                24/7 for emails, & live chat 9 am – 5 pm EST, <br/> Monday to Friday
                                                for phone calls
                                            </p>
                                            <ul className="pt-2 pl-5 tracking-wide list-disc">
                                                <li>+1 (786) 864-0122</li>
                                                <li>+1 (876) 618-9866</li>
                                                <li>+1 (876) 618-9865</li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Grid>
                        <Grid md={6} lg={5} xl={5}>
                            <div className="pb-4 space-y-2">
                                <h1 className="text-3xl font-bold">Get in touch with us</h1>
                                <p className="text-[#CDCECF]">
                                    Fill out the form and our Team will get back to you <br/> within 24-48 hours.
                                </p>
                            </div>
                            <form onSubmit={handleSubmit}>
                                <div className="flex flex-col items-stretch md:gap-4 md:flex-row">
                                    <div className="flex flex-col w-full mb-3">
                                        <label htmlFor="fnameInput" className="text-white form-label">
                                            First name
                                        </label>
                                        <input
                                            type="text"
                                            id="fnameInput"
                                            value={firstName}
                                            onChange={e => setFirstName(e.target.value)}
                                            placeholder="Enter your first name"
                                            className="bg-[#1C1D20] text-white rounded-lg"
                                        />
                                    </div>
                                    <div className="flex flex-col w-full mb-3">
                                        <label htmlFor="lnameInput" className="text-white form-label">
                                            Last name
                                        </label>
                                        <input
                                            type="text"
                                            id="lnameInput"
                                            value={lastName}
                                            onChange={e => setLastName(e.target.value)}
                                            placeholder="Enter your last name"
                                            className="bg-[#1C1D20] text-white rounded-lg"
                                        />
                                    </div>
                                </div>
                                <div className="flex flex-col mb-3">
                                    <label htmlFor="emailInput" className="form-label">
                                        Email address
                                    </label>
                                    <input
                                        type="email"
                                        id="emailInput"
                                        value={email}
                                        onChange={e => setEmail(e.target.value)}
                                        placeholder="example@email.com"
                                        className="bg-[#1C1D20] text-white rounded-lg"
                                    />
                                </div>
                                <div className="flex flex-col mb-3">
                                    <label htmlFor="phoneInput" className="form-label">
                                        Phone number
                                    </label>
                                    <input
                                        type="tel"
                                        id="phoneInput"
                                        value={phone}
                                        onChange={e => setPhone(e.target.value)}
                                        placeholder="999-999-9999"
                                        className="bg-[#1C1D20] text-white rounded-lg"
                                    />
                                </div>
                                <div className="flex flex-col mb-3">
                                    <label htmlFor="messageInput" className="form-label">
                                        Message
                                    </label>
                                    <textarea
                                        name=""
                                        id="messageInput"
                                        rows="8"
                                        value={message}
                                        onChange={e => setMessage(e.target.value)}
                                        className="bg-[#1C1D20] text-white rounded-lg p-1"
                                        placeholder="Leave a message..."
                                        aria-label="Message"
                                    ></textarea>
                                </div>

                                <button type="submit"
                                        className="bg-[#6EFDEB] w-full rounded-lg text-black h-[48px] font-medium">
                                    Send
                                </button>
                            </form>
                        </Grid>
                    </Grid>
                </div>
            </div>
            <Footer></Footer>
        </section>
        {notification && <Notification message={notification.message} type={notification.type}/>}
    </div>);
}
