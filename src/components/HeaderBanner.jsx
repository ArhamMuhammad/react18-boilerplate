import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const HeaderBannerWrapper = styled.div`
    background-image: url('/HeaderImage.jpg');
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    height: 250px; /* Adjust as necessary */
    width: 100%;
    padding: 1rem;
    color: white; /* Optional: text color */
`;

const HeaderBanner = ({ children }) => (
    <HeaderBannerWrapper>{children}</HeaderBannerWrapper>
);

HeaderBanner.propTypes = {
    children: PropTypes.node.isRequired,
};

export default HeaderBanner;
