import React, { useState } from "react";
// import { useMount } from "react-use";
import { Input, Select, Space, Card } from "antd";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMagnifyingGlass,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

const searchFilter = [
  {
    value: "all",
    label: "All",
  },
  {
    value: "email",
    label: "Email ID",
  },
  {
    value: "name",
    label: "Name",
  },
  {
    value: "organization",
    label: "Organization",
  },
  {
    value: "designation",
    label: "Designation",
  },
];

const dummySearchList = [
  {
    name: "Pintu Parmar",
    organization: "Arti indusries",
    designation: "GET trainee",
    email: "pintup78@gmail.com",
  },
  {
    name: "Karan KHaradi",
    organization: "CApgemini",
    designation: "Analyst",
    email: "karank69@gmail.com",
  },
  {
    name: "Jenish Patel",
    organization: "Staunchsys IT Services",
    designation: "JR COnsultant",
    email: "jenish909@gmail.com",
  },
  {
    name: "jATin Rathod",
    organization: "Adani NATURAL",
    designation: "GeT trainee",
    email: "JRAThod@gmail.com",
  },
];

export default function AlumSearchBox() {
  const [state, setState] = useState({
    searchInput: "",
    searchList: dummySearchList,
    searchFilter: "all",
    filteredList: [],
  });

  // useMount(() => {
  //   // call api to get searchList
  // });

  const filterSearchList = (userInput, filter) => {
    if (filter === "all") {
      let tempFilteredList = [];
      for (let index = 0; index < state.searchList.length; index++) {
        const alumni = state.searchList[index];
        for (let j = 1; j < searchFilter.length; j++) {
          const iFilter = searchFilter[j].value;
          if (
            alumni[iFilter]
              .toLowerCase()
              .includes(userInput.toLowerCase(), iFilter)
          ) {
            tempFilteredList.push(alumni);
            break;
          }
        }
      }
      return tempFilteredList;
    } else {
      return state.searchList.filter((alumni) => {
        return alumni[filter]
          .toLowerCase()
          .includes(userInput.toLowerCase(), filter);
      });
    }
  };

  const handleUserInput = (e) => {
    setState({
      ...state,
      searchInput: e.target.value,
      filteredList: e.target.value
        ? filterSearchList(e.target.value, state.searchFilter)
        : [],
    });
    // search function (e.target.value, state.searchFilter)
  };

  const handleSearchFilter = (filter) => {
    setState({
      ...state,
      searchFilter: filter,
      filteredList: state.searchInput
        ? filterSearchList(state.searchInput, filter)
        : [],
    });
    // search function (state.searchInput, filter)
  };

  return (
    <div>
      <Space.Compact>
        <Input
          style={{ width: "400px" }}
          value={state.searchInput}
          placeholder="Search by email, name or company"
          onChange={handleUserInput}
          prefix={<FontAwesomeIcon icon={faMagnifyingGlass} />}
          suffix="Search By: "
        />
        <Select
          style={{ width: "120px" }}
          defaultValue="all"
          options={searchFilter}
          onChange={handleSearchFilter}
        />
      </Space.Compact>

      <Space direction="vertical" size={16}>
        {state.searchInput.length > 0 && state.filteredList.length > 0 ? (
          state.filteredList.map((card) => {
            return (
              <Card title={card.name} style={{ width: 300 }}>
                <p>organization: {card.organization}</p>
                <p>designation: {card.designation}</p>
                <p>email: {card.email}</p>
              </Card>
            );
          })
        ) : state.searchInput.length > 0 && state.filteredList.length === 0 ? (
          <FontAwesomeIcon icon={faCircleXmark} />
        ) : (
          ""
        )}
      </Space>
    </div>
  );
}
