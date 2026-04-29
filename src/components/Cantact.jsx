
// ==================== CONTACT US ====================
const Contact = () => {
  return (
    <div className="container py-5">
      <h2 className="mb-4 text-center">Contact Us – Brando Vendor Support</h2>
      <p className="text-center mb-5">
        Need help with registration, managing residents, or updating your hostel details? Our support team is here for you.
      </p>

      <div className="row justify-content-center">
        <div className="col-md-6">
          <ul className="list-group">
            <li className="list-group-item">
              <strong>Email:</strong> support@brandovendor.com
            </li>
            <li className="list-group-item">
              <strong>Phone:</strong> +91 9573817475
            </li>
            <li className="list-group-item">
              <strong>Support Hours:</strong> Monday to Saturday (9:00 AM – 8:00 PM IST)
            </li>
            <li className="list-group-item">
              <strong>Office Address:</strong> Brando Technologies, Hyderabad, Telangana, India
            </li>
          </ul>
        </div>
      </div>

      <p className="text-center mt-4 text-muted">
        For urgent issues, use the "Help" or "Contact Support" option inside the Brando Vendor App after logging in.
      </p>
    </div>
  );
};

export default Contact; 