export const getServerSideProps = async () => {
    const datatosend = {
      transactions: [
        { customerId: "cust123", sortCode: 121212, accountNumber: 12345678, date: "2023-01-01", category: "groceries", amount: 150 },
        { customerId: "cust123", sortCode: 121212, accountNumber: 12345678, date: "2023-01-02", category: "entertainment", amount: 200 },
        { customerId: "cust123", sortCode: 121212, accountNumber: 12345678, date: "2023-01-03", category: "dining", amount: 100 },
        { customerId: "cust123", sortCode: 121212, accountNumber: 12345678, date: "2023-01-04", category: "shopping", amount: 300 },
        { customerId: "cust123", sortCode: 121212, accountNumber: 12345678, date: "2023-01-05", category: "travel", amount: 400 },
        { customerId: "cust123", sortCode: 121212, accountNumber: 12345678, date: "2023-01-06", category: "utilities", amount: 150 },
        { customerId: "cust123", sortCode: 121212, accountNumber: 12345678, date: "2023-01-07", category: "rent", amount: 1200 },
        { customerId: "cust123", sortCode: 121212, accountNumber: 12345678, date: "2023-01-08", category: "healthcare", amount: 100 },
        { customerId: "cust123", sortCode: 121212, accountNumber: 12345678, date: "2023-01-09", category: "education", amount: 200 },
        { customerId: "cust123", sortCode: 121212, accountNumber: 12345678, date: "2023-01-10", category: "insurance", amount: 250 },
        { customerId: "cust123", sortCode: 121212, accountNumber: 12345678, date: "2023-01-11", category: "miscellaneous", amount: 50 },
      ],
    };
  
    try {
      // Sending a POST request
      const response =  await fetch(
        "https://ecp-tigers-backend-dxd8d9a7gvb3c7g8.uksouth-01.azurewebsites.net/suggest-budget",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(datatosend),
        }
      );
      console.log("RESPONSE DATA" + response);
      if (!response.ok) {
        throw new Error(`Failed to fetch data: ${response.statusText}`);
      }
  
      const data =  await response.json();
  
      return data;
    } catch (error) {
      console.error("Error fetching default values:", error);
  
      return null;
    }
  };
  