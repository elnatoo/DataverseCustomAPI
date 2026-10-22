// Define a unique namespace for the sample library.
window.Example ??= {};

(() => {
    const notificationId = "_myUniqueId";
    const currentUserName = Xrm.Utility.getGlobalContext().userSettings.userName;
    const message = `${currentUserName}: JavaScript code is in action!`;

    // Code to run in the form OnLoad event
    window.Example.formOnLoad = (executionContext) => {
        const formContext = executionContext.getFormContext();

        // Display the form level notification as an INFO
        formContext.ui.setFormNotification(message, "INFO", notificationId);

        // Wait for 5 seconds before clearing the notification
        window.setTimeout(
            () => formContext.ui.clearFormNotification(notificationId),
            5000
        );
    };

    // Code to run in the column OnChange event
    window.Example.attributeOnChange = (executionContext) => {
        const formContext = executionContext.getFormContext();

        // Automatically set some column values if the account name contains "Contoso"
        const accountName = formContext.getAttribute("name").getValue();
        if (accountName?.toLowerCase().includes("contoso")) {
            formContext.getAttribute("websiteurl").setValue("https://github.com/elnatoo");
            formContext.getAttribute("telephone1").setValue("555-217-8661");
            formContext.getAttribute("description").setValue("Website URL, Phone Number, and Description set using custom script.");
        }
    };

    // Code to run in the form OnSave event
    window.Example.formOnSave = () => {
        // Display an alert dialog
        Xrm.Navigation.openAlertDialog({ text: "Record saved." });
    };
})();