'use client';

import { Activity, ReactNode } from 'react';
import { REGEXP_ONLY_DIGITS } from 'input-otp';

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from '@/components/ui/input-otp';
import { FormBase, FormControlFn } from './form-base';
import { useMediaQuery } from '@/hooks/use-media-query';

export const FormInputOTP: FormControlFn<{
  children?: ReactNode;
  fieldClassName?: string;
}> = ({ children, fieldClassName, ...props }) => {
  const isMobile = useMediaQuery('(max-width: 556px)');

  return (
    <FormBase fieldClassName={fieldClassName} {...props}>
      {(field) => (
        <div className="flex w-full flex-col items-center gap-2.5">
          <InputOTP
            {...field}
            maxLength={6}
            pattern={REGEXP_ONLY_DIGITS}
            className="justify-center"
          >
            <Activity mode={isMobile ? 'visible' : 'hidden'}>
              <InputOTPGroup className="input-otp-group">
                <InputOTPSlot index={0} className="size-12 text-xl" />
                <InputOTPSlot index={1} className="size-12 text-xl" />
                <InputOTPSlot index={2} className="size-12 text-xl" />
                <InputOTPSlot index={3} className="size-12 text-xl" />
                <InputOTPSlot index={4} className="size-12 text-xl" />
                <InputOTPSlot index={5} className="size-12 text-xl" />
              </InputOTPGroup>
            </Activity>

            <Activity mode={isMobile ? 'hidden' : 'visible'}>
              <InputOTPGroup className="input-otp-group">
                <InputOTPSlot index={0} className="input-otp-slot" />
                <InputOTPSlot index={1} className="input-otp-slot" />
              </InputOTPGroup>
              <InputOTPSeparator className="mx-2" />
              <InputOTPGroup className="input-otp-group">
                <InputOTPSlot index={2} className="input-otp-slot" />
                <InputOTPSlot index={3} className="input-otp-slot" />
              </InputOTPGroup>
              <InputOTPSeparator className="mx-2" />
              <InputOTPGroup className="input-otp-group">
                <InputOTPSlot index={4} className="input-otp-slot" />
                <InputOTPSlot index={5} className="input-otp-slot" />
              </InputOTPGroup>
            </Activity>
          </InputOTP>
          {children}
        </div>
      )}
    </FormBase>
  );
};
