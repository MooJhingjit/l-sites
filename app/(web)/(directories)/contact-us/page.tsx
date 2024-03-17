import React from "react";

const getData = async () => {
  // set delay to 1 second
  const delay = (ms: number) => new Promise((res) => setTimeout(res, ms));
  await delay(1000);

  return {
    title: "Contact Us",
    description: "Contact us page",
  };
};

export default async function page() {
  const data = await getData();
  return <div>contact page</div>;
}
