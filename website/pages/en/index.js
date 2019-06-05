/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

const CompLibrary = require('../../core/CompLibrary.js');

const MarkdownBlock = CompLibrary.MarkdownBlock; /* Used to read markdown */
const Container = CompLibrary.Container;
const GridBlock = CompLibrary.GridBlock;

class HomeSplash extends React.Component {
    render() {
        const { siteConfig, language = '' } = this.props;
        const { baseUrl, docsUrl } = siteConfig;
        const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
        const langPart = `${language ? `${language}/` : ''}`;
        const docUrl = doc => `${baseUrl}${docsPart}${langPart}${doc}`;

        const SplashContainer = props => (
            <div className="homeContainer">
                <div className="homeSplashFade">
                    <div className="wrapper homeWrapper">{props.children}</div>
                </div>
            </div>
        );

        const Logo = props => (
            <div className="projectLogo">
                <img src={props.img_src} alt="Project Logo" />
            </div>
        );

        const ProjectTitle = () => (
            <h2 className="projectTitle">
                {siteConfig.title}
                <small>{siteConfig.tagline}</small>
            </h2>
        );

        const PromoSection = props => (
            <div className="section promoSection">
                <div className="promoRow">
                    <div className="pluginRowBlock">{props.children}</div>
                </div>
            </div>
        );

        const Button = props => (
            <div className="pluginWrapper buttonWrapper">
                <a className="button" href={props.href} target={props.target}>
                    {props.children}
                </a>
            </div>
        );

        return (
            <SplashContainer>
                <Logo img_src={`${baseUrl}img/undraw_monitor.svg`} />
                <div className="inner">
                    <ProjectTitle siteConfig={siteConfig} />
                    <PromoSection>
                        <img src="https://data.influencair.be/badge/amount/city/brussels.png?pre=Brussels%20has%20currently&post=sensors%20online" />
                    </PromoSection>
                </div>
            </SplashContainer>
        );
    }
}

class Index extends React.Component {
    render() {
        const { config: siteConfig, language = '' } = this.props;
        const { baseUrl } = siteConfig;

        const Block = props => (
            <Container
                padding={['bottom', 'top']}
                id={props.id}
                background={props.background}>
                <GridBlock
                    align="center"
                    contents={props.children}
                    layout={props.layout}
                />
            </Container>
        );

        const FeatureCallout = () => (
            <div
                className="productShowcaseSection paddingBottom"
                style={{ textAlign: 'center' }}>
                <h2>Feature Callout</h2>
                <MarkdownBlock>These are features of this project</MarkdownBlock>
            </div>
        );

        const TryOut = () => (
            <Block id="try">
                {[
                    {
                        content:
                            'To make your landing page more attractive, use illustrations! Check out ' +
                            '[**unDraw**](https://undraw.co/) which provides you with customizable illustrations which are free to use. ' +
                            'The illustrations you see on this page are from unDraw.',
                        image: `${baseUrl}img/undraw_code_review.svg`,
                        imageAlign: 'left',
                        title: 'Wonderful SVG Illustrations',
                    },
                ]}
            </Block>
        );

        const Description = () => (
            // <Block background="dark">
            //     {[
            //         {
            //             content:
            //                 'This is another description of how this project is useful',
            //             image: `${baseUrl}img/undraw_note_list.svg`,
            //             imageAlign: 'right',
            //             title: 'Description',
            //         },
            //     ]}
            // </Block>
            <Container
                padding={['bottom', 'top']}
                id='description'
                background='dark'>
                <GridBlock
                    align="center"
                    contents='text'
                    // layout={props.layout}
                />
            </Container>
        )

        const LearnHow = () => (
            <Block background="light">
                {[
                    {
                        content:
                            'Each new Docusaurus project has **randomly-generated** theme colors.',
                        image: `${baseUrl}img/undraw_youtube_tutorial.svg`,
                        imageAlign: 'right',
                        title: 'Randomly Generated Theme Colors',
                    },
                ]}
            </Block>
        );

        const Features = () => (
            <Block layout="fourColumn">
                {[
                    {
                        content: 'By joining the luftdaten project and deploying sensors',
                        image: `${baseUrl}img/undraw_business_analytics_l92d.svg`,
                        imageAlign: 'top',
                        title: 'Gather air-quality data',
                    },
                    {
                        content: 'Creating easy to use maps and visualisations',
                        image: `${baseUrl}img/undraw_all_the_data_h4ki.svg`,
                        imageAlign: 'top',
                        title: 'Create insight in air-quality data',
                    },
                ]}
            </Block>
        );

        const PartnerList = () => {
            if ((siteConfig.partners || []).length === 0) {
                return null;
            }

            const partnerList = siteConfig.partners
                .filter(partner => partner.pinned)
                .map(partner => (
                    <a href={partner.infoLink} key={partner.infoLink}>
                        <img src={partner.image} alt={partner.caption} title={partner.caption} />
                    </a>
                ));

            const pageUrl = page => baseUrl + (language ? `${language}/` : '') + page;

            return (
                <div className="productShowcaseSection paddingBottom">
                    <h2>Our Partners?</h2>
                    <div className="logos">{partnerList}</div>
                    {/* <div className="more-users">
            <a className="button" href={pageUrl('users.html')}>
              More {siteConfig.title} Users
            </a>
          </div> */}
                </div>
            );
        };

        return (
            <div>
                <HomeSplash siteConfig={siteConfig} language={language} />
                <div className="mainContainer">
                    <Features />
                    {/* <LearnHow /> */}
                    {/* <TryOut />*/}
                    <Description />
                    <PartnerList />
                </div>
            </div>
        );
    }
}

module.exports = Index;
