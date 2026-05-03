import React from 'react'
import ReactDOM from 'react-dom/client'
import '../../styles/globals.css'
import SharedLandingPage from '../shared/SharedLandingPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SharedLandingPage
      excludeSections={['GuideSection']}
      phone="(877) 538-4554"
      phoneHref="tel:18775384554"
      formConfig={{
        formName: 'aha',
        formId: 'aha-form',
        pageType: 'aha_landing',
        pageLeadSourceFallback: 'Aha',
        formTitle: 'aha',
        formSource: 'aha',
        pageCampaignId: '',
      }}
    />
  </React.StrictMode>
)
