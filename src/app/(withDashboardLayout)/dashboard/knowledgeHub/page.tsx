import BreadCrumb from '@/components/common/breadCrumb/BreadCrumb';
import KnowledgeHub from '@/components/KnowledgeHub/KnowledgeHub';
import { Metadata } from 'next';


export const metadata: Metadata = {
  title: 'Knowledge Hub  ',
}


const page = () => {
    return (
        <div className='dashboard-containers'>
          <BreadCrumb/>
          <KnowledgeHub/>
        </div>
    );
};

export default page;