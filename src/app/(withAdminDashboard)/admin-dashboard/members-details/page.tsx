import MemberPage from '@/components/Dashboard/pages/memberPage/MemberPage';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Members Details',
}


const page = () => {
  return (
    <div>
      <MemberPage/>  
    </div>
  );
};

export default page;
