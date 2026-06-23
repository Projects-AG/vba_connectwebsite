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
            These Terms govern the usage of VBA Connect including the
            website, mobile application, and associated digital services.
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
              <PlaceholderNote>Address to be added</PlaceholderNote>
            </li>
            <li><span className="font-semibold text-ink-900">Official Email:</span> support@vbaconnect.in</li>
            <li>
              <span className="font-semibold text-ink-900">Official Contact Number:</span>{' '}
              <PlaceholderNote>Phone number to be added</PlaceholderNote>
            </li>
          </ul>
        </LegalSection>

        <LegalSection number="03" title="About VBA Connect">
          <p>VBA Connect is a digital platform created to support party-related digital activities including:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Online membership registration and member profile management</li>
            <li>Membership verification and volunteer coordination</li>
            <li>Organizational communication and internal party communication</li>
            <li>Event and activity updates</li>
            <li>Digital engagement activities</li>
            <li>Donation and contribution facilities</li>
          </ul>
          <p>The platform is intended for authorized members, volunteers, supporters, and users associated with VBA activities.</p>
        </LegalSection>

        <LegalSection number="04" title="User Registration & Eligibility">
          <p>Users registering on VBA Connect agree that:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>All submitted information must be accurate and genuine</li>
            <li>False or misleading information is strictly prohibited</li>
            <li>Duplicate or unauthorized accounts may be restricted or removed</li>
            <li>Users are responsible for keeping their profile information updated</li>
          </ul>
          <p>VBA reserves the right to verify user information and approve, reject, suspend, or terminate accounts according to organizational policies.</p>
        </LegalSection>

        <LegalSection number="05" title="Account Security & Responsibility">
          <p>Users are responsible for:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Maintaining confidentiality of login credentials</li>
            <li>Protecting their account from unauthorized access</li>
            <li>Activities performed through their account</li>
            <li>Informing VBA Connect support regarding suspicious activity</li>
          </ul>
          <p>VBA shall not be responsible for loss caused due to negligence in maintaining account security.</p>
        </LegalSection>

        <LegalSection number="06" title="Membership Terms">
          <p>Membership registration through VBA Connect is subject to:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>VBA membership rules and guidelines</li>
            <li>Internal verification procedures</li>
            <li>Applicable laws and regulations</li>
          </ul>
          <p>Submission of membership details or payment does not automatically guarantee approval of membership. Final membership approval remains subject to VBA's verification and organizational procedures.</p>
        </LegalSection>

        <LegalSection number="07" title="Donations, Contributions & Payments">
          <p>Users acknowledge and agree that:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Donations and contributions are voluntary</li>
            <li>Users must provide accurate payment information</li>
            <li>Payments must be made using authorized payment methods only</li>
            <li>Payment confirmation depends upon successful transaction verification</li>
          </ul>
          <p>Transaction details may be stored for payment confirmation, receipt generation, accounting records, and audit and legal compliance.</p>
          <p>All contributions shall comply with applicable rules and regulations governing political contributions in India.</p>
        </LegalSection>

        <LegalSection number="08" title="Refund & Cancellation Policy">
          <p>Any refund request, where applicable, shall be processed according to VBA's official policies and applicable regulations.</p>
          <p>Transaction charges, payment gateway charges, or third-party processing fees may not be refundable where applicable.</p>
        </LegalSection>

        <LegalSection number="09" title="Communication Consent">
          <p>By registering on VBA Connect, users consent to receive official communication through phone calls, SMS, email, WhatsApp messages, and mobile application notifications.</p>
          <p>Communication may include membership updates, organizational announcements, events, campaigns, and important notices.</p>
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
          <p>Violation of these conditions may result in restriction, suspension, or termination of account access.</p>
        </LegalSection>

        <LegalSection number="11" title="Platform Availability">
          <p>VBA Connect aims to provide reliable digital services; however, VBA does not guarantee continuous availability, error-free operation, or uninterrupted services.</p>
          <p>Access may be temporarily affected due to maintenance activities, technical issues, security updates, or third-party service interruptions.</p>
        </LegalSection>

        <LegalSection number="12" title="Third-Party Services">
          <p>VBA Connect may use external service providers including cloud hosting providers, SMS/communication providers, email services, banking/payment service providers, and technology partners.</p>
          <p>Third-party services will operate according to their respective terms and policies.</p>
        </LegalSection>

        <LegalSection number="13" title="Intellectual Property Rights">
          <p>All content and materials related to VBA Connect including software, application design, website content, digital assets, graphics, documents, and party-related materials belong to VBA or authorized owners.</p>
          <p>Unauthorized copying, modification, distribution, or misuse is strictly prohibited.</p>
        </LegalSection>

        <LegalSection number="14" title="Privacy & Data Protection">
          <p>
            User data collected through VBA Connect will be handled according
            to the{' '}
            <Link to="/privacy-policy" className="text-royal-600 font-medium underline-offset-2 hover:underline">
              VBA Connect Privacy Policy
            </Link>
            . Users are advised to review the Privacy Policy to understand how their information is collected, processed, and protected.
          </p>
        </LegalSection>

        <LegalSection number="15" title="Limitation of Liability">
          <p>VBA shall not be responsible for:</p>
          <ul className="list-disc pl-5 space-y-1.5">
            <li>Incorrect information submitted by users</li>
            <li>Unauthorized access caused due to user negligence</li>
            <li>Internet or network failures</li>
            <li>Device-related issues</li>
            <li>Third-party service interruptions</li>
            <li>Temporary unavailability of services</li>
          </ul>
        </LegalSection>

        <LegalSection number="16" title="Modification of Terms">
          <p>VBA reserves the right to modify or update these Terms & Conditions whenever required. Updated Terms will be published on VBA Connect.</p>
          <p>Continued use of the platform after updates indicates acceptance of revised Terms.</p>
        </LegalSection>

        <LegalSection number="17" title="Governing Law & Jurisdiction">
          <p>These Terms & Conditions shall be governed by the applicable laws of India.</p>
          <p>Any disputes arising from the use of VBA Connect shall be subject to the jurisdiction of appropriate courts in India.</p>
        </LegalSection>

        <LegalSection number="18" title="Contact Information">
          <p className="font-semibold text-ink-900">Vanchit Bahujan Aaghadi (VBA)</p>
          <p>
            Registered Office: <PlaceholderNote>Address to be added</PlaceholderNote>
          </p>
          <p>Email: support@vbaconnect.in</p>
          <p>
            Phone: <PlaceholderNote>Phone number to be added</PlaceholderNote>
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
