import { ConfigProvider, Table } from "antd";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { CiSliderHorizontal } from "react-icons/ci";
import { FiEye, FiTrash2 } from "react-icons/fi";

const SupportMail = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [activeTab, setActiveTab] = useState("problem_reports");

  // Demo data for Support Mails
  const supportMailData = [
    {
      key: "1",
      userName: "Alice King",
      email: "contact@email.com",
      subject: "Lorem Ipsum Dolor Sit Amet...",
      attachment: 5,
      status: "read",
      date: "2024-01-15",
    },
    {
      key: "2",
      userName: "John Doe",
      email: "john@email.com",
      subject: "Lorem Ipsum Dolor Sit Amet...",
      attachment: 3,
      status: "unread",
      date: "2024-01-14",
    },
    {
      key: "3",
      userName: "Jane Smith",
      email: "jane@email.com",
      subject: "Lorem Ipsum Dolor Sit Amet...",
      attachment: 7,
      status: "read",
      date: "2024-01-13",
    },
    {
      key: "4",
      userName: "Bob Johnson",
      email: "bob@email.com",
      subject: "Lorem Ipsum Dolor Sit Amet...",
      attachment: 2,
      status: "unread",
      date: "2024-01-12",
    },
    {
      key: "5",
      userName: "Sarah Wilson",
      email: "sarah@gmail.com",
      subject: "Lorem Ipsum Dolor Sit Amet...",
      attachment: 4,
      status: "read",
      date: "2024-01-11",
    },
    {
      key: "6",
      userName: "Mike Brown",
      email: "mike@email.com",
      subject: "Lorem Ipsum Dolor Sit Amet...",
      attachment: 6,
      status: "unread",
      date: "2024-01-10",
    },
    {
      key: "7",
      userName: "Lisa Davis",
      email: "lisa@email.com",
      subject: "Lorem Ipsum Dolor Sit Amet...",
      attachment: 1,
      status: "read",
      date: "2024-01-09",
    },
    {
      key: "8",
      userName: "Tom Miller",
      email: "tom@email.com",
      subject: "Lorem Ipsum Dolor Sit Amet...",
      attachment: 8,
      status: "unread",
      date: "2024-01-08",
    },
    {
      key: "9",
      userName: "Amanda Martinez",
      email: "amanda@gmail.com",
      subject: "Lorem Ipsum Dolor Sit Amet...",
      attachment: 3,
      status: "read",
      date: "2024-01-07",
    },
    {
      key: "10",
      userName: "David Taylor",
      email: "david@email.com",
      subject: "Lorem Ipsum Dolor Sit Amet...",
      attachment: 5,
      status: "unread",
      date: "2024-01-06",
    },
  ];

  const [currentData] = useState(supportMailData);
  const totalResult = currentData.length;

  const handlePaginationChange = (page, size) => {
    setCurrentPage(page);
    setPageSize(size);
  };

  const columns = [
    {
      title: "User Name",
      dataIndex: "userName",
      key: "userName",
      render: (text, record) => (
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center">
            <span className="text-sm font-medium text-gray-600">
              {text.charAt(0)}
            </span>
          </div>
          <span
            className={
              record.status === "unread" ? "font-semibold" : "font-normal"
            }
          >
            {text}
          </span>
        </div>
      ),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      render: (text, record) => (
        <span
          className={
            record.status === "unread" ? "font-semibold" : "font-normal"
          }
        >
          {text}
        </span>
      ),
    },
    {
      title: "Subject",
      dataIndex: "subject",
      key: "subject",
      render: (text, record) => (
        <span
          className={
            record.status === "unread" ? "font-semibold" : "font-normal"
          }
        >
          {text}
        </span>
      ),
    },
    {
      title: "Attachment",
      dataIndex: "attachment",
      key: "attachment",
      render: (text, record) => (
        <span
          className={
            record.status === "unread" ? "font-semibold" : "font-normal"
          }
        >
          {text}
        </span>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: () => (
        <div className="flex items-center gap-2">
          <button className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors">
            <FiEye className="w-4 h-4" />
          </button>
          <button className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition-colors">
            <FiTrash2 className="w-4 h-4" />
          </button>
        </div>
      ),
    },
  ];

  return (
    <section className="w-full min-h-screen px-5 py-5">
      <div className="w-full flex justify-between items-center mb-10">
        <h1 className="text-xl md:text-2xl text-gray-800 font-semibold">
          Help & Support Mails
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
      <div className="w-full flex flex-col md:flex-row gap-5">
        <button
          onClick={() => {
            setActiveTab("problem_reports");
          }}
          className={`px-5 py-3  text-gray-600 rounded-lg flex justify-between items-center gap-3 ${
            activeTab === "problem_reports"
              ? "bg-black border-b-4 border-primary text-primary"
              : ""
          }`}
        >
          Problem Reports
        </button>
        <button
          onClick={() => {
            setActiveTab("support_mails");
          }}
          className={`px-5 py-3  text-gray-600 rounded-lg flex justify-between items-center gap-3 ${
            activeTab === "support_mails"
              ? "bg-black border-b-4 border-primary text-primary"
              : ""
          }`}
        >
          Support Mails
        </button>
      </div>
      <div className="w-full mt-5">
        <ConfigProvider
          theme={{
            components: {
              Table: {
                headerBg: "#f8fafc",
                headerBorderRadius: 8,
                borderColor: "#e2e8f0",
              },
            },
          }}
        >
          <Table
            columns={columns}
            dataSource={currentData}
            loading={false}
            scroll={{ x: "max-content" }}
            pagination={{
              position: ["bottomCenter"],
              current: currentPage,
              total: totalResult,
              pageSize: pageSize,
              onChange: handlePaginationChange,
              showSizeChanger: true,
              showQuickJumper: true,
              showTotal: (total, range) =>
                `${range[0]}-${range[1]} of ${total} items`,
              className: "mt-6",
            }}
            className="custom-table"
          />
        </ConfigProvider>
      </div>
    </section>
  );
};

export default SupportMail;
