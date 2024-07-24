import CollapsibleList from './components/CollapsibleList'
import ProductCart from './components/ProductCart'
import News from './components/News'
import NewsBigVersion from './components/newsBigVersion'
// import kobe from './images/1.png';
import kobe from './images/1.jpg';
// import jordan from './images/2.png';
import jordan from './images/2.jpg';
// import lebron from './images/3.png';
import lebron from './images/3.jpg';
// import lebron from './images/3.avif';
// const data = [
//   {
//     name: 'Kobe Bryant',
//     role: 'Master',
//     teamSize: "06",
//     createdOn: '13 Aug 2023',
//     teamLeaders: [
//       {
//         name: 'Foulen Lghali',
//         role: 'Team Leader',
//         teamSize: 3,
//         createdOn: '13 Aug 2023',
//         agents: [
//           {
//             name: 'Agent Smith',
//             role: 'Agent',
//             createdOn: '13 Aug 2023',
//           },
//           {
//             name: 'Agent Doe',
//             role: 'Agent',
//             createdOn: '14 Aug 2023',
//           },
//         ],
//       },
//       {
//         name: 'Jane Doe',
//         role: 'Team Leader',
//         teamSize: 2,
//         createdOn: '15 Aug 2023',
//         agents: [
//           {
//             name: 'Agent Johnson',
//             role: 'Agent',
//             createdOn: '16 Aug 2023',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: 'Kobe Bryant',
//     role: 'Master',
//     teamSize: "06",
//     createdOn: '13 Aug 2023',
//     teamLeaders: [
//       {
//         name: 'Foulen Lghali',
//         role: 'Team Leader',
//         teamSize: "03",
//         createdOn: '13 Aug 2023',
//         agents: [
//           {
//             name: 'Agent Smith',
//             role: 'Agent',
//             createdOn: '13 Aug 2023',
//           },
//           {
//             name: 'Agent Doe',
//             role: 'Agent',
//             createdOn: '14 Aug 2023',
//           },
//         ],
//       },
//       {
//         name: 'Jane Doe',
//         role: 'Team Leader',
//         teamSize: "02",
//         createdOn: '15 Aug 2023',
//         agents: [
//           {
//             name: 'Agent Johnson',
//             role: 'Agent',
//             createdOn: '16 Aug 2023',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: 'Kobe Bryant',
//     role: 'Master',
//     teamSize: "06",
//     createdOn: '13 Aug 2023',
//     teamLeaders: [
//       {
//         name: 'Foulen Lghali',
//         role: 'Team Leader',
//         teamSize: "03",
//         createdOn: '13 Aug 2023',
//         agents: [
//           {
//             name: 'Agent Smith',
//             role: 'Agent',
//             createdOn: '13 Aug 2023',
//           },
//           {
//             name: 'Agent Doe',
//             role: 'Agent',
//             createdOn: '14 Aug 2023',
//           },
//         ],
//       },
//       {
//         name: 'Jane Doe',
//         role: 'Team Leader',
//         teamSize: "02",
//         createdOn: '15 Aug 2023',
//         agents: [
//           {
//             name: 'Agent Johnson',
//             role: 'Agent',
//             createdOn: '16 Aug 2023',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: 'Kobe Bryant',
//     role: 'Master',
//     teamSize: "06",
//     createdOn: '13 Aug 2023',
//     teamLeaders: [
//       {
//         name: 'Foulen Lghali',
//         role: 'Team Leader',
//         teamSize: "03",
//         createdOn: '13 Aug 2023',
//         agents: [
//           {
//             name: 'Agent Smith',
//             role: 'Agent',
//             createdOn: '13 Aug 2023',
//           },
//           {
//             name: 'Agent Doe',
//             role: 'Agent',
//             createdOn: '14 Aug 2023',
//           },
//         ],
//       },
//       {
//         name: 'Jane Doe',
//         role: 'Team Leader',
//         teamSize: "02",
//         createdOn: '15 Aug 2023',
//         agents: [
//           {
//             name: 'Agent Johnson',
//             role: 'Agent',
//             createdOn: '16 Aug 2023',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: 'Kobe Bryant',
//     role: 'Master',
//     teamSize: "06",
//     createdOn: '13 Aug 2023',
//     teamLeaders: [
//       {
//         name: 'Foulen Lghali',
//         role: 'Team Leader',
//         teamSize: "03",
//         createdOn: '13 Aug 2023',
//         agents: [
//           {
//             name: 'Agent Smith',
//             role: 'Agent',
//             createdOn: '13 Aug 2023',
//           },
//           {
//             name: 'Agent Doe',
//             role: 'Agent',
//             createdOn: '14 Aug 2023',
//           },
//         ],
//       },
//       {
//         name: 'Jane Doe',
//         role: 'Team Leader',
//         teamSize: "02",
//         createdOn: '15 Aug 2023',
//         agents: [
//           {
//             name: 'Agent Johnson',
//             role: 'Agent',
//             createdOn: '16 Aug 2023',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: 'Kobe Bryant',
//     role: 'Master',
//     teamSize: "06",
//     createdOn: '13 Aug 2023',
//     teamLeaders: [
//       {
//         name: 'Foulen Lghali',
//         role: 'Team Leader',
//         teamSize: "03",
//         createdOn: '13 Aug 2023',
//         agents: [
//           {
//             name: 'Agent Smith',
//             role: 'Agent',
//             createdOn: '13 Aug 2023',
//           },
//           {
//             name: 'Agent Doe',
//             role: 'Agent',
//             createdOn: '14 Aug 2023',
//           },
//         ],
//       },
//       {
//         name: 'Jane Doe',
//         role: 'Team Leader',
//         teamSize: "02",
//         createdOn: '15 Aug 2023',
//         agents: [
//           {
//             name: 'Agent Johnson',
//             role: 'Agent',
//             createdOn: '16 Aug 2023',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: 'Kobe Bryant',
//     role: 'Master',
//     teamSize: "06",
//     createdOn: '13 Aug 2023',
//     teamLeaders: [
//       {
//         name: 'Foulen Lghali',
//         role: 'Team Leader',
//         teamSize: "03",
//         createdOn: '13 Aug 2023',
//         agents: [
//           {
//             name: 'Agent Smith',
//             role: 'Agent',
//             createdOn: '13 Aug 2023',
//           },
//           {
//             name: 'Agent Doe',
//             role: 'Agent',
//             createdOn: '14 Aug 2023',
//           },
//         ],
//       },
//       {
//         name: 'Jane Doe',
//         role: 'Team Leader',
//         teamSize: "02",
//         createdOn: '15 Aug 2023',
//         agents: [
//           {
//             name: 'Agent Johnson',
//             role: 'Agent',
//             createdOn: '16 Aug 2023',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: 'Kobe Bryant',
//     role: 'Master',
//     teamSize: "06",
//     createdOn: '13 Aug 2023',
//     teamLeaders: [
//       {
//         name: 'Foulen Lghali',
//         role: 'Team Leader',
//         teamSize: "03",
//         createdOn: '13 Aug 2023',
//         agents: [
//           {
//             name: 'Agent Smith',
//             role: 'Agent',
//             createdOn: '13 Aug 2023',
//           },
//           {
//             name: 'Agent Doe',
//             role: 'Agent',
//             createdOn: '14 Aug 2023',
//           },
//         ],
//       },
//       {
//         name: 'Jane Doe',
//         role: 'Team Leader',
//         teamSize: "02",
//         createdOn: '15 Aug 2023',
//         agents: [
//           {
//             name: 'Agent Johnson',
//             role: 'Agent',
//             createdOn: '16 Aug 2023',
//           },
//         ],
//       },
//     ],
//   },
//   {
//     name: 'Kobe Bryant',
//     role: 'Master',
//     teamSize: "06",
//     createdOn: '13 Aug 2023',
//     teamLeaders: [
//       {
//         name: 'Foulen Lghali',
//         role: 'Team Leader',
//         teamSize: "03",
//         createdOn: '13 Aug 2023',
//         agents: [
//           {
//             name: 'Agent Smith',
//             role: 'Agent',
//             createdOn: '13 Aug 2023',
//           },
//           {
//             name: 'Agent Doe',
//             role: 'Agent',
//             createdOn: '14 Aug 2023',
//           },
//         ],
//       },
//       {
//         name: 'Jane Doe',
//         role: 'Team Leader',
//         teamSize: "02",
//         createdOn: '15 Aug 2023',
//         agents: [
//           {
//             name: 'Agent Johnson',
//             role: 'Agent',
//             createdOn: '16 Aug 2023',
//           },
//         ],
//       },
//     ],
//   },
// ];
const data = [
  {
    name: 'Kobe Bryant',
    role: 'Master',
    teamSize: "06",
    createdOn: '13 Aug 2023',
    address: '123 Basketball St',
    phone: '555-1234',
    email: 'kobe@example.com',
    supervisor: 'Phil Jackson',
    IBAN: 'US1234567890',
    revenue: '1000000 DT',
    latestOrders: [
      { id: 1, date: 'Dec 7, 2022', customerName: 'Kobe Bryant', amount: '120 DT', company: 'Spalding Company' },
      { id: 2, date: 'Dec 8, 2022', customerName: 'Michael Jordan', amount: '150 DT', company: 'Nike' },
      { id: 3, date: 'Dec 9, 2022', customerName: 'LeBron James', amount: '180 DT', company: 'Adidas' },
    ],
    overview: '85%',
    image: kobe,
    teamLeaders: [
      {
        name: 'Foulen Lghali',
        role: 'Team Leader',
        teamSize: 3,
        createdOn: '13 Aug 2023',
        address: '456 Leader Ln, Tunis',
        phone: '555-5678',
        email: 'foulen@example.com',
        supervisor: 'Kobe Bryant',
        IBAN: 'TN1234567890',
        revenue: '500000 DT',
        latestOrders: [
          { id: 4, date: 'Dec 10, 2022', customerName: 'Foulen Lghali', amount: '100 DT', company: 'Local Company' },
        ],
        overview: '90%',
        image: jordan,
        agents: [
          {
            name: 'Agent Smith',
            role: 'Agent',
            createdOn: '13 Aug 2023',
            address: '789 Agent Rd, Tunis',
            phone: '555-7890',
            email: 'smith@example.com',
            supervisor: 'Foulen Lghali',
            IBAN: 'TN0987654321',
            revenue: '300000 DT',
            latestOrders: [
              { id: 5, date: 'Dec 11, 2022', customerName: 'Agent Smith', amount: '200 DT', company: 'Another Company' },
            ],
            overview: '75%',
            image: lebron,
          },
          {
            name: 'Agent Doe',
            role: 'Agent',
            createdOn: '14 Aug 2023',
            address: '321 Agent St, Tunis',
            phone: '555-4321',
            email: 'doe@example.com',
            supervisor: 'Foulen Lghali',
            IBAN: 'TN0123456789',
            revenue: '200000 DT',
            latestOrders: [
              { id: 6, date: 'Dec 12, 2022', customerName: 'Agent Doe', amount: '150 DT', company: 'Some Company' },
            ],
            overview: '80%',
            image: lebron,
          },
        ],
      },
      {
        name: 'Jane Doe',
        role: 'Team Leader',
        teamSize: 2,
        createdOn: '15 Aug 2023',
        address: '654 Leader Ln, Tunis',
        phone: '555-6543',
        email: 'jane@example.com',
        supervisor: 'Kobe Bryant',
        IBAN: 'TN2345678901',
        revenue: '400000 DT',
        latestOrders: [
          { id: 7, date: 'Dec 13, 2022', customerName: 'Jane Doe', amount: '130 DT', company: 'Yet Another Company' },
        ],
        overview: '88%',
        image: jordan,
        agents: [
          {
            name: 'Agent Johnson',
            role: 'Agent',
            createdOn: '16 Aug 2023',
            address: '987 Agent Rd, Tunis',
            phone: '555-9876',
            email: 'johnson@example.com',
            supervisor: 'Jane Doe',
            IBAN: 'TN8765432109',
            revenue: '350000 DT',
            latestOrders: [
              { id: 8, date: 'Dec 14, 2022', customerName: 'Agent Johnson', amount: '220 DT', company: 'New Company' },
            ],
            overview: '78%',
            image: lebron,
          },
        ],
      },
    ],
  },
  {
    name: 'Kobe Bryant',
    role: 'Master',
    teamSize: "06",
    createdOn: '13 Aug 2023',
    address: '123 Basketball St',
    phone: '555-1234',
    email: 'kobe@example.com',
    supervisor: 'Phil Jackson',
    IBAN: 'US1234567890',
    revenue: '1000000 DT',
    latestOrders: [
      { id: 1, date: 'Dec 7, 2022', customerName: 'Kobe Bryant', amount: '120 DT', company: 'Spalding Company' },
      { id: 2, date: 'Dec 8, 2022', customerName: 'Michael Jordan', amount: '150 DT', company: 'Nike' },
      { id: 3, date: 'Dec 9, 2022', customerName: 'LeBron James', amount: '180 DT', company: 'Adidas' },
    ],
    overview: '85%',
    image: kobe,
    teamLeaders: [
      {
        name: 'Foulen Lghali',
        role: 'Team Leader',
        teamSize: 3,
        createdOn: '13 Aug 2023',
        address: '456 Leader Ln, Tunis',
        phone: '555-5678',
        email: 'foulen@example.com',
        supervisor: 'Kobe Bryant',
        IBAN: 'TN1234567890',
        revenue: '500000 DT',
        latestOrders: [
          { id: 4, date: 'Dec 10, 2022', customerName: 'Foulen Lghali', amount: '100 DT', company: 'Local Company' },
        ],
        overview: '90%',
        image: jordan,
        agents: [
          {
            name: 'Agent Smith',
            role: 'Agent',
            createdOn: '13 Aug 2023',
            address: '789 Agent Rd, Tunis',
            phone: '555-7890',
            email: 'smith@example.com',
            supervisor: 'Foulen Lghali',
            IBAN: 'TN0987654321',
            revenue: '300000 DT',
            latestOrders: [
              { id: 5, date: 'Dec 11, 2022', customerName: 'Agent Smith', amount: '200 DT', company: 'Another Company' },
            ],
            overview: '75%',
            image: lebron,
          },
          {
            name: 'Agent Doe',
            role: 'Agent',
            createdOn: '14 Aug 2023',
            address: '321 Agent St, Tunis',
            phone: '555-4321',
            email: 'doe@example.com',
            supervisor: 'Foulen Lghali',
            IBAN: 'TN0123456789',
            revenue: '200000 DT',
            latestOrders: [
              { id: 6, date: 'Dec 12, 2022', customerName: 'Agent Doe', amount: '150 DT', company: 'Some Company' },
            ],
            overview: '80%',
            image: lebron,
          },
        ],
      },
      {
        name: 'Jane Doe',
        role: 'Team Leader',
        teamSize: 2,
        createdOn: '15 Aug 2023',
        address: '654 Leader Ln, Tunis',
        phone: '555-6543',
        email: 'jane@example.com',
        supervisor: 'Kobe Bryant',
        IBAN: 'TN2345678901',
        revenue: '400000 DT',
        latestOrders: [
          { id: 7, date: 'Dec 13, 2022', customerName: 'Jane Doe', amount: '130 DT', company: 'Yet Another Company' },
        ],
        overview: '88%',
        image: jordan,
        agents: [
          {
            name: 'Agent Johnson',
            role: 'Agent',
            createdOn: '16 Aug 2023',
            address: '987 Agent Rd, Tunis',
            phone: '555-9876',
            email: 'johnson@example.com',
            supervisor: 'Jane Doe',
            IBAN: 'TN8765432109',
            revenue: '350000 DT',
            latestOrders: [
              { id: 8, date: 'Dec 14, 2022', customerName: 'Agent Johnson', amount: '220 DT', company: 'New Company' },
            ],
            overview: '78%',
            image: lebron,
          },
        ],
      },
    ],
  },
  {
    name: 'Kobe Bryant',
    role: 'Master',
    teamSize: "06",
    createdOn: '13 Aug 2023',
    address: '123 Basketball St',
    phone: '555-1234',
    email: 'kobe@example.com',
    supervisor: 'Phil Jackson',
    IBAN: 'US1234567890',
    revenue: '1000000 DT',
    latestOrders: [
      { id: 1, date: 'Dec 7, 2022', customerName: 'Kobe Bryant', amount: '120 DT', company: 'Spalding Company' },
      { id: 2, date: 'Dec 8, 2022', customerName: 'Michael Jordan', amount: '150 DT', company: 'Nike' },
      { id: 3, date: 'Dec 9, 2022', customerName: 'LeBron James', amount: '180 DT', company: 'Adidas' },
    ],
    overview: '85%',
    image: kobe,
    teamLeaders: [
      {
        name: 'Foulen Lghali',
        role: 'Team Leader',
        teamSize: 3,
        createdOn: '13 Aug 2023',
        address: '456 Leader Ln, Tunis',
        phone: '555-5678',
        email: 'foulen@example.com',
        supervisor: 'Kobe Bryant',
        IBAN: 'TN1234567890',
        revenue: '500000 DT',
        latestOrders: [
          { id: 4, date: 'Dec 10, 2022', customerName: 'Foulen Lghali', amount: '100 DT', company: 'Local Company' },
        ],
        overview: '90%',
        image: jordan,
        agents: [
          {
            name: 'Agent Smith',
            role: 'Agent',
            createdOn: '13 Aug 2023',
            address: '789 Agent Rd, Tunis',
            phone: '555-7890',
            email: 'smith@example.com',
            supervisor: 'Foulen Lghali',
            IBAN: 'TN0987654321',
            revenue: '300000 DT',
            latestOrders: [
              { id: 5, date: 'Dec 11, 2022', customerName: 'Agent Smith', amount: '200 DT', company: 'Another Company' },
            ],
            overview: '75%',
            image: lebron,
          },
          {
            name: 'Agent Doe',
            role: 'Agent',
            createdOn: '14 Aug 2023',
            address: '321 Agent St, Tunis',
            phone: '555-4321',
            email: 'doe@example.com',
            supervisor: 'Foulen Lghali',
            IBAN: 'TN0123456789',
            revenue: '200000 DT',
            latestOrders: [
              { id: 6, date: 'Dec 12, 2022', customerName: 'Agent Doe', amount: '150 DT', company: 'Some Company' },
            ],
            overview: '80%',
            image: lebron,
          },
        ],
      },
      {
        name: 'Jane Doe',
        role: 'Team Leader',
        teamSize: 2,
        createdOn: '15 Aug 2023',
        address: '654 Leader Ln, Tunis',
        phone: '555-6543',
        email: 'jane@example.com',
        supervisor: 'Kobe Bryant',
        IBAN: 'TN2345678901',
        revenue: '400000 DT',
        latestOrders: [
          { id: 7, date: 'Dec 13, 2022', customerName: 'Jane Doe', amount: '130 DT', company: 'Yet Another Company' },
        ],
        overview: '88%',
        image: jordan,
        agents: [
          {
            name: 'Agent Johnson',
            role: 'Agent',
            createdOn: '16 Aug 2023',
            address: '987 Agent Rd, Tunis',
            phone: '555-9876',
            email: 'johnson@example.com',
            supervisor: 'Jane Doe',
            IBAN: 'TN8765432109',
            revenue: '350000 DT',
            latestOrders: [
              { id: 8, date: 'Dec 14, 2022', customerName: 'Agent Johnson', amount: '220 DT', company: 'New Company' },
            ],
            overview: '78%',
            image: lebron,
          },
        ],
      },
    ],
  },
  // Repeat the structure for other entries...
];


function App() {
  return (
    
      <div className=" min-h-screen  p-4  bg-gray-500 ">
        {/* <Card color="customBlue"/> */}
        {/* <CollapsibleList data={data} /> */}
        {/* <ProductCart  /> */}
        {/* <News  /> */}
        <NewsBigVersion  />

      </div>
    
    
  );
}

export default App;
