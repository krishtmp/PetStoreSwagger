describe("Get Pet By Status", () => {
    //var status = "available";
    var petID = 1;

    it("Get Pet By Status", () => {
        cy.fixture("statusOptionsData.json").as("statusOptionsData");
        cy.get("@statusOptionsData").then((statusOptionsData) => {
            Object.values(statusOptionsData.status).forEach(status => {
                cy.request({
                    method: 'GET',
                    url: 'https://petstore.swagger.io/v2/pet/findByStatus?status=' + status,
                    headers: {
                        accept: 'application/json'
                    }
                }).then((response) => {
                    cy.log(`Response for status: ${status}`);
                    let statusData = response.body;
                    expect(response.status).to.eq(200)
                    expect(statusData.id).not.null
                    expect(statusData[0].status).to.eq(status)
                })
            })
        })
    })

    it("Get Pet By Status", () => {
        cy.fixture("statusOptions.json").as("statusOptions");
        cy.get("@statusOptions").then((statusOptionsData) => {
            (statusOptionsData.status).forEach(status => {
                cy.request({
                    method: 'GET',
                    url: 'https://petstore.swagger.io/v2/pet/findByStatus?status=' + status,
                    headers: {
                        accept: 'application/json'
                    }
                }).then((response) => {
                    cy.log(`Response for status: ${status}`);
                    let statusData = response.body;
                    expect(response.status).to.eq(200)
                    expect(statusData.id).not.null
                    expect(statusData[0].status).to.eq(status)
                })
            })
        })
    })
});