import React from 'react'
import ReactDOM from 'react-dom/client'
import '../../styles/globals.css'
import SharedLandingPage from '../shared/SharedLandingPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SharedLandingPage
      excludeSections={['GuideSection']}
      formConfig={{
        formName: 'tv',
        formId: 'tv-form',
        pageType: 'tv_landing',
        pageLeadSourceFallback: 'Television',
        formTitle: 'tv',
        formSource: 'tv',
        pageCampaignId: '',
      }}
    />
  </React.StrictMode>
)
