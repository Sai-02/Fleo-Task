export const obj = {
  name: "Tata Steels",
  level: 0,
  totalSales: 1000000,
  expectedSales: 3000000,
  children: [
    {
      name: "Factory A",
      level: 1,
      totalSales: 100000,
      expectedSales: 1000000,
      children: [
        {
          name: "Godown 1",
          level: 2,
          totalSales: 50000,
          expectedSales: 500000,
          children: [
            {
              name: "Warehouse 1",
              level: 3,
              totalSales: 40000,
              expectedSales: 250000,
              children: [],
            },
            {
              name: "Warehouse 2",
              level: 3,
              totalSales: 10000,
              expectedSales: 250000,
              children: [],
            },
          ],
        },
        {
          name: "Godown 2",
          level: 2,
          totalSales: 50000,
          expectedSales: 500000,
          children: [
            {
              name: "Warehouse 1",
              level: 3,
              totalSales: 40000,
              expectedSales: 250000,
              children: [],
            },
            {
              name: "Warehouse 2",
              level: 3,
              totalSales: 10000,
              expectedSales: 250000,
              children: [],
            },
          ],
        },
      ],
    },
    {
      name: "Factory B",
      level: 1,
      totalSales: 600000,
      expectedSales: 1000000,
      children: [
        {
          name: "Godown 1",
          level: 2,
          totalSales: 500000,
          expectedSales: 500000,
          children: [
            {
              name: "Warehouse 1",
              level: 3,
              totalSales: 250000,
              expectedSales: 250000,
              children: [],
            },
            {
              name: "Warehouse 2",
              level: 3,
              totalSales: 250000,
              expectedSales: 250000,
              children: [],
            },
          ],
        },
        {
          name: "Godown 2",
          level: 2,
          totalSales: 100000,
          expectedSales: 500000,
          children: [
            {
              name: "Warehouse 1",
              level: 3,
              totalSales: 50000,
              expectedSales: 250000,
              children: [],
            },
            {
              name: "Warehouse 2",
              level: 3,
              totalSales: 50000,
              expectedSales: 250000,
              children: [],
            },
          ],
        },
      ],
    },
    {
      name: "Factory C",
      level: 1,
      totalSales: 300000,
      expectedSales: 1000000,
      children: [
        {
          name: "Godown 1",
          level: 2,
          totalSales: 200000,
          expectedSales: 500000,
          children: [
            {
              name: "Warehouse 1",
              level: 3,
              totalSales: 150000,
              expectedSales: 250000,
              children: [],
            },
            {
              name: "Warehouse 2",
              level: 3,
              totalSales: 50000,
              expectedSales: 250000,
              children: [],
            },
          ],
        },
        {
          name: "Godown 2",
          level: 2,
          totalSales: 100000,
          expectedSales: 500000,
          children: [
            {
              name: "Warehouse 1",
              level: 3,
              totalSales: 80000,
              expectedSales: 250000,
              children: [],
            },
            {
              name: "Warehouse 2",
              level: 3,
              totalSales: 20000,
              expectedSales: 250000,
              children: [],
            },
          ],
        },
      ],
    },
  ],
};
