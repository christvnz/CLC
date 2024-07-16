// components/HamburgerMenu.js
import { useState } from 'react';
import Modal from './mobileNavModal';

export default function HamburgerMenu() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div>
      <button className="hamburger" onClick={toggleMenu}>
        <svg
          width="33"
          height="33"
          viewBox="0 0 33 33"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          xmlnsXlink="http://www.w3.org/1999/xlink">
          <rect width="33" height="33" fill="url(#pattern0_615_88)" />
          <defs>
            <pattern
              id="pattern0_615_88"
              patternContentUnits="objectBoundingBox"
              width="1"
              height="1">
              <use xlinkHref="#image0_615_88" transform="scale(0.0078125)" />
            </pattern>
            <image
              id="image0_615_88"
              width="128"
              height="128"
              xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAIAAAACACAYAAADDPmHLAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAOxAAADsQBlSsOGwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAISSURBVHic7dw7ihRRAIXhc8vAacrEDai5iIEr8NGBqzBQMOpEhEl7Ad1ooCCD5u5A8MUswUCMRTfQgU7gcLkGDoOI4dAFfb8v7EoOVFHVVMGfAAAAAAAAAAC7pvz7w/7+/rXW2oMkt5NcSTJuexRn6meSr6WU97XWl6vV6vPfB08vgMVicX5vb+9JKeVhkmHbK9mK2lp7MY7jo+Vy+Ss5uQAWi8X52Wz2JsnNSeexFa21j+M43l0ul7+GJJnNZk/j5HejlHLr6OhonSTl5Jn/KW77vamllOvDyR8+J78/55LcH0opd6ZewjRaa/OhtXZp6iFM5vKQpE29gmmUUtpQSvk+9RCm0Vr7NiR5N/UQJvN2qLW+TFKnXsLW1Vrrq2G1Wn1urb2Yeg1b93y9Xn8ZkmQcx0dJPkw8iC0ppbzfbDaPkz8vA3J4eFjn8/nr4+Pji0luxIuhXVWTPNtsNvcODg6Ok/9/Dr6a5H5rbZ4/n4MvbHUiZ+1Hkq9J3tZaX63X6y8T7wEAAAAAAAAAAAAAAM6ITuDu0wnklE4gOoHd0wkk0Qnsnk5g73QC0QnsmU5g53QC0QnsmE5g53QCe6UT2C+dwA7pBAIAAAAAAAAAAAAAwI7SCdx9OoGc0glEJ7B7OoEkOoHd0wnsnU4gOoE90wnsnE4gOoEd0wnsnE5gr3QC+6UT2CGdQAAAAAAAAADozG9sKVxe/LeyuAAAAABJRU5ErkJggg=="
            />
          </defs>
        </svg>
      </button>
      {isOpen && <Modal closeModal={toggleMenu} />}
      <style jsx>{`
        .hamburger {
          font-size: 36px;
          background: none;
          border: none;
          color: grey;
          height: 100%;
          margin-right:10px
          cursor: pointer;
          outline: none;
          display: block;
          @media (min-width: 1024px) {
            display: none;
          }
        }
      `}</style>
    </div>
  );
}
