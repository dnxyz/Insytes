import { memo, SVGProps } from 'react';

const TwitterIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 20 20' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <g clipPath='url(#clip0_62_609)'>
      <path
        d='M6.64012 18.2C13.8836 18.2 17.8466 12.1974 17.8466 6.99354C17.8466 6.82479 17.8429 6.65229 17.8354 6.48354C18.6063 5.92602 19.2716 5.23545 19.8 4.44429C19.082 4.76373 18.3197 4.97235 17.5391 5.06304C18.361 4.57037 18.9764 3.79642 19.2712 2.88466C18.498 3.34289 17.6525 3.66614 16.7707 3.84054C16.1767 3.2093 15.3912 2.79134 14.5357 2.65129C13.6803 2.51124 12.8025 2.65689 12.0382 3.06572C11.2738 3.47456 10.6654 4.12381 10.3071 4.9131C9.94871 5.70238 9.86034 6.58774 10.0556 7.43229C8.48999 7.35372 6.95834 6.94701 5.55998 6.23853C4.16162 5.53004 2.92775 4.5356 1.93837 3.31966C1.43551 4.18664 1.28164 5.21256 1.50802 6.18892C1.7344 7.16528 2.32405 8.01881 3.15712 8.57604C2.5317 8.55618 1.91998 8.38779 1.37249 8.08479V8.13354C1.37193 9.04337 1.68647 9.92532 2.26264 10.6295C2.83881 11.3336 3.64105 11.8165 4.533 11.996C3.95364 12.1546 3.34558 12.1776 2.75587 12.0635C3.00756 12.846 3.49725 13.5304 4.15661 14.0211C4.81597 14.5119 5.61209 14.7845 6.43387 14.801C5.03873 15.8969 3.31533 16.4913 1.54124 16.4885C1.22662 16.4881 0.912314 16.4688 0.599995 16.4308C2.40228 17.587 4.49882 18.2012 6.64012 18.2Z'
        fill='#090B14'
      />
    </g>
    <defs>
      <clipPath id='clip0_62_609'>
        <rect width={19.2} height={19.2} fill='white' transform='translate(0.599997 0.800007)' />
      </clipPath>
    </defs>
  </svg>
);

const Memo = memo(TwitterIcon);
export { Memo as TwitterIcon };