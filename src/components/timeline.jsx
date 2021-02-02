import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">highlights</span>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Assistant Vice President at WellsFargo <span>2020-present</span></h2>
                        <p>I recently joined in WellsFargo  as a Software Engineer. Building and Deploying quality apps into digital team on online billing is mycore responsibility . </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Technical Lead in Accenture<span>2018-2020</span></h2>
                        <p>Joined as a Senior Software Engineer and Promoted to Technical Lead . Worked for Cisco B2B Ecommerce application for integration between Oracle ERP and SAP Ariba products from scratch. Developed highly scalable Micro services for all EPR operations of Ariba , Extensively used Spring Boot, Micro Services, SOAP ,REST, AWS, Openshift technologies. Developed chatbots for knowing transaction status,production failures, order updates is mile stone </p>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Java Developer in CGI<span>2015-2017</span></h2>
                        <p>Joined as Software Developer , Worked with Bell Canada client for Oracle ASAP product . Developed and Deployed Java Enter Price Applications using Javaa,J2EE,SOAP webservices. </p>
                      </div>
                    </div>
                  </article>                  
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Software Associate in Sabre Travels<span>2014-2015</span></h2>
                        <p>Joined as Software Developer , Worked for Sabre in house travel applications . Developed and Deployed SOAP webservices using Java,Apache CXF ,SOAP </p>
                      </div>
                    </div>
                  </article>                  
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                        <i className="icon-pen2" />
                      </div>
                      <div className="timeline-label">
                        <h2>Master Of Computer Applications  <span>2011-2014</span></h2>
                        <p>I have completed my masters from Sri Venkateswara University, Tirupati where i found real passion on programming and fall in love with developing Andrio Apps,Java Applications. Build and Presented Online Crime Reporting system, Online Fraud Detection System in Java, Dairy and Java tutorial apps using Andriod</p> 
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
