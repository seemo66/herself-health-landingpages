import React from 'react'
import ReactDOM from 'react-dom/client'
import '../../styles/globals.css'
import SharedLandingPage from '../shared/SharedLandingPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SharedLandingPage
      formConfig={{
        formName: 'guide',
        formId: 'guide-form',
        pageType: 'guide_landing',
        pageLeadSourceFallback: 'Guide',
        formTitle: 'guide',
        formSource: 'guide',
        pageCampaignId: '',
      }}
    />
  </React.StrictMode>
)
