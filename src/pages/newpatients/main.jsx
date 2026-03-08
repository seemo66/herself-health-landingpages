import React from 'react'
import ReactDOM from 'react-dom/client'
import '../../styles/globals.css'
import SharedLandingPage from '../shared/SharedLandingPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SharedLandingPage
      excludeSections={['GuideSection']}
      formConfig={{
        formName: 'newpatients',
        formId: 'newpatients-form',
        pageType: 'newpatients_landing',
        pageLeadSourceFallback: 'New Patients',
        formTitle: 'newpatients',
        formSource: 'newpatients',
        pageCampaignId: '',
      }}
    />
  </React.StrictMode>
)
