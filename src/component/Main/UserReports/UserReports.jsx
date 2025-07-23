/* eslint-disable no-unused-vars */
"use client";
import { ConfigProvider, Table, Tag, message } from "antd";
import moment from "moment";
import { useState } from "react";
import { BiSearch } from "react-icons/bi";
import { CiSliderHorizontal } from "react-icons/ci";
import { Link } from "react-router-dom";
import { imageBaseUrl } from "../../../config/imageBaseUrl";
import { Eye } from "lucide-react";
import { EyeOutlined } from "@ant-design/icons";

const UserReports = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [activeTab, setActiveTab] = useState("image_reports");

  // Demo data for Image Reports
  const imageReportsData = [
    {
      key: "1",
      reportedBy: "Alyvia Kelley",
      reportedByUserImage: "profile1.jpg",
      reportedUser: "John Doe",
      reportedUserImage: "profile2.jpg",
      reportMessage: "Inappropriate image content",
      status: "pending",
      date: moment("2025-06-25 18:52", "YYYY-MM-DD HH:mm").fromNow(),
      reportedItems: 3,
    },
    {
      key: "2",
      reportedBy: "Jaidyn Nivon",
      reportedByUserImage: "profile3.jpg",
      reportedUser: "Jane Smith",
      reportedUserImage: "profile4.jpg",
      reportMessage: "Violent image",
      status: "resolved",
      date: moment("2025-06-20 14:30", "YYYY-MM-DD HH:mm").fromNow(),
      reportedItems: 4,
    },
    {
      key: "3",
      reportedBy: "Ace Foley",
      reportedByUserImage: "profile5.jpg",
      reportedUser: "Mike Johnson",
      reportedUserImage: "profile6.jpg",
      reportMessage: "Nudity in image",
      status: "rejected",
      date: moment("2025-06-15 09:15", "YYYY-MM-DD HH:mm").fromNow(),
      reportedItems: 2,
    },
  ];

  // Demo data for Message Reports
  const messageReportsData = [
    {
      key: "4",
      reportedBy: "Nikolai Schmidt",
      reportedByUserImage: "profile7.jpg",
      reportedUser: "Sarah Brown",
      reportedUserImage: "profile8.jpg",
      reportMessage: "Harassing message",
      status: "pending",
      date: moment("2025-06-24 16:45", "YYYY-MM-DD HH:mm").fromNow(),
      reportedItems: 5,
    },
    {
      key: "5",
      reportedBy: "Clayton Charles",
      reportedByUserImage: "profile9.jpg",
      reportedUser: "Tom Wilson",
      reportedUserImage: "profile10.jpg",
      reportMessage: "Spam message",
      status: "resolved",
      date: moment("2025-06-22 11:20", "YYYY-MM-DD HH:mm").fromNow(),
      reportedItems: 2,
    },
    {
      key: "6",
      reportedBy: "Prince Chen",
      reportedByUserImage: "profile11.jpg",
      reportedUser: "Emily Davis",
      reportedUserImage: "profile12.jpg",
      reportMessage: "Offensive language",
      status: "rejected",
      date: moment("2025-06-18 08:00", "YYYY-MM-DD HH:mm").fromNow(),
      reportedItems: 4,
    },
  ];

  const getFirstWord = (title) => {
    return title?.split(" ")[0];
  };
  // Update currentData based on activeTab
  const [currentData, setCurrentData] = useState(
    activeTab === "image_reports" ? imageReportsData : messageReportsData
  );
  const totalResult = currentData.length;

  const handlePaginationChange = (page, pageSize) => {
    setCurrentPage(page);
    setPageSize(pageSize);
  };

  const handleStatusUpdate = (reportId, newStatus) => {
    const updatedData = currentData.map((report) =>
      report.key === reportId ? { ...report, status: newStatus } : report
    );
    setCurrentData(updatedData);
    message.success(`Report status updated to ${newStatus}`);
  };

  const allStatusOptions = [
    { value: "pending", label: "Pending" },
    { value: "resolved", label: "Resolved" },
    { value: "rejected", label: "Rejected" },
  ];

  const columns = [
    {
      title: "Reported By",
      dataIndex: "reportedBy",
      key: "reportedBy",
      render: (text, record) => (
        <div className="flex items-center gap-1">
          <div className="size-12  rounded-full bg-gray-100 flex justify-center items-center">
            {getFirstWord(record?.reportedBy)?.charAt(0).toUpperCase()}
          </div>
          <span className="ml-2">{record?.reportedBy}</span>
        </div>
      ),
    },
    {
      title: "Report Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Reported User",
      dataIndex: "reportedUser",
      key: "reportedUser",
      render: (text, record) => (
        <div className="flex items-center gap-1">
          <div className="size-12 rounded-full bg-gray-100 flex justify-center items-center">
            {getFirstWord(record?.reportedUser)?.charAt(0).toUpperCase()}
          </div>
          <span className="ml-2">{record?.reportedUser}</span>
        </div>
      ),
    },
    {
      title: "Report Message",
      dataIndex: "reportMessage",
      key: "reportMessage",
    },
    {
      title: "Reported Items",
      dataIndex: "reportedItems",
      key: "reportedItems",
    },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (text, record) => (
        <Tag
          color={
            record?.status === "resolved"
              ? "green"
              : record.status === "pending"
              ? "blue"
              : "red"
          }
          className="capitalize rounded-full px-3 py-0.5"
        >
          {record?.status}
        </Tag>
      ),
    },
    {
      title: "View",
      key: "action",
      render: (_, record) => (
        <button className="px-4 py-2 border rounded-lg">
          <Eye size={20} className="text-gray-500a" />
        </button>
      ),
    },
  ];

  return (
    <section className="w-full min-h-screen px-5 py-5">
      <div className="w-full flex justify-between items-center mb-10">
        <h1 className="text-xl md:text-2xl text-gray-800 font-semibold">
          All Reports
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
            setActiveTab("image_reports");
            setCurrentData(imageReportsData);
          }}
          className={`px-5 py-3  text-gray-600 rounded-lg flex justify-between items-center gap-3 ${
            activeTab === "image_reports"
              ? "bg-black border-b-4 border-primary text-primary"
              : ""
          }`}
        >
          Image Reports
        </button>
        <button
          onClick={() => {
            setActiveTab("message_reports");
            setCurrentData(messageReportsData);
          }}
          className={`px-5 py-3  text-gray-600 rounded-lg flex justify-between items-center gap-3 ${
            activeTab === "message_reports"
              ? "bg-black border-b-4 border-primary text-primary"
              : ""
          }`}
        >
          Message Reports
        </button>
      </div>
      <div className="w-full mt-5">
        <ConfigProvider
          theme={{
            components: {
              Table: {
                headerBg: "#E6ECF7",
                headerBorderRadius: 5,
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
              onChange: handlePaginationChange,
            }}
          />
        </ConfigProvider>
      </div>
    </section>
  );
};

export default UserReports;
