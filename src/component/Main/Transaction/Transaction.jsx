import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { CiSliderHorizontal } from "react-icons/ci";
import { Table
 } from "antd";

const Transaction = () => {
  const [searchTerm, setSearchTerm] = useState("");

  // Static transaction data based on the image
  const transactionsData = [
    {
      key: "1",
      userName: "Alyvia Kelley",
      email: "a.kelley@gmail.com",
      subscription: "LOMI",
      dateTime: "May 17, 2025 11:58 am",
      amount: "$67.65",
    },
    {
      key: "2",
      userName: "Jaidyn Nivon",
      email: "jaidyn@gmail.com",
      subscription: "LOMI",
      dateTime: "May 11, 2025 11:47 am",
      amount: "$8.59",
    },
    {
      key: "3",
      userName: "Ace Foley",
      email: "ace.foley@yahoo.com",
      subscription: "Flower",
      dateTime: "May 25, 2025 4:33 pm",
      amount: "$9.99",
    },
    {
      key: "4",
      userName: "Nikolai Schmidt",
      email: "nikolai.schmidt1964@gmail.com",
      subscription: "Premium",
      dateTime: "May 27, 2025 3:58 am",
      amount: "$60.47",
    },
    {
      key: "5",
      userName: "Clayton Charles",
      email: "me@clayton.com",
      subscription: "LOMI",
      dateTime: "May 5, 2025 4:56 am",
      amount: "$4.28",
    },
    {
      key: "6",
      userName: "Prince Chen",
      email: "prince.chen1997@gmail.com",
      subscription: "Flower",
      dateTime: "May 22, 2025 12:16 pm",
      amount: "$4.83",
    },
    {
      key: "7",
      userName: "Reese Duran",
      email: "reese@yahoo.com",
      subscription: "LOMI",
      dateTime: "May 3, 2025 2:08 pm",
      amount: "$7.71",
    },
    {
      key: "8",
      userName: "Anastasia McDaniel",
      email: "anastasia.spring@mcdaniel12.com",
      subscription: "Flower",
      dateTime: "May 20, 2025 12:37 pm",
      amount: "$9.12",
    },
    {
      key: "9",
      userName: "Melvin Boyle",
      email: "Me.boyle@gmail.com",
      subscription: "LOMI",
      dateTime: "May 1, 2025 10:07 am",
      amount: "$8.58",
    },
    {
      key: "10",
      userName: "Kailee Thomas",
      email: "Kailee.thomas@gmail.com",
      subscription: "Premium",
      dateTime: "May 11, 2025 4:12 am",
      amount: "$10.24",
    },
  ];

  // Filter transactions based on search term
  const filteredData = transactionsData.filter(
    (transaction) =>
      transaction.userName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.subscription
        .toLowerCase()
        .includes(searchTerm.toLowerCase()) ||
      transaction.dateTime.toLowerCase().includes(searchTerm.toLowerCase()) ||
      transaction.amount.includes(searchTerm)
  );

  const columns = [
    { title: "#", dataIndex: "key", key: "key" },
    { title: "User Name", dataIndex: "userName", key: "userName" },
    { title: "E-Mail", dataIndex: "email", key: "email" },
    {
      title: "Subscription Name",
      dataIndex: "subscription",
      key: "subscription",
    },
    { title: "Date & Time", dataIndex: "dateTime", key: "dateTime" },
    { title: "Amount", dataIndex: "amount", key: "amount" },
    {
      title: "",
      key: "action",
      render: () => <div className="text-gray-400">⋯</div>,
    },
  ];

  return (
    <section className="w-full min-h-screen px-5 py-5">
      <div className="w-full flex justify-between items-center mb-10">
        <h1 className="text-xl md:text-2xl text-gray-800 notranslate font-semibold">
          Transactions
        </h1>
        <div className="flex items-center gap-3">
          <div className="bg-white flex items-center gap-3 border border-primary px-5 py-3 rounded-full">
            <BiSearch className="size-5 text-primary" />
            <input
              type="text"
              placeholder="Search"
              className="w-full outline-none"
            />
          </div>
          <button className="px-5 py-3 bg-white text-primary rounded-full flex justify-between items-center gap-3">
            <CiSliderHorizontal className="size-6" />
            Filter
          </button>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <Table
          columns={columns}
          dataSource={filteredData}
          pagination={{
            pageSize: 10,
            total: filteredData.length,
            showSizeChanger: false,
          }}
          rowClassName={(record, index) =>
            index % 2 === 0 ? "bg-gray-50" : "bg-white"
          }
        />
      </div>
    </section>
  );
};

export default Transaction;
