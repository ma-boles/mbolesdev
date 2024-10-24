'use client'
import { useEffect, useState } from "react"
import Image from "next/image";

export default function BackToTopButton () {
    const [isVisible, setIsVisible] = useState(false);

    const toggleVisibility = () => {
        if(window.scrollY > 300) {
            setIsVisible(true);
        } else {
            setIsVisible(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);
        return () => window.removeEventListener('scroll', toggleVisibility);
    }, []);

    return(
        <div>
            { isVisible && (
                <button
                onClick={scrollToTop}
                className="fixed bottom-4 right-4 p-3 border border-white rounded-lg 
                hover:bg-slate-700
                dark:border-purple-600 
                dark:hover:bg-purple-600"
                style={{ zIndex: 1000 }}>
                    <div className="invert">
                    <Image 
                    src="/images/arrow-up.svg"
                    width={20}
                    height={20}
                    />
                    </div>
                    </button>
            )} 
        </div>
    )
}