import React, {Component} from 'react';

class Portfolio extends Component {
    render() {

        if (this.props.data) {
            var projects = this.props.data.projects.map(function (projects) {
                var projectImage = 'images/portfolio/' + projects.image;

                return (
                    <div key={projects.title} className="columns portfolio-item" style={{height:"300px"}}>
                        <div className="item-wrap">
                            <a href={projects.url} title={projects.title}>
                                <img
                                    style={{width:"100%", height:"200px"}}
                                    alt={projects.title}
                                    src={projectImage}
                                />
                                <div className="overlay">
                                    <div className="portfolio-item-meta">
                                        <h5>{projects.title}</h5>
                                        <p>{projects.category}</p>
                                    </div>
                                </div>
                            </a>
                            <div>
                                <h1>{projects.title}</h1>
                            </div>
                        </div>
                    </div>
                )
            })
        }

        return (
            <section id="portfolio">

                <div className="row">

                    <div className="twelve columns collapsed">

                        <h1>Check Out Some of My Works.</h1>

                        <div id="portfolio-wrapper" className="bgrid-quarters s-bgrid-thirds cf">
                            {projects}
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Portfolio;
