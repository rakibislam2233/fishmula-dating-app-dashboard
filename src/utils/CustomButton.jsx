/* eslint-disable react/prop-types */
import { Button } from "antd";

const CustomButton = ({
  loading = false,
  children,
  className,
  border = false,
}) => {
  return (
    <div className="w-full flex justify-center">
      <div
        className={`${className} ${
          border ? "border-2 border-[#FAD549]" : ""
        } p-0.5 rounded-lg inline-block`}
      >
        <Button
          type="default"
          htmlType="submit"
          loading={loading}
          className="w-full bg-primary px-5 py-2 flex justify-center items-center gap-5 text-white rounded-md border-none"
          size="large"
          style={{
            display: "flex",
            alignItems: "center",
            gap: "10px",
            backgroundColor: "#FAD549",
            color: "#ffffff", // Ensure text color stays white
          }}
          // Custom hover style to maintain background and text color
          onMouseEnter={(e) => {
            e.target.style.backgroundColor = "#FAD549"; // Maintain the same background color on hover
            e.target.style.color = "#ffffff"; // Maintain white text color on hover
          }}
          onMouseLeave={(e) => {
            e.target.style.backgroundColor = "#FAD549"; // Maintain the same background color when hover ends
            e.target.style.color = "#ffffff"; // Maintain white text color when hover ends
          }}
        >
          {children}
        </Button>
      </div>
    </div>
  );
};

export default CustomButton;
