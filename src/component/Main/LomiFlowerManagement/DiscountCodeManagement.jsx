import { useState } from "react";
import { DatePicker } from "antd";
import moment from "moment"; // For date handling, optional but recommended with DatePicker
import CustomInput from "../../../utils/CustomInput";

const DiscountCodeManagement = () => {
  const [description, setDescription] = useState("");
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);
  const [discountAmount, setDiscountAmount] = useState("");
  const [discountCode, setDiscountCode] = useState("");

  return (
    <div className="w-full">
      <div className="bg-white p-6 rounded-lg shadow-md">
        <p className="text-lg mb-2">Discount Code Management Description</p>
        <CustomInput
          isTextArea
          placeholder="Describe what your product does..."
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          className="mb-4"
          rows={3}
        />
        <div className="flex gap-4 mb-4">
          <DatePicker
            placeholder="Select Discount code start date"
            size="large"
            value={startDate ? moment(startDate) : null}
            onChange={(date) => setStartDate(date ? date.toDate() : null)}
            className="w-full"
          />
          <DatePicker
            placeholder="Select Discount code end date"
            size="large"
            value={endDate ? moment(endDate) : null}
            onChange={(date) => setEndDate(date ? date.toDate() : null)}
            className="w-full"
          />
        </div>
        <div className="flex gap-4 mb-4">
          <CustomInput
            placeholder="Enter Discount Amount"
            value={discountAmount}
            onChange={(e) => setDiscountAmount(e.target.value)}
            className="w-full"
          />
          <CustomInput
            placeholder="Enter Discount Code..."
            value={discountCode}
            onChange={(e) => setDiscountCode(e.target.value)}
            className="w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default DiscountCodeManagement;