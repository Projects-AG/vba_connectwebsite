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
            "Party", "we", "our", or "us") collects, uses, stores, protects,
            and manages information provided through VBA Connect, including
            the website, mobile application, and associated digital services.
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
              <PlaceholderNote>Address to be added</PlaceholderNote>
            </li>
            <li><span className="font-semibold text-ink-900">Official Email:</span> support@vbaconnect.in</li>
            <li>
              <span className="font-semibold text-ink-900">Official Contact:</span>{' '}
              <PlaceholderNote>Phone number to be added</PlaceholderNote>
            </li>
          </ul>
        </LegalSection>

        <LegalSection number="03" title="Information We Collect">
          <p>VBA Connect may collect the following information:</p>

          <p className="font-semibold text-ink-900 mt-4">Personal Information</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Full name, mobile number, email address</li>
            <li>Date of birth / age, gender, address</li>
            <li>State, district, taluka, and constituency details</li>
            <li>Membership and volunteer information</li>
          </ul>

          <p className="font-semibold text-ink-900 mt-4">Account Information</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Login credentials, user role, access permissions</li>
            <li>Account activity details</li>
          </ul>

          <p className="font-semibold text-ink-900 mt-4">Verification Information</p>
          <p>Where required: identity verification details, membership verification records, registration information.</p>

          <p className="font-semibold text-ink-900 mt-4">Payment & Contribution Information</p>
          <p>For membership fees, donations, or contributions: payment amount, transaction reference number, payment date & time, payment confirmation status, and receipt details.</p>

          <p className="mt-4">VBA Connect does <span className="font-semibold text-ink-900">not</span> collect or store UPI PINs, banking passwords, card PINs, or internet banking credentials.</p>
        </LegalSection>

        <LegalSection number="04" title="Purpose of Data Collection">
          <p>Information collected through VBA Connect may be used for:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Member registration, management, and verification</li>
            <li>Maintaining organizational records and volunteer coordination</li>
            <li>Communication with members and sending important party updates</li>
            <li>Event and activity coordination</li>
            <li>Payment and donation confirmation</li>
            <li>Internal administration and security monitoring</li>
            <li>Legal and regulatory compliance</li>
          </ul>
        </LegalSection>

        <LegalSection number="05" title="Payment & Contribution Data">
          <p>
            Payments made through VBA Connect are processed through
            authorized banking and payment systems. Payment records may be
            maintained for transaction verification, receipt generation,
            accounting purposes, audit requirements, and compliance with
            applicable laws.
          </p>
          <p>
            Financial contributions are subject to applicable rules and
            regulations governing political contributions in India.
          </p>
        </LegalSection>

        <LegalSection number="06" title="Data Sharing Policy">
          <p>VBA does not sell, rent, or commercially distribute user information.</p>
          <p>Information may only be shared with:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Authorized VBA administrators</li>
            <li>Approved technology service providers</li>
            <li>Payment / banking service providers</li>
            <li>Government or legal authorities, where required by law</li>
          </ul>
        </LegalSection>

        <LegalSection number="07" title="Data Security">
          <p>VBA Connect follows reasonable security practices including secure authentication, access control, database protection, technical monitoring, and ongoing security improvements.</p>
          <p>Users are advised to keep their account credentials confidential.</p>
        </LegalSection>

        <LegalSection number="08" title="Communication Consent">
          <p>By registering on VBA Connect, users agree to receive communication through phone calls, SMS, email, WhatsApp messages, and mobile notifications, for official party activities, membership updates, and organizational communication.</p>
        </LegalSection>

        <LegalSection number="09" title="User Rights">
          <p>Users may request correction of inaccurate information, updates to personal details, or account-related assistance through official VBA communication channels.</p>
        </LegalSection>

        <LegalSection number="10" title="Data Retention">
          <p>User information may be retained as required for membership records, administrative purposes, legal obligations, and security requirements.</p>
        </LegalSection>

        <LegalSection number="11" title="Changes to Privacy Policy">
          <p>VBA may update this Privacy Policy whenever necessary. Updated policies will be published on VBA Connect. Continued use of VBA Connect indicates acceptance of updated policies.</p>
        </LegalSection>

        <LegalSection number="12" title="Contact Information">
          <p className="font-semibold text-ink-900">Vanchit Bahujan Aaghadi (VBA)</p>
          <p>
            Registered Office: <PlaceholderNote>Address to be added</PlaceholderNote>
          </p>
          <p>Email: support@vbaconnect.in</p>
          <p>
            Contact: <PlaceholderNote>Phone number to be added</PlaceholderNote>
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
