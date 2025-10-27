import { Fragment } from 'react';
import Link from 'next/link';
import { FaArrowRight, FaUser } from 'react-icons/fa';

export default function HomePage() {
  return (
    <Fragment>
      <div className="text-center space-y-6 p-8">
        <h1 className="text-4xl font-bold text-primary">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg text-secondary max-w-2xl mx-auto">
          Hi! I'm{' '}
          <span className="font-semibold text-primary">Nency Ajudiya</span>, a
          passionate <span className="font-semibold">MERN Stack Developer</span>{' '}
          from India. I love building clean, responsive, and modern web
          applications using
          <span className="font-medium">
            {' '}
            React.js, Node.js, Express.js,
          </span>{' '}
          and
          <span className="font-medium"> MongoDB.</span>
          Explore my portfolio to discover my projects, experience, and skills.
        </p>

        <Link
          href="/about"
          className="btn-primary inline-flex items-center gap-2 mt-4"
        >
          Learn More About Me
          <FaArrowRight />
        </Link>
      </div>
    </Fragment>
  );
}
