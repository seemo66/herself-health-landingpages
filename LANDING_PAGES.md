# Landing Page Inventory

## At a glance

- This repo currently builds 11 landing page routes for https://herself-health.com.
- Those 11 routes are implemented with 5 distinct page templates:
  1. SharedLandingPage
  2. Medicare
  3. Member
  4. Membership
  5. Midi
- The source of truth for deployed landing page routes is `scripts/build.js`.
- `index.html` and `src/pages/home/main.jsx` define a home page, but the current build script does not include it in the production landing page build.

## Built routes

| Route | Full URL | Template | Phone numbers shown on page | Form / tracking metadata | Notes |
| --- | --- | --- | --- | --- | --- |
| `aha` | https://herself-health.com/aha/ | SharedLandingPage | (877) 538-4554 | `form_name=aha`, `form_id=aha-form`, `page_type=aha_landing`, `page_lead_source_fallback=Aha`, `form_source=aha` | Shared template variant. Excludes `GuideSection`. |
| `care` | https://herself-health.com/care/ | SharedLandingPage | `844-55-HERSELF` and `(844) 554-3773` | `form_name=care`, `form_id=care-form`, `page_type=care_landing`, `page_lead_source_fallback=Care`, `form_source=care` | Shared template variant. Excludes `GuideSection`. Uses a vanity header number plus numeric subtitle. |
| `directmail` | https://herself-health.com/directmail/ | SharedLandingPage | (888) 290-1209 | `form_name=directmail`, `form_id=directmail-form`, `page_type=directmail_landing`, `page_lead_source_fallback=Direct Mail`, `form_source=directmail` | Shared template variant. Excludes `GuideSection`. |
| `email` | https://herself-health.com/email/ | SharedLandingPage | (888) 290-1209 | `form_name=email`, `form_id=email-form`, `page_type=email_landing`, `page_lead_source_fallback=Email`, `form_source=email` | Shared template variant. Excludes `GuideSection`. |
| `guide` | https://herself-health.com/guide/ | SharedLandingPage | (888) 290-1209 | `form_name=guide`, `form_id=guide-form`, `page_type=guide_landing`, `page_lead_source_fallback=Guide`, `form_source=guide` | Shared template variant. Excludes `GuideSection`. |
| `newpatients` | https://herself-health.com/newpatients/ | SharedLandingPage | (888) 290-1209 | `form_name=newpatients`, `form_id=newpatients-form`, `page_type=newpatients_landing`, `page_lead_source_fallback=New Patients`, `form_source=newpatients` | Shared template variant. Excludes `GuideSection`. |
| `tv` | https://herself-health.com/tv/ | SharedLandingPage | (888) 290-1209 | `form_name=tv`, `form_id=tv-form`, `page_type=tv_landing`, `page_lead_source_fallback=Television`, `form_source=tv` | Shared template variant. Excludes `GuideSection`. |
| `medicare` | https://herself-health.com/medicare/ | Medicare | Primary page number: (877) 487-4554. Post-submit success state also shows (888) 290-1209. | `form_name=medicare`, `form_id=medicare-form`, `page_type=medicare_landing`, `page_lead_source_fallback=medicare`, `form_source=medicare` | Reuses shared hero/highlights/services patterns, but has a Medicare-specific waiting list section and compliance disclaimer. |
| `member` | https://herself-health.com/member/ | Member | 888-290-1209 | `form_name=member`, `form_id=member-form`, `page_type=member_landing`, `page_lead_source=Membership`, `form_source=member` | Dedicated member experience. Uses the shared header default phone number rather than overriding it locally. |
| `membership` | https://herself-health.com/membership/ | Membership | 888-290-1209 | `form_name=membership`, `form_id=membership-form`, `page_type=membership_landing`, `page_lead_source=Membership_long`, `form_source=membership` | Dedicated membership page. The same number is reused in the header and membership sales sections like pricing, next steps, and FAQ. |
| `midi` | https://herself-health.com/midi/ | Midi | (877) 523-4554 | `form_name=midi`, `form_id=midi-form`, `page_type=midi_landing`, `page_lead_source=Midi_long`, `form_source=midi` | Uses the same overall page structure as `membership`, but overrides the phone number and form metadata for the MIDI campaign. |

## Template families

### 1. SharedLandingPage

Routes using this template:

- `aha`
- `care`
- `directmail`
- `email`
- `guide`
- `newpatients`
- `tv`

Current section stack:

- Shared header
- HeroSection
- HeroHighlightsBar
- ServicesSection
- MembershipSection
- InsuranceSection
- WaitingListSection
- Shared footer

All current shared-template routes explicitly exclude `GuideSection`.

### 2. Medicare

Route using this template:

- `medicare`

This page keeps the shared header, hero, and supporting sections, but swaps in Medicare-specific services and waiting list content.

### 3. Member

Route using this template:

- `member`

This page has its own section order and copy set:

- Member HeroSection
- ServicesSectionOne
- ServicesSectionTwo
- GuideSection
- InPracticeSection
- Member WaitingListSection

### 4. Membership

Route using this template:

- `membership`

This is the long-form membership sales page with pricing, comparison, FAQ, testimonials, and membership advisor form sections.

### 5. Midi

Route using this template:

- `midi`

This is effectively the membership template with MIDI-specific phone numbers and form metadata.

## Unique phone numbers across deployed pages

- (888) 290-1209
- (877) 538-4554
- 844-55-HERSELF / (844) 554-3773
- (877) 487-4554
- (877) 523-4554

## Other useful notes

- All landing page forms submit to `/api/contact`.
- Form tracking pulls UTM values from `sessionStorage` first, then falls back to URL query params.
- The build copies each page's compiled JS/CSS into `dist/compiled/` after building per-route outputs.
- There is a root home page in the repo, but it is not listed in the current landing page build matrix.
