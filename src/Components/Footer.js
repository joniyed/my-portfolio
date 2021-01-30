import React from 'react';

const Footer = (props) => {
    if (props.data) {
        var networks = props.data.social.map((network) => {
            return <li key={network.name}>
                <a target="_blank" rel="noopener noreferrer" href={network.url}>
                    <i className={network.className}/>
                </a>
            </li>
        })
    }

    return (
        <footer id="footer">

            <div className="row">
                <div className="twelve columns">
                    <ul className="social-links">
                        {networks}
                    </ul>

                    <ul className="copyright">
                        <li>&copy; Joniyed Bhuiyan</li>
                        <li>Design by <a title="Joniyed" href="#">joniyed</a></li>
                    </ul>

                </div>
                <div id="go-top">
                    <a className="smoothscroll" title="Back to Top" href="#home">
                        <i className="icon-up-open"/>
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
