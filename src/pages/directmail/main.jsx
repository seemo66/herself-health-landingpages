import React from 'react'
import ReactDOM from 'react-dom/client'
import '../../styles/globals.css'
import SharedLandingPage from '../shared/SharedLandingPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SharedLandingPage
      formConfig={{
        formName: 'directmail',
        formId: 'directmail-form',
        pageType: 'directmail_landing',
        pageLeadSourceFallback: 'Direct Mail',
        formTitle: 'directmail',
        formSource: 'directmail',
        pageCampaignId: '',
      }}
    />
  </React.StrictMode>
)
