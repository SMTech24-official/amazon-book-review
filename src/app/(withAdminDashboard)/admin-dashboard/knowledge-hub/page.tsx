import KnowledgeHub from '@/components/KnowledgeHub/KnowledgeHub';
import { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'Knowledge Hub',
  }
  

  

const KnowledgeHubPage = () => {
    return (
        <div>
            {/* <UnderCOnstruction pageName='KnowLedge Hub'/> */}
            <KnowledgeHub/>
        </div>
    );
};

export default KnowledgeHubPage;