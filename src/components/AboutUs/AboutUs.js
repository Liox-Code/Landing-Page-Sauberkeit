import React, {useRef} from 'react';

//hooks
import UseFadeIn from '../../hooks/UseFadeInUp';

import '../../styles/AboutUs/AboutUs.css';
import '../../styles/animation/fadeInUpp.css';

const AboutUs = () => {
    const refAboutUs = useRef();
    const {opacity, fadeInUp} = UseFadeIn(refAboutUs);
    return(
        <React.Fragment>
            <div ref={refAboutUs} className={`AboutUs ${fadeInUp}`} style={{opacity: opacity}}>
                <div
                    className={`AboutUs-title-container ${fadeInUp}`}
                    style={{opacity: opacity}}
                    id="Nosotros"
                >
                    <h2>NOSOTROS</h2>
                </div>
                <p>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat. Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat nulla facilisis at vero eros et accumsan et iusto odio dignissim qui blandit praesent luptatum zzril delenit augue duis dolore te feugait nulla facilisi.</p>
            </div>
        </React.Fragment>
    )
}

export default AboutUs;