// Filename: BrandoVendorPolicies.js
import React from "react";

// ==================== PRIVACY POLICY ====================
const PrivacyPolicy = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Privacy Policy – Brando Vendor</h2>
      <p>
        At Brando Vendor, we respect your privacy and are committed to protecting your personal and business information. This Privacy Policy explains how we collect, use, store, and safeguard your data when you register and use our platform as a hostel owner/vendor.
      </p>

      <h5 className="mt-4">1. Information We Collect</h5>
      <ul>
        <li><strong>Business Information:</strong> Hostel name, complete address, contact number</li>
        <li><strong>Owner Information:</strong> Full name, mobile number, email address</li>
        <li><strong>Hostel Media:</strong> Hostel images/photo uploads (for profile and listing)</li>
        <li><strong>User Management Data:</strong> Information about residents/students you manage within the app</li>
      </ul>

      <h5 className="mt-4">2. Use of Information</h5>
      <ul>
        <li>To create and manage your hostel profile on Brando Vendor</li>
        <li>To enable you to manage residents/students staying at your hostel</li>
        <li>To communicate important updates, notices, or support messages</li>
        <li>To improve app features and vendor experience</li>
        <li>To comply with legal or regulatory requirements</li>
      </ul>

      <h5 className="mt-4">3. Data Storage & Security</h5>
      <p>
        All data including personal details, hostel images, and resident records are encrypted in transit and at rest. Access to sensitive data is restricted to authorized personnel only. Hostel images are stored securely and displayed only as part of your public or internal listing (depending on app settings).
      </p>

      <h5 className="mt-4">4. Data Sharing</h5>
      <p>
        Your data is <strong>not sold or rented</strong> to third parties. We may share your information only:
        <ul>
          <li>With your consent (e.g., showing hostel details to potential residents)</li>
          <li>When required by law or government authorities</li>
          <li>With trusted service providers who assist in app operations (e.g., cloud storage)</li>
        </ul>
      </p>

      <h5 className="mt-4">5. Retention</h5>
      <p>
        Your data will be retained as long as your vendor account is active. If you close your account, we will delete or anonymize your data within a reasonable timeframe, unless legal retention obligations apply.
      </p>

      <h5 className="mt-4">6. Policy Updates</h5>
      <p>
        We may update this Privacy Policy periodically. Continued use of Brando Vendor constitutes your acceptance of any changes.
      </p>
    </div>
  );
};



// ==================== REGISTRATION POLICY (New) ====================
const RegistrationPolicy = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Registration Policy – Brando Vendor</h2>
      <p>
        This Registration Policy outlines the process and requirements for hostel owners to register on the Brando Vendor App.
      </p>

      <h5 className="mt-4">1. Eligibility</h5>
      <ul>
        <li>You must be at least 18 years of age.</li>
        <li>You must be a legal owner, authorized manager, or designated representative of the hostel.</li>
        <li>You must have a valid mobile number and email address for verification.</li>
      </ul>

      <h5 className="mt-4">2. Required Information</h5>
      <ul>
        <li><strong>Hostel Name:</strong> The official name of your hostel.</li>
        <li><strong>Mobile Number:</strong> For OTP verification and account recovery.</li>
        <li><strong>Email Address:</strong> For official communications and notifications.</li>
        <li><strong>Hostel Image:</strong> A clear, real photo of the hostel (front view or common area).</li>
      </ul>

      <h5 className="mt-4">3. Registration Process</h5>
      <ul>
        <li><strong>Step 1 – Mobile OTP:</strong> Enter your mobile number, receive an OTP, and verify.</li>
        <li><strong>Step 2 – Details Submission:</strong> Provide hostel name, email, and upload a hostel image.</li>
        <li><strong>Step 3 – Account Activation:</strong> Upon successful verification, your vendor account is activated.</li>
      </ul>

      <h5 className="mt-4">4. Verification</h5>
      <p>
        Brando Vendor reserves the right to verify the authenticity of your hostel details. False or fraudulent registrations may lead to immediate account deletion.
      </p>

      <h5 className="mt-4">5. Updates to Registration Info</h5>
      <p>
        You must keep your registration details (mobile, email, hostel name, image) up to date. You can update this information from your account settings.
      </p>

      <h5 className="mt-4">6. One Account Per Hostel</h5>
      <p>
        Each hostel can have only one active vendor account unless otherwise permitted by Brando Vendor.
      </p>
    </div>
  );
};


// ==================== EXPORT ALL ====================
export { PrivacyPolicy, TermsAndConditions, RegistrationPolicy, Contact };