import { useEffect, useState } from "react";

export default function useCurrencyInfo(currency) {
    const [data, setData] = useState({});

    useEffect(() => {
        if (!currency) return;

        const fetchData = async () => {
            try {
              const dataApi = await fetch(
                `https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@latest/v1/currencies/${currency}.json`
              );
              const response = await dataApi.json();
              setData(response[currency] || {});
            } catch (error) {
              console.log(error);
            }
        };

        fetchData();
    }, [currency]);

  return data;
}
