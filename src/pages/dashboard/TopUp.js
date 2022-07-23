import React from "react";
import { Container, Image, Row } from "react-bootstrap";
import ContentLayout from "../../components/ContentLayout";
import NavbarDashboard from "../../components/NavbarDashboard";
import SideBarMenu from "../../components/SideBarMenu";
import FooterDashboard from "../../components/FooterDashboard";

function TopUp() {
  return (
    <>
      <NavbarDashboard />
      <Container as="section" className="g-0">
        <Row className="pt-5 gx-0 gx-md-3">
          <SideBarMenu />
          <ContentLayout
            child={
              <>
                <div>
                  <span class="fw-bold">How To Top Up</span>
                </div>
                <div>
                  <ol class="mv-marker">
                    <div class="card border-0 shadow-sm mt-4">
                      <div class="card-body px-4 py-4">
                        <li class="num-mark">
                          <span class="fnt-desc">
                            Go to the nearest ATM or you can use E-Banking.
                          </span>
                        </li>
                      </div>
                    </div>
                    <div class="card border-0 shadow-sm mt-4">
                      <div class="card-body px-4 py-4">
                        <li class="num-mark">
                          <span class="fnt-desc">
                            Type your security number on the ATM or E-Banking.
                          </span>
                        </li>
                      </div>
                    </div>
                    <div class="card border-0 shadow-sm mt-4">
                      <div class="card-body px-4 py-4">
                        <li class="num-mark">
                          <span class="fnt-desc">
                            Select “Transfer” in the menu.
                          </span>
                        </li>
                      </div>
                    </div>
                    <div class="card border-0 shadow-sm mt-4">
                      <div class="card-body px-4 py-4">
                        <li class="num-mark">
                          <span class="fnt-desc">
                            Type the virtual account number that we provide you
                            at the top.
                          </span>
                        </li>
                      </div>
                    </div>
                    <div class="card border-0 shadow-sm mt-4">
                      <div class="card-body px-4 py-4">
                        <li class="num-mark">
                          <span class="fnt-desc">
                            Type the amount of the money you want to top up.
                          </span>
                        </li>
                      </div>
                    </div>
                    <div class="card border-0 shadow-sm mt-4">
                      <div class="card-body px-4 py-4">
                        <li class="num-mark">
                          <span class="fnt-desc">
                            Read the summary details.
                          </span>
                        </li>
                      </div>
                    </div>
                    <div class="card border-0 shadow-sm mt-4">
                      <div class="card-body px-4 py-4">
                        <li class="num-mark">
                          <span class="fnt-desc">Press transfer / top up.</span>
                        </li>
                      </div>
                    </div>
                    <div class="card border-0 shadow-sm mt-4">
                      <div class="card-body px-4 py-4">
                        <li class="num-mark">
                          <span class="fnt-desc">
                            You can see your money in Zwallet within 3 hours.
                          </span>
                        </li>
                      </div>
                    </div>
                  </ol>
                </div>
              </>
            }
          />
        </Row>
      </Container>
      <FooterDashboard />
    </>
  );
}

export default TopUp;
