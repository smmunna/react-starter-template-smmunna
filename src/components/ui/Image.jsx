import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import 'react-lazy-load-image-component/src/effects/black-and-white.css';
import 'react-lazy-load-image-component/src/effects/opacity.css';
/**
 * @description
 * Follow the Instruction
 * @param {src} use url of the image
 * @param {height} height
 * @param {width} width
 * @param {alt} alt : Give any alternative name of the image
 * @param {effect} effect : blur, black-and-white, opacity
 * @param { transitionDelay} transition : 1s or 2s or 3s. Give according to your own
 * */ 
const Image = ({ src, height, width, alt, effect, transitionDelay }) => {

    return (
        <div>
            <LazyLoadImage
                alt={alt}
                effect={effect}
                wrapperProps={{
                    // If you need to, you can tweak the effect transition using the wrapper style.
                    style: { transitionDelay: transitionDelay || "1s" },
                }}
                src={src}
                height={height}
                width={width}
            />
        </div>
    )
};

export default Image;