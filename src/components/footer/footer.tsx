import styles from "./footer.module.scss";
import Grid from "@mui/material/Grid";
export const Footer = () => {
    const realEstateLinks = [
      { "title":"Bangalore Real Estate", "link": "/property-in-bangalore" },
      { "title":"Chennai Real Estate","link": "/property-in-chennai" },
    ];
  return (
    <>
      <footer className={styles["container"]}>
        <div className={"container"}>
          <Grid container>
            <div className="footerlinktitle">Real Estate</div>
            <ul className="fltitlelink">
              {realEstateLinks.map((item, i) => (
                <Grid item key={i}>
                  <li>
                    <a
                      className="cf-tracking-enabled anchor-class"
                      href={item.link}
                      data-tracking-id="footer-links"
                      title="Real Estate in Bangalore"
                      data-delegation-parent-className="more-footer-content"
                      target=""
                    >
                      {item.title}
                    </a>
                  </li>
                </Grid>
              ))}
            </ul>
          </Grid>
        </div>
        <div className={styles["footer"]}>
          <div className="col-xs-12">
            <div className="bdtplgt mrbt30"></div>
            <div className="footerlinktitle">Real Estate</div>
            <ul className="fltitlelink">
              <li>
                <a
                  className="cf-tracking-enabled anchor-class"
                  href="/bangalore-city"
                  data-tracking-id="footer-links"
                  title="Real Estate in Bangalore"
                  data-delegation-parent-className="more-footer-content"
                  target=""
                >
                  Bangalore Real Estate
                </a>
              </li>
              <li>
                <a
                  className="cf-tracking-enabled anchor-class"
                  href="/mumbai-city"
                  data-tracking-id="footer-links"
                  title="Real Estate in Mumbai"
                  data-delegation-parent-className="more-footer-content"
                  target=""
                >
                  Mumbai Real Estate
                </a>
              </li>
              <li>
                <a
                  className="cf-tracking-enabled anchor-class"
                  href="/delhi-city"
                  data-tracking-id="footer-links"
                  title="Real Estate in Delhi"
                  data-delegation-parent-className="more-footer-content"
                  target=""
                >
                  Delhi Real Estate
                </a>
              </li>
              <li>
                <a
                  className="cf-tracking-enabled anchor-class"
                  href="/pune-city"
                  data-tracking-id="footer-links"
                  title="Real Estate in Pune"
                  data-delegation-parent-className="more-footer-content"
                  target=""
                >
                  Pune Real Estate
                </a>
              </li>
            </ul>
            <div className="footerlinktitle">Buy Property</div>
            <ul className="fltitlelink">
              <li>
                <a
                  className="cf-tracking-enabled anchor-class"
                  href="/bangalore-property/for-sale"
                  data-tracking-id="footer-links"
                  title="Properties for Sale in Bangalore"
                  data-delegation-parent-className="more-footer-content"
                  target=""
                >
                  Buy Property in Bangalore
                </a>
              </li>
              <li>
                <a
                  className="cf-tracking-enabled anchor-class"
                  href="/mumbai-property/for-sale"
                  data-tracking-id="footer-links"
                  title="Properties for Sale in Mumbai"
                  data-delegation-parent-className="more-footer-content"
                  target=""
                >
                  Buy Property in Mumbai
                </a>
              </li>
              <li>
                <a
                  className="cf-tracking-enabled anchor-class"
                  href="/delhi-property/for-sale"
                  data-tracking-id="footer-links"
                  title="Properties for Sale in Delhi"
                  data-delegation-parent-className="more-footer-content"
                  target=""
                >
                  Buy Property in Delhi
                </a>
              </li>
              <li>
                <a
                  className="cf-tracking-enabled anchor-class"
                  href="/pune-property/for-sale"
                  data-tracking-id="footer-links"
                  title="Properties for Sale in Pune"
                  data-delegation-parent-className="more-footer-content"
                  target=""
                >
                  Buy Property in Pune
                </a>
              </li>
            </ul>

            <div className="footerlinktitle">Residential Projects</div>
            <ul className="fltitlelink">
              <li>
                <a
                  className="cf-tracking-enabled anchor-class"
                  href="/bangalore-property/projects"
                  data-tracking-id="footer-links"
                  title="Residential Projects in Bangalore"
                  data-delegation-parent-className="more-footer-content"
                  target=""
                >
                  Projects in Bangalore
                </a>
              </li>
              <li>
                <a
                  className="cf-tracking-enabled anchor-class"
                  href="/mumbai-property/projects"
                  data-tracking-id="footer-links"
                  title="Residential Projects in Mumbai"
                  data-delegation-parent-className="more-footer-content"
                  target=""
                >
                  Projects in Mumbai
                </a>
              </li>
              <li>
                <a
                  className="cf-tracking-enabled anchor-class"
                  href="/delhi-property/projects"
                  data-tracking-id="footer-links"
                  title="Residential Projects in Delhi"
                  data-delegation-parent-className="more-footer-content"
                  target=""
                >
                  Projects in Delhi
                </a>
              </li>
              <li>
                <a
                  className="cf-tracking-enabled anchor-class"
                  href="/pune-property/projects"
                  data-tracking-id="footer-links"
                  title="Residential Projects in Pune"
                  data-delegation-parent-className="more-footer-content"
                  target=""
                >
                  Projects in Pune
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="bdtplgt mrtp20 mrbt20"></div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-12">
            <div className="footercontentadd">
              <p className="boldt">
                Getmyprop.com is India's premium real estate portal where users
                can find Independent Houses / Villas, Apartments/Flats and Plots
                for sale and rent in 400+ cities across India. Getmyprop helps
                the property seeker to find Resale properties, Residential
                Projects and Owner properties in Bangalore, Gurgaon,Noida,
                Chennai, Hyderabad, Mumbai, Ahmedabad,Kolkata and other cities.
                Commonfloor provides complete details of Project launches, under
                construction projects and ready-to-move projects with detailed
                description of locality, builder, price trends and features.
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-xs-6 col-sm-3 col-md-2 about">
            <div className="footerlink">
              <div className="footerTag">About</div>
              <ul className="uls">
                <li>
                  <a
                    className="cf-tracking-enabled"
                    data-tracking-id="footer-links-static"
                    data-delegation-parent-className="about"
                    href="/about-us"
                    title="About CommonFloor"
                    target="_blank"
                  >
                    About Us
                  </a>
                </li>
                <li>
                  <a
                    className="cf-tracking-enabled"
                    data-tracking-id="footer-links-static"
                    data-delegation-parent-className="about"
                    href="http://www.quikr.com/html/jobs.php"
                    rel="nofollow"
                    title="Careers"
                    target="_blank"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    className="cf-tracking-enabled"
                    data-tracking-id="footer-links-static"
                    data-delegation-parent-className="about"
                    href="/guide"
                    title="CommonFloor Blogs"
                    target="_blank"
                  >
                    Blogs
                  </a>
                </li>
                <li>
                  <a
                    className="cf-tracking-enabled"
                    data-tracking-id="footer-links-static"
                    data-delegation-parent-className="about"
                    href="/cancellation-refund"
                    title="Cancellation and Refund Policy"
                    target="_blank"
                  >
                    Cancellation/Refund
                  </a>
                </li>
                <li>
                  <a
                    className="cf-tracking-enabled"
                    data-tracking-id="footer-links-static"
                    data-delegation-parent-className="about"
                    href="/terms-conditions"
                    title="Terms &amp; Conditions"
                    target="_blank"
                  >
                    Terms &amp; Conditions
                  </a>
                </li>
                <li>
                  <a
                    className="cf-tracking-enabled"
                    data-tracking-id="footer-links-static"
                    data-delegation-parent-className="about"
                    href="/contactus"
                    title="Contact Us"
                    target="_blank"
                  >
                    Contact
                  </a>
                </li>
                <li>
                  <a className="" href="https://www.quikr.com" target="_blank">
                    Quikr
                  </a>
                </li>
                <li>
                  <a
                    className=""
                    href="https://www.indiaproperty.com"
                    target="_blank"
                  >
                    India Property
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-xs-6 col-sm-3 col-md-2 products">
            <div className="footerlink">
              <div className="footerTag">Products</div>
              <ul className="uls">
                <li>
                  <a
                    className="cf-tracking-enabled"
                    href="https://www.quikr.com/coworking"
                    data-tracking-id="footer-links-static"
                    title="Quikr Cowork"
                    data-delegation-parent-className="products"
                    target="_blank"
                  >
                    Quikr Cowork
                  </a>
                </li>
                <li>
                  <a
                    className="cf-tracking-enabled"
                    href="https://groups.commonfloor.com/"
                    data-tracking-id="footer-links-static"
                    title="Apartment Management Software"
                    data-delegation-parent-className="products"
                    target=""
                  >
                    Groups
                  </a>
                </li>
                <li>
                  <a
                    className="cf-tracking-enabled"
                    href="/agent"
                    data-tracking-id="footer-links-static"
                    rel="nofollow"
                    title="Agents"
                    data-delegation-parent-className="products"
                    target=""
                  >
                    Agents
                  </a>
                </li>
                <li>
                  <a
                    className="cf-tracking-enabled"
                    href="/guide"
                    data-tracking-id="footer-links-static"
                    title="Real Estate Guide"
                    data-delegation-parent-className="products"
                    target=""
                  >
                    Guide
                  </a>
                </li>
                <li>
                  <a
                    className="cf-tracking-enabled"
                    href="/news"
                    data-tracking-id="footer-links-static"
                    title="Real Estate News"
                    data-delegation-parent-className="products"
                    target=""
                  >
                    News
                  </a>
                </li>
                <li>
                  <a
                    className="cf-tracking-enabled"
                    href="/forum"
                    data-tracking-id="footer-links-static"
                    title="Real Estate Forum"
                    data-delegation-parent-className="products"
                    target=""
                  >
                    Forum
                  </a>
                </li>
                <li>
                  <a
                    className="cf-tracking-enabled"
                    href="https://www.commonfloor.com/retina"
                    data-tracking-id="footer-links-static"
                    title="Virtual Reality"
                    data-delegation-parent-className="products"
                    target=""
                  >
                    Retina
                  </a>
                </li>
                <li>
                  <a
                    className="cf-tracking-enabled"
                    href="https://www.commonfloor.com/live-in-tour"
                    data-tracking-id="footer-links-static"
                    title="360 degree view of Property"
                    data-delegation-parent-className="products"
                    target=""
                  >
                    Live-in-tour
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="col-xs-12 col-sm-12 col-md-4 cnct-wt-us">
            <div className="footerlink">
              <p className="cprgt">
                Copyright © 2007-22 Commonfloor.com.
                <br />
                All rights reserved.
              </p>
              <div className="kit mrtp20">Keep in Touch</div>
              <ul>
                <li>
                  <a
                    className="cf-tracking-enabled"
                    data-tracking-id="footer-share-facebook"
                    data-delegation-parent-className="cnct-wt-us"
                    href="https://www.facebook.com/commonfloor.com"
                    title=""
                    target="_blank"
                    rel="nofollow"
                  >
                    <i className="icon-Facebook-01"></i>
                  </a>
                  <a
                    className="cf-tracking-enabled"
                    data-tracking-id="footer-share-twitter"
                    data-delegation-parent-className="cnct-wt-us"
                    href="https://twitter.com/commonfloor"
                    title=""
                    target="_blank"
                    rel="nofollow"
                  >
                    <i className="icon-Twitter-01"></i>
                  </a>
                  <a
                    className="cf-tracking-enabled"
                    data-tracking-id="footer-share-youtube"
                    data-delegation-parent-className="cnct-wt-us"
                    href="https://www.youtube.com/user/commonfloor"
                    title=""
                    target="_blank"
                    rel="nofollow"
                  >
                    <i className="icon-Youtube-01"></i>
                  </a>
                  <a
                    className="cf-tracking-enabled"
                    data-tracking-id="footer-share-slideshare"
                    data-delegation-parent-className="cnct-wt-us"
                    href="http://www.slideshare.net/CommonFloor"
                    title=""
                    target="_blank"
                    rel="nofollow"
                  >
                    <i className="icon-Slideshare-01"></i>
                  </a>
                  <div className="clearfix"></div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
