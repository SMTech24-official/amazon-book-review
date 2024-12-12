/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import { useAppSelector } from '@/redux/hooks';
import { useCurrentToken } from '@/redux/features/auth/authSlice';
import { verifyToken } from '@/utils/verifyToken';
import { useRouter } from 'next/navigation';
import { ReactNode, useEffect } from 'react';
import Swal from 'sweetalert2';
import { toast } from 'sonner';

type TProtectedRoute = {
  children: ReactNode;
  roles: string[]; // Now accepts an array of roles
};

const ProtectedRoute = ({ children, roles }: TProtectedRoute) => {
  const router = useRouter();
  const token = useAppSelector(useCurrentToken);
  let user: any;

  if (token) {
    try {
      user = verifyToken(token);
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
    } catch (error) {
      toast.error('Token verification failed:');
      user = null; // handle invalid token scenario
    }
  }

  useEffect(() => {
    if (!token) {
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'Please login to access the dashboard',
        showConfirmButton: false,
        timer: 1500,
      });
      router.push('/');
    } else if (roles.length > 0 && !roles.includes(user?.role)) {
      Swal.fire({
        position: 'center',
        icon: 'info',
        title: 'You are not authorized to access the dashboard',
        showConfirmButton: false,
        timer: 1500,
      });
      router.push('/');
    }
  }, [token, roles, user?.role, router]);

  // While redirecting, return null to avoid rendering anything
  if (!token || (roles.length > 0 && !roles.includes(user?.role))) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
