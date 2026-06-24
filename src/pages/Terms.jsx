import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import LegalLayout, { LegalSection, PlaceholderNote } from '../components/LegalLayout'

export default function Terms() {
  return (
    <PageWrapper>
      <LegalLayout eyebrow="Legal" title="Terms & Conditions" updated="25 June 2026">
        <LegalSection number="01" title="Acceptance of Terms">
          <p>
            By accessing, registering, or using VBA Connect, the official
            digital platform of Vanchit Bahujan Aaghadi (VBA), users agree to
            comply with these Terms & Conditions.
          </p>
          <p>
            These Terms govern the usage of VBA Connect, including the website,
            mobile application, and associated digital services.
          </p>
          <p>If users do not agree with these Terms & Conditions, they should discontinue using VBA Connect.</p>
        </LegalSection>

        <LegalSection number="02" title="Organization Details">
          <ul className="list-none space-y-1.5">
            <li><span className="font-semibold text-ink-900">Organization Name:</span> Vanchit Bahujan Aaghadi (VBA)</li>
            <li><span className="font-semibold text-ink-900">Platform Name:</span> VBA Connect</li>
            <li><span className="font-semibold text-ink-900">Organization Type:</span> Registered Political Party</li>
            <li><span className="font-semibold text-ink-900">Country:</span> India</li>
            <li>
              <span className="font-semibold text-ink-900">Registered Office Address:</span>{' '}
              <PlaceholderNote>Insert VBA Registered Address</PlaceholderNote>
            </li>
            <li><span className="font-semibold text-ink-900">Official Email:</span> support@vbaconnect.in</li>
            <li>
              <span className="font-semibold text-ink-900">Official Contact Number:</span>{' '}
              <PlaceholderNote>Insert Contact Number</PlaceholderNote>
            </li>
          </ul>
        </LegalSection>

        <LegalSection number="03" title="Use of VBA Connect">
          <p>VBA Connect is intended to provide digital services and support to party members, volunteers, supporters, and authorized users for party-related activities, including membership registration, communications, event updates, and organizational coordination.</p>
          <p>Users shall use VBA Connect in compliance with applicable laws, party policies, and these Terms & Conditions.</p>
        </LegalSection>

        <LegalSection number="04" title="Registration and Eligibility">
          <p>Users may only register one account with accurate and genuine information. Duplicate, unauthorized, or fraudulent accounts may be restricted, suspended, or removed.</p>
          <p>VBA reserves the right to verify user information and approve, reject, suspend, or terminate accounts based on organizational policies.</p>
        </LegalSection>

        <LegalSection number="05" title="Account Security">
          <p>Users are responsible for maintaining the confidentiality of their account credentials and for all activities performed through their account.</p>
          <p>Users agree to notify VBA Connect support immediately if they suspect unauthorized access or suspicious activity.</p>
        </LegalSection>

        <LegalSection number="06" title="Membership and Volunteer Participation">
          <p>Membership registration through VBA Connect is subject to VBA membership rules, internal verification procedures, and applicable laws.</p>
          <p>Membership or volunteer participation is not guaranteed until the relevant verification and approval process is complete.</p>
        </LegalSection>

        <LegalSection number="07" title="Donations and Payments">
          <p>Donations, contributions, and payments through VBA Connect are voluntary and must be made using authorized payment methods.</p>
          <p>Users must provide accurate payment information. Payment confirmation depends on successful transaction verification.</p>
          <p>Transaction records may be retained for verification, receipt generation, accounting, audit, and compliance purposes.</p>
          <p>Contributions shall comply with applicable laws and regulations governing political contributions in India.</p>
        </LegalSection>

        <LegalSection number="08" title="Refunds and Cancellations">
          <p>Refunds, if applicable, are subject to VBA’s official policies and any applicable laws.</p>
          <p>Transaction fees, payment gateway charges, or third-party processing fees may not be refundable.</p>
        </LegalSection>

        <LegalSection number="09" title="Communication Consent">
          <p>By registering on VBA Connect, users consent to receive official communications from VBA through phone calls, SMS, email, WhatsApp messages, and mobile application notifications.</p>
          <p>Communications may include membership updates, announcements, events, campaigns, and other party-related notices.</p>
        </LegalSection>

        <LegalSection number="10" title="User Conduct">
          <p>Users agree not to:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Submit incorrect or fraudulent information</li>
            <li>Create fake accounts</li>
            <li>Attempt unauthorized system access</li>
            <li>Copy or misuse member information</li>
            <li>Interfere with platform security</li>
            <li>Upload harmful or inappropriate content</li>
            <li>Use VBA Connect for unlawful activities</li>
          </ul>
          <p>Violation of these terms may result in restriction, suspension, or termination of access.</p>
        </LegalSection>

        <LegalSection number="11" title="Platform Availability">
          <p>VBA Connect aims to provide reliable digital services, but VBA does not guarantee continuous availability, uninterrupted operation, or error-free performance.</p>
          <p>Service access may be affected by maintenance, technical issues, security updates, or third-party interruptions.</p>
        </LegalSection>

        <LegalSection number="12" title="Third-Party Services">
          <p>VBA Connect may rely on external service providers such as cloud hosts, SMS/email providers, payment/banking service providers, and technology partners.</p>
          <p>Third-party services operate under their own terms and privacy policies.</p>
        </LegalSection>

        <LegalSection number="13" title="Intellectual Property">
          <p>All content, materials, software, graphics, design elements, and party-related assets on VBA Connect are owned by VBA or authorized licensors.</p>
          <p>Unauthorized copying, modification, distribution, or use of VBA Connect content is prohibited.</p>
        </LegalSection>

        <LegalSection number="14" title="Privacy and Data Protection">
          <p>User data collected through VBA Connect will be handled according to the{' '}
            <Link to="/privacy-policy" className="text-royal-600 font-medium underline-offset-2 hover:underline">
              VBA Connect Privacy Policy
            </Link>
            . Users should review the Privacy Policy to understand how their information is collected, processed, and protected.</p>
        </LegalSection>

        <LegalSection number="15" title="Limitation of Liability">
          <p>VBA is not responsible for:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Incorrect information submitted by users</li>
            <li>Unauthorized access resulting from user negligence</li>
            <li>Internet or network failures</li>
            <li>Device-related issues</li>
            <li>Third-party service interruptions</li>
            <li>Temporary service unavailability</li>
          </ul>
        </LegalSection>

        <LegalSection number="16" title="Changes to Terms">
          <p>VBA reserves the right to modify or update these Terms & Conditions whenever required. Updated Terms will be published on VBA Connect.</p>
          <p>Continued use of VBA Connect after updates indicates acceptance of the revised Terms.</p>
        </LegalSection>

        <LegalSection number="17" title="Governing Law and Jurisdiction">
          <p>These Terms & Conditions are governed by the applicable laws of India.</p>
          <p>Any disputes arising from the use of VBA Connect shall be subject to the jurisdiction of appropriate courts in India.</p>
        </LegalSection>

        <LegalSection number="18" title="Contact Information">
          <p className="font-semibold text-ink-900">Vanchit Bahujan Aaghadi (VBA)</p>
          <p>
            Registered Office: <PlaceholderNote>Insert Address</PlaceholderNote>
          </p>
          <p>Email: support@vbaconnect.in</p>
          <p>
            Phone: <PlaceholderNote>XXXXXXXXXX</PlaceholderNote>
          </p>
          <p className="mt-2">
            You can also reach us through our{' '}
            <Link to="/contact" className="text-royal-600 font-medium underline-offset-2 hover:underline">
              Contact page
            </Link>
            .
          </p>
        </LegalSection>
      </LegalLayout>
    </PageWrapper>
  )
}
