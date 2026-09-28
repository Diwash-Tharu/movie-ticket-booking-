// import { useState } from 'react'
import React, {useState, useEffect} from 'react'
import {footerStyles} from '../assets/dummyStyles'
import { Clapperboard, Film, Popcorn, Star, Ticket, Mail, Phone, MapPin, ArrowUp } from 'lucide-react';

import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {

//  footer elements 

        const currentYear = new Date().getFullYear();
        const [isVisible, setIsVisible] = useState(false);

        //  these will make the scroll smoot
        const scrollToTop = () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        };
        
        const links = [
            { label: "Home", href: "/" },
            { label: "Movies", href: "/movies" },
            { label: "Releases", href: "/releases" },
            { label: "Contact", href: "/contact" },
            { label: "Login", href: "/login" }
        ];
        
        const genreLinks = [
            { label: "Horror", href: "/movies" },
            { label: "Thriller", href: "/movies" },
            { label: "Action", href: "/movies" },
            { label: "Drama", href: "/movies" },
            { label: "Comedy", href: "/movies" },
        ];


        //  use these as for the smoot scroolling 
        useEffect(() => {
            const toggleVisibility = () => {
            if (window.pageYOffset > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
            };

            window.addEventListener('scroll', toggleVisibility);
            return () => window.removeEventListener('scroll', toggleVisibility);
        }, []);

        // Array of icon components for the floating animation
        const floatingIcons = [Clapperboard, Film, Star, Ticket, Popcorn];



  return (



    


    <footer className={footerStyles.footer}>
        <div className={footerStyles.animatedBorder}>

        </div>


        <div className={footerStyles.bgContainer}>
            <div className={footerStyles.bgGlow1}>

            </div>
            <div className={footerStyles.bgGlow1}>

            </div>
        </div>

       
            {/* Floating icons - hidden on small devices to avoid overlap; still visible on md+ (tablet & desktop) */}
            <div className={footerStyles.floatingIconsContainer}>
                {[...Array(12)].map((_, i) => {
                const IconComponent = floatingIcons[i % floatingIcons.length];
                const left = (i * 23) % 100;
                const top = (i * 17) % 100;
                const dur = 6 + (i % 5);
                const delay = (i % 4) * 0.6;
                return (
                    <div
                    key={i}
                    className={footerStyles.floatingIcon}
                    style={{
                        left: `${left}%`,
                        top: `${top}%`,
                        animation: `float ${dur}s infinite ease-in-out`,
                        animationDelay: `${delay}s`
                    }}
                    >
                    <IconComponent className="w-8 h-8" />
                    </div>
                );
                })}
            </div>
        
        <div className={footerStyles.mainContainer}>
            <div className={footerStyles.gridContainer}>
                <div className={footerStyles.brandContainer}>
                    <div className={footerStyles.brandLogoContainer}>
                        <div className="relative">
                            <div className={footerStyles.logoGlow}>

                            </div>
                             <div className={footerStyles.logoContainer}>
                                <Clapperboard className={footerStyles.logoIcon}/>
                             </div>
                        </div>
                        <h2 style={{fontFamily: 'Monoton, cursive'}} className={footerStyles.brandTitle}>
                            Cine <span className={footerStyles.brandTitleWhite}>Verse </span>
                        </h2>
                    </div>
                    <p className={footerStyles.brandDescription}>
                        Your ultimate destination for movie tickets, reviews, and the latest news in the world of cinema. Dive into the magic of movies with us!
                    </p>

                    <div className={footerStyles.socialContainer}>
                        {[
                             { Icon: FaFacebook },
                            { Icon: FaTwitter },
                            { Icon: FaInstagram },
                            { Icon: FaYoutube } 
                        ].map((Item , index) => (
                            <a href="#" key={index} className={footerStyles.socialLink}>
                                <Item.Icon className={footerStyles.socialIcon}/>
                            </a>
                        ))}
                    </div>

                </div>
                {/* crating the right side footer */}
                <div className="div">
                    <h3 className={footerStyles.sectionHeader}>
                        <div className={footerStyles.sectionDot}></div>  
                        Explore

                    </h3>
                    <ul className={footerStyles.linksList}>
                        {links.map((link)=>(
                            <li key={link.href}>
                                <a href={link.href} className={footerStyles.linkItem}>
                                <span className={footerStyles.linkDot}/>
                                    {link.label}
                                
                                </a>   
                            </li>
                        ))}
                    </ul>
                </div>
{/* another list  */}
                <div className="div">
                    <h3 className={footerStyles.sectionHeader}>
                        <div className={footerStyles.sectionDot}></div>  
                        Genres

                    </h3>
                    <ul className={footerStyles.linksList}>
                        {genreLinks.map((link)=>(
                            <li key={link.href}>
                                <a href={link.href} className={footerStyles.linkItem}>
                                <span className={footerStyles.linkDot}/>
                                    {link.label}
                                
                                </a>   
                            </li>
                        ))}
                    </ul>
                </div>
                        {/* contact infro us  */}
                        <div>
                            <h3 className={footerStyles.sectionHeader}>
                            <div className={footerStyles.sectionDot} />
                            Contact Us
                            </h3>
                            <ul className={footerStyles.contactList}>
                            <li className={footerStyles.contactItem}>
                                <div className={footerStyles.contactIconContainer}>
                                <Mail className={footerStyles.contactIcon} />
                                </div>
                                <span className={footerStyles.contactText}>contact@cineverse.com</span>
                            </li>
                            <li className={footerStyles.contactItem}>
                                <div className={footerStyles.contactIconContainer}>
                                <Phone className={footerStyles.contactIcon} />
                                </div>
                                <span className={footerStyles.contactText}>+977 9800000000</span>
                            </li>
                            <li className={footerStyles.contactItem}>
                                <div className={footerStyles.contactIconContainer}>
                                <MapPin className={footerStyles.contactIcon} />
                                </div>
                                <span className={footerStyles.contactText}>Kathmandu, Nepal</span>
                            </li>
                            </ul>
                        </div>
            </div>

            {/*  creating the divider here */}
            <div className={footerStyles.divider}>
                <div className={footerStyles.dividerIconContainer}>
                    <Film className={footerStyles.dividerIcon}/>
                </div>
            </div>

            <div className={footerStyles.bottomBar}>
                <div className={footerStyles.designedBy}>
                    <div className={footerStyles.designedByText}>
                        Designed by    
                    </div>

                    <a href="#" className={footerStyles.designedByLink} target="_blank" rel="noopener noreferrer" >
                        Diwash Tharu 
                    </a>
                </div>

                <div className={footerStyles.policyLinks}>
                    {['Privacy Policy', 'Terms of Service', 'Cookie Policy'].map((item, index) => (
                    <a 
                        key={index}
                        href="/" 
                        className={footerStyles.policyLink}
                    >
                        {item}
                    </a>
                    ))}
                   
                    
                </div>

                <div className={footerStyles.copyright}>
                    <p className={footerStyles.policyLink}>
                        &copy; {currentYear} CineVerse. All rights reserved.

                    </p>
                </div>
            

            </div>
        </div>
        
        {isVisible && (
            <button 
                onClick={scrollToTop} 
                className={footerStyles.scrollTopButton}>
                <ArrowUp className={footerStyles.scrollTopIcon}/>
            </button>
        )}
        <style jsx>
        {footerStyles.customCSS}
        </style>
    </footer>
  )
};
//     </footer>
//   )
// }

//     </footer>
//     )
// }


export default Footer
