import styled from "styled-components";

export const IntroSection = () => {
  return (
    <StyledSectionContainer>
      <StyledSectionWrapper>
        <StyledLogoWrapper>
          <img src={`${process.env.PUBLIC_URL}/images/fds_logo.svg`} width={260} />
          <StyledLogoDescription>AI-based Fraud Detection System</StyledLogoDescription>
        </StyledLogoWrapper>
        <StyledDescWrapper>
          <StyledDescLeftAside>
            <img src={`${process.env.PUBLIC_URL}/images/intro_img.png`} />
          </StyledDescLeftAside>
          <StyledDescRightAside>
            <StyledTagWrapper>
              <StyledTag>VPN</StyledTag>
              <StyledTag>Proxy</StyledTag>
              <StyledTag>Tor </StyledTag>
              <StyledTag>Hosting</StyledTag>
            </StyledTagWrapper>
            <StyledTextWrapper>
              Criminal IP FDS is an AI-powered solution for dealing with payment fraud and threats of credential
              stuffing attacks. It is an on-premise product that works with CTI-based databases to protect your business
              by identifying bypass IP addresses such as VPN, Tor, Proxy, and Hosting.
              <br />
              <br />
              CTIDB is automatically updated every day to keep up to date and provide additional flags such as ASN to
              gain insight into malicious bypass IP address identification.
            </StyledTextWrapper>
            <StyledButtonWrapper>
              <StyledMoveToDemo href="#">Purchase Inquiries and Demo Requests</StyledMoveToDemo>
            </StyledButtonWrapper>
          </StyledDescRightAside>
        </StyledDescWrapper>
      </StyledSectionWrapper>
    </StyledSectionContainer>
  );
};

const StyledSectionContainer = styled.section`
  background: url(${process.env.PUBLIC_URL}/images/intro_bg.jpg) center;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledSectionWrapper = styled.div`
  max-width: 1200px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  padding-bottom: 60px;
  padding-top: 120px;
`;

const StyledLogoWrapper = styled.article`
  padding-bottom: 30px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 14px;
  width: 100%;
`;

const StyledLogoDescription = styled.p`
  font-size: 24px;
  font-weight: 600;
  line-height: 54px;
  color: #f5fff9;
`;

const StyledDescWrapper = styled.article`
  display: flex;
  gap: 70px;
  align-self: stretch;
  align-items: center;
`;

const StyledDescLeftAside = styled.aside``;

const StyledDescRightAside = styled.aside`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

const StyledTagWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
`;

const StyledTag = styled.span`
  display: inline-block;
  padding: 6px 12px;
  border: 1px solid #ec3636;
  border-radius: 20px;
  color: #ec3636;
  box-shadow: 0px 3px 8px 0px rgba(0, 0, 0, 0.5);
  font-size: 16px;
  font-weight: 400;
`;

const StyledTextWrapper = styled.p`
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
  color: #f5fff9;
`;

const StyledButtonWrapper = styled.div``;

const StyledMoveToDemo = styled.a`
  display: inline-block;
  padding: 18px 28px;
  font-size: 16px;
  line-height: 26px;
  font-weight: 700;
  color: #020f07;
  background-color: #36ec7f;
  border-radius: 8px;
`;
