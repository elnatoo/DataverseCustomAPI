// Function to handle the form load event for the originating challenge field in the Idea form
function handleIdeaOnLoad(executionContext) {
    var formContext = executionContext.getFormContext();
    formContext.getAttribute('sample_originatingchallengeid').addOnChange(handleChallengeOnChange);
    setRequiredFields(formContext);
}

// Function to handle changes to the originating challenge field in the form
function handleChallengeOnChange(executionContext) {
    var formContext = executionContext.getFormContext();
    setRequiredFields(formContext);
}

// Function to set required fields on the form
function setRequiredFields(formContext) {
    // Get the challenge lookup value
    var challenge = formContext.getAttribute('sample_originatingchallengeid').getValue();

    if (challenge != null) {
        // Get the ID of the related challenge if the challenge isn't null
        var challengeId = challenge[0].id;

        // Retrieve the challenge row using WebAPI and select only the two columns you're interested in InvestmentRequired and ROIRequired
        Xrm.WebApi.retrieveRecord("sample_challenge", challengeId, "?$select=crc4b_investmentrequired,crc4b_roirequired").then(
            function success(result) {
                // Set the required level of the fields based on the retrieved values
                formContext.getAttribute("sample_investmentrequired").setRequiredLevel(result.crc4b_investmentrequired ? 'required' : 'none');
                formContext.getAttribute("sample_timetoroimonths").setRequiredLevel(result.crc4b_roirequired ? 'required' : 'none');
            },
            function (error) {
                console.log(error.message);
            }
        );
    }
    else {
        // Make the columns not required if the challenge is null
        formContext.getAttribute("sample_investmentrequired").setRequiredLevel('none');
        formContext.getAttribute("sample_timetoroimonths").setRequiredLevel('none');
    }
}