import React from 'react'
import ReactDOM from 'react-dom/client'
import '../../styles/globals.css'
import SharedLandingPage from '../shared/SharedLandingPage'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <SharedLandingPage
      excludeSections={['GuideSection']}
      phone="844-55-HERSELF"
      phoneHref="tel:8445543773"
      phoneSubtitle="(844) 554-3773"
      formConfig={{
        formName: 'care',
        formId: 'care-form',
        pageType: 'care_landing',
        pageLeadSourceFallback: 'Care',
        formTitle: 'Care',
        formSource: 'care',
        pageCampaignId: '',
      }}
    />
  </React.StrictMode>
)
