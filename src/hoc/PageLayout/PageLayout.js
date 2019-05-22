import React from 'react';
import Aux from '../Auxi/Auxi';
import Classes from './PageLayout.css'

// import backImg from '../../img/banner/1.jpg';
// import {Link} from 'react-router-dom'; 


const PageLayout =(props)=>{
        return (
            <Aux>
                <div className={Classes.bannerArea}>
                    <div className={Classes.container}>
                        <div className={Classes.row}>
                            <div className={Classes.banner}>
                                <h2>{props.Heading}</h2>
                            </div>
                            <div className={Classes.breadcrumbArea}>
                                <li className={Classes.breadcrumbParent}><a href="index.html">{props.Subtitle1}</a></li>
                                <li className={Classes.after}>>></li>
                                <li className={Classes.breadcrumbChild}>{props.Subtitle2}</li>
                            </div>
                        </div>
                    </div>
                </div>
                {/* <div>
                    <div>
                        <section class="hero is-medium is-primary is-bold">
                            <div class="hero-body" style={{backgroundImage: "url(" + backImg+ ")"}}>
                                <div class="container">
                                <h1 class="title">
                                    {props.Heading}
                                </h1>
                                <nav class="breadcrumb has-succeeds-separator" aria-label="breadcrumbs">
                                    <ul>
                                        <li><Link to="/">{props.Subtitle1}</Link></li>
                                        <li class="is-active"> {props.Subtitle2}</li>
                                    </ul>
                                </nav>
                                </div>
                            </div>
                        </section>
                    </div>
                    <main>
                        {props.children}
                    </main>
                    </div> */}
            </Aux>
        )
}


export default PageLayout;