'use client'

import Button from '@/components/atoms/Button';
import Card from '@/components/atoms/Card';
import { InputField } from '@/components/atoms/InputField';
import React from 'react';
import CustomCheckbox from '@/components/atoms/Checkbox';
import { useRouter } from 'next/navigation';


export default function SecurityForm() {

  const router = useRouter()

  return (
    <div className='px-4 py-7 md:px-16 '>
    
    <Card
      className="bg-[var(--color-white)] !p-0 md:w-[74.65%] w-full"
      header="For Your Added Security"
      
    >

    <div className='px-4 flex flex-col gap-4'>
        <div className='flex justify-end pt-3'>
            <b><span className="text-[var(--text-error)] px-1">*</span>Required Fields</b>
        </div>
        
        <p className='text-base'>
          We need to confirm it&apos;s really you. To verify and protect your account, please answer your security question.
        </p>

        <form className="">            
            
          <Card className='flex flex-col gap-3 bg-white px-[38px] pt-9 pb-6 border-t-4 border-t-[#D3D3D3]'>
            <InputField
            type='text'
            label={
                <>
                  What is the first name of your oldest niece? <span className="text-[var(--text-error)] ">*</span>
                </>
              }
              className='sm:w-[47.95%] w-full border-[2px] border-[var(--primary-color)]'
            />

                    <div>
                            <CustomCheckbox label="Remember User ID" className="!text-sm" />
                            
                    </div>
            {/* <div className="flex gap-1 justify-start items-center">
                <input
                  type="checkbox"
                  className=" !accent-black  w-4 h-4 border-[6px] border-black rounded-[2px] "
                />

              <label htmlFor="remember" className="text-sm">
                Remember User ID
              </label>
            </div> */}

            <p>Do not select this option if you are using a public computer, such as in a library.</p>

          </Card>

          <div className=' flex justify-end items-center gap-2 py-4'>
              <Button
                variant={'outline'}
                >Cancel
              </Button>
              <Button
                variant={'primary'}
                >Continue
              </Button>
          </div>

        </form>
        
    </div>
    </Card>
    </div>
  );
}



