import { memo } from 'react';
import type { FC } from 'react';

import resets from '../_resets.module.css';
import { BlurIcon } from './BlurIcon.js';
import classes from './Insytes.module.css';
import { TwitterIcon } from './TwitterIcon.js';
import { UnionIcon } from './UnionIcon.js';

interface Props {
  className?: string;
}
/* @figmaId 61:539 */
export const Insytes: FC<Props> = memo(function Insytes(props = {}) {
  return (
    <div className={`${resets.clapyResets} ${classes.root}`}>
      <div className={classes.desktopSignInCode}>
        <div className={classes.header}>
          <div className={classes.union}>
            <UnionIcon className={classes.icon} />
          </div>
          <div className={classes.heading}>Your sign-in code</div>
        </div>
        <div className={classes.paragraph}>
          Please copy and paste the 5-digit code below into the number fields of your sign-in process.
        </div>
        <div className={classes.codeWrapper}>
          <div className={classes.blur}>
            <BlurIcon className={classes.icon2} />
          </div>
          <div className={classes._12345}>12345</div>
        </div>
        <div className={classes.paragraph2}>
          <div className={classes.p01}>Please note: the code will be valid for the next 30 minutes.</div>
          <div className={classes.p02}>
            If you didn’t try to sign-in or create an account on Wireframes, you can safely ignore this email.
          </div>
        </div>
        <div className={classes.footer}>
          <div className={classes.divider}>
            <div className={classes.divider2}></div>
          </div>
          <div className={classes.companyName}>Insytes</div>
          <div className={classes.slogan}>Do your thing. We’ll help you design it.</div>
          <button className={classes.button}>
            <div className={classes.twitter}>
              <TwitterIcon className={classes.icon3} />
            </div>
            <div className={classes.link}>Follow</div>
          </button>
          <div className={classes.links}>
            <div className={classes.link1}>Help</div>
            <div className={classes.link2}>Unsubscribe</div>
          </div>
          <div className={classes.address}>
            <div className={classes.legalName}>Insytes Limited</div>
            <div className={classes.address2}>Address line 1</div>
            <div className={classes.cityStateZipCode}>Address line 2</div>
            <div className={classes.cityStateZipCode2}>City</div>
            <div className={classes.cityStateZipCode3}>Postcode</div>
            <div className={classes.copyright}>©2023 All rights reserved.</div>
          </div>
        </div>
      </div>
    </div>
  );
});
