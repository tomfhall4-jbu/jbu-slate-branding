<?xml version="1.0" encoding="utf-8" ?>
<xsl:stylesheet version="1.0" xmlns="http://www.w3.org/1999/xhtml" xmlns:fw="http://technolutions.com/framework" xmlns:xhtml="http://www.w3.org/1999/xhtml" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" exclude-result-prefixes="xhtml">
  <xsl:template match="/">
    <html xmlns="http://www.w3.org/1999/xhtml">
      <template path="/shared/base.xslt" xmlns="http://technolutions.com/framework" />
      <head>
        <link href="/shared/build-fonts.css?v=20200817114752" rel="stylesheet" />
        <link href="/shared/build-mobile-global.css" rel="stylesheet" />
        <script src="/shared/build-mobile-global.js" />
        <link href="/shared/build.css?v=20220922144507" rel="stylesheet" />
        <style>html &gt; body { line-height: normal; } ul.cr, li.cr { margin: 0; padding: 0; } #content { clear: both; padding: 15px; } #global { float: right; } #global ul, #global li { list-style: none; margin: 0; padding: 0; }</style>
        <meta name="viewport" content="width=device-width, initial-scale=1" class="cr" />
        <xsl:apply-templates select="xhtml:html/xhtml:head/node()" />
        <!-- Google Tag Manager -->
        <script>(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&amp;l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-W2DX5DJ');</script>
        <!-- End Google Tag Manager -->
      </head>
      <body>
        <!-- Google Tag Manager (noscript) -->
        <noscript>
          <iframe src="https://www.googletagmanager.com/ns.html?id=GTM-W2DX5DJ" height="0" width="0" style="display:none;visibility:hidden">
          </iframe>
        </noscript>
        <!-- End Google Tag Manager (noscript) -->
        <xsl:copy-of select="xhtml:html/xhtml:body/@*" />
        <div id="page">
          <div class="c_master-header-spacer cr">&#xA0;</div>
          <div class="c_master-content-container c_area_4 cr">
            <div class="jbu-content-block jbu-content-header-standard-container-main jbu-bg-header-lonely">
              <div class=" jbu-content-header-standard-container jbu-content-header-standard-size-small" style="opacity: .20; background-image: url(&quot;/image/header-background.jpg&quot;);  ">
              </div>
              <header class="jbu-content-header-size-small">
                <div class="jbu-content-header-standard-titles">
                  <h1 class="jbu-content-header-standard-title">JBU Admissions</h1>
                  <p class="jbu-content-header-standard-subtitle">
                    <a href="https://www.jbu.edu/undergrad/" class="cr header-link">On-Campus Undergraduate</a>   &#x2022;   <a href="https://www.jbu.edu/online/" class="cr header-link">Online Undergraduate</a>   &#x2022;   <a href="https://www.jbu.edu/grad/" class="cr header-link">Graduate</a></p>
                </div>
              </header>
            </div>
            <main role="main" class="cr">
              <div class="c_content c_searchable cr">
                <div class="c_jbu-content-block c_jbu-columns-container c_jbu-columns-1 c_jbu-columns-1-bottom-padding-none cr">
                  <div id="global" />
                  <div id="content">
                    <xsl:apply-templates select="xhtml:html/xhtml:body/node()" />
                  </div>
                </div>
              </div>
            </main>
          </div>
          <div class="c_master-footer-container cr">
            <div class="c_master-footer cr">
              <div class="c_master-footer-top cr">
                <div class="c_master-footer-top-left cr">
                  <div class="c_master-footer-top-left-logo cr">
                    <a title="John Brown University Home Page" href="https://www.jbu.edu/" class="cr">
                      <img src="/images/jbu-footer-2018.png" alt="JBU Footer Image" class="cr" />
                    </a>
                  </div>
                  <div class="c_master-footer-top-left-share-icons cr">
                    <a title="Share on Facebook" target="_blank" href="https://www.facebook.com/JohnBrownUniversity/" rel="noopener" class="cr">
                      <img src="/images/facebook.png" alt="Share Icon:Share on Facebook" class="cr" />
                    </a>
                    <a title="Instagram" target="_blank" href="https://www.instagram.com/johnbrownuniversity/" class="cr">
                      <img src="/images/instagram.png" alt="Share Icon:Email this Page" class="cr" />
                    </a>
                    <a title="Share on Twitter" target="_blank" href="https://twitter.com/johnbrownuniv" rel="noopener" class="cr">
                      <img src="/images/twitter.png" alt="Share Icon:Share on Twitter" class="cr" />
                    </a>
                    <a title="Youtube" target="_blank" href="https://www.youtube.com/user/JohnBrownUniversity" rel="noopener" class="cr">
                      <img src="/images/icon-youtube.png" alt="Share Icon:Youtube" class="cr" />
                    </a>&#xA0;</div>
                </div>
                <div class="c_master-footer-top-right cr">
                  <div class="c_master-footer-top-column cr">
                    <div class="c_master-footer-column cr">
                      <div id="c_tab-1" class="c_tab cr">
                        <input id="c_tab-one" name="tabs" type="checkbox" class="cr" />
                        <label for="tab-one" class="cr">
                          <a href="https://www.jbu.edu/undergrad/" class="cr">Undergraduate</a>
                        </label>
                        <div class="c_tab-content cr">
                          <ul class="c_master-footer-top-column-first-section cr">
                            <li class="cr">
                              <a href="https://www.jbu.edu/majors/" class="cr">Majors</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/admissions/" class="cr">Admissions</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/financial-aid/" class="cr">Financial Aid</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/visit/" class="cr">Visit JBU</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/campus-life/" class="cr">Campus Life</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/admissions/request-info/" class="cr">Request Information</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/admissions/application/" class="cr">Apply</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div id="c_tab-2" class="c_tab cr">
                        <input id="c_tab-two" name="tabs" type="checkbox" class="cr" />
                        <label for="tab-two" class="cr">
                          <a href="https://www.jbu.edu/grad/" class="cr">Graduate</a>
                        </label>
                        <div class="c_tab-content cr">
                          <ul class="c_master-footer-top-column-first-section cr">
                            <li class="cr">
                              <a href="https://www.jbu.edu/grad/programs/" class="cr">Programs</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/grad/admissions/" class="cr">Admissions</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/apply/" class="cr">Apply</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div id="c_tab-3" class="c_tab cr">
                        <input id="c_tab-three" name="tabs" type="checkbox" class="cr" />
                        <label for="tab-three" class="cr">
                          <a href="https://www.jbu.edu/online/" class="cr">JBU Online</a>
                        </label>
                        <div class="c_tab-content cr">
                          <ul class="c_master-footer-top-column-first-section cr">
                            <li class="cr">
                              <a href="https://www.jbu.edu/online/degrees/" class="cr">Degrees</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/online/admissions/" class="cr">Admissions</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/online/apply/" class="cr">Apply</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="c_master-footer-column cr">
                      <div id="c_tab-4" class="c_tab cr">
                        <input id="c_tab-four" name="tabs" type="checkbox" class="cr" />
                        <label for="tab-four" class="cr">
                          <a href="https://www.jbu.edu/athletics/" class="cr">Athletics</a>
                        </label>
                        <div class="c_tab-content cr">
                          <ul class="c_master-footer-top-column-first-section cr">
                            <li class="cr">
                              <a target="_blank" href="http://jbuathletics.com/" rel="noopener" class="cr">JBUAthletics.com</a>
                            </li>
                            <li class="cr">
                              <a target="_blank" href="http://portal.stretchinternet.com/jbu/" rel="noopener" class="cr">Watch &amp; Listen Live</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/athletics/tp-game/" class="cr">Toilet Paper Game</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div id="c_tab-5" class="c_tab cr">
                        <input id="c_tab-five" name="tabs" type="checkbox" class="cr" />
                        <label for="tab-five" class="cr">
                          <a href="https://www.jbu.edu/alumni/" class="cr">Alumni &amp; Parents</a>
                        </label>
                        <div class="c_tab-content cr">
                          <ul class="c_master-footer-top-column-first-section cr">
                            <li class="cr">
                              <a href="https://www.jbu.edu/alumni/events/" class="cr">Alumni Events</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/parents/family-weekend/" class="cr">Family Weekend</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/alumni/information/" class="cr">Update Your Info</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/alumni/homecoming/" class="cr">Homecoming</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div id="c_tab-6" class="c_tab cr">
                        <input id="c_tab-six" name="tabs" type="checkbox" class="cr" />
                        <label for="tab-six" class="cr">
                          <a href="https://www.jbu.edu/giving/" class="cr">Giving</a>
                        </label>
                        <div class="c_tab-content cr">
                          <ul class="c_master-footer-top-column-first-section cr">
                            <li class="cr">
                              <a href="https://www.jbu.edu/giving/scholarship/" class="cr">Scholarship Fund</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/giving/planned-giving/" class="cr">Estates &amp; Planned Giving</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/giving/endowed-scholarships/" class="cr">Endowed Scholarships</a>
                            </li>
                            <li class="cr">
                              <a target="_blank" href="https://johnbrownuniversity.givingfuel.com/jbu-online-giving-page" rel="noopener" class="cr">Give Now</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div class="c_master-footer-column cr">
                      <div id="c_tab-7" class="c_tab cr">
                        <input id="c_tab-seven" name="tabs" type="checkbox" class="cr" />
                        <label for="tab-seven" class="cr">
                          <a target="_blank" href="https://www.jbu.edu/about/" class="cr">About</a>
                        </label>
                        <div class="c_tab-content cr">
                          <ul class="c_master-footer-top-column-first-section cr">
                            <li class="cr">
                              <a href="https://www.jbu.edu/president/mission-vision-values/" class="cr">Mission Statement</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/president/" class="cr">President's Office</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/human-resources/" class="cr">Employment Opportunities</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/about/locations/" class="cr">Locations</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/news/" class="cr">News &amp; Media</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/social-media/" class="cr">Social Media Index</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/about/privacy/" class="cr">Privacy</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div id="c_tab-8" class="c_tab cr">
                        <input id="c_tab-eight" name="tabs" type="checkbox" class="cr" />
                        <label for="tab-eight" class="cr">Resources</label>
                        <div class="c_tab-content cr">
                          <ul class="c_master-footer-top-column-first-section cr">
                            <li class="cr">
                              <a href="https://www.jbu.edu/about/bookstore/" class="cr">Bookstore</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/news/calendar/" class="cr">Calendars</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/about/visitor-information/" class="cr">Campus Map</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/about/directory/" class="cr">Contact Directory</a>
                            </li>
                            <li class="cr">
                              <a target="_blank" href="https://eaglenet.jbu.edu/" class="cr">Eaglenet</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/campus-safety/emergency/" class="cr">Emergency Numbers</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/library/" class="cr">Library</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/registrar/" class="cr">Registrar</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/student-accounts/" class="cr">Student Accounts</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/tickets/" class="cr">Tickets</a>
                            </li>
                            <li class="cr">
                              <a href="https://www.jbu.edu/transcript/" class="cr">Transcript Request</a>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div class="c_clearboth cr">&#xA0;</div>
                </div>
                <div class="c_master-footer-bottom cr">
                  <div class="c_master-footer-bottom-left cr">&#xA0;</div>
                  <div class="c_master-footer-bottom-right cr">
                    <p class="cr">2000 W. University St., Siloam Springs, AR 72761 &#xA0;&#xA0;|&#xA0;&#xA0; 479-524-9500 &#xA0;&#xA0;|&#xA0;&#xA0; <a target="_blank" href="mailto:jbuinfo@jbu.edu" class="cr">jbuinfo@jbu.edu</a></p>
                    <p class="c_master-footer-bottom-copy cr">John Brown University is a leading private Christian university, training students to honor God and serve others since 1919. Arkansas' top-ranked regional university (U.S. News Best Colleges 2019), JBU enrolls more than 2,100 students from 38 states and 53 countries in its traditional undergraduate, graduate, online and concurrent education programs. JBU offers 41 majors, with top programs including engineering, nursing, family and human services, biology, graphic design and construction management.</p>
                  </div>
                  <div class="c_clearboth cr">&#xA0;</div>
                </div>
              </div>
            </div>
          </div>
          <div class="c_master-header-container cr">
            <nav role="navigation" class="cr">
              <div class="c_master-header-jbu-home c_master-header-inline-item cr">
                <div class="c_master-header-jbu-home-btn cr">
                  <a class="c_master-header-home cr" href="https://www.jbu.edu/" title="JBU Homepage">
                    <img src="/images/JBU-2020-logo.png" alt="JBU Logo Icon" class="cr" />
                  </a>
                </div>
                <div class="c_master-header-inline-item c_jbu-options-menu-listed cr">
                  <ul class="cr">
                    <li class="c_jbu-future-student cr">
                      <span class="c_jbu-inline-menu cr">Future Students</span>
                    </li>
                    <li class="c_jbu-current-student cr">
                      <span class="c_jbu-inline-menu cr">Current Students</span>
                    </li>
                    <li class="c_jbu-parents cr">
                      <span class="c_jbu-inline-menu cr">Parents</span>
                    </li>
                    <li class="c_jbu-alumni cr">
                      <span class="c_jbu-inline-menu cr">Alumni</span>
                    </li>
                    <li class="c_jbu-give cr">
                      <span class="c_jbu-inline-menu cr">Give</span>
                    </li>
                    <li class="c_jbu-about cr">
                      <span class="c_jbu-inline-menu cr">About</span>
                    </li>
                    <li class="c_jbu-athletics cr">
                      <span class="c_jbu-inline-menu cr">Athletics</span>
                    </li>
                    <li class="cr">
                      <a target="_blank" href="https://www.jbu.edu/apply/" class="cr" />
                      <div class="c_jbu-menu-apply-btn cr">Apply Now</div>
                    </li>
                  </ul>
                </div>
              </div>
              <div class="c_master-header cr">
                <div class="c_master-header-inline-item c_master-header-close c_master-header-close-hidden cr">
                  <img class="c_master-menu-header-bar-close cr" src="/images/close.png" alt="Close Menu" />
                </div>
                <div class="c_master-header-inline-item c_master-header-search-close cr">
                  <img class="c_master-menu-header-search-bar-close cr" src="/images/close.png" alt="Close Menu" />
                </div>
                <div class="c_master-header-search cr">
                  <img src="/images/search.png" alt="JBU Global Search Icon" title="Open Global Search" class="cr" />
                </div>
                <div class="c_master-menu-search-bar-input-container cr">
                  <div class="c_master-menu-search-bar-input cr">
                    <div id="c____gcse_0" dir="ltr" class="cr" />
                  </div>
                </div>
                <div class="c_master-header-inline-item c_master-header-alert cr" />
              </div>
            </nav>
          </div>
          <div class="c_master-menu-container cr">
            <div class="master-menu" />
          </div>
          <table cellspacing="0" cellpadding="0" class="c_gstl_50 c_gssb_c cr" style="width: 2px; display: none; top: 3px; position: absolute; left: -1px;">
            <tbody class="cr">
              <tr class="cr">
                <td class="c_gssb_f cr" />
                <td class="c_gssb_e cr" style="width: 100%;" />
              </tr>
            </tbody>
          </table>
        </div>
        <script src="/shared/jbu-build.js?v=20200817114765">
        </script>
        <script>
      
 document.cookie = "SlateRef={{Ref}}; max-age=31536000; path=/"
document.cookie = "SlateUrl=" + window.location.href + "; max-age=31536000; path=/" 
    
</script>
      </body>
    </html>
  </xsl:template>
  <xsl:template match="@* | node()">
    <xsl:copy>
      <xsl:apply-templates select="@* | node()" />
    </xsl:copy>
  </xsl:template>
</xsl:stylesheet>