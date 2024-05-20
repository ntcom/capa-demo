/* eslint-disable react/prop-types */
import groupIcon from "../assets/svgs/group.svg";
import filterIcon from "../assets/svgs/filter.svg";
import arrowDownUp from "../assets/svgs/arrow-down-up.svg";
import tick from "../assets/svgs/tick.svg";
import { useLocation } from "react-router-dom";
import { useState } from "react";

const GroupFuncKeys = ({
  filterSelect,
  setFilterSelect,
  soft,
  setSoft,
  group,
  setGroup,
}) => {
  const [openFilter, setOpenFilter] = useState(false);
  const [openGroup, setOpenGroup] = useState(false);

  const { pathname } = useLocation();

  return (
    <div className="shrink-0 bg-[#fff] p-[6px_18px] rounded-lg shadow-[0px_4px_8px_0px_rgba(0,0,0,0.15)] flex gap-4 relative">
      {pathname === "/wallet" ? (
        <button
          onClick={() => {
            if (openGroup) {
              setOpenGroup(false);
            } else {
              setOpenGroup(true);
            }
          }}
          className="shrink-0 p-1 rounded hover:bg-[#f5f6f8] transition-all"
        >
          <img src={groupIcon} alt="" />
        </button>
      ) : (
        <button
          onClick={() => {
            if (openFilter) {
              setOpenFilter(false);
            } else {
              setOpenFilter(true);
            }
          }}
          className="shrink-0 p-1 rounded hover:bg-[#f5f6f8] transition-all"
        >
          <img src={filterIcon} alt="" />
        </button>
      )}

      <button
        onClick={() => {
          if (soft === "new") {
            setSoft("old");
          } else {
            setSoft("new");
          }
          setOpenFilter(false);
          setOpenGroup(false)
        }}
        className="shrink-0 p-1 rounded hover:bg-[#f5f6f8] transition-all"
      >
        <img src={arrowDownUp} alt="" />
      </button>

      <div
        className={`absolute top-[112%] left-0 z-[998] overflow-hidden ${
          openFilter
            ? "w-[150px] max-h-[160px] opacity-100 p-[12px_12px]"
            : "w-0 max-h-0 opacity-0"
        } bg-[#fff] rounded-lg shadow-[0px_4px_8px_0px_rgba(0,0,0,0.10)] transition-all`}
      >
        <button
          onClick={() => {
            if (filterSelect !== "sale") {
              setFilterSelect("sale");
            } else {
              setFilterSelect("all");
            }
            setTimeout(() => {
              setOpenFilter(false);
            }, 150);
          }}
          className="flex justify-between items-center w-full p-3 rounded-md hover:bg-[#f5f6f8] transition-all"
        >
          Sale{" "}
          {filterSelect === "sale" && <img src={tick} alt="" className="w-4" />}
        </button>
        <button
          onClick={() => {
            if (filterSelect !== "draft") {
              setFilterSelect("draft");
            } else {
              setFilterSelect("all");
            }
            setTimeout(() => {
              setOpenFilter(false);
            }, 150);
          }}
          className="flex justify-between items-center w-full p-3 rounded-md hover:bg-[#f5f6f8] transition-all"
        >
          Draft{" "}
          {filterSelect === "draft" && (
            <img src={tick} alt="" className="w-3" />
          )}
        </button>
      </div>

      <div
        className={`absolute top-[112%] left-0 z-[998] overflow-hidden ${
          openGroup
            ? "w-[180px] max-h-[160px] opacity-100 p-[12px_12px]"
            : "w-0 max-h-0 opacity-0"
        } bg-[#fff] rounded-lg shadow-[0px_4px_8px_0px_rgba(0,0,0,0.10)] transition-all`}
      >
        <button
          onClick={() => {
            if (group !== "not-use") {
              setGroup("not-use");
            } else {
              setGroup("");
            }
            setTimeout(() => {
              setOpenGroup(false);
            }, 150);
          }}
          className="flex justify-between items-center w-full p-3 rounded-md hover:bg-[#f5f6f8] transition-all"
        >
          Không dùng{" "}
          {group === "not-use" && <img src={tick} alt="" className="w-4" />}
        </button>
        <button
          onClick={() => {
            if (group !== "phase") {
              setGroup("phase");
            } else {
              setGroup("");
            }
            setTimeout(() => {
              setOpenGroup(false);
            }, 150);
          }}
          className="flex justify-between items-center w-full p-3 rounded-md hover:bg-[#f5f6f8] transition-all"
        >
          Giai đoạn{" "}
          {group === "phase" && <img src={tick} alt="" className="w-3" />}
        </button>
      </div>
    </div>
  );
};

export default GroupFuncKeys;
