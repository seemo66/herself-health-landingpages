import React from 'react'
import ReactDOM from 'react-dom/client'
import '../../styles/globals.css'
import SharedLandingPage from '../shared/SharedLandingPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SharedLandingPage
      formConfig={{
        formName: 'email',
        formId: 'email-form',
        pageType: 'email_landing',
        pageLeadSourceFallback: 'Email',
        formTitle: 'Email',
        formSource: 'email',
        pageCampaignId: '',
      }}
    />
  </React.StrictMode>
)
