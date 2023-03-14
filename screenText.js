/*
Screen Text Example:
 const screenText = {
   page1: {
     title: 'Page 1',
     info: 'Subtitle 1',
  }

}
*/

const screenText = {
  patientScreen: {
    header: 'Ayush',
    textFields: ['ABHA #:', 'HealthId:', 'Mobile:', 'Email:'],
    dropdown: [
      {
        title: 'Personal Details',
        fields: ['Name:', 'Gender:', 'Date Of Birth:']
      },
      {
        title: 'Address',
        fields: ['Street:', 'Area:', 'Pin Code:']
      }
    ]
  }
}

export default screenText
