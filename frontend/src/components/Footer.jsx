export default function Footer() {
  return (
    <footer className="mt-5">
      <div className="max-w-3xl py-3">
        {/* Copyright */}
        <p className="text-sm">
          © {new Date().getFullYear()} MenuMentor.  Created by Dang Khoa Nguyen. All rights reserved.
        </p>
      </div>
    </footer>
  );
}