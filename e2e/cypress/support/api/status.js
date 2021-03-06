// Copyright (c) 2015-present Mattermost, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

// *****************************************************************************
// Status
// https://api.mattermost.com/#tag/status
// *****************************************************************************

Cypress.Commands.add('apiUpdateUserStatus', (status = 'online') => {
    return cy.getCookie('MMUSERID').then((cookie) => {
        const data = {user_id: cookie.value, status};

        return cy.request({
            headers: {'X-Requested-With': 'XMLHttpRequest'},
            url: '/api/v4/users/me/status',
            method: 'PUT',
            body: data,
        }).then((response) => {
            expect(response.status).to.equal(200);
            cy.wrap({status: response.body});
        });
    });
});
