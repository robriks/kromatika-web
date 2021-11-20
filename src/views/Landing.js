import Radium from 'radium';
import React, { useRef } from 'react';
import { bounceIn } from 'react-animations';

import FooterComponent from '../components/footer/FooterComponent';
import Benefits from './sections/Benefits';
import Header from './sections/Header';
import HowItWorks from './sections/HowItWorks';

const bounceInAnimation = {
    bounceIn: {
        animation: '1s infinite',
        animationName: Radium.keyframes(bounceIn, 'bounceIn')
    }
};

const useScroll = () => {
    const elRef = useRef(null);
    const executeScroll = () =>
        elRef.current.scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });

    return [executeScroll, elRef];
};

const Landing = () => {
    const [executeScroll, elRef] = useScroll();

    return (
        <>
            <Header bounceInAnimation={bounceInAnimation} executeScroll={executeScroll} />
            <main>
                <HowItWorks elRef={elRef} />
                {/* <Features /> */}
                <Benefits />
            </main>
            <FooterComponent />
        </>
    );
};

export default Landing;
