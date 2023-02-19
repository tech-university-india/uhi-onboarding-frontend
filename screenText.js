const screenText = {
  login: {
    phoneDialogTitle: 'Looks like there are more than one account linked with this mobile number. Please select the account you want'

  },

  about: {
    doctors: {
      header: 'DOCTORS',
      info: 'The ABDM has built verified registries for healthcare facilities and professionals who are given unique and trustable identity, which can facilitate ease of discovery and better access to care. Health professionals will have access to patient\'s longitudinal health history with their consent and can ensure follow-ups and plan treatment using telehealth solutions under the Unified Health Interface (UHI), ensuring quality and affordable health services. The building blocks of ABHA and the key registries - Health Professionals Registry (HPR), Health Facility Registry (HFR), and UHI, are built on a robust layer of Digital Public Goods like Aadhaar and UPI which introduces reliability and transparency to the system.'
    },
    citizens: {
      header: 'CITIZENS',
      info: 'Citizens would be able to create an ABHA number using our interface that would act as the starting point in their journey with ABDM. ABHA allows a person to link all their digital health records and share these records seamlessly with hospitals and doctors during a consultation. The ABHA number allows individuals to use any public or private health locker application for downloading their personal health records for easier viewing and personal assessment. Through our application integrated with ABDM, citizens will be able to digitally access healthcare services like booking and availing appointments, searching for nearest hospitals and more.'
    },
    general: {
      header: 'Unified Health Interface (UHI)',
      info: 'UHI is envisioned as an open protocol for various digital health services. UHI Network will be an open network of End User Applications (EUAs) and participating Health Service Provider (HSP) applications. UHI will enable a wide variety of digital health services between patients and health service providers (HSPs) including appointment booking, teleconsultation, service discovery and others.'
    }
  },
  footer: [
    {
      title: 'Important Links',
      elements: [
        { value: 'Health Facility Registry' },
        { value: 'Health Professionals Registry' }
      ]
    },
    {
      title: 'Policies',
      elements: [
        { value: 'Data Privacy' },
        { value: 'Policy Terms and Conditions' }
      ]
    },
    {
      title: 'Patient Locker',
      elements: [
        {
          custom: true,
          value: 'qr'

        }
      ]
    }
  ]
}

export default screenText
