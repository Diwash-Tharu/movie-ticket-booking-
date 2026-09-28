import React,{useState} from 'react'
import {contactStyles} from '../assets/dummyStyles'
import { ToastContainer } from 'react-toastify';

import {Phone, Popcorn, Send, Ticket, Mail, MessageCircle, MapPin} from 'lucide-react';



const ContactPage = () => {
    //  formdata will store the name,email,phone
    const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });


    const handleChange = (e) => {
        const { name, value } = e.target;

        // Only allow digits for phone and limit to 10 chars
        if (name === 'phone') {
        const digits = value.replace(/\D/g, '').slice(0, 10);
        setFormData(prev => ({ ...prev, phone: digits }));
        return;
        }

        setFormData(prev => ({ ...prev, [name]: value }));
    };


    const handleSubmit = (e) => {
    e.preventDefault();

    // Validate phone is exactly 10 digits
    if (!formData.phone || formData.phone.length !== 10) {
      toast.error('⚠️ Please enter a valid 10-digit phone number.');
      console.warn('Submit blocked - invalid phone:', formData.phone);
      return;
    }

    // Format the message for WhatsApp
    const whatsappMessage = `Name: ${encodeURIComponent(formData.name)}
    %0AEmail: ${encodeURIComponent(formData.email)}
    %0APhone: ${encodeURIComponent(formData.phone)}
    %0ASubject: ${encodeURIComponent(formData.subject)}
    %0AMessage: ${encodeURIComponent(formData.message)}`;

    // Open WhatsApp with pre-filled message 
    // blank will open in a new tab
    window.open(`https://wa.me/8299431275?text=${whatsappMessage}`, '_blank');
    };


  return (
    <div className={contactStyles.pageContainer}>
        <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
   
    <div className={contactStyles.bgGradient}></div>
    <div className={contactStyles.bgBlob1}></div>
    <div className={contactStyles.bgBlob2}></div>
    {/*  side effects for film */}
    <div className={contactStyles.filmStripTop}>
            {[...Array(20)].map((_, i) => (
            <div key={i} className={contactStyles.filmStripSegment}></div>
            ))}
        </div>
        <div className={contactStyles.filmStripBottom}>
            {[...Array(20)].map((_, i) => (
            <div key={i} className={contactStyles.filmStripSegment}></div>
            ))}
        </div>

            <div className={contactStyles.contentContainer}>
                <div className={contactStyles.headerContainer}>
                    <div className="inline-flex iyems-center justify-center mb-4">
                        <h1 className={contactStyles.headerTitle}>
                            <span className={contactStyles.headerTitleRed}>
                                Contact
                                <span className={contactStyles.headerTitleWhite}> Us</span>
                            </span>
                        </h1>
                    </div>
                        <p className={contactStyles.headerSubtitle}>
                            We would love to hear from you! Please fill out the form below and we will get back to you as soon as possible.

                        </p>
                </div>

            <div className={contactStyles.gridContainer}>
                <div className={contactStyles.cardRelative}>
                    <div className={contactStyles.cardGradient}/>
                    <div className={contactStyles.cardContainer}>
                        <div className={contactStyles.cardBadge}>
                            <Ticket className={contactStyles.cardIcon}/>
                            BOOKING SUPPORT
                        </div>
                         <h2 className={contactStyles.formTitle}>
                            <MessageCircle className={contactStyles.formTitleIcon}/>
                            send a message
                        </h2>
                        <form  onSubmit ={handleSubmit} className={contactStyles.form}>
                            <div className={contactStyles.formGrid}>
                                <div>
                                    <label htmlFor="name" className={contactStyles.inputGroup}>
                                        Full Name
                                    </label>
                                    <input type="text" 
                                    id="name" 
                                    name="name" 
                                    value={formData.name} 
                                    onChange={handleChange}
                                    placeholder='your full name'
                                    required
                                    className={contactStyles.input}/>
                                </div>

                                <div>
                                    <label htmlFor="email" className={contactStyles.inputGroup}>
                                        Email
                                    </label>
                                    <input type="email" 
                                    id="email" 
                                    name="email" 
                                    value={formData.email} 
                                    onChange={handleChange}
                                    placeholder='your@xample.com'
                                    required
                                    className={contactStyles.input}/>
                                </div>

                            </div>

                              <div>
                                    <label htmlFor="phone" className={contactStyles.inputGroup}>
                                        Phone Number 
                                    </label>
                                    <input type="tel" 
                                    id="phone" 
                                    name="phone" 
                                    value={formData.phone} 
                                    onChange={handleChange}
                                    placeholder='number 10 digits'
                                    required
                                    inputMode='numeric'
                                    pattern='[0-9]*'
                                    title='Please enter a valid 10-digit phone number'
                                    className={contactStyles.input}/>
                                </div>


                                 <div>
                                    <label htmlFor="subject" className={contactStyles.inputGroup}>
                                        Subject *
                                    </label>
                                    <select
                                        id="subject"
                                        name="subject"
                                        value={formData.subject}
                                        onChange={handleChange}
                                        required
                                        className={contactStyles.select}
                                    >
                                        <option value="">Select a subject</option>
                                        <option value="Ticket Booking">Ticket Booking</option>
                                        <option value="Group Events">Group Events</option>
                                        <option value="Membership">Membership Inquiry</option>
                                        <option value="Technical Issue">Technical Issue</option>
                                        <option value="Refund">Refund Request</option>
                                        <option value="Other">Other</option>
                                    </select>
                                    </div>

                                    <div>
                                        <label htmlFor="message" className={contactStyles.inputGroup}>
                                            Message For inquery 
                                        </label>
                                        <textarea name="message" id="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="5"
                                        placeholder='Please describe your inquery in details...'
                                        className={contactStyles.textarea} >

                                        </textarea>
                                    
                                    </div>

                            <button type="submit" className={contactStyles.submitButton}>
                                Send Message via WhatsApp
                                <Send className={contactStyles.buttonIcon}/>
                            
                            </button>
                        </form>
                    </div>
                </div>

                <div className="space-y-6">
                    <div className={contactStyles.cardRelative}>
                        <div className={contactStyles.cardGradient}></div>
                        <div className={contactStyles.cardContainer}>
                            <div className={contactStyles.cardBadge}>
                                <Popcorn className={contactStyles.cardIcon}/>
                                CINEMA SUPPORT
                            </div>
                            <h2 className={contactStyles.formTitle}>
                                Contact Us
                            </h2>
                            <div className={contactStyles.contactInfo}>
                                <div className={contactStyles.contactItem}>
                                    <div className={contactStyles.contactIconContainer}>
                                        <Phone className={contactStyles.contactIcon}/>
                                    </div>
                                    <div>
                                        <h3 className={contactStyles.contactText}>
                                            Booking Hotline
                                        </h3>
                                        <p className={contactStyles.contactDetail}>
                                            +977 9000000000
                                        </p>
                                    </div>
                                </div>

                                    <div className={contactStyles.contactItem}>
                                    <div className={contactStyles.contactIconContainer}>
                                        < Mail className={contactStyles.contactIcon}/>
                                    </div>
                                    <div>
                                        <h3 className={contactStyles.contactText}>
                                            Email Address
                                        </h3>
                                        <p className={contactStyles.contactDetail}>
                                            info@cinema.com
                                        </p>
                                    </div>
                                </div>

                                 <div className={contactStyles.contactItem}>
                                    <div className={contactStyles.contactIconContainer}>
                                        < MapPin className={contactStyles.contactIcon}/>
                                    </div>
                                    <div>
                                        <h3 className={contactStyles.contactText}>
                                            Main Threater Location
                                        </h3>
                                        <p className={contactStyles.contactDetail}>
                                            123 Movie St, Kathmandu, Nepal
                                        </p>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                {/* Emergency Support Card */}
                    <div className={contactStyles.cardRelative}>
                    <div className={contactStyles.emergencyCardGradient}></div>
                    <div className={contactStyles.emergencyCard}>
                        <h3 className={contactStyles.emergencyTitle}>
                        <Phone className={contactStyles.emergencyIcon} />
                        Urgent Show-Related Issues
                        </h3>
                        <p className={contactStyles.emergencyText}>
                        For urgent issues during a movie screening (sound, projection, etc.)
                        </p>
                        <div className="flex items-center">
                        <div className={contactStyles.emergencyHotline}>
                            HOTLINE: +977 9000000000
                        </div>
                        <span className={contactStyles.emergencyNote}>Available during showtimes</span>
                        </div>
                    </div>
                    </div>

                </div>
            </div>
        </div>
    </div>
  )
}


export default ContactPage