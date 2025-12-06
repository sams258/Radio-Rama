import React, { useEffect } from 'react';
import './NowPlaying.css';

const NowPlaying = () => {
    useEffect(() =>  {
        const script = document.createElement('script');
        script.src = 'https://dione.shoutca.st/system/streaminfo.js';
        script.type = 'text/javascript';
        script.language = 'javascript';
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

        return (
            <span className="cc_streaminfo" data-type="song" data-username="radiorama">
            Loading ...
            </span>
        );



    };

    export default NowPlaying;