export default function Footer() {
  return (
    <>
      <footer className="text-black flex flex-col md:flex-row bg-gray-50 justify-evenly items-center pt-8 pb-10 mt-5 text-center md:text-left">
        <div>
          <h4 className="font-bold">SchoolPortal</h4>
          <p>&copy; 2024 School Portal. All Rights Reserved.</p>
        </div>
        <div>
          <h4 className="font-bold">Quick Links</h4>
          <p>About | Contact | Privacy Policy | Terms of Service</p>
        </div>
        <div>
          <h4 className="font-bold">Contact Us</h4>
          <p>support@schoolportal.com | +91 1234567890</p>
        </div>
      </footer>
    </>
  );
}
