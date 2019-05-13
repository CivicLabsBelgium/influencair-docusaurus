/**
 * Copyright (c) 2017-present, Facebook, Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

const React = require('react');

class Footer extends React.Component {
  docUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    const docsUrl = this.props.config.docsUrl;
    const docsPart = `${docsUrl ? `${docsUrl}/` : ''}`;
    const langPart = `${language ? `${language}/` : ''}`;
    return `${baseUrl}${docsPart}${langPart}${doc}`;
  }

  pageUrl(doc, language) {
    const baseUrl = this.props.config.baseUrl;
    return baseUrl + (language ? `${language}/` : '') + doc;
  }

  render() {
    return (
      <footer className="nav-footer" id="footer">
        <section className="sitemap">
          <a href={this.props.config.baseUrl} className="nav-home">
            {this.props.config.footerIcon && (
              <img
                src={this.props.config.baseUrl + this.props.config.footerIcon}
                alt={this.props.config.title}
                width="66"
                height="58"
              />
            )}
          </a>
          <div>
            <h5>Docs</h5>
            <a href={`${this.props.config.baseUrl}/docs/doc1`}>
              Getting Started (or other categories)
            </a>
            <a href={`${this.props.config.baseUrl}/docs/doc_api_data`}>
              API Reference (or other categories)
            </a>
          </div>
          <div>
            <h5>Community</h5>
            {/* <a href={this.pageUrl('users.html', this.props.language)}>
              User Showcase
            </a> */}
            <a
              href="https://forum.influencair.be"
              target="_blank"
              rel="noreferrer noopener">
              Forum
            </a>
            <a 
              href="https://join.slack.com/t/civiclabsbelgium/shared_invite/enQtNjI3OTgzMjI2OTc3LTNmNGYyMTQyOTM1MmQwYzIyOGQ1ZTcyNjQxMjljOTUyMjMwYzI1OWZhNDczZDY4MjBiNjM3MTBkNjA3YmQ5YTU">
              Join our Slack channel
            </a>
            <a
              href="https://twitter.com/Influencair"
              target="_blank"
              rel="noreferrer noopener">
              Twitter
            </a>
          </div>
          <div>
            <h5>More</h5>
            {/* <a href={`${this.props.config.baseUrl}blog`}>Blog</a> */}
            <a href="https://github.com/CivicLabsBelgium/influencair-docusaurus">GitHub</a>
            <a
              className="github-button"
              href={this.props.config.repoUrl}
              data-icon="octicon-star"
              data-count-href="/CivicLabsBelgium/influencair-docusaurus/stargazers"
              data-show-count="true"
              data-count-aria-label="# stargazers on GitHub"
              aria-label="Star this project on GitHub">
              Star
            </a>
          </div>
        </section>

        <a
          href="https://civiclabs.be/"
          target="_blank"
          rel="noreferrer noopener"
          className="fbOpenSource">
          <img
            src={`https://avatars2.githubusercontent.com/u/28625216?s=200&v=4`}
            alt="Civic Labs"
            width="120"
            height="120"
          />
        </a>
        <section className="copyright">{this.props.config.copyright}</section>
      </footer>
    );
  }
}

module.exports = Footer;
