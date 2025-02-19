describe("Get Pet By ID", () => {
    var status = "available";
    var petID = 1;
    it("Get Pet By ID", () => {

        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/pet/' + petID,
            headers: {
                accept: 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body.id).to.eq(petID)
        })
    })

    it("Get Pet By Status", () => {

        cy.request({
            method: 'GET',
            url: 'https://petstore.swagger.io/v2/pet/findByStatus?status=' + status,
            headers: {
                accept: 'application/json'
            }
        }).then((response) => {
            let statusData = response.body;
            expect(response.status).to.eq(200)
            expect(statusData.id).not.null
            expect(statusData[0].status).to.eq(status)
        })
    })
});