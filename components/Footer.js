import { Fragment } from 'react';
import { FaCopyright } from 'react-icons/fa';

export default function Footer() {
  return (
    <Fragment>
      <footer className="bg-gray-100 py-6 mt-4 text-center text-secondary">
        <div className="flex items-center justify-center gap-2">
          <FaCopyright />
          <span>2025 MyPortfolio. All rights reserved.</span>
        </div>
      </footer>
    </Fragment>
  );
}
