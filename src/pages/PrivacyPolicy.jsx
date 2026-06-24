import { Link } from 'react-router-dom'
import PageWrapper from '../components/PageWrapper'
import LegalLayout, { LegalSection, PlaceholderNote } from '../components/LegalLayout'

export default function PrivacyPolicy() {
  return (
    <PageWrapper>
      <LegalLayout eyebrow="Legal" title="Privacy Policy" updated="25 June 2026">
        <LegalSection number="01" title="Introduction">
          <p>
            Welcome to VBA Connect, the official digital platform of Vanchit
            Bahujan Aaghadi (VBA). VBA Connect is developed to provide digital
            services for party members, volunteers, supporters, and authorized
            users for membership management, communication, organizational
            activities, digital engagement, and related services.
          </p>
          <p>
            This Privacy Policy explains how Vanchit Bahujan Aaghadi ("VBA",
            "Party", "we", "our", or "us") collects, uses, stores,
            protects, and manages information provided through VBA Connect,
            including the website, mobile application, and associated digital
            services.
          </p>
          <p>By registering or using VBA Connect, you agree to this Privacy Policy.</p>
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
              <span className="font-semibold text-ink-900">Official Contact:</span>{' '}
              <PlaceholderNote>Insert Contact Number</PlaceholderNote>
            </li>
          </ul>
        </LegalSection>

        <LegalSection number="03" title="Information We Collect">
          <p>VBA Connect may collect the following information:</p>

          <p className="font-semibold text-ink-900 mt-4">Personal Information</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Full Name</li>
            <li>Mobile Number</li>
            <li>Email Address</li>
            <li>Date of Birth / Age</li>
            <li>Gender</li>
            <li>Address</li>
            <li>State, District, Taluka, Constituency Details</li>
            <li>Membership Information</li>
            <li>Volunteer Information</li>
          </ul>

          <p className="font-semibold text-ink-900 mt-4">Account Information</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Login credentials</li>
            <li>User role</li>
            <li>Access permissions</li>
            <li>Account activity details</li>
          </ul>

          <p className="font-semibold text-ink-900 mt-4">Verification Information</p>
          <p>Where required: identity verification details, membership verification records, registration information.</p>

          <p className="font-semibold text-ink-900 mt-4">Payment & Contribution Information</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Payment Amount</li>
            <li>Transaction Reference Number</li>
            <li>Payment Date &amp; Time</li>
            <li>Payment Confirmation Status</li>
            <li>Receipt Details</li>
          </ul>

          <p className="mt-4">VBA Connect does not collect or store UPI PIN, banking passwords, card PIN, or internet banking credentials.</p>
        </LegalSection>

        <LegalSection number="04" title="Purpose of Data Collection">
          <p>Information collected through VBA Connect may be used for:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Member registration and management</li>
            <li>Membership verification</li>
            <li>Maintaining organizational records</li>
            <li>Volunteer coordination</li>
            <li>Communication with members</li>
            <li>Sending important party updates</li>
            <li>Event and activity coordination</li>
            <li>Payment and donation confirmation</li>
            <li>Internal administration</li>
            <li>Security monitoring</li>
            <li>Legal and regulatory compliance</li>
          </ul>
        </LegalSection>

        <LegalSection number="05" title="Payment & Contribution Data">
          <p>
            Payments made through VBA Connect are processed through authorized
            banking/payment systems.
          </p>
          <p>Payment records may be maintained for:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Transaction verification</li>
            <li>Receipt generation</li>
            <li>Accounting purposes</li>
            <li>Audit requirements</li>
            <li>Compliance with applicable laws</li>
          </ul>
          <p>Financial contributions shall be subject to applicable rules and regulations governing political contributions in India.</p>
        </LegalSection>

        <LegalSection number="06" title="Data Sharing Policy">
          <p>VBA does not sell, rent, or commercially distribute user information.</p>
          <p>Information may only be shared with:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Authorized VBA administrators</li>
            <li>Approved technology service providers</li>
            <li>Payment/banking service providers</li>
            <li>Government or legal authorities where required by law</li>
          </ul>
        </LegalSection>

        <LegalSection number="07" title="Data Security">
          <p>VBA Connect follows reasonable security practices including secure authentication, access control, database protection, technical monitoring, and security improvements.</p>
          <p>Users are advised to keep account credentials confidential.</p>
        </LegalSection>

        <LegalSection number="08" title="Communication Consent">
          <p>By registering on VBA Connect, users agree to receive communication through:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Phone Calls</li>
            <li>SMS</li>
            <li>Email</li>
            <li>WhatsApp Messages</li>
            <li>Mobile Notifications</li>
          </ul>
          <p>for official party activities, membership updates, and organizational communication.</p>
        </LegalSection>

        <LegalSection number="09" title="User Rights">
          <p>Users may request:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Correction of inaccurate information</li>
            <li>Update of personal details</li>
            <li>Account-related assistance</li>
          </ul>
          <p>Requests may be made through official VBA communication channels.</p>
        </LegalSection>

        <LegalSection number="10" title="Data Retention">
          <p>User information may be retained as required for:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Membership records</li>
            <li>Administrative purposes</li>
            <li>Legal obligations</li>
            <li>Security requirements</li>
          </ul>
        </LegalSection>

        <LegalSection number="11" title="Changes to Privacy Policy">
          <p>VBA may update this Privacy Policy whenever necessary. Updated policies will be published on VBA Connect. Continued use of VBA Connect indicates acceptance of updated policies.</p>
        </LegalSection>

        <LegalSection number="12" title="Contact Information">
          <p className="font-semibold text-ink-900">Vanchit Bahujan Aaghadi (VBA)</p>
          <p>
            Registered Office: <PlaceholderNote>Insert Address</PlaceholderNote>
          </p>
          <p>Email: support@vbaconnect.in</p>
          <p>
            Contact: <PlaceholderNote>XXXXXXXXXX</PlaceholderNote>
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
