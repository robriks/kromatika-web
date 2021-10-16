import Radium, { StyleRoot } from 'radium';
import React, { useEffect, useState } from 'react';
import { pulse } from 'react-animations';

const styles = {
    pulse: {
        animation: '1s infinite',
        animationName: Radium.keyframes(pulse, 'pulse')
    }
};

const Navbar = () => {
    const [navbarOpen, setNavbarOpen] = React.useState(false);
    const [navbarSolidBg, setNavbarSolidBg] = React.useState(false);
    const [scrollPosition, setScrollPosition] = useState(0);

    useEffect(() => {
        const handleScroll = () => {
            const position = window.pageYOffset;
            setScrollPosition(position);
            position > 70 ? setNavbarSolidBg(true) : setNavbarSolidBg(false);
        };

        window.addEventListener('scroll', handleScroll, {
            passive: true
        });

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [scrollPosition]);

    const onButtonClick = () => {
        const input = prompt("Type 'test'");

        if (input.toLowerCase().trim() === 'test') {
            alert('It works!');
        } else {
            alert("Doesn't work");
        }
    };

    return (
        <nav
            className={`top-5 z-50 w-full flex flex-wrap items-center justify-between fixed px-2 py-3 overflow-visible 
				${navbarSolidBg ? ' solidBackgroundColor' : ''}`}
        >
            <div className="container mx-auto px-8 flex flex-wrap items-center uppercase bold justify-between">
                <div className="w-full relative flex justify-between md:w-auto md:static md:block md:justify-start">
                    <a
                        id="brand"
                        className="text-white text-3xl font-bold leading-relaxed inline-block mr-4 py-2
						            whitespace-nowrap uppercase"
                        href="/landing"
                    >
                        Kromatika
                    </a>

                    <button
                        className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent
		                    rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                        type="button"
                        onClick={() => setNavbarOpen(!navbarOpen)}
                    >
                        <i className={'text-white fas fa-bars'} />
                    </button>
                </div>

                <div
                    className={
                        'lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none' +
                        (navbarOpen ? ' block rounded shadow-lg' : ' hidden')
                    }
                >
                    <ul className="flex flex-col lg:flex-row list-none ml-auto">
                        <li className="flex items-center">
                            <a
                                className="lg:text-white text-yellow px-3 py-4 lg:py-2 flex items-center text-xl
                                uppercase font-bold link-underline"
                                href="#header"
                            >
                                Home
                            </a>
                        </li>
                        <li className="flex items-center">
                            <a
                                className="lg:text-white text-yellow px-3 py-4 lg:py-2 flex items-center text-xl
                                uppercase font-bold link-underline"
                                href="#howItWorks"
                            >
                                How it works
                            </a>
                        </li>
                        <li className="flex items-center">
                            <a
                                className="lg:text-white text-yellow px-3 py-4 lg:py-2 flex items-center text-xl
                                uppercase font-bold link-underline"
                                href="#features"
                            >
                                Features
                            </a>
                        </li>
                        <li className="flex items-center">
                            <a
                                className="lg:text-white text-yellow px-3 py-4 lg:py-2 flex items-center text-xl
                                uppercase font-bold link-underline"
                                href="#benefits"
                            >
                                Benefits
                            </a>
                        </li>
                        <li className="flex items-center">
                            <a
                                className="lg:text-white text-yellow px-3 py-4 lg:py-2 flex items-center text-xl
                                uppercase font-bold link-underline"
                                href="#gov"
                            >
                                Gov
                            </a>
                        </li>
                        <li className="flex items-center">
                            <a
                                className="lg:text-white text-yellow px-3 py-4 lg:py-2 flex items-center text-xl
                                uppercase font-bold link-underline"
                                href="/docs"
                            >
                                Docs
                                <i className="lg:text-white text-yellow far fa-file-alt text-lg leading-lg ml-2" />
                            </a>
                        </li>
                    </ul>
                    <StyleRoot>
                        <button
                            className="bg-gray-900 text-xl font-bold uppercase px-6 py-4 rounded-sm shadow
                            hover:shadow-xl btn btnConnectWallet bg-yellow outline-none focus:outline-none
                            lg:mr-1 lg:mb-0 ml-3 mb-3"
                            type="button"
                            style={styles.pulse}
                            onClick={onButtonClick}
                        >
                            <i className="fas fa-wallet mr-1" /> Connect Wallet
                        </button>
                    </StyleRoot>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
