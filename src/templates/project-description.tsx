import React from "react"

import Layout from "../components/layout"
import TopPageBanner from "../components/top-banner/top-banner"
import ProjectsDetails from "../components/project-tech-info/project-tech-info"
import ProjectGallery from "../components/project-gallery/project-gallery"
import FeedbackForm from "../components/feedback-form/feedback-form"

import {
  findByInternalName,
  ComponentInternalName,
} from "../components/component-internal-name"
import { filterPageLocale, Locale } from "../components/locale-provider"

const locale = Locale.Ua

export default ({ pageContext: { page, allLocales } }) => {
  // const localizedPage = filterPageLocale(page, locale)
  // const localizedPage = page

  const projectTopBanner = findByInternalName(
    page,
    ComponentInternalName.ProjectTechTopBanner
  )
  const projectDetails = findByInternalName(
    page,
    ComponentInternalName.ProjectTechDetails
  )
  const projectGallery = findByInternalName(
    page,
    ComponentInternalName.ProjectGallery
  )
  const plpFeedbackForm = findByInternalName(
    page,
    ComponentInternalName.FeedbackForm
  )

  return (
    <Layout  allLocales={allLocales} currentLocale={page.node_locale}>
      <TopPageBanner {...projectTopBanner} />
      <ProjectsDetails {...projectDetails} />
      <ProjectGallery component={projectGallery}/>
      <FeedbackForm {...plpFeedbackForm} />
    </Layout>
  )
}
