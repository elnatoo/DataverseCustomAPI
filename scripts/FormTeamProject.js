/*
* This function is called when the form is loaded. It adds an event handler to the 'sample_projectstart' attribute to handle changes to its value.
*/
function handleTeamProjectOnLoad(executionContext) {
    var formContext = executionContext.getFormContext();
    // 'sample_projectstart' can be any attribute on the form that you want to use to determine whether to show or hide the section
    // In this case, it's the start date of the template project
    formContext.getAttribute('sample_projectstart').addOnChange(handleProjectStatusOnChange);
    hideOrShowStatusSection(formContext);
}

/* 
* This function is called when the 'sample_projectstart' attribute changes. It checks the value of the attribute and shows or hides the 'section_status' section accordingly.
*/
function handleProjectStatusOnChange(executionContext) {
    var formContext = executionContext.getFormContext();
    hideOrShowStatusSection(formContext);
}

/* 
* This function is called to hide or show the 'section_status' section based on the value of the 'sample_projectstart' attribute.
*/
function hideOrShowStatusSection(formContext) {
    var tabGeneral = formContext.ui.tabs.get('tab_general');
    var sectionStatus = tabGeneral.sections.get('section_status');
    var startDate = formContext.getAttribute('sample_projectstart').getValue();
    var CurrentDate = new Date();
    if (startDate == null || startDate > CurrentDate) {
        sectionStatus.setVisible(false);
    } else {
        sectionStatus.setVisible(true);
    }
}