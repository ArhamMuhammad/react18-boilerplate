import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const NotificationWrapper = styled.div`
    padding: 16px;
    margin: 16px 0;
    border-radius: 4px;
    position: relative;
    color: #fff;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${(props) => {
        switch (props.type) {
            case 'success':
                return props.theme.colors.success;
            case 'error':
                return props.theme.colors.error;
            case 'warning':
                return props.theme.colors.warning;
            default:
                return '#333';
        }
    }};
`;

const Message = styled.span`
    flex-grow: 1;
`;

const CloseButton = styled.button`
    background: none;
    border: none;
    color: #fff;
    font-size: 16px;
    cursor: pointer;
    padding: 0;
    margin-left: 16px;
`;

const Notification = ({ message = '', type = 'info', onClose }) => {
    if (!message) return null;

    return (
        <NotificationWrapper type={type} data-testid="notification-wrapper">
            <Message>{message}</Message>
            <CloseButton onClick={onClose}>&times;</CloseButton>
        </NotificationWrapper>
    );
};

Notification.propTypes = {
    message: PropTypes.string,
    type: PropTypes.oneOf(['info', 'success', 'error', 'warning']),
    onClose: PropTypes.func.isRequired,
};

export default Notification;
