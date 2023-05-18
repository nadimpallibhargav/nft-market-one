import React from "react";
import Styles from "pages/article-details/article.module.scss";
import PreviousPage from "components/previousPage/index";
import Link from "next/link";
import tableStarting from "assets/images/companyPolicy/tablestarting.png";
import tableMiddle from "assets/images/companyPolicy/tablemiddle.png";
import tableEnd from "assets/images/companyPolicy/tableEnd.png";
import Image from "next/image";

const index = () => {
  return (
    <section className={Styles.article}>
      <PreviousPage previouspage="/" title="PRIVACY POLICY" />
      <div className="container">
        <div className={Styles.articleWrapper}>
          <div className={Styles.articleHeading}>
            <h3>PRIVACY POLICY FOR THE INDIGG PLATFORM</h3>
          </div>
          <ol>
            <li>
              <h4>PRELIMINARY</h4>
              <ol>
                <li>
                  This privacy policy (“Privacy Policy”) is issued by Indi Guild Pvt.
                  Ltd. (“IndiGG” or “Us” or “We” or “Our”) and forms a legally
                  binding agreement between You and IndiGG. It applies to Your use of
                  the Platform and Our Services and governs the manner in which any
                  data from which You can be identified (“Personal Data”) is
                  collected, processed, stored, transferred, and used by Us under
                  Applicable Law, including the Information Technology Act 2000
                  (collectively “Data Protection Laws”).
                </li>
                <li>
                  THIS PRIVACY POLICY IS PART OF OUR TERMS OF USE AND SHALL BE
                  SUBJECT TO AND READ ALONG WITH OUR TERMS OF USE, AVAILABLE AT
                  <Link href={"https://indi.gg"}>
                    <a target={"_blank"}> https://indi.gg </a>
                  </Link>
                  . ALL CAPITALIZED TERMS USED AND NOT DEFINED HEREIN SHALL HAVE THE
                  MEANING ASCRIBED TO THEM UNDER THE TERMS OF USE.
                </li>
                <li>
                  This Privacy Policy does not apply to any information or data You
                  provide to a third-party, including our Game Partners and Service
                  Providers, with whom You interact through Our Platform. We are not
                  responsible for the privacy practices of such third parties, and
                  You must read and understand the privacy practices of such third
                  parties before availing their service.
                </li>
              </ol>
              <p>
                Please read this Privacy Policy carefully before using the Platform
                or availing Our Services. By visiting the Platform or setting up an
                account with Us, You accept and agree to be bound by this Privacy
                Policy. IF YOU DO NOT CONSENT TO THE COLLECTION AND USE OF YOUR
                PERSONAL DATA AS DESCRIBED IN THIS PRIVACY POLICY, PLEASE DO NOT USE
                OUR SERVICES OR ACCESS OUR PLATFORM.
              </p>
            </li>
            <li>
              <h4>THE INFORMATION WE COLLECT AND HOW WE USE IT</h4>

              <ol>
                <li>
                  By accessing or using the Platform, You consent to providing Us
                  Your Personal Data and agree to Our Privacy Policy.
                </li>
                <li>
                  We may collect and receive Personal Data from You when You access
                  Our Platform, register for a User Account with Us, or when You
                  connect Your User Account with an external third-party.
                </li>
                <li>
                  We may monitor the use of the Platform through the use of cookies
                  and similar tracking devices. To illustrate, We may monitor the
                  number of times You visit the Platform or which pages You viewed.
                  This information helps Us to build Your profile and render better
                  Services to You. Some of this data will be aggregated or
                  statistical, which means that We will not be able to identify You
                  individually.
                </li>
                <li>
                  The following table lists the information We may collect from You
                  and how We will use it.
                  <div className={Styles.marginTable_wrapper}>
                    <Image
                      className={Styles.image_Table}
                      src={tableStarting}
                      alt="table"
                    />
                    <div className={Styles.marginTable}>
                      <Image
                        className={Styles.image_Table}
                        src={tableMiddle}
                        alt="table"
                      />
                    </div>
                    <div className={Styles.marginTable}>
                      {" "}
                      <Image
                        className={Styles.image_Table}
                        src={tableEnd}
                        alt="table"
                      />
                    </div>
                  </div>
                </li>
                <li>
                  You also specifically agree and consent to Us collecting, storing,
                  processing, transferring, and sharing information (including
                  Personal Data) related to You with Our Game Partners or Service
                  Providers to customize and provide better services to You.
                </li>
                <li>
                  We do not allow users who are below the age of 18 (eighteen) to
                  create a User Account, nor intentionally gather Personal Data from
                  such users.
                </li>
              </ol>
            </li>
            <li>
              <h4>SHARING OF YOUR INFORMATION</h4>
              <ol>
                <li>
                  We will disclose or share Your Personal Data, without notice, for
                  the primary purposes for which it was collected in accordance with
                  this Privacy Policy, including, without limitation:
                  <p>- where You have consented to such disclosure or sharing;</p>
                  <p>- where permitted under the applicable Data Protection Laws;</p>
                  <p>- where required under Applicable Laws;</p>
                  <p>
                    - where it is necessary to protect and defend the rights or
                    property of IndiGG, our Service Provider, our Game Partners,
                    and/or our users;
                  </p>
                  <p>
                    - where it is necessary to act under exigent circumstances to
                    protect the personal safety of other users on the Platform, or
                    the general public visiting the Platform.
                  </p>
                </li>
                <li>
                  Sharing with Service Providers: We work with Our Service Providers
                  to execute various functionalities of the Platform and We may share
                  Your information with them to enable and better customize Our
                  Services for You.
                </li>
                <li>
                  Sharing with Game Partners: We will share Your Personal Data with
                  Our Game Partners and their respective service providers for, inter
                  alia, aiding the integration of the Game Partner’s services on the
                  Platform.
                </li>
                <li>
                  Sharing with B2B partners: We may partner with businesses and
                  third-party brands to sponsor some rewards or advertise relevant
                  products to You and may share Your Personal Data with such third
                  parties to help them give You rewards or show user-specific
                  advertisements.
                </li>
                <li>
                  Sharing with group companies: Subject to Applicable Law, We may
                  share any data, including Personal Data, that We collect from You
                  with Our group companies for product research and development;
                  making Our Services better; and tailoring the Platform for Your
                  benefit.
                </li>
                <li>
                  Sharing with law enforcement when needed: We will share Your
                  information, without prior notice, on a request from any competent
                  governmental authority or a court of competent jurisdiction or law
                  enforcement officers that We find appropriate or necessary in order
                  to comply with Applicable Law.
                </li>
              </ol>
            </li>
            <li>
              <h4>SECURITY OF YOUR INFORMATION</h4>
              <ol>
                <li>
                  We strive to maintain the security and safety of Your Personal Data
                  in line with industry standards. Once We have received Your
                  information or Personal Data, We use strict procedures and security
                  features as per industry standards and the Data Protection Laws to
                  try to prevent unauthorised access, loss, misuse, unauthorised
                  disclosure and dissemination, destruction and alteration of Your
                  Personal Data.
                </li>
                <li>
                  Steps taken to ensure Personal Data security:
                  <p>
                    - All data is hosted on third-party servers of third-parties like
                    Amazon Web Services (AWS).
                  </p>
                  <p>
                    - We employ industry standard data security practices to keep
                    Your Personal Data safe from cyber-attacks and threats.
                  </p>
                  <p>
                    - We undertake periodic assessments of the Platform’s safety and
                    security practices.
                  </p>
                </li>
                <li>
                  You are responsible to keep Your credentials for accessing the
                  Platform personal and confidential. You should not share Your
                  password or login details with anyone. We will not be responsible
                  for any liability or obligation You might face due to Your sharing
                  of Your User Account details with anyone.
                </li>
                <li>
                  While We sincerely strive to protect Your Personal Data, We cannot
                  guarantee its security, or warrant that no harmful code will enter
                  the Platform (including but not limited to viruses, bugs, trojan
                  horses, spyware, malware, forks or adware). Transmission of
                  information through the internet is not completely secure. You
                  should be aware of the risks associated with disclosing any
                  information or transacting over the internet or when using online
                  portals. We urge You to take every precaution when using the
                  internet to disclose Your Personal Data to Us, including using
                  strong passwords, changing Your password regularly and using a
                  secure browser. ANY INFORMATION YOU PROVIDE US IS AT YOUR OWN RISK
                  AND DISCRETION.
                </li>
                <li>
                  You agree to immediately notify Us if You discover or otherwise
                  suspect any security issues related to any of Our Services or Your
                  User Account. You can contact Us at{" "}
                  <Link href={"mailto:contact@indi.gg"}>contact@indi.gg</Link>.
                </li>
              </ol>
            </li>
            <li>
              <h4>OUR COOKIE POLICY</h4>
              <ol>
                <li>
                  Please note that We use “cookies” to help personalize Your online
                  experience.
                </li>
                <li>
                  A cookie is a text file that is placed on Your hard drive by a web
                  page server. Cookies cannot be used to run programs or deliver
                  viruses to Your device. Cookies are uniquely assigned to You and
                  can only be read by a web server in the domain that issued the
                  cookie to You.
                </li>
                <li>
                  Cookies may be either persistent cookies or session cookies: a
                  persistent cookie will be stored by a web browser and will remain
                  valid until its set expiry date, unless deleted by the user before
                  the expiry date; a session cookie, on the other hand, will expire
                  at the end of the user session, when the web browser is closed.
                </li>
                <li>
                  Cookies do not typically contain any information that personally
                  identifies a user, but personal information that We store about You
                  may be linked to the information stored in and obtained from
                  cookies.
                </li>
                <li>
                  We place cookies on certain pages of the Platform in order to help
                  and analyze Our webpage flow, track user trends, measure
                  promotional effectiveness, and promote trust and safety. We offer
                  certain additional features on the Platform that are only available
                  through the use of a “cookie”. We place both permanent and
                  temporary cookies in Your device’s hard drive.
                </li>
                <li>
                  Cookies on the Platform may be used to ensure a smooth User
                  experience, perform analytics, and for showing relevant
                  advertisements. Please note that third parties (such as Game
                  Partners, Service Providers, analytical software providers, etc.)
                  may also use cookies, over which We have no control.
                </li>
                <li>
                  Most web browsers automatically accept cookies but You can usually
                  modify Your browser setting to disable, block or deactivate cookies
                  if You so prefer. If You choose to decline cookies,You may not be
                  able to access all or parts of Our Platform or to fully experience
                  the interactive features of the Services or the websites You visit
                  through Us.
                </li>
              </ol>
            </li>
            <li>
              <h4>STORAGE, PROCESSING AND RETENTION OF PERSONAL DATA</h4>
              <ol>
                <li>
                  Personal Data collected by IndiGG may be stored and/or processed in
                  India where IndiGG or its Service Providers maintain facilities.
                  IndiGG will also be entitled to use third-party service providers
                  to store Your Personal Data. The storage location(s) are chosen to
                  operate efficiently, improve performance, and create probability of
                  errors for protecting Your Personal Data in the event of an outage
                  or other problems. We take steps to ensure that the Personal Data
                  We collect is processed according to the provisions of this Privacy
                  Policy and the requirements of Data Protection Laws wherever the
                  Personal Data is located.
                </li>
                <li>
                  Your Personal Data may be transferred to other countries for
                  processing and by using any part of the Services and or the
                  Platform, You consent to the transfer, use and processing of Your
                  Personal Data to countries outside of India which may have
                  different laws governing Your Personal Data. However, the level of
                  protection that will be applied to the transferred Personal Data
                  will be at least comparable to the protection provided under this
                  Privacy Policy.
                </li>
                <li>
                  We may retain Your Personal Data for as long as it is necessary to
                  fulfil the purpose for which it was collected, or as required or
                  permitted by Applicable Law.
                </li>
                <li>
                  We will cease to retain Your Personal Data or remove how the data
                  can be associated with You as soon as it is reasonable to assume
                  that such retention no longer serves the purpose for which the
                  Personal Data was collected and is no longer necessary for legal or
                  business purposes.
                </li>
              </ol>
            </li>
            <li>
              <h4>YOUR RIGHTS</h4>
              <ol>
                <li>
                  You are free to remove or delete content from Your User Account by
                  logging in and visiting Your profile page, subject to the Terms of
                  Use, this Privacy Policy, and Applicable Law.
                </li>
                <li>
                  You may opt out of receiving marketing and promotional
                  communications from Us. However, You will continue to receive
                  necessary transactional emails until Your User Account is deleted.
                </li>
                <li>
                  Subject to the exceptions under Data Protection Laws, if You wish
                  to make a request for access to a copy of the Personal Data which
                  We hold about You or information about the ways in which We use or
                  disclose Your Personal Data, or a correction request to correct or
                  update any of Your Personal Data which We hold about You, You may
                  submit Your request via email at{" "}
                  <Link href={"mailto:contact@indi.gg"}>contact@indi.gg</Link>.
                  Please note that a reasonable fee may be charged for an access
                  request. If so, We will inform You of such fee before processing
                  Your request.
                </li>
                <li>
                  You may withdraw Your consent for the collection, use or disclosure
                  of Personal Data by changing the relevant privacy settings on Your
                  device or by a written request via email at{" "}
                  <Link href={"mailto:contact@indi.gg"}>contact@indi.gg</Link>. For
                  some Personal Data, You may not have the ability to withdraw
                  consent while your User Account is active. We shall inform You of
                  the likely consequences of such withdrawal at the time of You
                  making the request.
                </li>
              </ol>
            </li>
            <li>
              <h4>THIRD PARTY LINKS AND SITES</h4>
              <ol>
                <li>
                  The Services and/or the Platform may contain links to or
                  information about third-party websites that are not within Our
                  control. We are not responsible for the privacy practices of any
                  external website or mobile application.
                </li>
                <li>
                  You agree that We are not liable in any manner, whatsoever, for any
                  content as may be displayed on such third-party websites.
                </li>
                <li>
                  If You follow a link to any third-party websites or application,
                  please note that We do not accept any responsibility or liability
                  for the same. Please check the relevant policies before You submit
                  any information to these websites, mobile applications, or their
                  affiliates.
                </li>
              </ol>
            </li>
            <li>
              <h4>GRIEVANCE REDRESSAL OFFICER</h4>
              <ol>
                <li>
                  You may contact Our Grievance Redressal Officer if You have any
                  enquiries or feedback on Our personal data protection policies and
                  procedures, or if You wish to make any request, by email at
                  <Link href={"mailto:contact@indi.gg"}>contact@indi.gg</Link>.
                </li>
                <li>
                  For any other questions relating to this Privacy Policy, or if You
                  believe that the Platform has not adhered to this Privacy Policy,
                  You can write to Us at:{" "}
                  <Link href={"mailto:contact@indi.gg"}>contact@indi.gg</Link>.
                </li>
              </ol>
            </li>
            <li>
              <h4>CHANGES TO THIS PRIVACY POLICY</h4>
              <ol>
                <li>
                  We reserve the absolute and unconditional right to update, modify,
                  delete, or otherwise make changes to this Privacy Policy at any
                  time. Any changes to this Privacy Policy will be posted to the
                  Platform. A notification may be sent to Your registered email
                  address.
                </li>
                <li>
                  You can determine when this Privacy Policy was last modified by
                  referring to the “Last updated on” legend at the beginning of this
                  Privacy Policy. It shall be Your responsibility to check this
                  Privacy Policy periodically for changes.
                </li>
                <li>
                  Any changes to this Privacy Policy will take effect and be binding
                  on You from the time of posting the changes to the Platform. If You
                  continue to use any Services following any changes to this Privacy
                  Policy, You will be deemed to have accepted the changes and the
                  updated version of this Privacy Policy.
                </li>
                <li>
                  If You do not agree with the changes, please refrain from using the
                  Platform. It is Your responsibility to review this Privacy Policy
                  (and the applicable conditions) from time to time.
                </li>
                <li>
                  If any provision of this Privacy Policy shall be held to be
                  invalid, illegal, or unenforceable for any reason whatsoever, the
                  validity, illegality, and enforceability of the remaining provision
                  of this Privacy Policy shall not in any way be affected or impaired
                  thereby.
                </li>
              </ol>
            </li>
          </ol>
        </div>
      </div>
    </section>
  );
};

export default index;
