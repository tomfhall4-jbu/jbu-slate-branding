<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet version="1.0" exclude-result-prefixes="xhtml" xmlns="http://www.w3.org/1999/xhtml" xmlns:fw="http://technolutions.com/framework" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <template path="/shared/base.xslt" xmlns="http://technolutions.com/framework" />
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" class="cr" />
        <link href="/shared/build-fonts.css?v=20220724175415" rel="stylesheet" />
        <link href="/shared/build-mobile-global.css" rel="stylesheet" />
        <script src="/shared/build-mobile-global.js" />
        <link href="/shared/build.css?v=202501" rel="stylesheet" />
        <style>html &gt; body { line-height: normal; } ul.cr, li.cr { margin: 0; padding: 0; } #content { clear: both; padding: 15px; } #global { float: right; } #global ul, #global li { list-style: none; margin: 0; padding: 0; }</style>
        <link rel="preconnect" href="https://fonts.googleapis.com/" class="cr" />
        <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=ProximaNova:regular|ProximaNova-Extrabld:regular,100,700|ProximaNova-Regular:regular&amp;display=swap" class="cr" />
        <link rel="stylesheet" href="https://www.jbu.edu/hs-fs/hubfs/hub_generated/template_assets/1/66974720411/1743464770646/template_hover-min.min.css" />
        <link rel="stylesheet" href="https://www.jbu.edu/hs-fs/hubfs/hub_generated/template_assets/1/60922093915/1743464764008/template_main.min.css" />
        <link rel="stylesheet" href="https://www.jbu.edu/hs-fs/hubfs/hub_generated/template_assets/1/60920245136/1743464754725/template_jbu-global.css" />
        <link rel="stylesheet" href="https://www.jbu.edu/hs-fs/hubfs/hub_generated/template_assets/1/80490785424/1743464833842/template_jbu-main.min.css" />
        <link rel="stylesheet" href="https://www.jbu.edu/hs-fs/hubfs/hub_generated/template_assets/1/60922132555/1743464765955/template_theme-overrides.css" />
        <script src="https://www.jbu.edu/hs-fs/hubfs/hub_generated/template_assets/1/60921313824/1741961550041/template_jbu-global.min.js">
        </script>
        <xsl:apply-templates select="xhtml:html/xhtml:head/node()" />
      </head>
      <body>
        <div class="jbu-admissions-cont">
          <div class="jbu-admissions-header-cont">
            <div class="jbu-admissions-header">
              <div class="jbu-admissions-header-items jbu-admissions-cont-width">
                <div class="jbu-admissions-header-logo hvr-shrink">
                  <a href="https://www.jbu.edu/">
                    <img src="https://www.jbu.edu/hubfs/19902035/logo/logo-files/primary-horizontal/JBU_primary_hor_white.png" alt="John Brown University" width="100" height="50" />
                  </a>
                </div>
                <div class="jbu-admissions-header-action-items">
                  <div class="jbu-admissions-header-action-item">
                    <a class="hvr-shrink" href="https://admissions.jbu.edu/portal/undergraduate-application">Apply</a>
                  </div>
                  <div class="jbu-admissions-header-action-item">
                    <a class="hvr-shrink" href="https://www.jbu.edu/visit/">Visit</a>
                  </div>
                  <div class="jbu-admissions-header-action-item">
                    <a class="hvr-shrink" href="https://admissions.jbu.edu/register/request-information">Request Info</a>
                  </div>
                </div>
              </div>
              <div class="jbu-admissions-header-items-row2 jbu-admissions-cont-width">
                <div class="jbu-admissions-header-action-item-row2 ">
                  <a class="hvr-shrink" href="https://www.jbu.edu/admissions/">Admissions</a>
                </div>
                <div class="jbu-admissions-header-action-item-row2 ">
                  <a class="hvr-shrink" href="https://www.jbu.edu/academics/">Academics</a>
                </div>
                <div class="jbu-admissions-header-action-item-row2 ">
                  <a class="hvr-shrink" href="https://www.jbu.edu/financial-aid/">Cost &amp; Aid</a>
                </div>
                <div class="jbu-admissions-header-action-item-row2 ">
                  <a class="hvr-shrink" href="https://www.jbu.edu/student-life/">Student Life</a>
                </div>
                <div class="jbu-admissions-header-action-item-row2 ">
                  <a class="hvr-shrink" href="https://www.jbu.edu/about/">About</a>
                </div>
              </div>
              <div class="jbu-admissions-header-items-image jbu-admissions-cont-width">
                <img src=" https://www.jbu.edu/hubfs/admissions/admissions-images/jbu-admissions-image.png" alt="John Brown University" width="100" height="50" />
              </div>
            </div>
          </div>
          <div class="jbu-admissions-body jbu-admissions-cont-width">
            <xsl:copy-of select="xhtml:html/xhtml:body/@*" />
            <div id="global" />
            <div id="content">
              <xsl:apply-templates select="xhtml:html/xhtml:body/node()" />
            </div>
          </div>
          <div class="container footer">
            <div class="jbu-footer jbu-container-all">
              <div class="container jbu-footer">
                <div class="container-flex">
                  <div class="jbu-footer-logo ">
                    <img class="" data-src="//19902035.fs1.hubspotusercontent-na1.net/hubfs/19902035/raw_assets/public/jbu_prod/images/JBU_primary_stack_white.png" alt="&quot;&quot;" src="//19902035.fs1.hubspotusercontent-na1.net/hubfs/19902035/raw_assets/public/jbu_prod/images/JBU_primary_stack_white.png" />
                  </div>
                  <hr class="jbu-footer-placeable-hr" />
                  <div class="jbu-footer-social-media  container-flex">
                    <a aria-label="JBU Facebook" href="https://www.facebook.com/JohnBrownUniversity/">
                      <div class="jbu-footer-fb lazyload">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                          <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                          </path>
                        </svg>
                      </div>
                    </a>
                    <a aria-label="JBU instagram" href="https://www.instagram.com/johnbrownuniversity">
                      <div class="jbu-footer-instagram lazyload">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                          <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                          </path>
                        </svg>
                      </div>
                    </a>
                    <a aria-label="JBU Twitter" href="https://twitter.com/johnbrownuniv">
                      <div class="jbu-footer-twitter lazyload">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                          <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                          </path>
                        </svg>
                      </div>
                    </a>
                    <a aria-label="JBU Youtube" href="https://www.youtube.com/user/JohnBrownUniversity">
                      <div class="jbu-footer-youtube lazyload">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                          <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                          <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                          </path>
                        </svg>
                      </div>
                    </a>
                  </div>
                  <div class="jbu-footer-ssm-cta-lg-screen container-flex">
                    <div class="jbu-footer-social-media-lg-screen container-flex">
                      <a aria-label="JBU Facebook" href="https://www.facebook.com/JohnBrownUniversity/">
                        <div class="jbu-footer-fb lazyload">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512">
                            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z">
                            </path>
                          </svg>
                        </div>
                      </a>
                      <a aria-label="JBU instagram" href="https://www.instagram.com/johnbrownuniversity">
                        <div class="jbu-footer-instagram lazyload">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z">
                            </path>
                          </svg>
                        </div>
                      </a>
                      <a aria-label="JBU Twitter" href="https://twitter.com/johnbrownuniv">
                        <div class="jbu-footer-twitter lazyload">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path d="M459.37 151.716c.325 4.548.325 9.097.325 13.645 0 138.72-105.583 298.558-298.558 298.558-59.452 0-114.68-17.219-161.137-47.106 8.447.974 16.568 1.299 25.34 1.299 49.055 0 94.213-16.568 130.274-44.832-46.132-.975-84.792-31.188-98.112-72.772 6.498.974 12.995 1.624 19.818 1.624 9.421 0 18.843-1.3 27.614-3.573-48.081-9.747-84.143-51.98-84.143-102.985v-1.299c13.969 7.797 30.214 12.67 47.431 13.319-28.264-18.843-46.781-51.005-46.781-87.391 0-19.492 5.197-37.36 14.294-52.954 51.655 63.675 129.3 105.258 216.365 109.807-1.624-7.797-2.599-15.918-2.599-24.04 0-57.828 46.782-104.934 104.934-104.934 30.213 0 57.502 12.67 76.67 33.137 23.715-4.548 46.456-13.32 66.599-25.34-7.798 24.366-24.366 44.833-46.132 57.827 21.117-2.273 41.584-8.122 60.426-16.243-14.292 20.791-32.161 39.308-52.628 54.253z">
                            </path>
                          </svg>
                        </div>
                      </a>
                      <a aria-label="JBU Youtube" href="https://www.youtube.com/user/JohnBrownUniversity">
                        <div class="jbu-footer-youtube lazyload">
                          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512">
                            <!--! Font Awesome Pro 6.1.1 by @fontawesome - https://fontawesome.com License - https://fontawesome.com/license (Commercial License) Copyright 2022 Fonticons, Inc. -->
                            <path d="M549.655 124.083c-6.281-23.65-24.787-42.276-48.284-48.597C458.781 64 288 64 288 64S117.22 64 74.629 75.486c-23.497 6.322-42.003 24.947-48.284 48.597-11.412 42.867-11.412 132.305-11.412 132.305s0 89.438 11.412 132.305c6.281 23.65 24.787 41.5 48.284 47.821C117.22 448 288 448 288 448s170.78 0 213.371-11.486c23.497-6.321 42.003-24.171 48.284-47.821 11.412-42.867 11.412-132.305 11.412-132.305s0-89.438-11.412-132.305zm-317.51 213.508V175.185l142.739 81.205-142.739 81.201z">
                            </path>
                          </svg>
                        </div>
                      </a>
                    </div>
                    <div class="jbu-footer-cta-buttons-lg-screen">
                      <div class="button-wrapper">
                        <a aria-label="Apply Now" href="/applytojbu/?hsLang=en" class="button ghost-light" target="_blank" rel="noopener"> Apply Now </a>
                      </div>
                      <div class="button-wrapper">
                        <a href="https://admissions.jbu.edu/register/request-information/" aria-label="Request Info" class="button ghost-light" target="_blank" rel="noopener">Request Info </a>
                      </div>
                    </div>
                  </div>
                  <hr />
                  <div class="jbu-footer-cta container-flex">
                    <p class="jbu-footer-jbu-name">John Brown University</p>
                    <p class="jbu-footer-jbu-address">2000 W. University St., Siloam Springs, AR 72761 <br />479-524-9500 <a class="jbu-footer-jbu-email" href="mailto:jbuinfo@jbu.edu">jbuinfo@jbu.edu</a></p>
                    <div class="jbu-footer-cta-buttons">
                      <div class="button-wrapper">
                        <a href="https://www.jbu.edu/applytojbu/" aria-label="Apply Now" class="button ghost-light" target="_blank" rel="noopener"> Apply Now </a>
                      </div>
                      <div class="button-wrapper">
                        <a aria-label="Request Info" href="https://admissions.jbu.edu/register/request-information/" class="button ghost-light" target="_blank" rel="noopener">Request Info </a>
                      </div>
                    </div>
                    <div class="jbu-footer-cccu ">
                      <img class="lazy" data-src="https://19902035.fs1.hubspotusercontent-na1.net/hubfs/19902035/raw_assets/public/jbu_prod/images/cccu.png" src="https://19902035.fs1.hubspotusercontent-na1.net/hubfs/19902035/raw_assets/public/jbu_prod/images/cccu.png" alt="&quot;&quot;" />
                    </div>
                  </div>
                  <hr class="jbu-footer-placeable-hr" />
                </div>
                <div class="container-flex">
                  <div class="jbu-footer-main-column-left">
                    <div class="container-flex jbu-footer-links">
                      <div class="jbu-footer-columns">
                        <div class="jbu-footer-links-column">
                          <h4 class="collapsible">
                            <a href="https://www.jbu.edu/academics/">Undergraduate</a>
                          </h4>
                          <div class="content">
                            <ul>
                              <li>
                                <a aria-label="JBU Majors" href="https://www.jbu.edu/majors/">Majors</a>
                              </li>
                              <li>
                                <a aria-label="JBU Admissions" href="https://www.jbu.edu/admissions/">Admissions</a>
                              </li>
                              <li>
                                <a href="https://www.jbu.edu/financial-aid/">Financial Aid</a>
                              </li>
                              <li>
                                <a href="https://www.jbu.edu/visit/">Visit JBU</a>
                              </li>
                              <li>
                                <a href="https://www.jbu.edu/student-life/">Student Life</a>
                              </li>
                              <li>
                                <a href="https://admissions.jbu.edu/register/request-information/">Request Information</a>
                              </li>
                              <li>
                                <a href="https://www.jbu.edu/applytojbu/">Apply</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <hr class="jbu-footer-placeable-hr" />
                      </div>
                      <div class="jbu-footer-columns">
                        <div class="jbu-footer-links-column">
                          <h4 class="collapsible">
                            <a href="https://www.jbu.edu/online-undergraduate/">Online Undergraduate</a>
                          </h4>
                          <div class="content">
                            <ul>
                              <li>
                                <a href="https://www.jbu.edu/online-undergraduate/degree-programs/">Degrees</a>
                              </li>
                              <li>
                                <a href="https://www.jbu.edu/admissions/online-undergraduate/">Admissions</a>
                              </li>
                              <li>
                                <a href="https://www.jbu.edu/financial-aid/online-undergraduate/">Tuition &amp; Financial Aid</a>
                              </li>
                              <li>
                                <a href="https://www.jbu.edu/onlineapp/">Apply</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <hr class="jbu-footer-placeable-hr" />
                        <div class="jbu-footer-links-column">
                          <h4 class="collapsible">
                            <a href="https://www.jbu.edu/graduate/">Graduate</a>
                          </h4>
                          <div class="content">
                            <ul>
                              <li>
                                <a href="https://www.jbu.edu/graduate/degree-programs/">Degrees</a>
                              </li>
                              <li>
                                <a href="https://www.jbu.edu/admissions/graduate/">Admissions</a>
                              </li>
                              <li>
                                <a href="https://www.jbu.edu/financial-aid/graduate/">Tuition &amp; Financial Aid</a>
                              </li>
                              <li>
                                <a href="https://www.jbu.edu/gradapp/">Apply</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <hr class="jbu-footer-placeable-hr" />
                      </div>
                      <div class="jbu-footer-columns">
                        <div class="jbu-footer-links-column">
                          <h4 class="collapsible">
                            <a href="https://www.jbu.edu/athletics/">Athletics</a>
                          </h4>
                          <div class="content">
                            <ul>
                              <li>
                                <a href="http://jbuathletics.com/" target="_blank" rel="noopener">JBUAthletics.com</a>
                              </li>
                              <li>
                                <a href="https://www.sacsportsnetwork.com/jbu/" target="_blank" rel="noopener">Watch &amp; Listen Live</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <hr class="jbu-footer-placeable-hr" />
                        <div class="jbu-footer-links-column">
                          <h4 class="collapsible">
                            <a href="https://www.jbu.edu/parents/">Parents</a>
                          </h4>
                          <div class="content">
                            <ul>
                              <li>
                                <a href="https://www.facebook.com/groups/jbuparents/about/" target="_blank" rel="noopener">Parent FB community</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <hr class="jbu-footer-placeable-hr" />
                        <div class="jbu-footer-links-column">
                          <h4 class="collapsible">
                            <a href="/alumni/?hsLang=en">Alumni</a>
                          </h4>
                          <div class="content">
                            <ul>
                              <li>
                                <a href="https://www.jbu.edu/alumni/engage/">Alumni Events</a>
                              </li>
                              <li>
                                <a href="https://www.jbu.edu/alumni/homecoming/">Homecoming</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <hr class="jbu-footer-placeable-hr" />
                      </div>
                      <div class="jbu-footer-columns">
                        <div class="jbu-footer-links-column">
                          <h4 class="collapsible">
                            <a href="https://www.jbu.edu/giving/">Giving</a>
                          </h4>
                          <div class="content">
                            <ul>
                              <li>
                                <a href="https://www.jbu.edu/giving/scholarships/">Scholarship Fund</a>
                              </li>
                              <li>
                                <a href="https://www.jbu.edu/giving/wills-and-trusts/">Estates &amp; Planned Giving</a>
                              </li>
                              <li>
                                <a href="https://www.jbu.edu/giving/endowed-scholarships/">Endowed Scholarships</a>
                              </li>
                              <li>
                                <a href="https://www.jbu.edu/givenow/">Give Now</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <hr class="jbu-footer-placeable-hr" />
                        <div class="jbu-footer-links-column">
                          <h4 class="collapsible">
                            <a href="https://www.jbu.edu/about/">About</a>
                          </h4>
                          <div class="content">
                            <ul>
                              <li>
                                <a href="https://www.jbu.edu/human-resources/">Employment Opportunities</a>
                              </li>
                              <li>
                                <a href="https://www.jbu.edu/news/">News &amp; Media</a>
                              </li>
                              <li>
                                <a href="https://www.jbu.edu/about/visitor-information/">Visitor Information</a>
                              </li>
                              <li>
                                <a href="https://www.jbu.edu/about/directory/">Contact Directory</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <hr class="jbu-footer-placeable-hr" />
                      </div>
                      <div class="jbu-footer-columns">
                        <div class="jbu-footer-links-column">
                          <h4 class="collapsible">Resources</h4>
                          <div class="content">
                            <ul>
                              <li>
                                <a href="https://jbu.slingshotedu.com/" target="_blank" rel="noopener">Bookstore</a>
                              </li>
                              <li>
                                <a href="https://www.jbu.edu/calendar/">Calendars</a>
                              </li>
                              <li>
                                <a href="https://eaglenet.jbu.edu">Eaglenet</a>
                              </li>
                              <li>
                                <a href="https://www.jbu.edu/student-services/campus-safety/">Campus Safety</a>
                              </li>
                              <li>
                                <a href="https://www.jbu.edu/library/">Library</a>
                              </li>
                              <li>
                                <a href="https://www.jbu.edu/student-services/student-accounts/">Student Accounts</a>
                              </li>
                              <li>
                                <a href="https://www.jbu.edu/tickets/">Tickets</a>
                              </li>
                              <li>
                                <a href="https://www.jbu.edu/academics/registrar/">Transcript Request</a>
                              </li>
                              <li>
                                <a href="https://www.jbu.edu/community-events/">Community Events</a>
                              </li>
                            </ul>
                          </div>
                          <hr class="jbu-footer-placeable-hr" />
                        </div>
                        <div class="jbu-footer-links-column">
                          <h4 class="collapsible">Policy Information</h4>
                          <div class="content">
                            <ul>
                              <li>
                                <a href="https://www.jbu.edu/human-resources/title-ix/">Title IX Policies</a>
                              </li>
                              <li>
                                <a href="https://www.jbu.edu/about/consumer-info/">Consumer Info</a>
                              </li>
                              <li>
                                <a href="https://www.jbu.edu/about/privacy/">Privacy</a>
                              </li>
                              <li>
                                <a href="https://www.jbu.edu/about/accessibility/">Accessibility</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                        <hr class="jbu-footer-placeable-hr" />
                      </div>
                    </div>
                  </div>
                  <div class="jbu-footer-main-column-right">
                    <p class="jbu-footer-jbu-name-lg-screen">John Brown University</p>
                    <p class="jbu-footer-jbu-address-lg-screen">2000 W. University St., Siloam Springs, AR 72761 <br /><br />479-524-9500 <a class="jbu-footer-jbu-email" href="mailto:jbuinfo@jbu.edu">jbuinfo@jbu.edu</a></p>
                    <div class="jbu-footer-cccu-lg-screen">
                      <img class="" data-src="//19902035.fs1.hubspotusercontent-na1.net/hubfs/19902035/raw_assets/public/jbu_prod/images/cccu.png" alt="&quot;&quot;" src="//19902035.fs1.hubspotusercontent-na1.net/hubfs/19902035/raw_assets/public/jbu_prod/images/cccu.png" />
                    </div>
                  </div>
                </div>
                <hr class="jbu-footer-hr-content" />
                <div class="jbu-footer-content">
                  <p>
    JBU does not unlawfully discriminate based on race, color, national or ethnic origin, sex, age, disability, marital status, military status, or age in the administration of its educational policies, admissions, financial aid, employment, educational programs, or activities. </p>
                  <p>
      John Brown University is a leading private Christian university, training students to honor God and serve others since 1919. Arkansas&#x2019; top-ranked university (The Wall Street Journal) and top-ranked regional university (U.S. News), JBU enrolls more than 2,200 students from 37 states and 42 countries in its traditional undergraduate, graduate, online and concurrent education programs. JBU offers more than 50 undergraduate majors, with top programs including nursing, psychology, construction management, graphic design, family and human services, and engineering. Eighteen graduate degrees are available in business, counseling, cybersecurity, and education.
       </p>
                </div>
              </div>
              <div style="text-align: center; font-size: 0.7rem;opacity: .64; padding-bottom:1rem;">
                <span>Copyright 2025 John Brown University. All rights reserved.</span>
              </div>
            </div>
          </div>
        </div>
      </body>
    </html>
  </xsl:template>
  <xsl:template match="@* | node()">
    <xsl:copy>
      <xsl:apply-templates select="@* | node()" />
    </xsl:copy>
  </xsl:template>
</xsl:stylesheet>