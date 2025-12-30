<script setup lang="ts">
import {HeroSection} from "@/widgets/home/hero";
import {ProfessionSection} from "@/widgets/home/profession";
import {PerspectivesSection} from "@/widgets/home/perspectives";
import {CourseProgramSection} from "@/widgets/home/courses";
import {CertificateSection} from "@/widgets/home/certificate";
import {LearningProcessSection} from "@/widgets/home/learning";
import {CommunitySection} from "@/widgets/home/community";
import {CourseRegistrationSection} from "@/widgets/home/course-registration";
import { ResumeSection } from "@/widgets/home/resume";
import {CompaniesSection} from "@/widgets/home/companies";
import {InternshipSection} from "@/widgets/home/internship";
import {CostSection} from "@/widgets/home/cost";
import {FinanceSupportSection} from "@/widgets/home/finance-support";
import {OfferForCompaniesSection} from "@/widgets/home/offer-for-companies";
import {AboutSection} from "@/widgets/home/about";
import {QuestionsSection} from "@/widgets/home/questions";
import {FeedbackSection} from "@/widgets/home/feedback";
import {CookieBanner} from "@/features/cookie";
</script>

<template>
  <div>
    <HeroSection />
    <ProfessionSection />
    <PerspectivesSection />
    <CourseProgramSection />
    <CertificateSection />
    <LearningProcessSection />
    <CommunitySection />
    <CourseRegistrationSection />
    <ResumeSection />
    <CompaniesSection />
    <InternshipSection />
    <CostSection />
    <FinanceSupportSection />
    <OfferForCompaniesSection />
    <AboutSection />
    <CourseRegistrationSection :dark-theme="true"/>
    <QuestionsSection />
    <FeedbackSection />
    <CookieBanner />
  </div>
</template>

<style scoped></style>