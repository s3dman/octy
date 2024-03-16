import React from 'react';
import { Layout, Flex } from 'antd';

const { Content } = Layout;

const contentStyle = {
  textAlign: 'center',
  minHeight: 120,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#0958d9',
};

const layoutStyle = {
  borderRadius: 8,
  overflow: 'hidden',
  width: 'calc(50% - 8px)',
  maxWidth: 'calc(50% - 8px)',
};

const Bout= () => (
  <Flex gap="middle" wrap="wrap">
    <Layout style={layoutStyle}>
      <Content style={contentStyle}>Blockchain-based Donation Platform:

Develop a blockchain-based platform that facilitates transparent and traceable donation transactions.
Utilize smart contracts to automate donation processes, ensuring that funds are only released when predefined conditions are met, such as reaching project milestones or verifying the impact of initiatives.
Immutable Donation Records:

Implement a decentralized ledger to record and store donation transactions securely, providing an immutable audit trail of all contributions.
Enable donors to track their donations in real-time, allowing them to see how their funds are utilized and the impact they're making.
Direct Peer-to-Peer Donations:

Enable direct peer-to-peer donations between donors and beneficiaries without the need for intermediaries.
Empower individuals to support causes directly, reducing transaction fees and ensuring that a higher percentage of donations reach those in need.
Tokenization of Donations:

Tokenize donations to represent specific projects or initiatives, allowing donors to invest in causes they care about and receive tokens that represent their contribution.
Enable token holders to participate in decision-making processes related to the allocation of funds and monitor the progress of supported projects.
Enhanced Donor Engagement:

Implement blockchain-based identity verification to enhance donor trust and transparency, allowing charities to verify the identity of donors and ensure compliance with regulations.
Foster a sense of community and collaboration by providing donors with access to transparent reporting, project updates, and opportunities for direct engagement with beneficiaries.
Cross-Border Donations and Aid:

Leverage blockchain technology to facilitate cross-border donations and aid distribution, overcoming barriers such as currency conversion, international transaction fees, and lack of transparency.
Enable donors to support causes and charities in any part of the world seamlessly, increasing the reach and impact of charitable initiatives.
By implementing these potential solutions, charitable organizations can leverage blockchain technology to enhance transparency, accountability, and efficiency in donation management, ultimately maximizing the impact of philanthropic efforts and fostering trust among donors and beneficiaries alike.</Content>
    </Layout>
  </Flex>
);

export default Bout;