import {useState, useEffect } from 'react';

const UseFadeInUp = (ref) => {
    const [opacity, setOpacity] = useState(0);
    const [fadeInUp, setFadeInUp] = useState('');
    useEffect(() => {
        const scrollHandler = () => {
            const element = ref.current.getBoundingClientRect();
            // console.log(element.y);
            // console.log(window.innerHeight - element.height);
            if(element.y <= window.innerHeight - element.height / 2){
                console.log('En vIEWPORT');
                setOpacity(1);
                setFadeInUp('fadeInUp');
            }
        }
        scrollHandler();
        window.addEventListener("scroll", scrollHandler, true);
        return () => {
            window.removeEventListener("scroll", scrollHandler, true);
        };
    }, [ref]);
    return {opacity, fadeInUp};
}

export default UseFadeInUp;