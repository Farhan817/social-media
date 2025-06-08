'use client';

import React from 'react';
import { Input } from '../ui/Input';
import { Button } from '../ui/Button';
import Link from 'next/link';
import useSignup from './hook/useSignup';


const SignupPage=()=> {
const [{formik},{}]= useSignup()
  return (
    <div className="min-h-screen flex items-center justify-center px-4 bg-gray-100">
      <div className="w-full max-w-sm p-6 bg-white rounded-2xl shadow-xl shadow-blue-100/50 transition-transform transform hover:scale-[1.01]">
        <h1 className="text-2xl font-bold mb-6 text-center">Sign Up</h1>
        <form className="w-full" onSubmit={formik.handleSubmit}>
          <Input
            label="Wallet ID"
            name="wallet_address"
            required
            value={formik.values.wallet_address}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.wallet_address && formik.errors.wallet_address && (
            <p className="text-red-500 text-xs mb-2">{formik.errors.wallet_address}</p>
          )}

          <Input
            label="Username"
            name="username"
            required
            value={formik.values.username}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.username && formik.errors.username && (
            <p className="text-red-500 text-xs mb-2">{formik.errors.username}</p>
          )}

          <Input
            label="Bio"
            name="bio"
            value={formik.values.bio}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />

          <Input
            label="Profile Picture URL"
            name="profile_pic_url"
            type="url"
            value={formik.values.profile_pic_url}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.profile_pic_url && formik.errors.profile_pic_url && (
            <p className="text-red-500 text-xs mb-2">{formik.errors.profile_pic_url}</p>
          )}

          <p className="mt-4 text-sm text-center">
            Already have an account?{' '}
            <Link href="/login" className="text-blue-600 hover:underline">
              Log In
            </Link>
          </p>
          <div className="mt-4">
            <Button type="submit">Create Account</Button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default SignupPage

