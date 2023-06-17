import { memo, SVGProps } from 'react';

const BlurIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg preserveAspectRatio='none' viewBox='0 0 545 257' fill='none' xmlns='http://www.w3.org/2000/svg' {...props}>
    <ellipse cx={200.701} cy={200.613} rx={51.4} ry={109.417} transform='rotate(-90 200.701 200.613)' fill='#1FF5A8' />
    <ellipse
      cx={260.743}
      cy={228.836}
      rx={28.151}
      ry={59.9845}
      transform='rotate(-90 260.743 228.836)'
      fill='#1FB5F5'
    />
    <ellipse
      cx={60.6654}
      cy={49.8953}
      rx={60.6654}
      ry={49.8953}
      transform='matrix(0.979121 0.203276 -0.459642 0.888104 46.2069 75.7954)'
      fill='#F1D647'
    />
    <ellipse
      cx={68.4798}
      cy={64.5318}
      rx={68.4798}
      ry={64.5318}
      transform='matrix(0.979121 0.203276 -0.459642 0.888104 359.817 0.212769)'
      fill='#1FF5A8'
    />
    <ellipse
      cx={60.6654}
      cy={22.857}
      rx={60.6654}
      ry={22.857}
      transform='matrix(0.979121 0.203276 -0.459642 0.888104 425.864 87.7954)'
      fill='#F1D647'
    />
    <ellipse
      cx={42.3242}
      cy={23.1043}
      rx={42.3242}
      ry={23.1043}
      transform='matrix(0.979121 0.203276 -0.459642 0.888104 453.564 123.413)'
      fill='#F19947'
    />
    <ellipse
      cx={42.3242}
      cy={23.1043}
      rx={42.3242}
      ry={23.1043}
      transform='matrix(0.979121 0.203276 -0.459642 0.888104 69.5765 62.2128)'
      fill='#F19947'
    />
    <ellipse
      cx={69.9139}
      cy={65.8832}
      rx={69.9139}
      ry={65.8832}
      transform='matrix(0.979121 0.203276 -0.459642 0.888104 284.791 25.6128)'
      fill='#1FB5F5'
    />
  </svg>
);

const Memo = memo(BlurIcon);
export { Memo as BlurIcon };
