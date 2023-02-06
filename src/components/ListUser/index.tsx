import axios from "axios";
import React, { useEffect, useState } from "react";
import { ListUserStyled, Search, UserStyled } from "./styled";
export const ListUser = ({ page }: any) => {
  const [listUser, setListUser] = useState<string[]>();
  const [inputSearch, setInputSearch] = useState("");
  const [filterListUser, setFilterListUser] = useState<any[]>();
  useEffect(() => {
    axios
      .get(`https://randomuser.me/api/?page=${page}&results=10`)
      .then((res: any) => {
        setListUser(res.data.results);
      });
  }, [page]);

  useEffect(() => {
    const dataSearch = listUser
      ?.filter(
        (item: any) =>
          item.name.title.includes(inputSearch) ||
          item.name.first.includes(inputSearch) ||
          item.name.last.includes(inputSearch)
      )
      .map((item: any, index: number) => (
        <UserStyled className="user" key={index}>
          <div className="user-img">
            <img src={item.picture.large} alt="" />
          </div>
          <div className="user-detail">
            <div className="fullName">
              Full Name:{" "}
              <span>
                {`${item.name.title} ${item.name.first} ${item.name.last}`}{" "}
              </span>
            </div>
            <div className="userName">
              User Name: <span>{item.login.username}</span>{" "}
            </div>
          </div>
        </UserStyled>
      ));

    setFilterListUser(dataSearch);
  }, [listUser, inputSearch]);
  return (
    <>
      <div>
        <Search>
          <input
            type="text"
            placeholder="Search user by full name..."
            onChange={(e: any) => setInputSearch(e.target.value)}
          />
        </Search>
        <ListUserStyled>{filterListUser}</ListUserStyled>
      </div>
    </>
  );
};
