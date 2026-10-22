function getNameFromContext(executionContext) {
    var formContext = executionContext.getFormContext();
    var firstName = formContext.getAttribute("firstname").getValue();
    var lastName = formContext.getAttribute("lastname").getValue();

    return firstName + " " + lastName;
}